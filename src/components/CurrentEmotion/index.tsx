import React from 'react';
import { Card, Statistic } from 'antd';
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
      color =  '#52c41a';
    } else {
      text = 'Neutral';
      color = '#faad14';
    }
  }

  return (
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
  );
};

export default CurrentEmotion;
