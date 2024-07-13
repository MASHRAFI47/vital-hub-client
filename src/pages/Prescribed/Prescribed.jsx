import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

//icons
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineRateReview } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import Swal from "sweetalert2";

//tooltip
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'






const Prescribed = () => {
    const [search, setSearch] = useState("")
    let i = 1;
    const [prescribedUsers, setPrescribedUsers] = useState([])

    const { user } = useContext(AuthContext)

    const url = `http://localhost:4000/myList/${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPrescribedUsers(data))
    }, [url]);


    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                fetch(`http://localhost:4000/prescriptions/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
                const remaining = prescribedUsers.filter(user => user._id !== id)
                setPrescribedUsers(remaining)
            }
        });
    }

    return (
        <div className="container mx-auto mt-5">
            {/* search */}
            <input type="text" onChange={(e) => setSearch(e.target.value)} className="py-3 mb-5 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Search by username..." />

            <div className="overflow-x-auto">
                <Tooltip id="my-tooltip" />
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>Sl.</th>
                            <th>Userame</th>
                            <th>FullName</th>
                            <th>Last Updated</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            prescribedUsers.filter(item => {
                                return search.toLowerCase() === "" ? item : item.patientUsername.toLowerCase().includes(search)
                            }).map(user => <tr key={user._id} className="hover text-center">
                                <th>{i++}</th>
                                <td>{user?.patientUsername}</td>
                                <td>{user?.patientName}</td>
                                <td>{user?.updatedTime}</td>
                                <td className="flex justify-center items-center gap-8">
                                    <div data-tooltip-id="my-tooltip"
                                        data-tooltip-content="View"
                                        data-tooltip-place="bottom"
                                    >
                                        <Link to={`../my-prescription/${user._id}`}>
                                            <button className="text-2xl text-blue-600"><MdOutlineRateReview /></button>
                                        </Link>
                                    </div>
                                    <div data-tooltip-id="my-tooltip"
                                        data-tooltip-content="Edit"
                                        data-tooltip-place="bottom"
                                    >
                                        <button>
                                            <Link to={`/update-prescription/${user._id}`}>
                                                <button className="text-2xl text-green-600"><LuPencil /></button>
                                            </Link>
                                        </button>
                                    </div>
                                    <div data-tooltip-id="my-tooltip"
                                        data-tooltip-content="Delete"
                                        data-tooltip-place="bottom"
                                    >
                                        <button onClick={() => handleDelete(user._id)}>
                                            <Link>
                                                <button className="text-2xl text-red-600"><FaRegTrashCan /></button>
                                            </Link>
                                        </button>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Prescribed