import './App.css';
import React, { useEffect, useState } from 'react';

import DashboardPage from './pages/DashboardPage';
import socketIOClient from 'socket.io-client';
import { SOCKET_URL, BACKEND_URL } from './config';
import If from './components/If';
const socket = socketIOClient(BACKEND_URL);
import { Typography } from 'antd';
const { Title } = Typography;

socket.on('connect', () => console.log('connected'));
socket.on('FromAPI', (message: any) => console.log('message', message));

function App() {
  const [emotions, setEmotions] = useState(null);

  useEffect(() => {
    socket.on('FromAPI', (message: any) => {
      if (message && message !== []) {
        setEmotions(message[0].emotions);
      }
    });
  }, [socket]);

  console.log(emotions);

  return (
    <div>
      <DashboardPage />
      <Title level={3}>
        <If condition={emotions && emotions !== []} then={() => JSON.stringify(emotions)} />
      </Title>
    </div>
  );
}

export default App;
