import { Link } from "react-router-dom"
const HomePage = () => {
  return (
    <div>HomePage
      <div className="mt-5 flex gap-2">
                <p >Dont Have an Account?</p>
                <Link to={"/register"}><span className="text-blue-700">Register</span></Link>
            </div>
    </div>
  )
}

export default HomePage