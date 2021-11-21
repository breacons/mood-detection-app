import './App.css';

import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';

import ChatPage from './pages/ChatPage';
import DashboardPage from './pages/DashboardPage';
import './services/socket';
import { useAppDispatch, useAppSelector } from './state/hooks';
import { navigateToRoute, selectRoute } from './state/reducers/uiReducer';

function App() {
  const pageToGo = useAppSelector(selectRoute);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (pageToGo) {
      navigate(pageToGo);
      dispatch(navigateToRoute(undefined));
    }
  }, [pageToGo]);

  return (
    <Routes>
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="chat/*" element={<ChatPage />} />
    </Routes>
  );
}

export default App;
