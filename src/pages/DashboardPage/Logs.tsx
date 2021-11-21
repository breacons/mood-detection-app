import { Card, message, Timeline } from 'antd';
import React from 'react';
import { useAppSelector } from '../../state/hooks';
import { priorityToColor } from '../../state/reducers/statisticsReducer';

export const Logs = () => {
  const statusMessages = useAppSelector((state) => state.profile.statusMessages);
  return (
    <Card title="Gamer History">
      <Timeline reverse={true}>
        {statusMessages.map((message, index) => (
          <Timeline.Item color={priorityToColor[message.priority]} key={index}>
            {message.message} -{' '}
            {new Date(message.createdAt).toLocaleTimeString(undefined, { timeStyle: 'short' })}
          </Timeline.Item>
        ))}
      </Timeline>
    </Card>
  );
};
