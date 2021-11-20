import { Avatar, Breadcrumb, Button, Input, Layout, Menu, Space } from 'antd';
import { Typography } from 'antd';
const { Header, Content, Footer } = Layout;
import { SendOutlined } from '@ant-design/icons';
import React, { useEffect, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '../../state/hooks';
import {
  onMessageReceived,
  selectMessages,
  sendMessage,
} from '../../state/reducers/messagesReducer';

const { Title, Text } = Typography;

export const ChatMessage = (props: {
  message: string;
  sender: string;
  isFromMe: boolean;
  sentAt: string;
}) => {
  return (
    <div
      style={{
        padding: 5,
        marginBottom: 20,
        display: 'flex',
      }}
    >
      <Avatar size="large" style={{ marginRight: 16 }}>
        {props.sender.charAt(0)}
      </Avatar>
      <div
        style={{
          background: props.isFromMe ? 'green' : 'darkblue',
          borderRadius: '0px 8px 10px 8px',
          color: 'white',
          padding: '6px 16px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Text>{props.message}</Text>
      </div>
    </div>
  );
};
export const ChatPage = () => {
  const [currentMessageText, setCurrentMessageText] = React.useState('');
  const messagesRef = useRef<HTMLDivElement | null>(null);

  const messages = useAppSelector(selectMessages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.setInterval(() => {
      dispatch(
        onMessageReceived({
          message: 'This is an example message from someone else',
          sender: '00absdc',
          sentAt: new Date().toUTCString(),
          authorId: 'Maro',
        }),
      );
    }, 5000);
  }, []);

  useEffect(() => {
    messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages.length]);

  const onSendClick = () => {
    dispatch(sendMessage({ message: currentMessageText }));
    setCurrentMessageText('');
  };

  return (
    <Layout className="layout" style={{ height: '100vh' }}>
      <Header>
        <Space align="center">
          <Title level={3}>Chat Room</Title>
        </Space>
      </Header>
      <div
        style={{
          padding: '50px 50px',
          display: 'flex',
          flex: 'auto',
          flexDirection: 'column',
          overflowY: 'scroll',
        }}
        ref={messagesRef}
      >
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.message}
            sender={message.authorId}
            sentAt={message.sentAt}
            isFromMe={message.authorId === 'Greg'}
          />
        ))}
      </div>
      <Footer style={{ textAlign: 'center', padding: 10 }}>
        <Input.Group compact>
          <Input
            style={{ width: 'calc(100% - 40px)', textAlign: 'start' }}
            placeholder="Send a message..."
            size="large"
            value={currentMessageText}
            onChange={(e) => setCurrentMessageText(e.target.value)}
            onKeyUp={(e) => e.key === 'Enter' && onSendClick()}
          />
          <Button
            icon={<SendOutlined />}
            size="large"
            onClick={onSendClick}
            disabled={currentMessageText.length === 0}
          />
        </Input.Group>
      </Footer>
    </Layout>
  );
};

export default ChatPage;
