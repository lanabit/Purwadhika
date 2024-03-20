import { IoIosArrowDown } from "react-icons/io";

export default function Footer(){
  return(
    <>
    <div className="bg-base-200 overflow-hidden">
    <footer className="footer py-8 text-base-content mx-auto justify-between hidden md:flex md:px-4 lg:max-w-[80vw] lg:px-10">
      <nav className="flex flex-col gap-3">
        <h6 className="font-bold text-black uppercase mb-5">Depop</h6> 
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">News</a>
        <a className="link link-hover">Impact</a>
      </nav> 
      <nav className="flex flex-col gap-3">
        <h6 className="font-bold text-black uppercase mb-5">Sell</h6> 
        <a className="link link-hover">Sell on Depop</a>
        <a className="link link-hover">Depop Amplified</a>
      </nav> 
      <nav className="flex flex-col gap-3">
        <h6 className="font-bold text-black uppercase mb-5">Help</h6> 
        <a className="link link-hover">Help Centre</a>
        <a className="link link-hover">Safety Centre</a>
      </nav> 
      <nav className="flex flex-col justify-between">
        <div className="my-[100%] py-2"></div>
        <div>
        <div className="grid grid-flow-col gap-4">
        <a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
        </svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
        </svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
        </svg></a>
        </div>
        </div>
      </nav>
    </footer>
    <div className="flex flex-col">
    <div className="join join-vertical w-full block md:hidden">
      <div className="collapse collapse-arrow join-item">
        <input type="radio" name="my-accordion-4" defaultChecked /> 
        <div className="collapse-title font-bold uppercase">
          Depop
        </div>
        <div className="collapse-content"> 
          <div className="flex flex-col gap-6 pl-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">News</a>
          <a className="link link-hover">Impact</a>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item">
        <input type="radio" name="my-accordion-4" /> 
        <div className="collapse-title font-bold uppercase">
          Sell
        </div>
        <div className="collapse-content">
          <div className="flex flex-col gap-6 pl-4">
            <a className="link link-hover">Sell on Depop</a>
            <a className="link link-hover">Depop Amplified</a>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item">
        <input type="radio" name="my-accordion-4" /> 
        <div className="collapse-title font-bold uppercase">
          Help
        </div>
        <div className="collapse-content"> 
          <div className="flex flex-col gap-6 pl-4">
            <a className="link link-hover">Help Centre</a>
            <a className="link link-hover">Safety Centre</a>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-3 w-[30vw] mx-auto my-8 md:hidden">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
        </svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
        </svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
        </svg></a>
    </div>
    </div>
    </div>
    <div className="bg-neutral-300">
    <footer className="footer py-5 flex-col md:px-3 md:max-w-[100vw] bg-neutral-300 text-black flex md:flex-row items-center justify-between lg:px-5 lg:max-w-[80vw] mx-auto">
      <aside className="flex flex-col w-[100%] flex-col md:flex-row">
        <div className="dropdown dropdown-top w-full md:w-fit">
          <div tabIndex={0} role="button " className="btn btn-ghost hover:bg-transparent flex justify-between md:hover:bg-white w-full md:w-35 md:m-1">United States <IoIosArrowDown/></div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-lg w-full md:w-36">
            <li><a>Australia</a></li>
            <li><a>Canada</a></li>
            <li><a>France</a></li>
            <li><a>Germany</a></li>
            <li><a>Ireland</a></li>
            <li><a>Italy</a></li>
            <li><a>New Zealand</a></li>
            <li><a>United Kingdom</a></li>
            <li><a>United States</a></li>
          </ul>
        </div>
        <div className="dropdown dropdown-top w-full md:w-fit">
          <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-transparent flex justify-between w-full md:bg-white md:hover:bg-white md:m-1 md:w-30">English<IoIosArrowDown /></div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-lg w-full md:w-30">
            <li><a>English</a></li>
            <li><a>Français</a></li>
            <li><a>Deutsch</a></li>
            <li><a>Italiano</a></li>
          </ul>
        </div>
      </aside> 
      <nav className="gap-6 text-nowrap hidden md:flex">
        <a className="link link-hover">Sitemaps</a>
        <a className="link link-hover">Terms and Conditions</a>
        <a className="link link-hover">Privacy</a>
        <a className="link link-hover">Cookies</a>
      </nav>
    </footer>
    </div>
    </>
  )
}