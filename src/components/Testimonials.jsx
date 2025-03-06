 

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const Testimonials = () => {
//   const videoIds = [
//     "X5zw24r7jng", // Replace with actual YouTube video IDs
//     "9wJoUVQzgos",
//     "vbKOc4Yx-LM",
//     "k3YdYq9U4NQ",
//     "5LmJpioSGao",
//     "usYBJC_gQXk",
//   ];

//   return (
//     <section id="testimonials" className="min-h-[500px] bg-gray-100 py-10">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-[#4241a1] mb-6">
//           What Our Clients Say
//         </h2>
//         <p className="text-gray-600 mb-8">
//           Hear from our satisfied clients about their experience with our products.
//         </p>

//         {/* Swiper Slider */}
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           autoplay={{ delay: 3000 }}
//           navigation
//           pagination={{ clickable: true }}
//           className="w-full"
//         >
//           {videoIds.map((videoId, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//                 <iframe
//                   className="w-full h-52 sm:h-64"
//                   src={`https://www.youtube.com/embed/${videoId}`}
//                   title={`Client Testimonial ${index + 1}`}
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const videoIds = [
    "X5zw24r7jng",
    "9wJoUVQzgos",
    "vbKOc4Yx-LM",
    "k3YdYq9U4NQ",
    "5LmJpioSGao",
    "usYBJC_gQXk",
  ];

  const swiperRef = useRef(null);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Load YouTube API
    const loadYouTubeAPI = () => {
      if (!window.YT) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        createPlayers();
      }
    };

    // Create YouTube Players
    const createPlayers = () => {
      const newPlayers = videoIds.map((videoId, index) => {
        return new window.YT.Player(`youtube-player-${index}`, {
          events: {
            onStateChange: (event) => handleVideoStateChange(event, index),
          },
        });
      });
      setPlayers(newPlayers);
    };

    // Handle video play/pause
    const handleVideoStateChange = (event, index) => {
      if (swiperRef.current) {
        if (event.data === window.YT.PlayerState.PLAYING) {
          swiperRef.current.autoplay.stop(); // Stop autoplay when video plays
        } else if (
          event.data === window.YT.PlayerState.PAUSED ||
          event.data === window.YT.PlayerState.ENDED
        ) {
          swiperRef.current.autoplay.start(); // Resume autoplay when video pauses or ends
        }
      }
    };

    window.onYouTubeIframeAPIReady = createPlayers;
    loadYouTubeAPI();
  }, []);

  return (
    <section id="testimonials" className="min-h-[500px] bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#4241a1] mb-6">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mb-8">
          Hear from our satisfied clients about their experience with our products.
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000 }}
          navigation
          pagination={{ clickable: true }}
          className="w-full"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {videoIds.map((videoId, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <iframe
                  id={`youtube-player-${index}`}
                  className="w-full h-52 sm:h-64"
                  src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
                  title={`Client Testimonial ${index + 1}`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

