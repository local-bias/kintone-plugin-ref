import styled from '@emotion/styled';
import { Tooltip } from '@mui/material';
import React, { FCX } from 'react';
import { useRecoilValue } from 'recoil';
import { refferenceAppState } from '../../states/plugin';

import Name from './name';
import Value from './value';

const Component: FCX = ({ className }) => {
  const app = useRecoilValue(refferenceAppState);
  return (
    <div className={className}>
      <Tooltip
        title={
          app
            ? `このフィールドは${app.name}を直接参照しています`
            : 'このフィールドは別アプリを直接参照しています'
        }
      >
        <div className='control-gaia px-2'>
          <div className='control-label-gaia px-2 py-1'>
            <Name />
          </div>
          <div className='control-value-gaia px-2 py-1'>
            <Value />
          </div>
        </div>
      </Tooltip>
    </div>
  );
};

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

export default StyledComponent;
