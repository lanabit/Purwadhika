'use client'
import { Form, Formik, Field, ErrorMessage } from "formik";
import { loginSchema } from "~/supports/schema/schema";
import { redirect, useRouter } from "next/navigation";
import { useAuthMutation } from "~/supports/api/useAuthMutation/useAuthMutation";
import { useZustandStores } from "~/zustand-stores";

export default function Home() {
  const router = useRouter()

  const { users, createUsers } = useZustandStores()
  console.log(users)

  const handleAuthMutationError = (err) => {
    alert(err.message)
  }

  const handleAuthMutationSuccess = (data) => {
    createUsers({id: data[0].id, username: data[0].username, type: data[0].type.name})
    alert('SUCCESS :D')
    router.push('/dashboard')
  }

  const {mutate, status} = useAuthMutation({
    onSuccess: handleAuthMutationSuccess,
    onError: handleAuthMutationError
  })

  return (
    <>
    <Formik
      initialValues={{
        username:'',
        password:''
      }}
      validationSchema={loginSchema}
      onSubmit=
      {(values) => {
        const {username, password} = values
        mutate({username, password})
      }}
    >
    {
    ({dirty,isValid})=> {
        return(
      <Form>
      <div className="py-24 flex flex-col items-center mx-auto">
        <div className="flex flex-col min-w-[30%]">
          <span className="label-text py-2">Username</span>
          <label className="input input-bordered flex items-center gap-2">
            <Field type="text" name='username' placeholder="Enter username" />
          </label>
          <ErrorMessage name='username' component={'div'} className='text-red-500 label-text'></ErrorMessage>
          <span className="label-text py-2">Password</span>
          <label className="input input-bordered flex items-center gap-2">
            <Field type="password" name='password' placeholder="Enter password" />
          </label>
          <ErrorMessage name='password' component={'div'} className='text-red-500 label-text'></ErrorMessage>
          <a className="hover:cursor-pointer flex justify-end py-1">Forgot password?</a>
          <div className="py-4">
          <button disabled={!(dirty && isValid)/* || isLoading */} type="submit" className="btn w-full bg-black text-white hover:bg-neutral-500">Log in</button>
          </div>
        </div>
      </div>
      </Form>
    )
    }}
    </Formik>
    </>
  );
}
