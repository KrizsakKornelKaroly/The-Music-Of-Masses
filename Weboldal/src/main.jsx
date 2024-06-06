import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Metalvalaszto from './pages/Metalvalaszto/Metalvalaszto';
import Kpop from './pages/KPop/Kpop';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/metalvalaszto',
    element: <Metalvalaszto />,
  },
  {
    path: '/kpop',
    element: <Kpop />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);