'use client'
import axios from "axios"
import { useEffect, useState } from "react"

export const useProductMutation = () => {
    const [isLoading, setIsLoading] = useState(false)

    const [products, setProducts] = useState([])
    const handleCreateProduct = async({name, price, imageURL, desc,categoryId}) => {
        try {
            setIsLoading(true)
            await axios.post('http://localhost:5000/menus',{
                name: name, price: price, imageURL: imageURL, desc: desc, categoryId: categoryId
            })
            alert('Success')
        } catch (error) {
            alert(error)
        }finally{
            setIsLoading(false)
        }
    }

    const handleGetProduct = async() => {
        try {
            let res = await axios.get("http://localhost:5000/menus?_embed=category")
            res = res.data
            setProducts(res)
            console.log(res)
            return res
        } catch (error) {
            alert(error)
        }
    }

    useEffect(()=>{
        handleGetProduct()
    },[])

    return {
        handleCreateProduct,
        products,
        isLoading
    }
}