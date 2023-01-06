import { Autocomplete, Skeleton, TextField } from '@mui/material';
import React, { FC, FCX, memo, Suspense } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';

import { allKintoneAppsState } from '../../../states/kintone';
import { refferenceAppIdState } from '../../../states/plugin';
import styled from '@emotion/styled';

const Component: FCX = ({ className }) => {
  const selected = useRecoilValue(refferenceAppIdState);
  const allApps = useRecoilValue(allKintoneAppsState);

  const onFieldChange = useRecoilCallback(
    ({ set }) =>
      (value: string) => {
        set(refferenceAppIdState, value);
      },
    []
  );

  return (
    <div className={className}>
      <Autocomplete
        value={allApps.find((app) => app.appId === selected) ?? null}
        sx={{ width: '350px' }}
        options={allApps}
        isOptionEqualToValue={(option, v) => option.appId === v.appId}
        getOptionLabel={(option) => `${option.name}(${option.appId})`}
        onChange={(_, field) => onFieldChange(field?.appId ?? '')}
        renderInput={(params) => (
          <TextField {...params} label='アプリ名(アプリID)' variant='outlined' color='primary' />
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
