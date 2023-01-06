import styled from '@emotion/styled';
import { Tooltip } from '@mui/material';
import React, { FC, PropsWithChildren, Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { refferenceAppState } from '../../../states/plugin';

const DEFAULT = 'このフィールドは別アプリを直接参照しています';

export const Control = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  @media (max-width: 768px) {
    padding: 10px 16px;
  }
`;

const Component: FC<PropsWithChildren> = ({ children }) => {
  const app = useRecoilValue(refferenceAppState);

  return (
    <Tooltip title={app ? `このフィールドは${app.name}を直接参照しています` : DEFAULT}>
      <Control>{children}</Control>
    </Tooltip>
  );
};

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <Tooltip title={DEFAULT}>
          <Control>{children}</Control>
        </Tooltip>
      }
    >
      <Component>{children}</Component>
    </Suspense>
  );
};

export default Container;
