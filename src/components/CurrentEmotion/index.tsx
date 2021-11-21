import React from 'react';
import { Card, Col, Row, Space, Statistic } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectLastEmotion } from '../../state/reducers/emotionsReducer';

export const CurrentEmotion = () => {
  const lastEmotion = useSelector(selectLastEmotion);
  let text = 'Unknown';
  let color = 'white';

  if (lastEmotion) {
    const angry = lastEmotion.emotion.angry;
    const happy = lastEmotion.emotion.happy;
    const neutral = lastEmotion.emotion.neutral;
    if (angry >= happy && angry >= neutral) {
      text = 'Angry';
      color = '#f5222d';
    } else if (happy >= neutral) {
      text = 'Happy';
      color = '#52c41a';
    } else {
      text = 'Neutral';
      color = '#faad14';
    }
  }

  return (
    <Row gutter={24}>
      <Col span={12}>
        <Card>
          <Statistic
            title="Current Mood"
            value={text}
            // precision={2}
            valueStyle={{ color: color }}
            // prefix={<ArrowUpOutlined />}
            // suffix="%"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="Change Frequency"
            value='Above Average'
            // precision={2}
            valueStyle={{ color: 'white' }}
            // prefix={<ArrowUpOutlined />}
            // suffix="%"
          />
        </Card>
      </Col>
    </Row>
  );
};

export default CurrentEmotion;
