import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/cores/Navbar';
import Footer from './components/cores/Footer';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <div style = {{minHeight: '80vh'}}><Outlet></Outlet></div>
      <Footer></Footer>
    </>
  )
}

export default App
