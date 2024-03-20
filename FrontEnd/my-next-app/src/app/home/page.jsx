export default function HomePage(){
  return(
    <div className="px-5 flex flex-col items-center mx-auto w-[80%] gap-8">
      <div className="w-full">
        <h1 className="tex t-2xl font-bold">You might be into</h1>
        <div className="flex flex-wrap gap-2">
          <button className="btn border-2 border-neutral-700 hover:border-neutral-700">Adidas Originals trainers</button>
          <button className="btn border-2 border-neutral-700 hover:border-neutral-700">Patagonia shorts</button>
          <button className="btn border-2 border-neutral-700 hover:border-neutral-700">PacSun shorts</button>
          <button className="btn border-2 border-neutral-700 hover:border-neutral-700">Adidas outerwear</button>
          <button className="btn border-2 border-neutral-700 hover:border-neutral-700">Adidas sneakers</button>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-2xl font-bold">Popular this week</h1>
        <div>
          Slides
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-2xl font-bold">Shop by price</h1>
        <div className="flex flex-wrap gap-8">
          <button className="p-10 px-24 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white rounded-md">Under <span className="font-bold">$10</span></button>
          <button className="p-10 px-24 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white rounded-md">Under <span className="font-bold">$20</span></button>
          <button className="p-10 px-24 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white rounded-md">Under <span className="font-bold">$50</span></button>
          <button className="p-10 px-24 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white rounded-md">Under <span className="font-bold">$100</span></button>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-2xl font-bold">Shop by style</h1>
        <div className="grid grid-cols-3 gap-4">
        <a className="flex flex-col items-center relative" href="http://localhost:5173/products">
          <div className="w-full h-[230px] absolute hover:bg-black hover:opacity-20"></div>
          <img src="/green-shoes.jpg" className="w-full h-[230px] object-cover rounded-md"></img>
          <div className="text-xl font-bold my-2">Streetwear</div>
        </a>
        <a className="flex flex-col items-center relative" href="http://localhost:5173/products">
          <div className="w-full h-[230px] absolute hover:bg-black hover:opacity-20"></div>
          <img src="/green-shoes.jpg" className="w-full h-[230px] object-cover rounded-md"></img>
          <div className="text-xl font-bold my-2">Streetwear</div>
        </a>
        <a className="flex flex-col items-center relative" href="http://localhost:5173/products">
          <div className="w-full h-[230px] absolute hover:bg-black hover:opacity-20"></div>
          <img src="/green-shoes.jpg" className="w-full h-[230px] object-cover rounded-md"></img>
          <div className="text-xl font-bold my-2">Streetwear</div>
        </a>
        <a className="flex flex-col items-center relative" href="http://localhost:5173/products">
          <div className="w-full h-[230px] absolute hover:bg-black hover:opacity-20"></div>
          <img src="/green-shoes.jpg" className="w-full h-[230px] object-cover rounded-md"></img>
          <div className="text-xl font-bold my-2">Streetwear</div>
        </a>
        <a className="flex flex-col items-center relative" href="http://localhost:5173/products">
          <div className="w-full h-[230px] absolute hover:bg-black hover:opacity-20"></div>
          <img src="/green-shoes.jpg" className="w-full h-[230px] object-cover rounded-md"></img>
          <div className="text-xl font-bold my-2">Streetwear</div>
        </a>
        <a className="flex flex-col items-center relative" href="http://localhost:5173/products">
          <div className="w-full h-[230px] absolute hover:bg-black hover:opacity-20"></div>
          <img src="/green-shoes.jpg" className="w-full h-[230px] object-cover rounded-md"></img>
          <div className="text-xl font-bold my-2">Streetwear</div>
        </a>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-2xl font-bold">The Depop Edit</h1>
        <p>Items we love, updated daily</p>
        <div class="grid grid-rows-2 grid-flow-col gap-4 mt-3 mb-16">
          <a className="relative hover:cursor-pointer">
            <div className="flex flex-col w-[250px] h-[250px] absolute bg-transparent bg-gradient-to-t hover:from-black hover:opacity-50">
              <div className=" w-[250px] h-[250px] font-bold p-4 text-transparent hover:text-white pt-52 whitespace-pre-line">XXL
              $30.00</div>
            </div>
            <img src="https://media-photos.depop.com/b1/46559790/1784446387_09fac18f1d814a3ab8240b3c2a7055d2/P0.jpg" className="w-[250px] h-[250px] rounded-md object-cover"></img>
          </a>
          <a className="">
            <img src="https://media-photos.depop.com/b1/46559790/1784446387_09fac18f1d814a3ab8240b3c2a7055d2/P0.jpg" className="w-[250px] h-[250px] rounded-md object-cover"></img>
          </a>
          <a className="">
            <img src="https://media-photos.depop.com/b1/46559790/1784446387_09fac18f1d814a3ab8240b3c2a7055d2/P0.jpg" className="w-[250px] h-[250px] rounded-md object-cover"></img>
          </a>
          <a className="">
            <img src="https://media-photos.depop.com/b1/46559790/1784446387_09fac18f1d814a3ab8240b3c2a7055d2/P0.jpg" className="w-[250px] h-[250px] rounded-md object-cover"></img>
          </a>
          <a>
            <img src="https://media-photos.depop.com/b1/46559790/1784446387_09fac18f1d814a3ab8240b3c2a7055d2/P0.jpg" className="w-[250px] h-[250px] rounded-md object-cover"></img>
          </a>
          <a>
            <img src="https://media-photos.depop.com/b1/46559790/1784446387_09fac18f1d814a3ab8240b3c2a7055d2/P0.jpg" className="w-[250px] h-[250px] rounded-md object-cover"></img>
          </a>
          <a className=" row-span-2">
            <img src="https://media-photos.depop.com/b1/46559790/1784446387_09fac18f1d814a3ab8240b3c2a7055d2/P0.jpg" className="w-[516px] h-[516px] rounded-md object-cover"></img>
          </a>
        </div>
      </div>
    </div>
  )
}