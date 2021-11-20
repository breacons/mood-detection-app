import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { message } from 'antd';
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
      // THIS IS A MOCK FOR NOW
      state.messages.push({
        message: action.payload.message,
        sender: '00absdc',
        sentAt: new Date().toUTCString(),
        authorId: 'Greg',
      });
    },
  },
});

export const { onMessageReceived, sendMessage } = messagesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMessages = (state: RootState) => state.messages.messages;

export default messagesSlice.reducer;
