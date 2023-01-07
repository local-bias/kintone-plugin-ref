import { getFieldProperties, getUserDefinedFields, kintoneClient } from '@common/kintone-api';
import { kx } from '@type/kintone.api';
import { atom, selector } from 'recoil';

const PREFIX = 'plugin';

export const conditionState = atom<kintone.plugin.Condition | null>({
  key: `${PREFIX}`,
  default: null,
});

export const currentRecordState = atom<kx.RecordData | null>({
  key: `${PREFIX}currentRecordState`,
  default: null,
});

export const wrapperWidthState = atom<number>({
  key: `${PREFIX}wrapperWidthState`,
  default: 100,
});

export const eventTypeState = atom<kintone.EventType | null>({
  key: `${PREFIX}eventTypeState`,
  default: null,
});

export const refferenceAppState = selector<kx.App | null>({
  key: `${PREFIX}refferenceAppState`,
  get: async ({ get }) => {
    const condition = get(conditionState);
    if (!condition || !condition.refferenceAppId) {
      return null;
    }
    const { apps } = await kintoneClient.app.getApps({ ids: [condition.refferenceAppId] });
    const found = apps.find((app) => app.appId === condition.refferenceAppId);
    return found ?? null;
  },
});

export const refferenceAppFieldsState = selector<kx.FieldProperty[]>({
  key: `${PREFIX}refferenceAppFieldsState`,
  get: async ({ get }) => {
    const condition = get(conditionState);
    if (!condition) {
      return [];
    }
    const properties = await getFieldProperties(condition.refferenceAppId);

    const values = Object.values(properties);

    return values.sort((a, b) => a.label.localeCompare(b.label, 'ja'));
  },
});

export const refferenceRecordState = selector<kx.RecordData | null>({
  key: `${PREFIX}refferenceRecordState`,
  get: async ({ get }) => {
    const condition = get(conditionState);
    const currentRecord = get(currentRecordState);
    if (!condition || !currentRecord) {
      return null;
    }
    const { keyField, refferenceAppId, refferenceKeyField } = condition;

    const currentKeyField = currentRecord[keyField];
    const keyValue = currentKeyField.value;

    const query = [
      'CHECK_BOX',
      'RADIO_BUTTON',
      'MULTI_SELECT',
      'DROP_DOWN',
      'USER_SELECT',
      'ORGANIZATION_SELECT',
      'GROUP_SELECT',
    ].includes(currentKeyField?.type)
      ? `${refferenceKeyField} in ("${keyValue}")`
      : `${refferenceKeyField} = "${keyValue}"`;
    const { records } = await kintoneClient.record.getRecords({ app: refferenceAppId, query });
    const [refferenceRecord] = records;
    return refferenceRecord ?? null;
  },
});

export const refferenceFieldNameState = selector<string>({
  key: `${PREFIX}refferenceFieldNameState`,
  get: ({ get }) => {
    const fields = get(refferenceAppFieldsState);
    const condition = get(conditionState);
    if (!condition?.refferenceField) {
      return '';
    }
    const found = fields.find((field) => field.code === condition.refferenceField);

    return found ? found.label : '';
  },
});

export const refferenceFieldState = selector<kx.RecordData[keyof kx.RecordData] | null>({
  key: `${PREFIX}refferenceFieldState`,
  get: ({ get }) => {
    const condition = get(conditionState);
    const record = get(refferenceRecordState);
    if (!condition || !record || !condition.refferenceField) {
      return null;
    }
    return record[condition.refferenceField];
  },
});
