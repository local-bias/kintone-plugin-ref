import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { refferenceFieldState } from '../../../states/plugin';

import { FieldControl } from '../../ui/field-control';
import FieldValue from './field-value';
import FieldTitle from './field-title';
import FieldSubtable from './field-subtable';

const Component: FC = () => {
  const refferenceField = useRecoilValue(refferenceFieldState);
  if (!refferenceField || !refferenceField.value) {
    return null;
  }
  if (refferenceField.type === 'SUBTABLE') {
    return (
      <div>
        <FieldTitle />
        <FieldSubtable subtable={refferenceField} />
      </div>
    );
  }
  return (
    <>
      <FieldTitle />
      <FieldControl>
        <FieldValue field={refferenceField} />
      </FieldControl>
    </>
  );
};

export default Component;
