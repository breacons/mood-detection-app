import { Button, Typography } from 'antd';
const { Title } = Typography;
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { MeditationTask } from './tasks/Meditation';
import { RageEnterKeyTask } from './tasks/Rage';

export const Overlay = (props: { visible: boolean }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        opacity: props.visible ? 1 : 0,
        transform: props.visible ? 'scale(1)' : 'scale(0)',
        transitionProperty: 'opacity, transform',
        transitionDuration: '300ms',
        willChange: 'transform',
      }}
    >
      <Routes>
        <Route path="meditate" element={<MeditationTask />} />
        <Route path="rage" element={<RageEnterKeyTask />} />
        <Route
          path="/"
          element={
            <>
              <img src="/meditation.png" style={{ width: '80%', maxWidth: 450, marginTop: -40 }} />
              <Title style={{ marginBottom: 0 }}>Take a little break</Title>
              <Title level={5} style={{ textAlign: 'center', marginBottom: 24 }}>
                Seems like you are a bit stressed out. <br /> Lets take a short break before
                reaching out to others.
              </Title>
              <Button type="primary" size="large" onClick={() => navigate('/chat/break/task')}>
                Show me How
              </Button>
            </>
          }
        />
      </Routes>
    </div>
  );
};
