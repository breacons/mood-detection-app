import { Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router';

import { HeaderComponent } from './Header';
import { InputFooter } from './InputFooter';
import { Messages } from './Messages';
import { Overlay } from './Overlay';

export const useCountdown = (length: number) => {
  const [remainingSeconds, setRemainingSeconds] = useState<number>(length);

  useEffect(() => {
    let handle: undefined | number = undefined;
    if (remainingSeconds > 0) {
      handle = window.setTimeout(() => {
        setRemainingSeconds(remainingSeconds - 1);
      }, 1000);
    }
    () => {
      if (handle !== undefined) {
        window.clearTimeout(handle);
      }
    };
  }, [remainingSeconds]);
  return remainingSeconds;
};

export const ChatPage = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout className="layout" style={{ height: '100vh', background: '#222331' }}>
            <HeaderComponent />
            <Messages />
            <InputFooter />
            <Outlet />
          </Layout>
        }
      >
        <Route path="break/*" element={<Overlay />} />
      </Route>
    </Routes>
  );
};

export default ChatPage;
