import { Avatar, Typography } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
const { Text } = Typography;
import React, { useEffect, useRef } from 'react';

import If from '../../components/If';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { onMessageReceived, selectMessages } from '../../state/reducers/messagesReducer';

export const Messages = () => {
  const messagesRef = useRef<HTMLDivElement | null>(null);

  const messages = useAppSelector(selectMessages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const interval = window.setInterval(() => {
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

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages.length]);
  return (
    <div
      style={{
        padding: '50px 50px',
        display: 'flex',
        flex: 'auto',
        flexDirection: 'column',
        overflowY: 'scroll',
        position: 'relative',
      }}
      ref={messagesRef}
    >
      <AnimatePresence>
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
      </AnimatePresence>
    </div>
  );
};
export const ChatMessage = (props: {
  message: string;
  sender: string;
  isFromMe: boolean;
  sentAt: string;
  isBlocked: boolean;
}) => {
  return (
    <motion.div
      style={{
        padding: 5,
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
      }}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
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
    </motion.div>
  );
};
