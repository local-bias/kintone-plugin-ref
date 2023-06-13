import { getConditionField, getUpdatedStorage } from '@/common/plugin';
import { produce } from 'immer';
import { atom, selector, selectorFamily } from 'recoil';

const PREFIX = 'plugin';

export const pluginIdState = atom<string>({ key: `${PREFIX}pluginIdState`, default: '' });

export const storageState = atom<kintone.plugin.Storage | null>({
  key: `${PREFIX}storageState`,
  default: null,
});

export const loadingState = atom<boolean>({
  key: `${PREFIX}loadingState`,
  default: false,
});

export const tabIndexState = atom<number>({
  key: `${PREFIX}tabIndexState`,
  default: 0,
});

export const conditionsState = selector<kintone.plugin.Condition[]>({
  key: `${PREFIX}conditionsState`,
  get: ({ get }) => {
    const storage = get(storageState);
    return storage?.conditions ?? [];
  },
});

export const conditionState = selectorFamily<kintone.plugin.Condition | null, number>({
  key: `${PREFIX}conditionState`,
  get:
    (conditionIndex) =>
    ({ get }) => {
      const storage = get(storageState);
      return !storage ? null : storage.conditions[conditionIndex] ?? null;
    },
  set:
    (conditionIndex) =>
    ({ set }, newValue) => {
      set(storageState, (current) =>
        produce(current, (draft) => {
          if (!draft) {
            return;
          }
          draft.conditions[conditionIndex] = newValue as kintone.plugin.Condition;
        })
      );
    },
});

export const keyFieldState = selector<kintone.plugin.Condition['keyField']>({
  key: `${PREFIX}keyFieldState`,
  get: ({ get }) => {
    const conditionIndex = get(tabIndexState);
    return getConditionField(get(storageState), {
      conditionIndex,
      key: 'keyField',
      defaultValue: '',
    });
  },
  set: ({ get, set }, newValue) => {
    const conditionIndex = get(tabIndexState);
    set(storageState, (current) =>
      getUpdatedStorage(current, {
        conditionIndex,
        key: 'keyField',
        value: newValue as kintone.plugin.Condition['keyField'],
      })
    );
  },
});

export const refferenceAppIdState = selector<kintone.plugin.Condition['refferenceAppId']>({
  key: `${PREFIX}refferenceAppIdState`,
  get: ({ get }) => {
    const conditionIndex = get(tabIndexState);
    return getConditionField(get(storageState), {
      conditionIndex,
      key: 'refferenceAppId',
      defaultValue: '',
    });
  },
  set: ({ get, set }, newValue) => {
    const conditionIndex = get(tabIndexState);
    set(storageState, (current) =>
      getUpdatedStorage(current, {
        conditionIndex,
        key: 'refferenceAppId',
        value: newValue as kintone.plugin.Condition['refferenceAppId'],
      })
    );
  },
});

export const refferenceKeyFieldState = selector<kintone.plugin.Condition['refferenceKeyField']>({
  key: `${PREFIX}refferenceKeyFieldState`,
  get: ({ get }) => {
    const conditionIndex = get(tabIndexState);
    return getConditionField(get(storageState), {
      conditionIndex,
      key: 'refferenceKeyField',
      defaultValue: '',
    });
  },
  set: ({ get, set }, newValue) => {
    const conditionIndex = get(tabIndexState);
    set(storageState, (current) =>
      getUpdatedStorage(current, {
        conditionIndex,
        key: 'refferenceKeyField',
        value: newValue as kintone.plugin.Condition['refferenceKeyField'],
      })
    );
  },
});

export const spaceIdState = selector<kintone.plugin.Condition['spaceId']>({
  key: `${PREFIX}spaceIdState`,
  get: ({ get }) => {
    const conditionIndex = get(tabIndexState);
    return getConditionField(get(storageState), {
      conditionIndex,
      key: 'spaceId',
      defaultValue: '',
    });
  },
  set: ({ get, set }, newValue) => {
    const conditionIndex = get(tabIndexState);
    set(storageState, (current) =>
      getUpdatedStorage(current, {
        conditionIndex,
        key: 'spaceId',
        value: newValue as kintone.plugin.Condition['spaceId'],
      })
    );
  },
});

export const widthState = selector<kintone.plugin.Condition['width']>({
  key: `${PREFIX}widthState`,
  get: ({ get }) => {
    const conditionIndex = get(tabIndexState);
    return getConditionField(get(storageState), {
      conditionIndex,
      key: 'width',
      defaultValue: 0,
    });
  },
  set: ({ get, set }, newValue) => {
    const conditionIndex = get(tabIndexState);
    set(storageState, (current) =>
      getUpdatedStorage(current, {
        conditionIndex,
        key: 'width',
        value: newValue as kintone.plugin.Condition['width'],
      })
    );
  },
});

export const refferenceFieldState = selector<kintone.plugin.Condition['refferenceField']>({
  key: `${PREFIX}refferenceFieldState`,
  get: ({ get }) => {
    const conditionIndex = get(tabIndexState);
    return getConditionField(get(storageState), {
      conditionIndex,
      key: 'refferenceField',
      defaultValue: '',
    });
  },
  set: ({ get, set }, newValue) => {
    const conditionIndex = get(tabIndexState);
    set(storageState, (current) =>
      getUpdatedStorage(current, {
        conditionIndex,
        key: 'refferenceField',
        value: newValue as kintone.plugin.Condition['refferenceField'],
      })
    );
  },
});
