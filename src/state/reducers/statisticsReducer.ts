import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatisticsUpdatePayload } from '../../types';
import type { RootState } from '../store';
import _ from 'lodash';
import socket from '../../services/socket';
import { BACKEND_URL } from '../../config';
type StatusMessage = {
  createdAt: string;
  message: string;
  priority: 'warning' | 'danger' | 'info';
};

export const priorityToColor = {
  warning: 'orange',
  danger: 'red',
  info: 'blue',
};

type StatisticsState = Omit<StatisticsUpdatePayload, 'sender' | 'sentAt'> & {
  statusMessages: StatusMessage[];
};

// Define the initial state using that type
const initialState: StatisticsState = {
  playerName: 'N/A',
  playerLevel: 'N/A',
  playerRating: 'N/A',
  rejectedMessageCount: 0,
  moodBelowTresholdCount: 0,
  statusMessages: [
    {
      message: 'System starting',
      priority: 'warning',
      createdAt: new Date().toISOString(),
    },
    {
      message: 'System started',
      priority: 'warning',
      createdAt: new Date().toISOString(),
    },
    {
      message: 'Webcam connected',
      priority: 'info',
      createdAt: new Date().toISOString(),
    },
    {
      message: 'Chat server connected',
      priority: 'info',
      createdAt: new Date().toISOString(),
    },
  ],
};

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    onStatisticsUpdated: (state, action: PayloadAction<StatisticsUpdatePayload>) => {
      state.playerName = action.payload.playerName;
      state.playerLevel = action.payload.playerLevel;
      state.playerRating = action.payload.playerRating;
      state.rejectedMessageCount = action.payload.rejectedMessageCount;
      state.moodBelowTresholdCount = action.payload.moodBelowTresholdCount;
    },
    updateStatus: (state, action: PayloadAction<StatusMessage>) => {
      const last = _.last(state.statusMessages);

      if (
        last && last.message &&
        last.message.includes('Angry mood detected') &&
        action.payload.message.includes('Angry mood detected')
      ) {
        return;
      }

      // fetch(BACKEND_URL + '/mock', {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({ payload: action.payload, type: 'STATUS_UPDATE' }),
      // });
      state.statusMessages.push(action.payload);
    },
  },
});

export const { onStatisticsUpdated, updateStatus } = statisticsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectProfile = (state: RootState) => state.profile;

export default statisticsSlice.reducer;
