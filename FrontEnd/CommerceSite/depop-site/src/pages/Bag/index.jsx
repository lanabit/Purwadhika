import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useUserContext } from "../../supports/context/useUserContext"
import Loading from "../../components/cores/Loading";
import { IoTrash } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

export default function Bag(){
  const [ bagItem, setBagItem ] = useState(null);
  const getBag = async() => {
    try {
      let dataUser = localStorage.getItem('dataUser')
      dataUser = JSON.parse(dataUser)
      console.log(dataUser)
      const res = await axios.get(`http://localhost:5000/carts?userId=${dataUser.id}&_embed=product`)
      console.log(res.data)
      setBagItem(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() =>{
    getBag()
  },[])

  if(bagItem === null) return <Loading></Loading>
  return(
    <div className="max-w-[70vw] mx-auto">
      {bagItem.map((x,i) => {
        return(
          <div key={i} className="flex py-4 justify-between items-end">
            <div className="flex flex-row">
              <img src={x.product.imageURL[0]} className="w-[120px] h-[120px] object-cover mx-2 rounded rounded-lg"/>
              <div className="flex flex-col">
                <p className="text-lg font-medium">{x.product.title}</p>
                <p className="text-sm">Size: {x.size}</p>
                <p className="text-sm">Qty: {x.quantity}</p>
              </div>
            </div>
            <div className="flex gap-2 p-2">
            <IoMdHeartEmpty className="text-2xl "></IoMdHeartEmpty>
            <IoTrash className="text-2xl"></IoTrash>
            </div>
          </div>
        )
      })}
    </div>
  )
}