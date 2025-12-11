// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import { useRef } from "react";

// export default function VideoSlider() {
//   const swiperRef = useRef(null);

//   const handleVideoPlay = () => {
//     if (swiperRef.current) swiperRef.current.autoplay.stop();
//   };

//   const handleVideoEnd = () => {
//     const swiper = swiperRef.current;

//     if (!swiper) return;

//     const isLastSlide = swiper.activeIndex === swiper.slides.length - 1;

//     if (isLastSlide) {
//       // Go to first slide manually
//       swiper.slideTo(0);
//     } else {
//       swiper.slideNext();
//     }

//     // Restart autoplay
//     swiper.autoplay.start();
//   };

//   const handleSlideChange = () => {
//     const swiper = swiperRef.current;

//     if (!swiper) return;

//     const currentSlide = swiper.slides[swiper.activeIndex];
//     const video = currentSlide.querySelector("video");

//     if (video) {
//       video.currentTime = 0; // reset to start
//       video.play(); // start again
//     }
//   };

//   return (
//     <div className="rounded-xl overflow-hidden">
//       <Swiper
//         modules={[Autoplay]}
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         loop={false}
//         slidesPerView={1}
//         speed={600}
//         onSlideChange={handleSlideChange}
//       >
//         {/* VIDEO 1 */}
//         <SwiperSlide>
//           <video
//             src="/videos/v1.mp4"
//             autoPlay
//             muted
//             playsInline
//             onPlay={handleVideoPlay}
//             onEnded={handleVideoEnd}
//             className="w-full h-[380px] object-cover"
//           />
//         </SwiperSlide>

//         {/* VIDEO 2 */}
//         <SwiperSlide>
//           <video
//             src="/videos/v2.mp4"
//             autoPlay
//             muted
//             playsInline
//             onPlay={handleVideoPlay}
//             onEnded={handleVideoEnd}
//             className="w-full h-[380px] object-cover"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <video
//             src="/videos/v3.mp4"
//             autoPlay
//             muted
//             playsInline
//             onPlay={handleVideoPlay}
//             onEnded={handleVideoEnd}
//             className="w-full h-[380px] object-cover"
//           />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function VideoSlider() {
  const [showVideo, setShowVideo] = useState(false);
  const swiperRef = useRef(null);

  const startVideoSlider = () => {
    setShowVideo(true);

    setTimeout(() => {
      // Ensure first video starts playing when slider becomes visible
      const firstSlideVideo = document.querySelector("#video-slider video");
      if (firstSlideVideo) firstSlideVideo.play();
    }, 100);
  };

  const handleVideoPlay = () => {
    if (swiperRef.current) swiperRef.current.autoplay.stop();
  };

  const handleVideoEnd = () => {
    const swiper = swiperRef.current;

    if (!swiper) return;

    const isLastSlide = swiper.activeIndex === swiper.slides.length - 1;

    if (isLastSlide) {
      swiper.slideTo(0);
    } else {
      swiper.slideNext();
    }

    swiper.autoplay.start();
  };

  const handleSlideChange = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const currentSlide = swiper.slides[swiper.activeIndex];
    const video = currentSlide.querySelector("video");

    if (video) {
      video.currentTime = 0;
      video.play();
    }
  };

  return (
    <div className="rounded-xl overflow-hidden" id="video-slider">
      {/* 🎯 STEP 1: Show image until clicked */}
      {/* {!showVideo && (
        <div onClick={startVideoSlider} className="cursor-pointer">
          <Image
            src="/6.jpg"
            alt="volunteers"
            width={700}
            height={440}
            className="rounded-xl object-cover"
          />
        </div>
      )} */}
      {!showVideo && (
        <div
          onClick={startVideoSlider}
          className="cursor-pointer relative group"
        >
          {/* Main Preview Image */}
          <Image
            src="/6.jpg"
            alt="volunteers"
            width={700}
            height={440}
            className="rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />

          {/* Dark Overlay on hover */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-md p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-orange-700"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {showVideo && (
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={false}
          slidesPerView={1}
          speed={600}
          onSlideChange={handleSlideChange}
        >
          {/* VIDEO 1 */}
          <SwiperSlide>
            <video
              src="/videos/v1.mp4"
              autoPlay
              muted
              playsInline
              onPlay={handleVideoPlay}
              onEnded={handleVideoEnd}
              className="w-full h-[380px] object-cover"
            />
          </SwiperSlide>

          {/* VIDEO 2 */}
          <SwiperSlide>
            <video
              src="/videos/v2.mp4"
              autoPlay
              muted
              playsInline
              onPlay={handleVideoPlay}
              onEnded={handleVideoEnd}
              className="w-full h-[380px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <video
              src="/videos/v3.mp4"
              autoPlay
              muted
              playsInline
              onPlay={handleVideoPlay}
              onEnded={handleVideoEnd}
              className="w-full h-[380px] object-cover"
            />
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
}
