'use client'
import { IoMdHeartEmpty } from "react-icons/io";
import { useState, useEffect } from "react"
import axios from "axios"
import ProductCards from "~/components/productCard";
import Link from "next/link";

export default function ProductPage() {
  const [ product , setProduct ] = useState([])
  
  const getProduct = async() => {
    try{
      const res = await axios.get(`http://localhost:5000/products`)
      console.log(res.data)
      setProduct(res.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getProduct()
  },[])

  return(
    <>
    <div className="max-w-[752px] lg:max-w-[1008px] mx-auto my-8">
      <div className="my-8">
        <div className="text-2xl font-bold">
          "Streetwear"
        </div>
        <div className="flex flex-row items-center gap-8">
          <div className="font-bold">
          Popular brands
          </div>
          <div className="btn rounded-full border-black">
            Nike
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div>
        <div className="dropdown mb-8">
        <div tabIndex={0} role="button" className="btn m-1 border-black bg-white">Category</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
          <li><a>Mens</a></li>
          <li><a>Womens</a></li>
          <li><a>Other</a></li>
        </ul>
      </div>
      <div className="dropdown mb-8">
        <div tabIndex={0} role="button" className="btn m-1 border-black bg-white">Price</div>
        <div tabIndex={0} className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box">
          <div className="flex items-center gap-6 ">
            <input type="text" placeholder="Minimum" className="input border border-black w-32" />
            -
            <input type="text" placeholder="Maximum" className="input border border-black w-32" />
          </div>
          <button className="btn bg-black text-white w-full mt-4">
              Search
          </button>
        </div>
      </div>
        </div>
        <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1 border-black bg-white">Sort</div>
        <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text mr-16">Relevance</span> 
              <input type="checkbox" defaultChecked className="checkbox" />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">Price: low to high</span> 
              <input type="checkbox" className="checkbox" />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">Price: high to low</span> 
              <input type="checkbox" className="checkbox" />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">Newly Listed</span> 
              <input type="checkbox" className="checkbox" />
            </label>
          </div>
        </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 justify-start mx-auto">
        {product.map((x,i) => {
          return(
            <div key={i}>
              <Link href={`/products/${x.id}`}>
              <ProductCards
                image={x.imageURL[0]}
                price={x.price}
                size={x.sizes[0].size}
                brand={x.brand}
              />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}