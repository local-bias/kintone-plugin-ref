import styled from '@emotion/styled';
import { Skeleton } from '@mui/material';
import React, { FC, FCX } from 'react';
import { useRecoilValue } from 'recoil';
import { wrapperWidthState } from '../states/plugin';

const Component: FCX<{ wrapperWidth: number }> = ({ className, wrapperWidth }) => (
  <div className={className}>
    <div className='control-gaia px-2'>
      <div className='control-label-gaia px-2 py-1'>
        <Skeleton variant='text' width={wrapperWidth > 100 ? 100 : wrapperWidth} />
      </div>
      <div className='control-value-gaia px-2 py-1'>
        <Skeleton variant='text' width={wrapperWidth} />
      </div>
    </div>
  </div>
);

const StyledComponent = styled(Component)`
  .px-2 {
    padding-left: 8px;
    padding-right: 8px;
  }
  .py-1 {
    padding-top: 4px;
    padding-bottom: 4px;
  }
`;

const Container: FC = () => {
  const wrapperWidth = useRecoilValue(wrapperWidthState);
  return <StyledComponent wrapperWidth={wrapperWidth} />;
};

export default Container;
