import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useCountdown } from '..';
const { Title } = Typography;
import React from 'react';

export const ReceivedBadge = () => {
  const navigate = useNavigate();
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="48px"
        height="48px"
        style={{ marginBottom: 24, transform: 'scale(1.5)' }}
      >
        <path
          fill="#FFC107"
          d="M44.4,17.3c-0.1-1.4-1.1-2.5-2.5-2.7C38.4,14,30.3,13,24.2,13S9.6,13.9,6,14.5c-1.3,0.2-2.3,1.3-2.5,2.7L3,25c-0.1,1.6,1.1,2.8,2.7,3.2C8.6,29,15.7,29,24.2,29s15.3-0.1,18.1-0.7c1.6-0.3,2.8-1.6,2.7-3.2L44.4,17.3z M39,22H9c-0.6,0-1-0.5-1-1s0.4-1,1-1h30c0.6,0,1,0.5,1,1S39.6,22,39,22z"
        />
        <path
          fill="#455A64"
          d="M23.7,3c-0.2,0-0.2,0-0.3,0.2c-4.4,5.2-7.7,11.6-10,19.7c-1.6,6-2.9,13.2-3.4,21.8c0,0.2,0.2,0.3,0.3,0.3h0.2c0.2,0,0.2,0,0.3-0.2c4.7-6.2,9-11.1,15.2-15c1-0.5,1.5-0.8,2-0.8c0.2,0,0.5,0.2,1,0.8c2.6,3.6,5.4,7.1,8.2,12c0,0.2,0.3,0.2,0.5,0.2c0.2,0,0.3-0.2,0.3-0.3c-0.7-7.2-1.8-13.8-4.1-20.3c-2.3-6.7-5.6-12.9-9.8-18.2C24.1,3,23.9,3,23.7,3L23.7,3z"
        />
        <path
          fill="#C5CAE9"
          d="M32,22.1c-2-6-4.8-11.4-8.3-16.1c-3.7,4.8-6.4,10.5-8.3,17.4c-1.4,5.2-2.4,10.5-3,16.2c3.9-4.8,7.6-8.4,12.6-11.5l0.1-0.1l0.1,0c0.2-0.1,0.4-0.2,0.5-0.3c0.8-0.4,1.4-0.7,2.3-0.7c1.4,0,2.3,1.2,2.6,1.6c0.5,0.6,0.9,1.2,1.4,1.9c1.1,1.4,2.1,2.9,3.2,4.4C34.4,30.2,33.4,26,32,22.1z"
        />
      </svg>
      <Title>You just earned a new badge!</Title>
      <Title level={5} style={{ textAlign: 'center', marginBottom: 24, maxWidth: '60%' }}>
        Collect badges and improve you reputation amongst the community.
      </Title>
      <Button type="primary" onClick={() => navigate('/chat')}>
        Back to Chat
      </Button>
    </>
  );
};
