import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { routers } from './routes';
import store from './redux/store';
import { Provider } from 'react-redux';
import "./assets/scss/app.scss";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={routers} />
  </Provider>
);