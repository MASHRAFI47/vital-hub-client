import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider"
import { toast } from "react-toastify"
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [showPass, setShowPass] = useState(false)
    const { signInUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success("Login successful, redirecting...", {
                    autoClose: 1000
                })
                setTimeout(() => {
                    navigate(location.state ? location.state : "/")
                }, 2000);
            })
            .catch(error => {
                console.log(error.message)
                toast.error("Invalid email or password")
            })
    }

    return (
        <div>
            <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100 border mx-auto">
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-center font-bold text-3xl">Login</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={`${showPass ? "text" : "password" }`} placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                        <span className='mt-0 mr-0 ml-auto mb-0 relative bottom-8 right-4' onClick={() => setShowPass(!showPass)}>
                            {
                                showPass ? <FaEye /> : <FaEyeSlash />
                            }
                        </span>
                        {errors.password && <span className="text-red-600">This field is required</span>}

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-[#4EC1E1] text-white border-none">Login</button>
                    </div>
                    <div className="text-center">
                        <p>New User? <Link to={'/register'} className="text-blue-600 font-semibold mt-3">Register Now</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login