import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useCountdown } from '..';
const { Title } = Typography;
import React, { useEffect, useMemo, useState } from 'react';
import { useAppDispatch } from '../../../state/hooks';
import { setBlocked } from '../../../state/reducers/uiReducer';
import { updateStatus } from '../../../state/reducers/statisticsReducer';

export const RageEnterKeyTask = () => {
  const remainingSeconds = useCountdown(20);
  const dispatch = useAppDispatch();
  const [keypressCount, setKeyPressCount] = useState<number>(0);
  const navigate = useNavigate();
  const record = useMemo(() => window.localStorage.getItem('smashRecord') || '0', []);

  useEffect(() => {
    window.addEventListener('keyup', onKeyPress);
    return () => window.removeEventListener('keyup', onKeyPress);
  }, []);

  useEffect(() => {
    if (remainingSeconds === 0) {
      if (keypressCount > +record) {
        window.localStorage.setItem('smashRecord', '' + keypressCount);
      }
      window.removeEventListener('keyup', onKeyPress);
    }
  }, [remainingSeconds]);

  const onKeyPress = React.useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      setKeyPressCount((count) => count + 1);
    }
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Title>{keypressCount} smashes</Title>
      <Title level={5} style={{ textAlign: 'center', marginBottom: 24, maxWidth: '60%' }}>
        Channel that rage somewhere else. Try to beat your own record ({record}) of{' '}
        <strong>smashing the Enter</strong> key now. You have {remainingSeconds} seconds left.
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
    </div>
  );
};
