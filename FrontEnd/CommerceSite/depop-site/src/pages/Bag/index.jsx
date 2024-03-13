import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useUserContext } from "../../supports/context/useUserContext"
import Loading from "../../components/cores/Loading";

export default function Bag(){
  const [ bagItem, setBagItem ] = useState(null);
  const getBag = async() => {
    try {
      let dataUser = localStorage.getItem('dataUser')
      dataUser = JSON.parse(dataUser)
      console.log(dataUser)
      const res = await axios.get(`http://localhost:5000/carts?userId=${dataUser.id}`)
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
    <div>
      {bagItem.map((x,i) => {
        return(
          <div key={i}>
            {x.quantity}
          </div>
        )
      })}
    </div>
  )
}