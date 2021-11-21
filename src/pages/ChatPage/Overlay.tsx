import { Button, Typography } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
const { Title } = Typography;
import React from 'react';
import { Route, Routes, useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../state/hooks';
import { navigateToRoute } from '../../state/reducers/uiReducer';
import { Collection } from './badges/Collection';

import { ReceivedBadge } from './badges/ReceivedBadge';
import { MeditationTask } from './tasks/Meditation';
import { RageEnterKeyTask } from './tasks/Rage';
import { YoutubeTechnique } from './tasks/YoutubeTechnique';

export const Overlay = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();
  const nextUrl = searchParams.get('next') || 'rage';

  return (
    <AnimatePresence>
      <motion.div
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
        }}
        initial={{ opacity: 0, y: -100 }}
        exit={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ repeat: 0 }}
        key="overlay-main"
      >
        <Routes>
          <Route path="meditate" element={<MeditationTask />} />
          <Route path="rage" element={<RageEnterKeyTask />} />
          <Route path="youtube" element={<YoutubeTechnique />} />
          <Route path="badge" element={<ReceivedBadge />} />
          <Route path="collection" element={<Collection />} />
          <Route
            path="/"
            element={
              <div
                key="overlay-content"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <img
                  src="/meditation.png"
                  style={{ width: '80%', maxWidth: 450, marginTop: -40 }}
                />
                <Title style={{ marginBottom: 0 }}>Take a little break</Title>
                <Title level={5} style={{ textAlign: 'center', marginBottom: 24 }}>
                  Seems like you are a bit stressed out. <br /> Lets take a short break before
                  reaching out to others.
                </Title>
                <Button
                  type="primary"
                  size="large"
                  onClick={() => dispatch(navigateToRoute('/chat/break/' + nextUrl))}
                >
                  Show me How
                </Button>
              </div>
            }
          />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};
