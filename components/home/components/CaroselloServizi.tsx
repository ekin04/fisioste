import React from "react";
import { servizi } from "../../../data/servizi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";

const CaroselloServizi = () => {
  return (
    <Swiper
      slidesPerView={2}
      breakpoints={{
        // when window width is >= 480px
        100: {
          slidesPerView: 1,
        },
        // when window width is >= 640px
        660: {
          slidesPerView: 2,
        },
      }}
      spaceBetween={0}
      loop={true}
      navigation={true}
      modules={[Autoplay, Navigation]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="mySwiper "
    >
      {servizi
        .filter((servizio) => servizio.description !== "")
        .map((servizio) => (
          <SwiperSlide
            key={servizio.id}
            className="w-full flex flex-col justify-center items-center px-12 "
          >
            <div className="h-[580px] md:h-[620px] relative">
            <Link href={`/servizi/${servizio.id}`}>
              <img
                src={servizio.imgUrl}
                alt={servizio.name}
                className="rounded-2xl shadow-xl h-[250px] md:h-[300px] lg:h-[350px] w-full object-cover"
              />
              </Link>
              <h2 className="text-2xl font-light text-sky-900 mt-6">
                {servizio.name}
              </h2>
              <hr className="border border-primary w-[100px] my-4" />
              <p className="text-pretty">{servizio.description.slice(0, 180)+"..."}</p>
              <Link href={`/servizi/${servizio.id}`}>
                <button className="px-8 py-2 mt-2 w-full rounded-full text-[12px] text-secondary border-2 border-secondary hover:bg-secondary hover:text-white absolute bottom-0">
                  SCOPRI DI PIU
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
  <style jsx global>{`
  .swiper-button-prev:after,.swiper-button-next:after {
    color: rgb(12 74 110 / 100%) !important; 
    font-size: 28px;
    font-weight: 600;
  }
`}</style>
    </Swiper>
  
  );
};

export default CaroselloServizi;
