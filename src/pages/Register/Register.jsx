import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
    const [showPass, setShowPass] = useState(false)
    const location = useLocation();
    const navigate = useNavigate()

    const { createUser, updateUserProfile } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { email, password, fullName, photoURL } = data;

        //password check
        if (password.length < 6) {
            toast.warn("Password length must be at least 6 characters")
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.warn("Password must contain at least one capital letter");
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.warn("Password must contain at least one lowercase");
            return;
        }

        createUser(email, password)
            .then(() => {
                updateUserProfile(fullName, photoURL)
                    .then(() => {
                        console.log('updated')
                        fetch("http://localhost:4000/vitalUsers", {
                            method: "POST",
                            headers: {
                                "Content-type": "application/json"
                            },
                            body: JSON.stringify(data)
                        })
                            .then(res => res.json())
                            .then(data => { console.log(data) })
                    })
                toast.success("Registration successful, redirecting...", {
                    autoClose: 2000
                })
                setTimeout(() => {
                    navigate(location.state ? location.state : "/")
                }, 3000);
            })
            .catch(error => console.log(error.message))
    };

    return (
        <div>
            <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100 border mx-auto">
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-center font-bold text-3xl">Register</h1>
                    <div className="form-control hidden">
                        <label className="label">
                            <span className="label-text">type</span>
                        </label>
                        <input type="text" placeholder="full name" defaultValue={'Patient'} className="input input-bordered" {...register("type")} />
                        {errors.type && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <input type="text" placeholder="full name" className="input input-bordered" {...register("username", { required: true })} />
                        {errors.username && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="full name" className="input input-bordered" {...register("fullName", { required: true })} />
                        {errors.fullName && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" placeholder="http://lcaosfh145.jpg" className="input input-bordered" {...register("photoURL", { required: true })} />
                        {errors.photoURL && <span className="text-red-600">This field is required</span>}
                    </div>
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
                        <input type={`${showPass ? "text" : "password"}`} placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
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
                        <button className="btn btn-primary bg-[#4EC1E1] text-white border-none">Register</button>
                    </div>
                    <div className="text-center">
                        <p>Already a user? <Link to={'/login'} className="font-semibold text-blue-600 mt-3">Login Now</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register