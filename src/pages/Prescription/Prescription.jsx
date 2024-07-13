import { useForm } from "react-hook-form"


const Prescription = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        // const {medicineName, startingDate, endingDate, beforeMeal, timeBeforeMeal, beforeDayNoonNight, afterMeal, timeAfterMeal, afterDayNoonNight} = data;
    }
    return (
        <div>
            <div className="card shrink-0 w-full max-w-5xl shadow-2xl bg-base-100 border mx-auto mb-10">
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-3xl font-bold">Medicine Prescription</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Medicine Name</span>
                        </label>
                        <input type="text" placeholder="Medicine Name" className="input input-bordered" {...register("medicineName", { required: true })} />
                        {errors.medicineName && <span>This field is required</span>}
                    </div>

                    <div className="grid grid-cols-3 lg:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Starting Date</span>
                            </label>
                            <input type="date" placeholder="date" {...register("startingDate", { required: true })} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ending Date</span>
                            </label>
                            <input type="date" placeholder="date" {...register("endingDate", { required: true })} className="input input-bordered" />
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

export default Prescription