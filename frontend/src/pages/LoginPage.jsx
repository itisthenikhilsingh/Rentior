
import { useState } from "react"
import { Link } from "react-router-dom"
const LoginPage = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    



  
  return (
    <div className="max-w-lg mx-auto p-3">
        <nav> <Link to={"/"}><span className="text-blue-700">Go To HOME</span></Link></nav>
            <h1 className="text-3xl text-center my-7 font-semibold">Sign In</h1>

            <form action="" className="flex flex-col gap-3" >
                

                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="p-3 rounded-lg border"
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}

                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="p-3 rounded-lg border"
                    required
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}

                />

                <button className="bg-slate-700 rounded-lg p-3 text-white uppercase hover:opacity-90"> Sign in</button>
            </form>

            <div className="mt-5 flex gap-2">
                <p >Dont Have an Account?</p>
                <Link to={"/register"}><span className="text-blue-700">Register</span></Link>
            </div>
        </div>
  )
}

export default LoginPage