import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthProvider from './contexts/AuthProvider';
import LoadingProvider from './contexts/Loading';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LoadingProvider>
      <AuthProvider>
          <App />
      </AuthProvider>
    </LoadingProvider>
  </React.StrictMode>
);
