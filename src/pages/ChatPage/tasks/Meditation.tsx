import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useCountdown } from '..';
const { Title } = Typography;
import React from 'react';
import { useAppDispatch } from '../../../state/hooks';
import { setBlocked } from '../../../state/reducers/uiReducer';
import { updateStatus } from '../../../state/reducers/statisticsReducer';

export const MeditationTask = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const remainingSeconds = useCountdown(20);
  return (
    <>
      <Title>{remainingSeconds} s</Title>
      <Title level={5} style={{ textAlign: 'center', marginBottom: 24, maxWidth: '60%' }}>
        Take a couple of deep breaths. <br /> For 20 seconds, try to look at something that is 20
        meters away. <br />
        This will help you relax and it is also good for your eyes.
      </Title>
      <Button
        type="primary"
        disabled={remainingSeconds > 0}
        onClick={() => {
          dispatch(setBlocked(false));
          dispatch(
            updateStatus({
              message: 'Calming exercise finished',
              priority: 'info',
              createdAt: new Date().toISOString(),
            }),
          );
          navigate('/chat');
        }}
      >
        Back to Chat
      </Button>
    </>
  );
};
