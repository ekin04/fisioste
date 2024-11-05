import React from "react";
import { Carousel } from "react-responsive-carousel";

interface CaroselloHeroHomeProps {}

export const CaroselloHeroHome: React.FC<CaroselloHeroHomeProps> = () => {
  const slide = [
    "/img/2024/slide1.webp",
    "/img/2024/slide2.webp",
    "/img/2024/slide3.webp",
  ];

  return (
    <>
      <div className="w-full ">
        <Carousel
          swipeable={false}
          animationHandler={"fade"}
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
          {slide.map((slide, index) => (
          <div
            key={index}
            className="h-[250px] sm:h-[390px] md:h-[480px] lg:h-[530px] bg-center bg-cover bg-no-repeat rounded-3xl"
            style={{
              backgroundImage: `url(${slide})`,
            }}
          ></div>
        ))}
        </Carousel>
      </div>
    </>
  );
};
