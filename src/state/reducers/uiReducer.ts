import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

type UIState = {
  route?: string;
};

// Define the initial state using that type
const initialState: UIState = {
  route: undefined,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    navigateToRoute: (state, action: PayloadAction<string | undefined>) => {
      state.route = action.payload;
    },
  },
});

export const { navigateToRoute } = uiSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectRoute = (state: RootState) => state.ui.route;

export default uiSlice.reducer;
