import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./carousel.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function Carousel(animes) {
  console.log(animes.animes, 90);
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {animes ? (
          animes.animes.map((item) => (
            <SwiperSlide key={item.mal_id}>
              <div key={item.mal_id} className="mb-8">
                <img
                  src={item.images.webp.image_url}
                  alt={item.title}
                  className="carousel-image"
                />
                <div className="mt-2">
                  <h2 className="text-lg ">{item.title}</h2>
                  <p className="text-xs">{item.recommendation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p>Cargando Animes...</p>
        )}
      </Swiper>
    </>
  );
}
