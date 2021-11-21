import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { message } from 'antd';
import { ChatMessageReceivedPayload } from '../../types';
import type { RootState } from '../store';
import dayjs from 'dayjs';
import _ from 'lodash'

export interface Emotion {
  angry: number;
  disgust: number;
  fear: number;
  happy: number;
  sad: number;
  surprise: number;
  neutral: number;
}

interface EmotionsState {
  history: { time: number; emotion: Emotion }[];
}

// Define the initial state using that type
const initialState: EmotionsState = {
  history: [],
};

export const emotionsSlice = createSlice({
  name: 'emotions',
  initialState,
  reducers: {
    onEmotionReceived: (state, action: PayloadAction<Emotion>) => {
      console.log('action', action);
      state.history.push({ time: dayjs().unix(), emotion: action.payload });
      return state;
    },
  },
});

export const { onEmotionReceived } = emotionsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectEmotionsHistory = (state: RootState) => state.emotions.history;
export const selectLastEmotion = (state: RootState) => _.last(state.emotions.history);

export default emotionsSlice.reducer;
