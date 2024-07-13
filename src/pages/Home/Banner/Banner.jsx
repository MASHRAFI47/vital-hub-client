import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';


const Banner = () => {
    return (
        <div>
            <>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFade, Autoplay, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide data-aos="fade-down">
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Xkjj3dm/banner2.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="mx-5 md:mx-40">
                                    <h1 className="mb-5 text-4xl md:text-5xl font-bold">Welcome to our medical prescription site, where your health is our priority.</h1>
                                    <button className="btn btn-primary bg-[#5DCBE8] border-none text-white">Get Started</button>
                                </div>
                            </div>
                        </div>  
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/hBzgMHY/banner1.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="mx-5 md:mx-40">
                                    <h1 className="mb-5 text-4xl md:text-5xl font-bold">Welcome to our medical prescription site, where your health is our priority.</h1>
                                    <button className="btn btn-primary bg-[#5DCBE8] border-none text-white">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/hCsDBSs/banner3.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="mx-5 md:mx-40">
                                    <h1 className="mb-5 text-4xl md:text-5xl font-bold">Welcome to our medical prescription site, where your health is our priority.</h1>
                                    <button className="btn btn-primary bg-[#5DCBE8] border-none text-white">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    )
}

export default Banner