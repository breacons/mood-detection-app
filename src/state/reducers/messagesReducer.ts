import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { message } from 'antd';
import socket from '../../services/socket';
import { ChatMessageReceivedPayload } from '../../types';
import type { RootState } from '../store';

interface MessagesState {
  messages: ChatMessageReceivedPayload[];
}

// Define the initial state using that type
const initialState: MessagesState = {
  messages: [],
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    onMessageReceived: (state, action: PayloadAction<ChatMessageReceivedPayload>) => {
      state.messages.push(action.payload);
    },
    sendMessage: (state, action: PayloadAction<{ message: string }>) => {
      return state;
    },
  },
});

export const { onMessageReceived, sendMessage } = messagesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMessages = (state: RootState) => state.messages.messages;

export default messagesSlice.reducer;
