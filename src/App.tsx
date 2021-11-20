import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router';

import ChatPage from './pages/ChatPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Routes>
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="chat" element={<ChatPage />} />
    </Routes>
  );
}

export default App;
