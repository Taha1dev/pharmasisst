import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './context/ContextProvider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
