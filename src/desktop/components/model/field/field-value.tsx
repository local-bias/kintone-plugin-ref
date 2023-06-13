import { kx } from '@/types/kintone.api';
import React, { FC } from 'react';
import { Entity } from '../../ui/entity';

const Component: FC<{ field: kx.RecordData[keyof kx.RecordData] }> = ({ field }) => {
  if (!field || !field.value) {
    return null;
  }

  switch (field.type) {
    case 'CALC':
    case 'SINGLE_LINE_TEXT':
    case 'NUMBER':
    case 'DROP_DOWN':
    case 'CREATED_TIME':
    case 'UPDATED_TIME':
    case 'TIME':
    case '__ID__':
    case '__REVISION__':
    case 'RECORD_NUMBER':
    case 'RADIO_BUTTON':
    case 'DATE':
    case 'DATETIME':
    case 'STATUS':
      return <div>{field.value}</div>;
    case 'CATEGORY':
    case 'CHECK_BOX':
    case 'MULTI_SELECT':
      return (
        <div>
          {field.value.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </div>
      );

    case 'MULTI_LINE_TEXT':
      return (
        <div>
          {field.value.split(/\n/).map((row, i) => (
            <div key={i}>{row}</div>
          ))}
        </div>
      );
    case 'CREATOR':
    case 'MODIFIER':
      return (
        <Entity>
          <img
            src='https://static.cybozu.com/contents/k/image/icon/user/user_16.svg'
            width='16'
            height='16'
          />
          <span>{field.value.name}</span>
        </Entity>
      );
    case 'RICH_TEXT':
      return <div dangerouslySetInnerHTML={{ __html: field.value }} />;
    case 'GROUP_SELECT':
    case 'ORGANIZATION_SELECT':
    case 'USER_SELECT':
    case 'STATUS_ASSIGNEE':
      return (
        <div>
          {field.value.map((group, i) => (
            <Entity key={i}>
              <img
                src='https://static.cybozu.com/contents/k/image/argo/form/userselect/group16.png'
                width='16'
                height='16'
              />
              {group.name}
            </Entity>
          ))}
        </div>
      );
    case 'LINK':
      if (field.value.includes('@')) {
        return (
          <span className='control-value-content-gaia'>
            <a href={`mailto:${field.value}`}>{field.value}</a>
          </span>
        );
      }
      return (
        <span className='control-value-content-gaia'>
          <a href={`callto:${field.value}`}>{field.value}</a>
        </span>
      );
    case 'FILE':
      return (
        <div>
          {field.value.map((file, i) => (
            <div key={i}>{file.name}</div>
          ))}
        </div>
      );
    default:
      if (typeof field.value === 'string') {
        return <div>{field.value}</div>;
      }
      return <div>非対応のフィールドタイプです。({field.type})</div>;
  }
};

export default Component;
