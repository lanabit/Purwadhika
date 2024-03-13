import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerSchema } from '../../supports/schema/registerSchema';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useContext } from "react";
import { useUserContext } from "../../supports/context/useUserContext";
import { useNavigate  } from "react-router-dom";

export default function Register(){
  const [ isLoading , setLoading ] = useState(false)
  const {setUserData} = useContext(useUserContext);
  const navigate = useNavigate()
  const handleRegister = async(values,reset) => {
    try{
      setLoading(true)
      const findEmail = await axios.get(`http://localhost:5000/users?email=${values.email}`)
      if(findEmail.data.length > 0) throw new Error("Email already registered")
      const res = await axios.post("http://localhost:5000/users", values)
      console.log("res:",res)
      console.log("values:",values)
      toast.success('Register Successful!')
      setUserData(values.username);
      reset()
      navigate('/')
    }catch(err){
      toast.error(err.message ? err.message : "Register failed! Please try again")
      console.log(err)
    }finally {
      setLoading(false)
    }
  }

  return(
    <div className='flex flex-col items-center my-8'>
      <h1 className='font-bold m-8'>Sign up</h1>
      <Formik
        initialValues={{
          firstName:'',
          lastName:'',
          email:'',
          username:'',
          password:''
        }}
        validationSchema={registerSchema}
        onSubmit={async(values, {resetForm})=>{
          handleRegister(values,resetForm);
        }}
        >
        {
          ({dirty, isValid}) => {
            return(
              <Form>
                <label className="form-control flex flex-row gap-4 pb-6">
                  <div>
                    <div>
                      <span className="label-text">Firstname</span>
                    </div>
                    <Field type="text" name='firstName' placeholder="Type here" className="input input-bordered" />
                    <ErrorMessage name='firstName' component={'div'} className='text-red-500 label-text'></ErrorMessage>
                  </div>
                  <div>
                    <div>
                      <span className="label-text">Lastname</span>
                    </div>
                    <Field type="text" name='lastName' placeholder="Type here" className="input input-bordered" />
                    <ErrorMessage name='lastName' component={'div'} className='text-red-500 label-text'></ErrorMessage>
                  </div>
                  </label>

                <label className="form-control pb-6">
                  <div>
                    <span className="label-text">Email</span>
                  </div>
                  <Field type="text" name='email' placeholder="Type here" className="input input-bordered" />
                  <ErrorMessage name='email' component={'div'} className='text-red-500 label-text'></ErrorMessage>
                </label>

                <label className="form-control pb-6">
                  <div>
                    <span className="label-text">Username</span>
                  </div>
                  <Field type="text" name='username' placeholder="Type here" className="input input-bordered" />
                  <ErrorMessage name='username' component={'div'} className='text-red-500 label-text'></ErrorMessage>
                </label>

                <label className="form-control pb-6">
                  <div>
                    <span className="label-text">Password</span>
                  </div>
                  <Field type="text" name='password' placeholder="Type here" className="input input-bordered" />
                  <ErrorMessage name='password' component={'div'} className='text-red-500 label-text'></ErrorMessage>
                </label>
                <button disabled={!(dirty && isValid) || isLoading} type="submit" className='btn bg-black text-white my-4 w-full mx-auto'>Submit</button>
              </Form>
            )
          }
        }  
        
      </Formik>
    </div>
  )
}