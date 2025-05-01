import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Starte React Router mit dieser Routing-Konfiguration, die ich in router (routes.jsx) definiert habe: */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
