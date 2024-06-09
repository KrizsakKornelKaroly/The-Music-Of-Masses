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
import Folk_Punk from './pages/Punk_Folk/Punk_Folk'
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
  },
  {
    path: '/classicrock',
    element: <Classic_Rock />
  },
  {
    path: '/folkrock',
    element: <Folk_Rock />
  },
  {
    path: '/hardrock',
    element: <Hard_Rock />
  },
  {
    path: '/folkpunk',
    element: <Folk_Punk />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);