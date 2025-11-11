// import React, { use } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import { AuthContext } from "../context/AuthContext";

// const Banner = () => {
//   const { dropdownOpen } = use(AuthContext);

//   const data = [
//     { title: "Slide 1", coverPhoto: "https://picsum.photos/1200/500?random=1" },
//     { title: "Slide 2", coverPhoto: "https://picsum.photos/1200/500?random=2" },
//     { title: "Slide 3", coverPhoto: "https://picsum.photos/1200/500?random=3" },
//   ];

//   return (
//     <div
//       className={`w-11/12 max-w-6xl mx-auto my-5 transition-all duration-300 ${
//         dropdownOpen ? "mt-32" : "mt-5"
//       }`}
//     >
//       <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={0}
//           slidesPerView={1}
//           autoplay={{ delay: 2000, disableOnInteraction: false }}
//           loop={true}
//           className="h-full"
//         >
//           {data.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 src={slide.coverPhoto}
//                 alt={slide.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//                 <h2 className="text-white text-2xl sm:text-4xl font-bold">
//                   {slide.title}
//                 </h2>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Banner;

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const Banner = () => {
//   const slides = [
//     {
//       id: 1,
//       img: "https://i.ibb.co/ctC6J3M/digital-bill-payment.jpg",
//       text: "One Platform for All Your Bill Payments",
//     },
//     {
//       id: 2,
//       img: "https://i.ibb.co/9V3Tc9j/utility-bill-schedule.jpg",
//       text: "Set Reminders & Pay Bills On Time",
//     },
//     {
//       id: 3,
//       img: "https://i.ibb.co/0rYwQcG/secure-online-payment.jpg",
//       text: "Secure & Contactless Online Payments",
//     },
//     {
//       id: 4,
//       img: "https://i.ibb.co/k1BR4QK/track-bill-history.jpg",
//       text: "Track Your Full Bill Payment History",
//     },
//     {
//       id: 5,
//       img: "https://i.ibb.co/JR99ZKc/save-money-bill.jpg",
//       text: "Manage Expenses & Save More Money",
//     },
//     {
//       id: 6,
//       img: "https://i.ibb.co/ZMdSKcQ/mobile-bill-dashboard.jpg",
//       text: "All Your Bills Organized in One App",
//     },
//   ];

//   return (
//     <div className="w-11/12 md:w-10/12 mx-auto rounded-xl overflow-hidden my-10">
//       <Swiper
//         modules={[Autoplay, Navigation, Pagination]}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         navigation
//         pagination={{ clickable: true }}
//         loop={true}
//         grabCursor={true} // Mouse drag
//         spaceBetween={0}
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div className="relative w-full h-[350px] md:h-[500px]">
//               <img
//                 src={slide.img}
//                 className="w-full h-full object-cover"
//                 alt="banner"
//               />
//               <div className="absolute inset-0 bg-black/50 z-0 flex items-center justify-center">
//                 <h2 className="text-white text-xl md:text-4xl font-bold text-center px-4">
//                   {slide.text}
//                 </h2>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Banner;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  const slides = [
    {
      id: 1,
      img: "https://i.ibb.co.com/9mx4HLMH/One-Platform-for-All-Your-Bill-Payments.jpg",
      text: "One Platform for All Your Bill Payments",
      description:
        "Pay Electricity, Gas, Water, Internet bills — all from one place",
    },
    {
      id: 2,
      img: "https://i.ibb.co.com/M57SWsv9/Set-Reminders-Pay-Bills-On-Time.jpg",
      text: "Set Reminders & Pay Bills On Time",
      description: "Get alerts so you never forget any bill due date again",
    },
    {
      id: 3,
      img: "https://i.ibb.co.com/20GrZdQ2/Secure-Contactless-Online-Payments.jpg",
      text: "Secure & Contactless Online Payments",
      description: "Your payments are protected with top-level security",
    },
    {
      id: 4,
      img: "https://i.ibb.co.com/1S42kdP/Track-Your-Full-Bill-Payment-History.jpg",
      text: "Track Your Full Bill Payment History",
      description: "Check all your previous bill payments anytime, anywhere",
    },
    {
      id: 5,
      img: "https://i.ibb.co.com/p6m69GNP/Manage-Expenses-Save-More-Money.jpg",
      text: "Manage Expenses & Save More Money",
      description: "Easily view, analyze & control your utility costs",
    },
    {
      id: 6,
      img: "https://i.ibb.co.com/V0cM1WVD/All-Your-Bills-Organized-in-One-App.jpg",
      text: "All Your Bills Organized in One App",
      description: "A clean & smart dashboard to manage everything seamlessly",
    },
  ];

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
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[350px] md:h-[500px]">
              <img
                src={slide.img}
                className="w-full h-full object-cover"
                alt="banner"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg">
                  {slide.text}
                </h2>

                <p className="text-white/80 text-sm md:text-lg font-medium mt-3 drop-shadow">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
