import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useUserContext } from "../../../supports/context/useUserContext";
import { useBagContext } from "../../../supports/context/useBagContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function menu() {
  <div className="w-[100vw] bg-pink-200">
    <h2>Contoh aja</h2>
    <a>Contoh</a>
  </div>
}

export default function Navbar() {
  const navigate = useNavigate()
  let loc = useLocation();
  const {setUserData, userData} = useContext(useUserContext);
  const {setBagTotal, bagTotal} = useContext(useBagContext);
  const handleKeepLogin = async() => {
    try {
      let dataUser = localStorage.getItem('dataUser')
      dataUser = JSON.parse(dataUser)

      const res = await axios.get(`http://localhost:5000/users/${dataUser.id}`)
      const resTotal = await axios.get(`http://localhost:5000/carts?userId=${dataUser.id}`)
      
      setBagTotal({id: res.data.id, total: resTotal.data.length})
      setUserData({id: res.data.id, username: res.data.username})
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogout = () =>{
    localStorage.removeItem('dataUser')
    setUserData(null)
    setBagTotal(null)
    navigate('/')
    window.location.reload()
  }

  useEffect(()=>{
    handleKeepLogin()
  },[])

  return (
    <>
      <div className="flex flex-row justify-between items-center py-4 border border-b md:justify-around bg-white">
        <div className="block ml-16 md:hidden">
          <RxHamburgerMenu></RxHamburgerMenu>
        </div>
        <Link to="/">
          <div className="mx-16">
            <img width="100px" height="70px" src="/Depop_logo.svg"></img>
          </div>
        </Link>
        <div className="w-[50%] hidden md:block">
          <label class="input w-[60%] input-bordered flex items-center gap-2 rounded-full ml-8 lg:w-[70%]">
            <input type="text" class="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4 opacity-70"
            >
              <path
                fill-rule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="flex w-[20%] flex-row justify-end mx-4">
          <div className="px-1">
            <IoIosSearch className="h-full text-2xl hover:cursor-pointer hover:text-neutral-500 block md:hidden"></IoIosSearch>
          </div>
          <div className="px-1">
            <IoMdHeartEmpty className="h-full text-2xl hover:cursor-pointer hover:text-neutral-500"></IoMdHeartEmpty>
          </div>
          <div className="px-1 relative">
            <Link to='/shopping-bag'>
            {(bagTotal !== null) ? <div className="absolute h-4 w-4 text-center bg-red-500 top-1 right-2 text-white font-medium right-0 px-1 rounded rounded-full text-xs">{bagTotal.total}</div>: null}
            <IoBagOutline className="h-full mx-2 text-2xl hover:cursor-pointer hover:text-neutral-500" />
            </Link>
          </div>
          <div>
            <button class="btn text-nowrap bg-black text-white hover:bg-neutral-500 hidden lg:block">
              Sell now
            </button>
          </div>
          {
            userData !== null?
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="my-auto px-3 font-medium hover:cursor-pointer hover:text-neutral-500">
                {userData.username}
              </div>
              <ul tabIndex={0} className="dropdown-content z-50 menu p-2 shadow bg-white rounded-box w-40">
                <li className="py-3 px-2 hover:cursor-pointer hover:bg-neutral-200 rounded rounded-lg">Profile</li>
                <li className="py-3 px-2 hover:cursor-pointer hover:bg-neutral-200 rounded rounded-lg">Setting</li>
                <li onClick={handleLogout} className="py-3 px-2 border-t hover:cursor-pointer hover:bg-black hover:text-white hover:font-medium rounded rounded-lg">Log out</li>
              </ul>
            </div> 
            : 
            <>
            <div>
            <Link to="/signup">
              <button class="btn mx-2 bg-black text-white text-nowrap hover:bg-neutral-500 lg:btn-ghost lg:hover:bg-neutral-200 lg:border-black lg:border-2 lg:hover:border-black lg:hover:border-2">
                Sign up
              </button>
            </Link>
            </div>
            <div>
              <Link to="/login">
                <button class="btn btn-ghost mx-[-16px] text-nowrap hover:bg-transparent hover:text-neutral-400 hidden md:block">
                  Log in
                </button>
              </Link>
            </div>
            </>
          }
        </div>
      </div>
      <div className={`flex flex-row items-center border-b pl-12 bg-white static relative w-screen z-20 ${loc.pathname === '/login'? 'hidden' : 'block'}`}>
        <div className="group bg-white">
        <button class="btn btn-ghost text-nowrap rounded hover:text-neutral-50 hover:bg-black text-lg">
          Menswear
        </button>
        <div className="hidden group-hover:flex bg-white absolute ml-[-48px] w-full border-t justify-between">
          <div className="flex flex-col ml-8 w-[55%] lg:w-[40%]">
            <div className="w-[50%]">
              <h1 className="font-bold text-md my-4 pl-6">Shop by Category</h1>
              <div className="flex flex-col flex-wrap h-[340px] hover:cursor-pointer">
                <a className="hover:bg-base-200 py-4 w-full pl-6">Tops</a>
                <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
                <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
                <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
                <a className="hover:bg-base-200 py-4 w-full pl-6">Tops</a>
                <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
                <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
                <a className="hover:bg-base-200 py-6 w-full pl-6">Bottoms</a>
              </div>
            </div>
            <a className="font-bold text-md py-4 pl-6 hover:cursor-pointer hover:bg-base-200 w-full mb-3">
              See all mens wear
            </a>
          </div>
          <div className="flex flex-col w-[45%] lg:w-[20%] mr-8">
            <h1 className="font-bold text-md my-4 w-full pl-6">Featured</h1>
            <div className="contents hover:cursor-pointer">
            <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
            <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
            <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
            <a className="hover:bg-base-200 py-4 w-full pl-6">Tops</a>
            <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
            </div>
          </div>
          <div className="lg:flex mr-16 gap-8 mt-8 hidden">
            <div><img src="/pants-men.jpg" className="w-[300px] h-[380px] object-cover rounded rounded-md hover:cursor-pointer"></img></div>
            <div><img src="/shoes-gray.jpg" className="w-[300px] h-[380px] object-cover rounded rounded-md hover:cursor-pointer"></img></div>
          </div>
        </div>
        </div>
        <div className="group z-0">
        <button class="btn btn-ghost text-nowrap rounded hover:text-neutral-50 hover:bg-black text-lg">
          Womenswear
        </button>
        <div className="hidden group-hover:flex bg-white absolute ml-[-166px] w-full border-t justify-between">
          <div className="flex flex-col ml-8 w-[55%] lg:w-[40%]">
            <div className="w-[50%]">
              <h1 className="font-bold text-md my-4 pl-6">Shop by Category</h1>
              <div className="flex flex-col flex-wrap h-[340px] hover:cursor-pointer">
                <a className="hover:bg-base-200 py-4 w-full pl-6">Tops</a>
                <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
                <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
                <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
                <a className="hover:bg-base-200 py-4 w-full pl-6">Tops</a>
                <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
                <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
                <a className="hover:bg-base-200 py-6 w-full pl-6">Bottoms</a>
              </div>
            </div>
            <a className="font-bold text-md py-4 pl-6 hover:cursor-pointer hover:bg-base-200 w-full mb-3">
              See all womenswear
            </a>
          </div>
          <div className="flex flex-col w-[45%] lg:w-[20%] mr-8">
            <h1 className="font-bold text-md my-4 w-full pl-6">Featured</h1>
            <div className="contents hover:cursor-pointer">
            <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
            <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
            <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
            <a className="hover:bg-base-200 py-4 w-full pl-6">Tops</a>
            <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
            </div>
          </div>
          <div className="lg:flex mr-16 gap-8 mt-8 hidden">
            <div><img src="/womens_balletflats.jpg" className="w-[300px] h-[380px] object-cover rounded rounded-md hover:cursor-pointer"></img></div>
            <div><img src="/womens_bag2.jpg" className="w-[300px] h-[380px] object-cover rounded rounded-md hover:cursor-pointer"></img></div>
          </div>
        </div>
        </div>
        <div className="group">
          <button class="btn btn-ghost text-nowrap rounded hover:text-neutral-50 hover:bg-black text-lg">
            Brands
          </button>
          <div className="hidden group-hover:flex bg-white absolute ml-[-311px] w-full border-t justify-between">
            <div className="flex flex-col ml-8 w-[55%] lg:w-[60%]">
              <div className="flex flex-col max-w-[33.3%]">
                <h1 className="font-bold text-md my-4 pl-6">Shop by Category</h1>
                <div className="flex flex-col flex-wrap h-[340px] hover:cursor-pointer">
                  <a className="hover:bg-base-200 py-4 w-full pl-6">Tops</a>
                  <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
                  <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
                  <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
                  <a className="hover:bg-base-200 py-4 w-full pl-6">Tops</a>
                  <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
                  <a className="hover:bg-base-200 py-4 w-full pl-6">Tops</a>
                  <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
                  <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
                  <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
                  <a className="hover:bg-base-200 py-4 w-full pl-6">Tops</a>
                  <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
                  <a className="hover:bg-base-200 py-4 w-full pl-6">Tops</a>
                  <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
                  <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
                  <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
                  <a className="hover:bg-base-200 py-4 w-full pl-6">Tops</a>
                  <a className="hover:bg-base-200 py-4 w-full pl-6">Bottoms</a>
                </div>
              </div>
              <a className="font-bold text-md py-4 pl-6 hover:cursor-pointer hover:bg-base-200 w-full mb-3">
                See all brands
              </a>
            </div>
            <div className="lg:flex mr-16 gap-8 mt-8 hidden">
              <div><img src="/levis.jpg" className="w-[300px] h-[380px] object-cover rounded rounded-md hover:cursor-pointer"></img></div>
              <div><img src="/carhartt.jpg" className="w-[300px] h-[380px] object-cover rounded rounded-md hover:cursor-pointer"></img></div>
            </div>
          </div>
        </div>
        <button class="btn btn-ghost text-nowrap rounded hover:text-neutral-50 hover:bg-red-500 text-lg text-red-500">
          Sale
        </button>
      </div>
    </>
  );
}
