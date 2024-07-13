import { useLoaderData, useParams } from "react-router-dom"

const PatientsPrescription = () => {
    const allPrescriptions = useLoaderData();
    console.log(allPrescriptions)
    const { id } = useParams()
    console.log(id)

    const singlePatient = allPrescriptions.find(pat => pat?.patientId == id || pat._id == id)

    return (
        <div className="mt-5">
            <div className="card shrink-0 w-full max-w-5xl shadow-2xl bg-base-100 border mx-auto mb-10">
                <form className="card-body">
                    <h1 className="text-3xl font-bold">Medicine Prescription</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Medicine Name</span>
                        </label>
                        <input type="text" placeholder="Medicine Name" className="input input-bordered" defaultValue={singlePatient?.medicineName} readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Illness type</span>
                        </label>
                        <input type="text" placeholder="Medicine Name" className="input input-bordered" defaultValue={singlePatient?.illness} readOnly />
                    </div>

                    <div className="grid grid-cols-3 lg:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Starting Date</span>
                            </label>
                            <input type="date" placeholder="date" className="input input-bordered" defaultValue={singlePatient?.startingDate} readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ending Date</span>
                            </label>
                            <input type="date" placeholder="date" className="input input-bordered" defaultValue={singlePatient?.endingDate} readOnly />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Before Meal</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs" defaultValue={singlePatient?.beforeMeal} readOnly >
                                <option disabled selected>Select</option>
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">How long before meal?</span>
                            </label>
                            <input type="text" placeholder="time..." defaultValue={singlePatient?.timeBeforeMeal} readOnly className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Day/Noon/Night</span>
                            </label>
                            <input type="text" placeholder="1/0/1" className="input input-bordered" defaultValue={singlePatient?.beforeDayNoonNight} readOnly />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">After Meal</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs" defaultValue={singlePatient?.afterMeal} readOnly >
                                <option disabled selected>Select</option>
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">How long after meal?</span>
                            </label>
                            <input type="text" placeholder="time..." className="input input-bordered" defaultValue={singlePatient?.timeAfterMeal} readOnly />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Day/Noon/Night</span>
                            </label>
                            <input type="text" placeholder="1/0/1" className="input input-bordered" defaultValue={singlePatient?.timeAfterMeal} readOnly />
                        </div>
                    </div>

                    <hr />

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Medicine Name :02</span>
                        </label>
                        <input type="text" placeholder="Medicine Name" className="input input-bordered" defaultValue={singlePatient?.medicineName02} readOnly />
                    </div>

                    <div className="grid grid-cols-3 lg:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Starting Date :02</span>
                            </label>
                            <input type="date" placeholder="date" defaultValue={singlePatient?.startingDate02} readOnly className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ending Date :02</span>
                            </label>
                            <input type="date" placeholder="date" defaultValue={singlePatient?.endingDate02} readOnly className="input input-bordered" />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Before Meal :02</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs" defaultValue={singlePatient?.beforeMeal02} readOnly >
                                <option disabled selected>Select</option>
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">How long before meal? :02</span>
                            </label>
                            <input type="text" placeholder="time..." defaultValue={singlePatient?.timeBeforeMeal02} readOnly className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Day/Noon/Night :02</span>
                            </label>
                            <input type="text" placeholder="1/0/1" className="input input-bordered" defaultValue={singlePatient?.beforeDayNoonNight02} readOnly />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">After Meal :02</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs" defaultValue={singlePatient?.afterMeal02} readOnly >
                                <option disabled selected>Select</option>
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">How long after meal? :02</span>
                            </label>
                            <input type="text" placeholder="time..." className="input input-bordered" defaultValue={singlePatient?.timeAfterMeal02} readOnly />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Day/Noon/Night :02</span>
                            </label>
                            <input type="text" placeholder="1/0/1" className="input input-bordered" defaultValue={singlePatient?.afterDayNoonNight02} readOnly />
                        </div>
                    </div>

                    <hr />

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Medicine Name :03</span>
                        </label>
                        <input type="text" placeholder="Medicine Name" className="input input-bordered" defaultValue={singlePatient?.medicineName03} readOnly />
                    </div>

                    <div className="grid grid-cols-3 lg:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Starting Date :03</span>
                            </label>
                            <input type="date" placeholder="date" defaultValue={singlePatient?.startingDate03} readOnly className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ending Date :03</span>
                            </label>
                            <input type="date" placeholder="date" defaultValue={singlePatient?.endingDate03} readOnly className="input input-bordered" />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Before Meal :03</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs" defaultValue={singlePatient?.beforeMeal03} readOnly >
                                <option disabled selected>Select</option>
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">How long before meal? :03</span>
                            </label>
                            <input type="text" placeholder="time..." defaultValue={singlePatient?.timeBeforeMeal03} readOnly className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Day/Noon/Night :03</span>
                            </label>
                            <input type="text" placeholder="1/0/1" className="input input-bordered" defaultValue={singlePatient?.beforeDayNoonNight03} readOnly />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">After Meal :03</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs" defaultValue={singlePatient?.afterMeal03} readOnly >
                                <option disabled selected>Select</option>
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">How long after meal? :03</span>
                            </label>
                            <input type="text" placeholder="time..." className="input input-bordered" defaultValue={singlePatient?.timeAfterMeal03} readOnly />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Day/Noon/Night :03</span>
                            </label>
                            <input type="text" placeholder="1/0/1" className="input input-bordered" defaultValue={singlePatient?.afterDayNoonNight03} readOnly />
                        </div>
                    </div>


                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Medicine Name: 02</span>
                        </label>
                        <input type="text" placeholder="Add another medicine..." className="input input-bordered" required />
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Starting Date</span>
                            </label>
                            <input type="date" placeholder="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ending Date</span>
                            </label>
                            <input type="date" placeholder="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Before Meal</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Select</option>
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">After Meal</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Select</option>
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Day/Noon/Night</span>
                            </label>
                            <input type="text" placeholder="0/1/0" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Medicine Name: 03</span>
                        </label>
                        <input type="text" placeholder="Add another medicine..." className="input input-bordered" required />
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Starting Date</span>
                            </label>
                            <input type="date" placeholder="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ending Date</span>
                            </label>
                            <input type="date" placeholder="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Before Meal</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Select</option>
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">After Meal</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Select</option>
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Day/Noon/Night</span>
                            </label>
                            <input type="text" placeholder="0/1/0" className="input input-bordered" required />
                        </div>
                    </div> */}

                    {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Medicine Name: 04</span>
                            </label>
                            <input type="text" placeholder="Add another medicine..." className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Medicine Name: 05</span>
                            </label>
                            <input type="text" placeholder="Add another medicine..." className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Medicine Name: 06</span>
                            </label>
                            <input type="text" placeholder="Add another medicine..." className="input input-bordered" required />
                        </div>
                    </div> */}





                    {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ending Date</span>
                            </label>
                            <input type="date" placeholder="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Before Meal</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Select</option>
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">After Meal</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Select</option>
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>
                    </div> */}
                </form>
            </div>
        </div>
    )
}

export default PatientsPrescription