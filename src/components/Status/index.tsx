import React from 'react';
import { Space, Typography } from 'antd';
import { BounceLoader } from 'react-spinners';

const systems = ['ML / Landscape Tracking', 'ML / Mood Detection', 'NLP / Hateword Filter', 'DB / Time Series Analysis', 'OPS / Alerting'];
export const Status = () => {
  return (
    <Space direction="vertical" size={16}>
      {systems.map((system) => (
        <div key={system} style={{display: 'flex', alignItems: 'center'}}>
          <BounceLoader color={'#52ff6f'} size={12} />
          <Typography.Text code style={{marginLeft: 12}}>{system}</Typography.Text>
        </div>
      ))}
    </Space>
  );
};

export default Status;
