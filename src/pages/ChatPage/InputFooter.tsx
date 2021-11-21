import { SendOutlined } from '@ant-design/icons';
import { Button, Input, Layout } from 'antd';
import React from 'react';
import socket from '../../services/socket';

import { useAppDispatch } from '../../state/hooks';
import { sendMessage } from '../../state/reducers/messagesReducer';
const { Footer } = Layout;

export const InputFooter = () => {
  const [currentMessageText, setCurrentMessageText] = React.useState('');
  const dispatch = useAppDispatch();

  const onSendClick = () => {
    socket.emit('SEND_CHAT_MESSAGE', {
      type: 'SEND_CHAT_MESSAGE',
      payload: {
        message: currentMessageText,
        sender: '00absdc',
        sentAt: new Date().toUTCString(),
        authorId: 'Greg',
      },
    });
    dispatch(sendMessage({ message: currentMessageText }));
    setCurrentMessageText('');
  };

  return (
    <Footer style={{ textAlign: 'center', padding: 10, background: '#3F4354', margin: '16px 8px' }}>
      <Input.Group compact>
        <Input
          style={{ width: 'calc(100% - 40px)', textAlign: 'start' }}
          placeholder="Send a message..."
          size="large"
          value={currentMessageText}
          onChange={(e) => setCurrentMessageText(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && currentMessageText.length !== 0 && onSendClick()}
        />
        <Button
          icon={<SendOutlined />}
          size="large"
          onClick={onSendClick}
          disabled={currentMessageText.length === 0}
          style={{ background: '#2460C5' }}
        />
      </Input.Group>
    </Footer>
  );
};
