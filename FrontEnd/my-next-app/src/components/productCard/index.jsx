import { IoMdHeartEmpty } from "react-icons/io";

export default function ProductCards({image, price, brand, size}){
  return(
    <div className="flex flex-col justify-center">
      <div className="relative">
        <img className="h-60 w-60 object-cover" src={image}></img>
        <IoMdHeartEmpty color='white' size={30} className="absolute bottom-2 right-2"></IoMdHeartEmpty>
      </div>
      <div className="">
        <div className="font-bold text-large">${price}</div>
        <div>{size}</div>
        <div>{brand}</div>
      </div>
    </div>
  )
}