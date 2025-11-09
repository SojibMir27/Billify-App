import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { AuthContext } from "../context/AuthContext";

const Banner = () => {
  const { dropdownOpen } = use(AuthContext);

  const data = [
    { title: "Slide 1", coverPhoto: "https://picsum.photos/1200/500?random=1" },
    { title: "Slide 2", coverPhoto: "https://picsum.photos/1200/500?random=2" },
    { title: "Slide 3", coverPhoto: "https://picsum.photos/1200/500?random=3" },
  ];

  return (
    <div
      className={`w-11/12 max-w-6xl mx-auto my-5 transition-all duration-300 ${
        dropdownOpen ? "mt-32" : "mt-5"
      }`}
    >
      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          className="h-full"
        >
          {data.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide.coverPhoto}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h2 className="text-white text-2xl sm:text-4xl font-bold">
                  {slide.title}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
