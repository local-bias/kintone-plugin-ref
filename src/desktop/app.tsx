import { kx } from '@type/kintone.api';
import React, { FC, memo, Suspense } from 'react';

import Placeholder from './components/placeholder';
import Field from './components/model/field';
import { RecoilRoot } from 'recoil';
import {
  conditionState,
  currentRecordState,
  eventTypeState,
  wrapperWidthState,
} from './states/plugin';

type Props = {
  currentRecord: kx.RecordData;
  condition: kintone.plugin.Condition;
  eventType: kintone.EventType;
  wrapperWidth: number;
};

const Component: FC<Props> = (props) => (
  <RecoilRoot
    initializeState={({ set }) => {
      set(conditionState, props.condition);
      set(currentRecordState, props.currentRecord);
      set(eventTypeState, props.eventType);
      set(wrapperWidthState, props.wrapperWidth);
    }}
  >
    <Suspense fallback={<Placeholder />}>
      <Field />
    </Suspense>
  </RecoilRoot>
);

export default memo(Component);
