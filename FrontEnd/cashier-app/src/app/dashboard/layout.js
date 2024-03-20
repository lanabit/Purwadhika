'use client'
import Navbar from "~/components/navbar";
import { usePathname } from "next/navigation";
import Carts from "../carts/page";
export default function Dashboard({ children }) {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <html lang="en">
      <body>
        <div className="flex">
            <Navbar></Navbar>
            {children}
            {pathname === "/dashboard/products" ? <Carts></Carts> : null}
        </div>
      </body>
    </html>
  );
}