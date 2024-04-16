import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const HeroCarousel = () => {
  return (
    <Carousel showArrows={false} autoPlay={true} showThumbs={false} infiniteLoop={true} interval={5000} showIndicators={false} showStatus={false}>
        <div className="bg-center bg-contain w-full bg-no-repeat h-[450px]"  style={{
                    backgroundImage: "url('/img/2024/slide1.png')",    
            }}>
      </div>
     
        <div className="bg-center bg-contain w-full bg-no-repeat h-[450px]"  style={{
                    backgroundImage: "url('/img/2024/slide2.png')",    
            }}>
      </div>
     
        <div className="bg-center bg-contain w-full bg-no-repeat h-[450px]"  style={{
                    backgroundImage: "url('/img/2024/slide3.png')",    
            }}>
      </div>
     
    </Carousel>
  );
};

export default HeroCarousel;
