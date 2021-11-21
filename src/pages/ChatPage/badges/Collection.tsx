import { Button, Col, Row, Typography } from 'antd';
import { useNavigate, useSearchParams } from 'react-router-dom';

const { Title } = Typography;
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const BadgeItem = (props: { badgeId: number; index: number }) => {
  return (
    <Col span={4} style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
      <AnimatePresence>
        <motion.img
          src={`/assets/badge_${props.badgeId}.svg`}
          initial={{ opacity: 0, scale: 2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: (props.index + 1) * 0.1 }}
        />
      </AnimatePresence>
    </Col>
  );
};

export const Collection = () => {
  const navigate = useNavigate();
  const mockBadges = [2, 4, 5, 6];
  return (
    <>
      <Row
        style={{ width: '80%', maxWidth: 600, marginBottom: 24, justifyContent: 'center' }}
        align="middle"
      >
        {mockBadges.map((badgeId, index) => (
          <BadgeItem key={index} badgeId={badgeId} index={index} />
        ))}
      </Row>

      <Title level={5} style={{ textAlign: 'center', marginBottom: 24, maxWidth: '60%' }}>
        Nice collection!
      </Title>
      <Button type="primary" onClick={() => navigate('/chat')}>
        Back to Chat
      </Button>
    </>
  );
};
