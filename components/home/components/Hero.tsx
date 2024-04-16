import React from 'react';
import Image from "next/image";

interface HeroProps {
}

export const Hero: React.FC<HeroProps> = ({}) => {
    return (
        <>
        <div className='bg-[#EFEFEF]'>
        
        <div className="justify-center hidden lg:flex bg-[#EFEFEF]">
                    <h1 className=" font-roboto  my-5 lg:text-[50px] xl:text-[60px] "
                        data-aos="fade-in"
                        data-aos-duration="3000"
                        data-aos-once="true"
                    >{/*Un team di esperti <span className="text-secondary">per te!</span>*/}
                        Fisioterapia e Osteopatia Teramo
                    </h1>
                 
                </div>
            <div className="xl:h-[430px] lg:h-[360px] container mx-auto p-2 hidden lg:flex justify-start bg-[center_bottom_-120px] lg:bg-[center_bottom_-75px] bg-no-repeat bg-auto"
                 style={{
                     backgroundImage: "url('img/2024/heroHome.webp')",
                     backgroundSize:"93%"
                 }}
                 
            >
            </div>
            </div>

           

            <div
                className="h-[350px] relative lg:hidden lg:h-[55vh] bg-[#EFEFEF] p-2 flex justify-center bg-no-repeat bg-[center_top_-30px] sm:bg-[center_top_-75px] md:bg-[center_top_-100px] bg-cover"
                style={{
                    backgroundImage: "url('img/2024/heroHome.webp')",
                    backgroundSize:"100%"
                    
            }}
            >
                
                <div className="lg:hidden absolute bottom-[-20px]">
                    <div className="flex flex-col items-center m-auto w-fit rounded-2xl bg-[#e1edff] p-6 shadow-xl">
                        <div className='pr-4 justify-center items-center flex'>
                        <Image src={'/img/Fisioste_Logo.webp'} width="62px" height="50px" layout="fixed"
                               alt="Fisioste Logo"/>
                        <Image src={'/img/home/Fiosioste_Font.webp'} width="200px" height="48px" layout="fixed"
                               alt="Fisioste Logo"/>
                       
                               </div>
                        <hr className="border border-gray-600 w-[100px] mt-6"/>
                        <p className="mt-6 font-roboto text-[20px]">
                            {/*Un team di esperti <span className="text-secondary">per te!</span>*/}
                            Fisioterapia e Osteopatia Teramo
                        </p>
                        
                    </div>
                </div>
                
            </div>
        </>

    )

}