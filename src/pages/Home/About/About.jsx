import Lottie from "lottie-react";
import doctorAboutUs from "../../../../public/doctor-about-us.json";


const About = () => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-5">
        <div className="w-full lg:w-[35rem]" data-aos="fade-in">
          <Lottie animationData={doctorAboutUs} loop={true} />
        </div>
        <div data-aos="fade-right">
          <h1 className="text-4xl font-bold mb-3">About Us</h1>
          <p className="text-lg">At <strong>Vital Hub</strong>, we believe in empowering individuals with access to safe and reliable healthcare solutions. With a team of dedicated professionals, we are committed to providing convenient and efficient prescription services tailored to your needs. Your health and well-being are our top priorities, and we strive to ensure that every interaction with us reflects our commitment to care and excellence.</p>
        </div>
      </div>
    </section>
  )
}

export default About