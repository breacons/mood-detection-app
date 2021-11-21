import { configureStore } from '@reduxjs/toolkit';

import messagesReducer from './reducers/messagesReducer';
import statisticsReducer from './reducers/statisticsReducer';
import emotionsReducer from './reducers/emotionsReducer';

export const store = configureStore({
  reducer: {
    messages: messagesReducer,
    profile: statisticsReducer,
    emotions: emotionsReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
