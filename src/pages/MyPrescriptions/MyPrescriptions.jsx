import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const MyPrescriptions = () => {
    const { user } = useContext(AuthContext);
    const allPrescriptions = useLoaderData();

    const filteredPrescription = allPrescriptions.filter(pres => pres?.patientName == user?.displayName);
    console.log(user)

    return (
        <div className="container mx-auto mt-5">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last Updated</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            filteredPrescription.map(pres => <tr key={pres._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={pres?.doctorPhoto} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{pres?.doctorName}</div>
                                            <div className="text-sm opacity-50">Doctor</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                   <p className="font-semibold">{pres?.updatedTime}</p>
                                </td>
                                <th>
                                    <Link to={`/my-prescription/${pres._id}`}>
                                        <button className="btn">View</button>
                                    </Link>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default MyPrescriptions