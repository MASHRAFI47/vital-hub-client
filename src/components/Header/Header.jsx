import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/vitalhub.png'
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider"

//tooltip
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'


const Header = () => {
    const { user, logOut, themes, handleThemeChange } = useContext(AuthContext)
    const [userPatient, setUserPatient] = useState([])

    const filteredUser = userPatient.find(pat => pat?.fullName == user?.displayName);


    useEffect(() => {
        fetch(`http://localhost:4000/vitalUsers`)
            .then(res => res.json())
            .then(data => setUserPatient(data))
    }, []);

    const loggedUser = userPatient.find(patient => patient.fullName == user?.displayName)


    const links = <>
        <li><NavLink to={'/'} className='font-semibold'>Home</NavLink></li>
        <li><NavLink to={'/about'} className='font-semibold'>About</NavLink></li>

        {
            filteredUser?.type == "Patient" ? "" : <li><NavLink to={'/patients'} className='font-semibold'>Patients</NavLink></li>
        }
        {
            filteredUser?.type == "Patient" ? "" : <li><NavLink to={'/prescribed'} className='font-semibold'>Prescribed</NavLink></li> 
        }

        {
            filteredUser?.type == "Patient" ? <li><NavLink to={`/my-prescriptions/${loggedUser?._id}`} className='font-semibold'>My Prescriptions</NavLink></li> : ""
        }

    </>

    return (
        <div>
            <div className="navbar bg-base-100 container mx-auto">
                <Tooltip id="my-tooltip" />
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link><img src={logo} alt="" className="w-20" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label className="cursor-pointer grid place-items-center mr-5">
                        <input type="checkbox" onChange={handleThemeChange} value={themes} className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>

                    {user ? <div className="dropdown dropdown-end" >
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full" data-tooltip-id="my-tooltip" data-tooltip-content={user ? user.displayName : "User not found"}>
                                <img alt="Tailwind CSS Navbar component" src={user ? user.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[100] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link to={'/update-profile'} className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            {/* <Link to={`/my-prescriptions/${loggedUser?._id}`}>
                                <li><a>Prescription</a></li>
                            </Link> */}
                            {
                                user ? <li onClick={logOut}><a>Logout</a></li> : ""
                            }
                        </ul>
                    </div> :
                        <Link to={'/login'} className="font-semibold">Login</Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header