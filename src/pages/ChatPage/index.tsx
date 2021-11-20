import { Avatar, Button, Input, Layout, Space } from 'antd';
import { Typography } from 'antd';
const { Header, Footer } = Layout;
import { DoubleRightOutlined, SendOutlined } from '@ant-design/icons';
import React, { useEffect, useRef } from 'react';

import If from '../../components/If';
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
  isBlocked: boolean;
}) => {
  return (
    <div
      style={{
        padding: 5,
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Avatar
        size="large"
        style={{ marginRight: 16, background: props.isFromMe ? '#2460C5' : '#575B6F' }}
      >
        {props.sender.charAt(0)}
      </Avatar>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Text style={{ marginBottom: 4 }}>{props.sender}</Text>
        <div
          style={{
            background: props.isBlocked ? 'gray' : props.isFromMe ? '#2460C5' : '#575B6F',
            borderRadius: '0px 8px 10px 8px',
            color: 'white',
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <If
            condition={props.isBlocked}
            then={() => <Text>This message was blocked.</Text>}
            else={() => <Text>{props.message}</Text>}
          />
        </div>
      </div>
      <div style={{ marginLeft: 'auto' }}>
        <Text style={{ fontSize: '12px' }}>
          {new Date(props.sentAt).toLocaleTimeString(undefined, { timeStyle: 'short' })}
        </Text>
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
          rejected: Math.round(Math.random() * 100) % 2 ? true : false,
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
      <Header
        style={{
          background: '#3F4354',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            height: 30,
            width: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#575B6F',
            marginRight: 16,
            borderRadius: '8px 0 8px 0',
          }}
        >
          <DoubleRightOutlined />
        </div>
        <Title level={3} style={{ margin: 0 }}>
          Live Chat Room
        </Title>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ height: 16, lineHeight: '16px', color: '#44D7B6' }}>1234</Text>
          <Text style={{ height: 14, lineHeight: '14px', fontSize: '10px' }}>ONLINE</Text>
          <div
            style={{
              width: 0,
              height: 0,
              borderStyle: 'solid',
              borderWidth: '20px 0 0 20px',
              borderColor: 'transparent transparent transparent #222331',
              position: 'absolute',
              left: 0,
              bottom: 0,
            }}
          ></div>
        </div>
      </Header>
      <div
        style={{
          padding: '50px 50px',
          display: 'flex',
          flex: 'auto',
          flexDirection: 'column',
          overflowY: 'scroll',
          background: '#222331'
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
            isBlocked={!!message.rejected}
          />
        ))}
      </div>
      <Footer style={{ textAlign: 'center', padding: 10, background: '#3F4354' }}>
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
            style={{ background: '#2460C5' }}
          />
        </Input.Group>
      </Footer>
    </Layout>
  );
};

export default ChatPage;
