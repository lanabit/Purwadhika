import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/cores/Navbar'
import Footer from './components/cores/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useUserContext } from './supports/context/useUserContext'
import ProtectedRoute from './components/cores/ProtectedRoute'
import { useBagContext } from './supports/context/useBagContext'
function App() {
  const [userData, setUserData] = useState(null)
  const [bagTotal, setBagTotal] = useState(null)
  return (
    <useUserContext.Provider value={{userData, setUserData}}>
      <useBagContext.Provider value={{bagTotal, setBagTotal}}>
    <div className='flex flex-col h-screen justify-between'>
    <div className='sticky top-0 z-50'><Navbar></Navbar></div>
    
    <div className="my-auto">
      <ToastContainer></ToastContainer>
      <ProtectedRoute>
        <Outlet></Outlet>
      </ProtectedRoute>
    </div>
    <div className="z-0"><Footer></Footer></div>
    </div>
    </useBagContext.Provider>
    </useUserContext.Provider>
  )
}

export default App
