'use client'
import { useProductMutation } from "~/supports/api/useAuthMutation/useProductMutation"

export default function Products() {
  const { handleGetProduct } = useProductMutation()
  handleGetProduct()
  //console.log(a)
  return(
    <div className="flex">
      banyak sekali product ya
      Ini product bds kan data products yang di post sama superadmin
      datanya ada 
      productId, name, price, picture, desc, categoryId
    </div>
  )
}