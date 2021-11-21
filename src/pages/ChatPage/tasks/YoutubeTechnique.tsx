import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useCountdown } from '..';
const { Title } = Typography;
import React from 'react';

export const YoutubeTechnique = () => {
  const navigate = useNavigate();
  const remainingSeconds = useCountdown(20);
  return (
    <>
      <iframe
        width="80%"
        height="350"
        src="https://www.youtube.com/embed/Zna9-8RGQro"
        style={{ border: 'none', borderRadius: 6, marginBottom: 24 }}
      ></iframe>
      <Title level={5} style={{ textAlign: 'center', marginBottom: 24, maxWidth: '60%' }}>
        Watch this Youtube video to learn more about being a calmer player. You can skip the video
        in {remainingSeconds} seconds.
      </Title>
      <Button type="primary" disabled={remainingSeconds > 0} onClick={() => navigate('/chat')}>
        Back to Chat
      </Button>
    </>
  );
};
