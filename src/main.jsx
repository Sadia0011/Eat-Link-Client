import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AuthProvider from './Providers/AuthProvider.jsx';
import Router from './Routes/router.jsx';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={Router} />
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
