import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Metalvalaszto from './pages/Metalvalaszto/Metalvalaszto';
import Kpop from './pages/Pop_Kpop/Kpop';
import Metal_Heavy from './pages/Metal_Heavy/Metal_Heavy';
import Rockvalaszto from './pages/RockValaszto/RockValaszto';
import Punkvalaszto from './pages/PunkValaszto/PunkValaszto';
import Classic_Rock from './pages/Rock_Classic/Rock_Classic';
import Folk_Rock from './pages/Rock_Folk/Rock_Folk';
import Hard_Rock from './pages/Rock_Hard/Rock_Hard';
import Rock_Roll from './pages/Rock_Roll/Rock_Roll';
import Folk_Punk from './pages/Punk_Folk/Punk_Folk'
import Rolunk from './pages/Rolunk/Rolunk';
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
  },
  {
    path: '/heavymetal',
    element: <Metal_Heavy />
  },
  {
    path: '/rockvalaszto',
    element: <Rockvalaszto />
  },
  {
    path: '/punkvalaszto',
    element: <Punkvalaszto />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);