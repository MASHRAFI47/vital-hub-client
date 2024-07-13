import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

//momentjs
import moment from 'moment';

const PatientDetails = () => {
    const { user } = useContext(AuthContext);
    const ourPatient = useLoaderData();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { medicineName, illness, startingDate, endingDate, beforeMeal, timeBeforeMeal, beforeDayNoonNight, afterMeal, timeAfterMeal, afterDayNoonNight, medicineName02, startingDate02, endingDate02, beforeMeal02, timeBeforeMeal02, beforeDayNoonNight02, afterMeal02, timeAfterMeal02, afterDayNoonNight02, medicineName03, startingDate03, endingDate03, beforeMeal03, timeBeforeMeal03, beforeDayNoonNight03, afterMeal03, timeAfterMeal03, afterDayNoonNight03 } = data;

        const doctorEmail = user.email;
        const doctorPhoto = user.photoURL;
        const email = user.email;
        const doctorName = user.displayName;
        const patientId = ourPatient._id;
        const patientName = ourPatient.fullName;
        const patientUsername = ourPatient.username;
        const updatedTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

        const newData = { patientUsername, medicineName, illness, startingDate, endingDate, beforeMeal, timeBeforeMeal, beforeDayNoonNight, afterMeal, timeAfterMeal, afterDayNoonNight, doctorName, doctorPhoto, doctorEmail, email, patientName, patientId, updatedTime, medicineName02, startingDate02, endingDate02, beforeMeal02, timeBeforeMeal02, beforeDayNoonNight02, afterMeal02, timeAfterMeal02, afterDayNoonNight02, medicineName03, startingDate03, endingDate03, beforeMeal03, timeBeforeMeal03, beforeDayNoonNight03, afterMeal03, timeAfterMeal03, afterDayNoonNight03 }

        fetch(`http://localhost:4000/prescriptions`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Successfully added prescription",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div>
            <div className="card shrink-0 w-full max-w-5xl shadow-2xl bg-base-100 border mx-auto mb-10">
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-3xl font-bold">Medicine Prescription</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Patient Name</span>
                        </label>
                        <input type="text" placeholder="patient name" defaultValue={ourPatient.fullName} readOnly className="input input-bordered" {...register("patientName", { required: true })} />
                        {errors.patientName && <span>This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Illness Type</span>
                        </label>
                        <input type="text" placeholder="flu" className="input input-bordered" {...register("illness", { required: true })} />
                        {errors.illness && <span>This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Medicine Name</span>
                        </label>
                        <input type="text" placeholder="Medicine Name" className="input input-bordered" {...register("medicineName", { required: true })} />
                        {errors.medicineName && <span className="text-red-600">This field is required</span>}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Starting Date</span>
                            </label>
                            <input type="date" placeholder="date" {...register("startingDate", { required: true })} className="input input-bordered" />
                            {errors.startingDate && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ending Date</span>
                            </label>
                            <input type="date" placeholder="date" {...register("endingDate", { required: true })} className="input input-bordered" />
                            {errors.endingDate && <span className="text-red-600">This field is required</span>}
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Before Meal</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs" {...register("beforeMeal")}>
                                <option disabled selected>Select</option>
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">How long before meal?</span>
                            </label>
                            <input type="text" placeholder="time..." {...register("timeBeforeMeal")} className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Day/Noon/Night</span>
                            </label>
                            <input type="text" placeholder="1/0/1" className="input input-bordered" {...register("beforeDayNoonNight")} />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">After Meal</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs" {...register("afterMeal")}>
                                <option disabled selected>Select</option>
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">How long after meal?</span>
                            </label>
                            <input type="text" placeholder="time..." className="input input-bordered" {...register("timeAfterMeal")} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Day/Noon/Night</span>
                            </label>
                            <input type="text" placeholder="1/0/1" className="input input-bordered" {...register("afterDayNoonNight")} />
                        </div>
                    </div>

                    <hr />

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Medicine Name :02</span>
                        </label>
                        <input type="text" placeholder="Medicine Name" className="input input-bordered" {...register("medicineName02")} />
                        {errors.medicineName02 && <span className="text-red-600">This field is required</span>}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Starting Date :02</span>
                            </label>
                            <input type="date" placeholder="date" {...register("startingDate02")} className="input input-bordered" />
                            {errors.startingDate02 && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ending Date :02</span>
                            </label>
                            <input type="date" placeholder="date" {...register("endingDate02")} className="input input-bordered" />
                            {errors.endingDate02 && <span className="text-red-600">This field is required</span>}
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Before Meal :02</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs" {...register("beforeMeal02")}>
                                <option disabled selected>Select</option>
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">How long before meal? :02</span>
                            </label>
                            <input type="text" placeholder="time..." {...register("timeBeforeMeal02")} className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Day/Noon/Night :02</span>
                            </label>
                            <input type="text" placeholder="1/0/1" className="input input-bordered" {...register("beforeDayNoonNight02")} />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">After Meal :02</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs" {...register("afterMeal02")}>
                                <option disabled selected>Select</option>
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">How long after meal? :02</span>
                            </label>
                            <input type="text" placeholder="time..." className="input input-bordered" {...register("timeAfterMeal02")} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Day/Noon/Night :02</span>
                            </label>
                            <input type="text" placeholder="1/0/1" className="input input-bordered" {...register("afterDayNoonNight02")} />
                        </div>
                    </div>

                    <hr />

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Medicine Name :03</span>
                        </label>
                        <input type="text" placeholder="Medicine Name" className="input input-bordered" {...register("medicineName03")} />
                        {errors.medicineName03 && <span className="text-red-600">This field is required</span>}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Starting Date :03</span>
                            </label>
                            <input type="date" placeholder="date" {...register("startingDate03")} className="input input-bordered" />
                            {errors.startingDate03 && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ending Date :03</span>
                            </label>
                            <input type="date" placeholder="date" {...register("endingDate03")} className="input input-bordered" />
                            {errors.endingDate03 && <span className="text-red-600">This field is required</span>}
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Before Meal :03</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs" {...register("beforeMeal03")}>
                                <option disabled selected>Select</option>
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">How long before meal? :03</span>
                            </label>
                            <input type="text" placeholder="time..." {...register("timeBeforeMeal03")} className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Day/Noon/Night :03</span>
                            </label>
                            <input type="text" placeholder="1/0/1" className="input input-bordered" {...register("beforeDayNoonNight03")} />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">After Meal :03</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs" {...register("afterMeal03")}>
                                <option disabled selected>Select</option>
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">How long after meal? :03</span>
                            </label>
                            <input type="text" placeholder="time..." className="input input-bordered" {...register("timeAfterMeal03")} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Day/Noon/Night :03</span>
                            </label>
                            <input type="text" placeholder="1/0/1" className="input input-bordered" {...register("afterDayNoonNight03")} />
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

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Apply</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PatientDetails