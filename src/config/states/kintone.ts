import { atom, selector } from 'recoil';
import { getUserDefinedFields, getFieldProperties, getSpacers } from '@/common/kintone-api';
import { refferenceAppIdState } from './plugin';
import { getAllApps, getFormLayout, kintoneAPI } from '@konomi-app/kintone-utilities';

const PREFIX = 'kintone';

export const allKintoneAppsState = atom<kintoneAPI.App[]>({
  key: `${PREFIX}allKintoneAppsState`,
  default: (async () => {
    const apps = await getAllApps({});
    return apps;
  })(),
});

export const appFieldsState = selector<kintoneAPI.FieldProperty[]>({
  key: `${PREFIX}appFieldsState`,
  get: async () => {
    const properties = await getUserDefinedFields({ preview: true });

    const values = Object.values(properties);

    return values.sort((a, b) => a.label.localeCompare(b.label, 'ja'));
  },
});

export const refferenceAppFieldsState = selector<kintoneAPI.FieldProperty[]>({
  key: `${PREFIX}refferenceAppFieldsState`,
  get: async ({ get }) => {
    const refferenceApp = get(refferenceAppIdState);
    if (!refferenceApp) {
      return [];
    }
    const properties = await getFieldProperties(refferenceApp);

    const values = Object.values(properties);

    return values.sort((a, b) => a.label.localeCompare(b.label, 'ja'));
  },
});

export const appSpacersState = atom<kintoneAPI.layout.Spacer[]>({
  key: `${PREFIX}appSpacersState`,
  default: (async () => {
    const app = kintone.app.getId();
    if (!app) {
      throw 'アプリ情報の取得に失敗しました';
    }
    const { layout } = await getFormLayout({ app, preview: true });
    const spacers = await getSpacers(layout);
    return spacers;
  })(),
});
