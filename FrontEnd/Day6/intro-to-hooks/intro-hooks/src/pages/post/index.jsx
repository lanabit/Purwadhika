import axios from "axios"
import React, { useEffect, useState } from "react"

export default function Post() {
  const [data, setData] = useState(null)
  const onFetchData = async() => {
    try {
      const res = await axios.get('./../../db/db.json')
      console.log(res.data)
      setData(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    onFetchData();
  },[])
  
  if(data === null) return <h1>Loading...</h1>
  return(
    <div style={{padding: "32px"}}>
      <h1>Post</h1>
      {data.users.map((item,index)=>{
        return <div key={index}>{item.username}<br />pass: {item.password}</div>
      })}
    </div>
  )
}