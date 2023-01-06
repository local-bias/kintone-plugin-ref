import { Autocomplete, Skeleton, TextField } from '@mui/material';
import React, { FC, FCX, memo, Suspense } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';

import { appFieldsState } from '../../../states/kintone';
import { keyFieldState } from '../../../states/plugin';
import styled from '@emotion/styled';

const Component: FCX = ({ className }) => {
  const selected = useRecoilValue(keyFieldState);
  const fields = useRecoilValue(appFieldsState);

  const onFieldChange = useRecoilCallback(
    ({ set }) =>
      (value: string) => {
        set(keyFieldState, value);
      },
    []
  );

  return (
    <div className={className}>
      <Autocomplete
        value={fields.find((field) => field.code === selected) ?? null}
        sx={{ width: '350px' }}
        options={fields}
        isOptionEqualToValue={(option, v) => option.code === v.code}
        getOptionLabel={(option) => `${option.label}(${option.code})`}
        onChange={(_, field) => onFieldChange(field?.code ?? '')}
        renderInput={(params) => (
          <TextField
            {...params}
            label='フィールド名(フィールドコード)'
            variant='outlined'
            color='primary'
          />
        )}
      />
    </div>
  );
};

const StyledComponent = styled(Component)`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const Container: FC = () => {
  return (
    <Suspense fallback={<Skeleton width={360} height={56} variant='rounded' />}>
      <StyledComponent />
    </Suspense>
  );
};

export default memo(Container);
