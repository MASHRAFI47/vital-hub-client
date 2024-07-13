import { Link, useLoaderData } from "react-router-dom"

//icons
import { MdAddCircleOutline } from "react-icons/md";
import { useState } from "react";


const Patients = () => {
    const [search, setSearch] = useState("")
    const allPatients = useLoaderData();
    let i = 1;

    //filtering patients
    const filterPatients = allPatients.filter(pat => pat.type != "Doctor");


    return (
        <div className="container mx-auto mt-10">
            
            {/* search */}
            <input type="text" onChange={(e) => setSearch(e.target.value)} className="py-3 mb-5 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Search by username..." />

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl.</th>
                            <th>Username</th>
                            <th>Fullname</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterPatients.filter((item) => {
                                return search.toLowerCase() === "" ? item : item.username.toLowerCase().includes(search)
                            }).map(patient => <tr className="hover" key={patient._id}>
                                <th>{i++}</th>
                                <td>{patient.username}</td>
                                <td>{patient.fullName}</td>
                                <Link to={`/patientDetails/${patient._id}`}>
                                    <td><button className="text-2xl text-green-600"><MdAddCircleOutline /></button></td>
                                </Link>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Patients