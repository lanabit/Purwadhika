'use client'
import Link from "next/link"
import { useContext, useEffect } from "react"
import { useUserContext } from "~/supports/context/useUserContext"
import { useZustandStores } from "~/zustand-stores"

export default function Navbar() {
  //const {setUserData, userData} = useContext(useUserContext)

  const { users } = useZustandStores()

  return(
    <div className="h-[100vh] bg-neutral-200 flex flex-col p-8">
      {users !== null ? 
      <Link href={"/dashboard"}>
      <div className="text-center font-medium mb-3">
        {users.username}
      </div>
      </Link>
      :
      <div>No username</div>
      }
      <div></div>
      <div className={`dropdown dropdown-bottom ${users.type === "superadmin" ? "block" : "hidden"}`}>
        <div tabIndex={0} role="button" className="btn m-1">Create New</div>
        <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link href={"/dashboard/create-new-product"}>New Product</Link></li>
          <li><Link href={"/dashboard/create-new-user"}>New User</Link></li>
        </div>
      </div>
      <Link className="btn m-1" href={"/dashboard/products"}>Products</Link>
      <Link className="btn m-1" href={"/carts"}>Carts</Link>
    </div>
  )
}