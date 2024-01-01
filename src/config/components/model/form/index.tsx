import React, { FCX } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-feather';

import SpaceIdForm from './form-space-id';
import RefferenceFieldForm from './form-refference-field';
import RefferenceAppForm from './form-refference-app';
import RefferenceKeyFieldForm from './form-refference-key-field';
import KeyFieldForm from './form-key-field';
import DeletionButton from './condition-deletion-button';
import { PluginFormSection, PluginFormTitle } from '@konomi-app/kintone-utilities-react';

const Component: FCX = ({ className }) => {
  return (
    <div {...{ className }}>
      <PluginFormSection>
        <PluginFormTitle>設置するスペース</PluginFormTitle>
        <SpaceIdForm />
      </PluginFormSection>
      <PluginFormSection>
        <PluginFormTitle>参照アプリ</PluginFormTitle>
        <RefferenceAppForm />
      </PluginFormSection>
      <PluginFormSection>
        <PluginFormTitle>参照フィールド</PluginFormTitle>
        <RefferenceFieldForm />
      </PluginFormSection>
      <PluginFormSection>
        <PluginFormTitle>紐づけ設定</PluginFormTitle>
        <div className='flex gap-6 items-end'>
          <div>
            <h3>参照先のキー情報</h3>
            <RefferenceKeyFieldForm />
          </div>
          <div className='py-4'>
            <Link width={30} height={30} strokeWidth={1} />
          </div>
          <div>
            <h3>このアプリのキー情報</h3>
            <KeyFieldForm />
          </div>
        </div>
      </PluginFormSection>
      <DeletionButton />
    </div>
  );
};

const StyledComponent = styled(Component)`
  grid-area: form;
  padding: 0 16px;
  > div {
    padding: 8px 8px 8px 16px;
    > h3 {
      font-weight: 500;
      margin-bottom: 16px;
    }
  }
  .py-4 {
    padding: 1rem 0;
  }
  .flex {
    display: flex;
  }
  .gap-6 {
    gap: 1.5rem;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-center {
    align-items: center;
  }
`;

export default StyledComponent;
