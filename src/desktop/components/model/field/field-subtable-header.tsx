import styled from '@emotion/styled';
import { TableRow } from '@mui/material';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { conditionState, refferenceAppFieldsState } from '../../../states/plugin';
import { Th } from '../../ui/th';
import { Thead } from '../../ui/thead';
import { kintoneAPI } from '@konomi-app/kintone-utilities';

const FieldSubtableHeader: FC = () => {
  const condition = useRecoilValue(conditionState);
  const refferenceAppFields = useRecoilValue(refferenceAppFieldsState);
  if (!condition) {
    return null;
  }

  const found = refferenceAppFields.find((field) => field.code === condition.refferenceField) as
    | kintoneAPI.property.Subtable
    | undefined;
  if (!found) {
    return null;
  }

  const fields = Object.values(found.fields);

  return (
    <Thead>
      <TableRow>
        {fields.map((value, i) => (
          <Th key={i}>{value.label}</Th>
        ))}
      </TableRow>
    </Thead>
  );
};

const StyledFieldSubtableHeader = styled(FieldSubtableHeader)``;

export default StyledFieldSubtableHeader;
