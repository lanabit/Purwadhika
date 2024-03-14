import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";
import axios from "axios";
import Loading from "../../components/cores/Loading";
import { data } from "autoprefixer";
import { useContext } from "react";
import { useUserContext } from "../../supports/context/useUserContext";
import { toast } from "react-toastify";
import { useBagContext } from "../../supports/context/useBagContext";

export default function ProductDetailPage(){
  const params = useParams()
  const [ product, setProduct ] = useState(null)
  const [ size, setSize ] = useState(null)
  const [ quantity, setQuantity ] = useState(null)
  const {userData} = useContext(useUserContext);
  const navigate = useNavigate()
  const {setBagTotal} = useContext(useBagContext);

  const getId = async() => {
    try {
      const res = await axios.get(`http://localhost:5000/products/${params.id}`)
      console.log(res.data)
      const res2 = await axios.get(`http://localhost:5000/products/${params.id}`)

      let b
      const a = res2.data.sizes
      console.log("a",a)
      Object.keys(a).forEach(key => {
        const val = a[key]
        console.log("val",val)
        if(val.size === size) b = val.stock
      })

      setProduct(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const addToBagHandler = async() => {
    try {
      let dataUser = localStorage.getItem('dataUser')
      dataUser = JSON.parse(dataUser)
      if (!dataUser) { throw new Error ('Sign up or Log in!')}
      if(size === null) throw new Error('Select Size First!')
      const res = await axios.get(`http://localhost:5000/carts?userId=${dataUser.id}&productId=${product.id}`)
      let b
      const res2 = await axios.get(`http://localhost:5000/products/${params.id}`)
      const a = res2.data.sizes
      Object.keys(a).forEach(key => {
        const val = a[key]
        console.log("val",val)
        if(val.size === size) b = val.stock
      })
      if (res.data[0]) {
        let cartId = res.data[0].id
        let prevQuantity = { "quantity": res.data[0].quantity + quantity }

        if (res.data[0].quantity + quantity > size.stock) return toast.error(`${res.data[0].quantity} in bag. Maximum stock reached`)

        await axios.patch(`http://localhost:5000/carts/${cartId}`, prevQuantity)
      } else {
        await axios.post('http://localhost:5000/carts', {
        userId: userData.id,
        productId: product.id,
        size: size.size,
        quantity: quantity
      })
      }
      let bagUpdater = await axios.get(`http://localhost:5000/carts?userId=${dataUser.id}`)
      setBagTotal({total: bagUpdater.data.length})
      toast.success('Added to Bag')
    } catch (error) {
      toast.error(error.message)
    } finally {
      //setBagTotal({total: res.data.length})
    }
  }

  const stockHandler = async() => {
    try {
      
    } catch (error) {
      console.log(error)
    }
  }

  const dataSetting = (a) => {
      setSize(a)
      setQuantity(1)
  }

  useEffect(() => {
    getId()
  },[])
  
  if(product === null) return <div><Loading/></div>
  return(
    <div className="flex flex-row m-8 gap-8 justify-center">
      <div className="relative">
        <div className="absolute right-8">
          <IoMdHeartEmpty className="text-5xl bg-white p-2 m-3 rounded rounded-full shadow-lg"></IoMdHeartEmpty>
          <IoBookmarkOutline className="text-5xl bg-white p-2 m-3 rounded rounded-full shadow-lg"></IoBookmarkOutline>
        </div>
        
        <img className="w-[500px]" src={product.imageURL[0]}></img>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl">{product.title}</h1>
        <h1 className="font-bold">{product.price.toLocaleString("us-US", { style: "currency", currency: "USD" })}</h1>
        <p>{size === null ? null : <>Stock: {size.stock}</>}</p>
        <div className="flex flex-col gap-1">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn w-full">{size?.size ? size?.size : 'Sizes'}</div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full">
                {product?.sizes?.map((x,i) => {
                  return(
                    <li onClick={()=>dataSetting(x)} className="hover:bg-gray-100 hover:rounded-lg hover:cursor-pointer px-2 py-2">{x.size}</li>
                  )
                })}
              </ul>
            </div>
          <button className="btn bg-black text-white">Buy now</button>
          <button className="btn border-2 border-black" onClick={addToBagHandler}>Add to bag</button>
          <div className="py-2 rounded-lg text-center flex gap-1 justify-between items-center w-full">
            <button onClick={() => setQuantity(quantity-1)} disabled={quantity == 1 ? true : false} className="btn w-[25%]">-</button>
            <div className="border-2 border-gray-200 w-full py-[10px] rounded-lg">{quantity}</div>
            <button onClick={() => setQuantity(quantity+1)} disabled={quantity == size?.stock ? true : false} className="btn w-[25%]">+</button>
          </div>
        </div>
        <p>{product.description}</p>
        <div className="flex items-center gap-2">
          <div className="w-[15px] h-[15px] rounded rounded-full bg-neutral-400"></div>
          <div>{product.colors}</div>
        </div>
      </div>
    </div>
  )
}