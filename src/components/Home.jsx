// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import HeroSection from "./HeroSection";

// function Home() {
//   const images = [
//     "/images/product1.jpg",
//     "/images/product2.jpg",
//     "/images/product3.jpg",
//     "/images/product4.jpg",
//   ];

//   return (
//     <>
//     <HeroSection />
//     <section className="relative w-full h-screen flex flex-col items-center justify-center">
//         {/* <div className="absolute inset-0 bg-gradient-to-b from-[#4241a1] to-[#fa4d9e] opacity-60"></div> */}
//       {/* Heading centered above the slider */}
//       <h1 className="text-4xl font-bold text-[#4241a1] mb-6 text-center">
//         DURO OVERSEAS TRADING HOUSE
//       </h1>

//       {/* Image Slider */}
//       <div className="w-full max-w-6xl">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000 }}
//           loop
//           className="rounded-xl shadow-lg"
//         >
//           {images.map((src, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 src={src}
//                 alt={`Product ${index + 1}`}
//                 className="w-full h-[500px] object-cover rounded-xl"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//     </>
//   );
// }

// export default Home;


import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover filter blur-sm"
      >
        <source src="/Background_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 via-transparent to-black/60
"></div> */}
      <div className="absolute inset-0 bg-black opacity-40"></div>


      {/* Content */}
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <motion.h1 
          className="text-white text-4xl md:text-6xl font-bold shadow-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          High-Quality Food Processing Solutions
        </motion.h1>

        <motion.p 
          className="text-gray-200 text-lg md:text-xl mt-4 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Trusted by industries worldwide to deliver efficient and innovative food manufacturing solutions.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          href="#products"
          className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg shadow-lg text-lg font-semibold hover:bg-orange-600 transition"
          whileHover={{ scale: 1.05 }}
        >
          Explore Our Products
        </motion.a>
      </div>
    </section>
  );
}
