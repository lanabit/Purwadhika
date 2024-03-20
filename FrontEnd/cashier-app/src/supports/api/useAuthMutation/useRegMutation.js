import { useMutation } from "@tanstack/react-query"
import axios from "axios"

export const useRegMutation = ({onSuccess, onError}) => {
  const {mutate, status} = useMutation({
    mutationFn: async({username, password, type}) => {
    let findUser = await axios.get(`http://localhost:5000/users?_embed=type&username=${username}`)
    if (findUser.data.length > 0) throw new Error('Username has existed')

    let res = await axios.post("http://localhost:5000/users", {username: username, password: password, typeId: type})
    console.log('res',res)

    return res.data
  }, 
  onSuccess,
  onError
  })
  return {
    mutate, status
  }
}