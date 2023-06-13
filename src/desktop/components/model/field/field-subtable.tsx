import { kx } from '@/types/kintone.api';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { conditionState, refferenceAppFieldsState } from '../../../states/plugin';
import { Tbody } from '../../ui/tbody';
import { Td } from '../../ui/td';
import SubtableHeader from './field-subtable-header';
import FieldValue from './field-value';

const Component: FC<{ subtable: kx.field.Subtable }> = ({ subtable }) => {
  const condition = useRecoilValue(conditionState);
  const refferenceAppFields = useRecoilValue(refferenceAppFieldsState);
  if (!condition) {
    return null;
  }

  const found = refferenceAppFields.find((field) => field.code === condition.refferenceField) as
    | kx.property.Subtable
    | undefined;
  if (!found) {
    return null;
  }

  const fieldCodes = Object.values(found.fields).map((field) => field.code);

  return (
    <table>
      <SubtableHeader />
      <Tbody>
        {subtable.value.map((row, i) => (
          <tr key={i}>
            {fieldCodes.map((fieldCode) => (
              <Td key={fieldCode}>
                <FieldValue field={row.value[fieldCode]} />
              </Td>
            ))}
          </tr>
        ))}
      </Tbody>
    </table>
  );
};

export default Component;
