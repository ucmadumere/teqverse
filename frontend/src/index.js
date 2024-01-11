import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './assets/css/bootstrap.custom.css';
import './assets/css/style.css';
import './assets/css/animate.css';
import './assets/css/bootsnav.css';
import './assets/css/elegant-icons.css';
import './assets/css/flaticon-set.css';
import './assets/css/magnific-popup.css';
import './assets/css/responsive.css';
import './assets/css/themify-icons.css';
import App from './App';
import HomeScreen from './screens/HomeScreen';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      {/* <Route path='/search/:keyword' element={<HomeScreen />} /> */}
      
      
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


