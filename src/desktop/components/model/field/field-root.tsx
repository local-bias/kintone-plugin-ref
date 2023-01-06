import styled from '@emotion/styled';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { refferenceFieldState } from '../../../states/plugin';
import { Tbody } from '../../ui/tbody';
import { Td } from '../../ui/td';

import SubtableHeader from './field-subtable-header';
import FieldValue from './field-value';
import FieldTitle from './field-title';
import { FieldControl } from '../../ui/field-control';

const Component: FC = () => {
  const refferenceField = useRecoilValue(refferenceFieldState);
  if (!refferenceField || !refferenceField.value) {
    return null;
  }
  if (refferenceField.type === 'SUBTABLE') {
    return (
      <div>
        <FieldTitle />
        <table>
          <SubtableHeader />
          <Tbody>
            {refferenceField.value.map((row, i) => (
              <tr key={i}>
                {Object.values(row.value).map((field, j) => (
                  <Td key={j}>
                    <FieldValue field={field} />
                  </Td>
                ))}
              </tr>
            ))}
          </Tbody>
        </table>
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
