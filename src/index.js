import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./rutas/Home";
import Admin from "./rutas/Admin";
import NewPost from "./rutas/NewPost";
import UnPost from "./rutas/UnPost";
import SdoPost from "./rutas/SdoPost";
import TcerPost from "./rutas/TcerPost";
import Error from "./rutas/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },

  {
    path: "/Admin",
    element: <Admin />
  },

  {
    path: "/NewPost",
    element: <NewPost />
  },

  {
    path: "/UnPost",
    element: <UnPost />
  },

  {
    path: "/SdoPost",
    element: <SdoPost />
  },

  {
    path: "/TcerPost",
    element: <TcerPost />
  }
])

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
   <React.StrictMode>
     {/* <Home /> */}
     <RouterProvider router={router}/>
   </React.StrictMode>
 );

 // ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );