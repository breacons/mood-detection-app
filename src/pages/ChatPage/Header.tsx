import { DoubleRightOutlined } from '@ant-design/icons';
import { Layout, Typography } from 'antd';
const { Header } = Layout;
const { Title, Text } = Typography;
import React from 'react';
import { useAppSelector } from '../../state/hooks';

export const HeaderComponent = () => {
  const isOnline = useAppSelector((state) => state.ui.connected);

  return (
    <Header
      style={{
        background: '#3F4354',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          height: 30,
          width: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#575B6F',
          marginRight: 16,
          borderRadius: '8px 0 8px 0',
        }}
      >
        <DoubleRightOutlined />
      </div>
      <Title level={3} style={{ margin: 0 }}>
        Live Chat Room
      </Title>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 'auto',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ height: 16, lineHeight: '16px', color: isOnline ? '#44D7B6' : 'red' }}>
          {isOnline ? 'Connected' : 'Disconnected'}
        </Text>
        <div
          style={{
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '20px 0 0 20px',
            borderColor: 'transparent transparent transparent #222331',
            position: 'absolute',
            left: 0,
            bottom: 0,
          }}
        ></div>
      </div>
    </Header>
  );
};
