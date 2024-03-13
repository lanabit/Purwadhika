import { Link } from 'react-router-dom';

export default function Navbar(){
  return (
    <>
    <div style = {{display: 'flex', justifyContent: 'space-evenly', width: '100%', height: '30px', backgroundColor: 'pink'}}>
      <Link to ='/'>
      <span>
        Home
      </span>
      </Link>
      <Link to = '/login'>
      <span>
        Login
      </span>
      </Link>
      <Link to = '/tailwind'>
      <span>
        Tailwind
      </span>
      </Link>
    </div>
    </>
  )
}