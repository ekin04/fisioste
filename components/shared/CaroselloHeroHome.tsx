import React from "react";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";

interface CaroselloHeroHomeProps {}

export const CaroselloHeroHome: React.FC<CaroselloHeroHomeProps> = () => {
  

  const slide1 = "/img/2024/slide1.webp";
  const slide2 = "/img/2024/slide2.webp";
  const slide3 = "/img/2024/slide3.webp";

  return (
    <>
    <div className="w-full ">
      <Carousel
      swipeable={false}
      animationHandler={'fade'}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={4000}
        transitionTime={1000}
        showArrows={false}
        className="w-full rounded-3xl shadow-lg"
        
      >
        <div
          className="h-[250px] sm:h-[390px] md:h-[480px] lg:h-[530px] bg-right bg-cover bg-no-repeat rounded-3xl"
          style={{
            backgroundImage: `url("/img/2024/slide1.webp")`,
          }}
          
        ></div>
        <div
          className="h-[250px] sm:h-[390px] md:h-[480px] lg:h-[530px] bg-center bg-cover bg-no-repeat rounded-3xl"
          style={{
            backgroundImage: `url("/img/2024/slide2.webp")`,
          }}
          
        ></div>
        <div
          className="h-[250px] sm:h-[390px] md:h-[480px] lg:h-[530px] bg-center bg-cover bg-no-repeat rounded-3xl"
          style={{
            backgroundImage: `url("/img/2024/slide3.webp")`,
          }}
          
        ></div>
      </Carousel>
      </div>
    </>
  );
};
