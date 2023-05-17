import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NewPost from './components/NewPost';

import App from './App';
import './index.css';

const router = createBrowserRouter([
  { path: '/', element: <App /> }, // <our-domain/>,
  { path: '/create-post', element: <NewPost /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
