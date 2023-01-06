import { Autocomplete, Skeleton, TextField } from '@mui/material';
import React, { FC, FCX, memo, Suspense } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';

import { appSpacersState } from '../../../states/kintone';
import { spaceIdState } from '../../../states/plugin';
import styled from '@emotion/styled';

const Component: FCX = ({ className }) => {
  const selected = useRecoilValue(spaceIdState);
  const spacers = useRecoilValue(appSpacersState);

  const onFieldChange = useRecoilCallback(
    ({ set }) =>
      (value: string) => {
        set(spaceIdState, value);
      },
    []
  );

  return (
    <div className={className}>
      <Autocomplete
        value={spacers.find((spacer) => spacer.elementId === selected) ?? null}
        sx={{ width: '350px' }}
        options={spacers}
        isOptionEqualToValue={(option, v) => option.elementId === v.elementId}
        getOptionLabel={(option) => `${option.elementId}`}
        onChange={(_, field) => onFieldChange(field?.elementId ?? '')}
        renderInput={(params) => (
          <TextField {...params} label='スペースID' variant='outlined' color='primary' />
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
