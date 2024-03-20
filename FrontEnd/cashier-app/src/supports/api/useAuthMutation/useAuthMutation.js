import { useMutation } from "@tanstack/react-query"
import axios from "axios"

export const useAuthMutation = ({onSuccess, onError}) => {
  const {mutate, status} = useMutation({
    mutationFn: async({username, password}) => {
    let res = await axios.get(`http://localhost:5000/users?_embed=type&username=${username}&password=${password}`)
    if (res.data.length === 0) throw new Error('Login Failed')

    return res.data
  }, 
  onSuccess,
  onError
  })
  return {
    mutate, status
  }
}