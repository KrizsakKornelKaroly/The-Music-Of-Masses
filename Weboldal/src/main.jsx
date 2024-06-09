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
import Punk_Gothic from './pages/Punk_Gothic/Punk_Gothic';
import Pop_Schlager from './pages/Pop_Schlager/Pop_Schlager';
import Pop_Eurobeat from './pages/Pop_Eurobeat/Pop_Eurobeat';
import Pop_Lofi from './pages/Pop_Lofi/Pop_Lofi';
import Jazz_Bepop from './pages/Jazz_Bepop/Jazz_Bepop';
import Folk_Valaszto from './pages/FolkValaszto/FolkValaszto'
import Jazz_Boogie from './pages/Jazz_Boogie/Jazz_Boogie';
import './App.css';
import Metal_Gothic from './pages/Metal_Gothic/Metal_Gothic';
import Metal_Death from './pages/Metal_Death/Metal_Death';
import Jazz_Smooth from './pages/Jazz_Smooth/Jazz_Smooth';


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
  },
  {
    path:'/gothicmetal',
    element: <Metal_Gothic />,
  },
  {
    path: '/gothicpunk',
    element: <Punk_Gothic />,
  },
  {
    path:'/deathmetal',
    element: <Metal_Death />,
  },
  {
    path: '/popschlager',
    element: <Pop_Schlager />,
  },
  {
    path: '/popeurobeat',
    element: <Pop_Eurobeat />,
  },
  {
    path: '/poplofi',
    element: <Pop_Lofi />,
  },
  {
    path: '/jazzbepop',
    element: <Jazz_Bepop />,
  },
  {
    path: '/folkvalaszto',
    element: <Folk_Valaszto />,
  },
  {
    path: '/jazzboogie',
    element: <Jazz_Boogie />,
  },
  {
    path: '/jazzsmooth',
    element: <Jazz_Smooth />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);