import { Skeleton } from '@mui/material';
import React, { FC, FCX, memo, Suspense } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';

import { appFieldsState } from '../../../states/kintone';
import { keyFieldState } from '../../../states/plugin';
import { RecoilFieldSelect } from '@konomi-app/kintone-utilities-react';

const Component: FCX = ({ className }) => {
  const selected = useRecoilValue(keyFieldState);

  const onFieldChange = useRecoilCallback(
    ({ set }) =>
      (value: string) => {
        set(keyFieldState, value);
      },
    []
  );

  return (
    <div className={className}>
      <RecoilFieldSelect state={appFieldsState} fieldCode={selected} onChange={onFieldChange} />
    </div>
  );
};

const Container: FC = () => {
  return (
    <Suspense fallback={<Skeleton width={360} height={56} variant='rounded' />}>
      <Component />
    </Suspense>
  );
};

export default memo(Container);
