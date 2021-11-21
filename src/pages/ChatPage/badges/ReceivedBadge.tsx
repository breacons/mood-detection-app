import { Button, Space, Typography } from 'antd';
import { useNavigate, useSearchParams } from 'react-router-dom';

const { Title } = Typography;
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const ReceivedBadge = () => {
  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();
  const badgeId = searchParams.get('badge') || '1';
  return (
    <>
      <AnimatePresence>
        <motion.img
          src={`/assets/badge_${badgeId}.svg`}
          style={{ marginBottom: 24 }}
          initial={{ opacity: 0, scale: 2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        />
      </AnimatePresence>

      <Title>You just earned a new badge!</Title>
      <Title level={5} style={{ textAlign: 'center', marginBottom: 24, maxWidth: '60%' }}>
        Collect badges and improve you reputation amongst the community.
      </Title>
      <Space>
        <Button type="primary" onClick={() => navigate('/chat')}>
          Back to Chat
        </Button>
        <Button onClick={() => navigate('/chat/break/collection')}>View Collection</Button>
      </Space>
    </>
  );
};
