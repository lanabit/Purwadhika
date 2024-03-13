import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function SignupPage() {
  return(
    <>
    <div className="py-24 flex flex-col items-center mx-auto">
      <div className="flex flex-col min-w-[30%]">
        <img width="70px" height="auto" src="/depop-world.png" className="mx-auto"></img>
        <h1 className="text-2xl font-bold mx-auto py-3 font-PPMonumentExtended">Sign up</h1>
        <p className="mx-auto pt-3 pb-6">Already got an account? <a className="hover:cursor-pointer">Sign in</a></p>
        <div className="flex flex-col gap-3">
        <button className="btn w-full"><FcGoogle></FcGoogle>Continue with Google</button>
        <button className="btn w-full"><FaApple></FaApple>Continue with Apple ID</button>
        <Link to="/register"><button className="btn w-full bg-black text-white">Continue with email</button></Link>
        </div>
      </div>
    </div>
    </>
  )
}