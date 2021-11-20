import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatisticsUpdatePayload } from '../../types';
import type { RootState } from '../store';

type StatisticsState = Omit<StatisticsUpdatePayload, 'sender' | 'sentAt'>;

// Define the initial state using that type
const initialState: StatisticsState = {
  playerName: 'N/A',
  playerLevel: 'N/A',
  playerRating: 'N/A',
  rejectedMessageCount: 0,
  moodBelowTresholdCount: 0,
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
  },
});

export const { onStatisticsUpdated } = statisticsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectProfile = (state: RootState) => state.profile;

export default statisticsSlice.reducer;
