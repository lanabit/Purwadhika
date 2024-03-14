import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../../supports/schema/registerSchema';
import { useContext } from "react";
import { useUserContext } from "../../supports/context/useUserContext";
import { useNavigate  } from "react-router-dom";
import { useBagContext } from "../../supports/context/useBagContext";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const {setUserData} = useContext(useUserContext)
  const {setBagTotal} = useContext(useBagContext)
  const navigate = useNavigate();
  
  const handleLogin = async(values,reset) => {
    try{
      setIsLoading(true)
      const findUser = (values.email.includes('@')) ? await axios.get(`http://localhost:5000/users?email=${values.email}`) : await axios.get(`http://localhost:5000/users?username=${values.email}`)
      if(findUser.data.length === 0) throw new Error("Email or username is not registered")
      if(findUser.data['0']['password'] !== values.password) throw new Error("Incorrect password!")
      setUserData({id: findUser.data[0].id, username: findUser.data[0].username});
      localStorage.setItem('dataUser',JSON.stringify({id: findUser.data[0].id}))
      const findBag = await axios.get(`http://localhost:5000/carts?userId=${findUser.data[0].id}`)
      setBagTotal(findBag.data.length)
      toast.success('Login Successful!')
      reset()
      navigate("/product-page")
    }catch(err){
      toast.error(err.message ? err.message : "Login Error")
    }finally {
      setIsLoading(false)
    }
  }
  
  return(
    <>
    <Formik
      initialValues={{
        email:'',
        password:''
      }}
      validationSchema={loginSchema}
      onSubmit={(values, {resetForm})=>{
        handleLogin(values,resetForm);
      }}
    >
      {
      ({dirty,isValid})=> {
        return(
      <Form>
    <div className="py-24 flex flex-col items-center mx-auto">
      <div className="flex flex-col min-w-[30%]">
        <img width="70px" height="auto" src="/depop-world.png" className="mx-auto"></img>
        <h1 className="text-2xl font-bold mx-auto py-3">Log in</h1>
        <p className="mx-auto py-3">Don't have an account? <a className="hover:cursor-pointer">Sign up</a></p>
        <div className="py-3">
        <button className="btn w-full"><FcGoogle></FcGoogle>Continue with Google</button>
        </div>
        <button className="btn w-full"><FaApple></FaApple>Continue with Apple ID</button>
      <div className="divider">or</div>
        <span className="label-text py-2">Email or username</span>
        <label class="input input-bordered flex items-center gap-2">
          <Field type="text" name='email' class="grow" placeholder="Enter email" />
        </label>
        <ErrorMessage name='email' component={'div'} className='text-red-500 label-text'></ErrorMessage>
        <span className="label-text py-2">Password</span>
        <label class="input input-bordered flex items-center gap-2">
          <Field type="password" name='password' class="grow" placeholder="Enter password" />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
          </svg>
        </label>
        <ErrorMessage name='password' component={'div'} className='text-red-500 label-text'></ErrorMessage>
        <a className="hover:cursor-pointer flex justify-end py-1">Forgot password?</a>
        <div className="py-4">
        <button disabled={!(dirty && isValid)|| isLoading} type="submit" className="btn w-full bg-black text-white hover:bg-neutral-500">Log in</button>
        </div>
      </div>
    </div>
    </Form>
    )
    }}
    </Formik>
    </>
  )
}