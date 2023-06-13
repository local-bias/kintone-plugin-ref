import styled from '@emotion/styled';
import { TableCell, TableRow } from '@mui/material';
import { kx } from '@/types/kintone.api';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { conditionState, refferenceAppFieldsState } from '../../../states/plugin';
import { Th } from '../../ui/th';
import { Thead } from '../../ui/thead';

const Component: FC = () => {
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

const StyledComponent = styled(Component)``;

export default StyledComponent;
