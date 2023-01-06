import React from 'react';
import { restoreStorage } from '@common/plugin';
import { getSpaceElement } from '@lb-ribbit/kintone-xapp';
import { createRoot, Root } from 'react-dom/client';
import App from './app';

// const cachedRootElements: Record<string, Root> = {};

const events: launcher.Events = (pluginId) => {
  const { conditions } = restoreStorage(pluginId);

  const dependentFields = [
    ...new Set(conditions.map((condition) => condition.keyField).filter((field) => !!field)),
  ];

  const changeEvents = dependentFields.map(
    (field) => `app.record.edit.change.${field}` as kintone.EventType
  );

  return ['app.record.detail.show', 'app.record.edit.show', ...changeEvents];
};

const action: launcher.Action = (event, pluginId) => {
  const { record } = event;
  const { conditions } = restoreStorage(pluginId);
  for (const condition of conditions) {
    if (!condition.spaceId) {
      continue;
    }
    const element = getSpaceElement(condition.spaceId);
    if (!element) {
      continue;
    }
    // if (!cachedRootElements[condition.spaceId]) {
    //   cachedRootElements[condition.spaceId] = createRoot(element);
    // }

    createRoot(element).render(
      <App
        currentRecord={record}
        condition={condition}
        eventType={event.type}
        wrapperWidth={element.clientWidth}
      />
    );
  }

  return event;
};

export default { events, action };
