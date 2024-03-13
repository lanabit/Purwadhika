import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home/index.jsx';
import LoginPage from './pages/login/index.jsx';
import Tailwind from './pages/tailwind/index.jsx';

const myRouter = createBrowserRouter([{
  element: <App />,
  children: [
    {
      path: '/',
      element: (
      <>
      <HomePage />
      </>
      )
    },
    {
      path: '/login',
      element: 
      <>
      <LoginPage />
      </>
    },
    {
      path: '/tailwind',
      element: 
      <>
      <Tailwind></Tailwind>
      </>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {myRouter} />
  </React.StrictMode>,
)
