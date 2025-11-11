import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router";

const Banner = ({ data }) => {
  return (
    <div className="relative w-11/12 md:w-10/12 mx-auto rounded-xl overflow-hidden my-10">
      {/* Button */}
      <div className="swiper-button-prev custom-prev">
        <img
          width="78"
          height="78"
          src="https://img.icons8.com/external-filled-color-icons-papa-vector/78/external-Left-Arrow-interface-filled-color-icons-papa-vector.png"
          alt="external-Left-Arrow-interface-filled-color-icons-papa-vector"
        />
      </div>
      <div className="swiper-button-next custom-next">
        <img
          width="78"
          height="78"
          src="https://img.icons8.com/external-filled-color-icons-papa-vector/78/external-Right-Arrow-interface-filled-color-icons-papa-vector.png"
          alt="external-Right-Arrow-interface-filled-color-icons-papa-vector"
        />
      </div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        pagination={{ clickable: true }}
        loop={true}
        grabCursor={true}
        spaceBetween={0}
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[350px] md:h-[500px]">
              <img
                src={slide.image}
                className="w-full h-full object-cover"
                alt="banner"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg">
                  {slide.title}
                </h2>

                <p className="text-white/80 text-sm md:text-lg font-medium mt-3 drop-shadow">
                  {slide.description}
                </p>

                <div className="flex justify-center items-center mx-auto mt-5">
                  <Link
                    to={`/bill-details/${slide._id}`}
                    className="btn text-white rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300 border-none"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
