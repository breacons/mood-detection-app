import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

type UIState = {
  route?: string;
  connected: boolean;
  isBlocked: boolean;
};

// Define the initial state using that type
const initialState: UIState = {
  route: undefined,
  connected: false,
  isBlocked: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    navigateToRoute: (state, action: PayloadAction<string | undefined>) => {
      state.route = action.payload;
    },
    setConnected: (state, action: PayloadAction<boolean>) => {
      state.connected = action.payload;
    },
    setBlocked: (state, action: PayloadAction<boolean>) => {
      state.isBlocked = action.payload;
    },
  },
});

export const { navigateToRoute, setConnected, setBlocked } = uiSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectRoute = (state: RootState) => state.ui.route;

export default uiSlice.reducer;
