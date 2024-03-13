import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/index';
import Login from './pages/login/index';
import Scratch from './pages/scratch/index.jsx';
import Post from './pages/post/index.jsx';
import Memoit from './pages/memo/index.jsx';
import Context from './pages/useContext/index.jsx';
import UseCallbackComponent from './pages/useCallback/index.jsx';
const route = createBrowserRouter([{
  element: <App />, 
  errorElement: <h1>Error cuy</h1>,
  children: [{
    path: '/', 
    element: <Home />
  },
  {
    path: '/login', 
    element: <Login />
  },
  {
    path: '/scratch', 
    element: <Scratch />
  },
  {
    path: '/post', 
    element: <Post />
  },
  {
    path: '/memo', 
    element: <Memoit />
  },
  {
    path: '/context', 
    element: <><Context /></>
  }]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={route} />
  </>,
)