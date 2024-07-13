import { FaHospital, FaAmbulance, FaPrescriptionBottleAlt } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";



const Services = () => {
    return (
        <section className="container mx-auto" data-aos="fade-in">
            <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <div className="card bg-base-100">
                        <figure><p className="text-4xl bg-[#6dd4ed] p-4 rounded-full"><FaHospital className="text-white" /></p></figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">Advanced Technology</h2>
                            <p className="text-center">Experience the future of healthcare.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100">
                        <figure><p className="text-4xl bg-[#6dd4ed] p-4 rounded-full"><FaUserDoctor className="text-white" /></p></figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">Healthcare Solutions</h2>
                            <p className="text-center">Prescription management to personalized care</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100">
                        <figure><p className="text-4xl bg-[#6dd4ed] p-4 rounded-full"><FaPrescriptionBottleAlt className="text-white" /></p></figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">Prescription Online</h2>
                            <p className="text-center">Few clicks away from your prescribed medications</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100">
                        <figure><p className="text-4xl bg-[#6dd4ed] p-4 rounded-full"><FaAmbulance className="text-white" /></p></figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">24/7 Availability</h2>
                            <p className="text-center">Access prescriptions anytime, anywhere</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services