import { CaroselloHeroHome } from "../../shared/CaroselloHeroHome";
import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/solid";

interface HeroNewProps {}

export const HeroNew: React.FC<HeroNewProps> = () => {
  return (
    <>
      <div className="w-full">
        <div className="container mx-auto pt-2 pb-5 lg:pt-6 lg:pb-0 px-4 sm:px-6 lg:px-8 ">
          <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center ">
            <div className="lg:col-span-3 lg:ml-8">
              <div
                className="flex justify-center items-center py-3 px-6 mr-10 lg:hidden"
                data-aos="fade-in"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <Image
                  src={"/img/Fisioste_Logo.webp"}
                  width="65px"
                  height="60px"
                  layout="intrinsic"
                  alt="Fisioste Logo"
                />
                <Image
                  src={"/img/home/Fiosioste_Font.webp"}
                  width="180x"
                  height="45px"
                  layout="intrinsic"
                  alt="Fisioste Logo"
                />
              </div>
              <h1
                className="block mt-1 lg:mt-6 text-center lg:text-left text-3xl font-extrabold text-secondary sm:text-4xl lg:text-5xl"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Fisioterapia e Osteopatia Teramo
              </h1>
              <p
                className="mt-4 lg:mt-10 text-lg ml-1 text-gray-800 text-center lg:text-left xl:w-10/12"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="300"
              >
                Professionalità e tecnologia al servizio del benessere e del
                recupero del paziente.
              </p>

              <div
                className="mt-5 xl:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="700"
              ></div>

              <div
                className=" lg:mt- text-center lg:text-left"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="800"
                data-aos-offset="-200"
              >
                {/*  <span className="text-xs font-medium text-gray-500 uppercase">
                Convenzionato con: 
              </span>

              <div className="gap-x-6 px-4 lg:px-0 grayscale opacity-80 items-center grid grid-cols-4 mix-blend-multiply">
                <Image
                  src={conv1.src}
                  alt="convenzion"
                  width={100}
                  height={100}
                  
                />
                <Image
                  src={conv2.src}
                  alt="convenzion"
                  width={100}
                  height={100}
                  style={{mixBlendMode:"multiply"}}
                />
                <Image
                  src={conv3.src}
                  alt="convenzion"
                  width={100}
                  height={120}
                />
                <Image
                  src={conv4.src}
                  alt="convenzion"
                  width={100}
                  height={120}
                />
              </div> */}
                <a href="tel:+390861285075" className="flex justify-center items-center w-1/2 text-white bg-secondary hover:bg-primary transition px-3 py-2 rounded-3xl mx-auto lg:mx-0">
                  <PhoneIcon className="mr-5 w-8 h-8" />
                  0861285075
                </a>
              </div>
            </div>

            <div
              className="lg:col-span-4 mt-6 md:mt-10 lg:mt-0 rounded-3xl"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay="300"
            >
              <CaroselloHeroHome />
            </div>
          </div>
        </div>
        <div className=" hidden  lg:flex pt-10 w-full bg-gradient-to-b from-white to-[#efefef]"></div>
      </div>
    </>
  );
};
