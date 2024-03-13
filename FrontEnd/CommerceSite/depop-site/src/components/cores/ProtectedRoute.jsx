import { useLocation, useNavigate } from "react-router-dom";

export default function ProtectedRoute({children}) {
  const navigate = useNavigate()
  const location = useLocation()

  let dataUser = localStorage.getItem('dataUser')
  dataUser = JSON.parse(dataUser)
  if(dataUser.id && (location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/register')) return navigate('/') 
  return(
    <>
    {children}
    </>
  )
}