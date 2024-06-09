import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Metalvalaszto from './pages/Metalvalaszto/Metalvalaszto';
import Kpop from './pages/Pop_Kpop/Kpop';
import Metal_Heavy from './pages/Metal_Heavy/Metal_Heavy';
import Metal_Thrash from './pages/Metal_Thrash/Metal_Thrash';
import Rockvalaszto from './pages/RockValaszto/RockValaszto';
import Punkvalaszto from './pages/PunkValaszto/PunkValaszto';
import Classic_Rock from './pages/Rock_Classic/Rock_Classic';
import Folk_Rock from './pages/Rock_Folk/Rock_Folk';
import Hard_Rock from './pages/Rock_Hard/Rock_Hard';
import Rock_Roll from './pages/Rock_Roll/Rock_Roll';
import Rock_Indie from './pages/Rock_Indie/Rock_Indie';
import Folk_Punk from './pages/Punk_Folk/Punk_Folk';
import Rock_Punk from './pages/Rock_Punk/Rock_Punk';
import Rolunk from './pages/Rolunk/Rolunk';
import Rock_Modern from './pages/Rock_Modern/Rock_Modern';
import Punk_Death from './pages/Punk_Death/Punk_Death';
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
    path: '/rockroll',
    element: <Rock_Roll />
  },
  {
    path: '/folkpunk',
    element: <Folk_Punk />
  },
  {
    path: '/rolunk',
    element: <Rolunk />
  },
  {
    path: '/indierock',
    element: <Rock_Indie />
  },
  {
    path: '/modernrock',
    element: <Rock_Modern />
  },
  {
    path: '/punkrock',
    element: <Rock_Punk />
  },
  {
    path: '/deathpunk',
    element: <Punk_Death />
  },
  {
    path: '/thrashmetal',
    element: <Metal_Thrash />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);