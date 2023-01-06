import { Skeleton } from '@mui/material';
import React, { FC, Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { refferenceFieldNameState } from '../../states/plugin';

const Component: FC = () => {
  const fieldName = useRecoilValue(refferenceFieldNameState);
  return <>{fieldName}</>;
};

const Container: FC = () => {
  return (
    <Suspense fallback={<Skeleton variant='text' />}>
      <Component />
    </Suspense>
  );
};

export default Container;
