import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { refferenceFieldState } from '../../states/plugin';

const Component: FC = () => {
  const refferenceField = useRecoilValue(refferenceFieldState);
  if (!refferenceField) {
    return null;
  }

  switch (refferenceField.type) {
    case 'SINGLE_LINE_TEXT':
    case 'MULTI_LINE_TEXT':
    case 'NUMBER':
    case 'LINK':
    case 'CALC':
    case 'DROP_DOWN':
    case 'CREATED_TIME':
    case 'UPDATED_TIME':
      return <div>{refferenceField.value}</div>;
    case 'CATEGORY':
    case 'CHECK_BOX':
      return (
        <div>
          {refferenceField.value.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </div>
      );
    default:
      return <div>非対応のフィールドタイプです。({refferenceField.type})</div>;
  }
};

export default Component;
