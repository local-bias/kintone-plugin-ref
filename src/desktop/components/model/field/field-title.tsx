import { Skeleton } from '@mui/material';
import React, { FC, Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { refferenceFieldNameState } from '../../../states/plugin';
import { FieldTitle } from '../../ui/field-title';

const Component: FC = () => {
  const fieldName = useRecoilValue(refferenceFieldNameState);
  return <FieldTitle>{fieldName}</FieldTitle>;
};

const Container: FC = () => {
  return (
    <Suspense
      fallback={
        <FieldTitle>
          <Skeleton variant='text' />
        </FieldTitle>
      }
    >
      <Component />
    </Suspense>
  );
};

export default Container;
