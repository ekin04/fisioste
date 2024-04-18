import React from 'react';
import Seo from '../../shared/Seo';

interface HeroNewsProps {
}

export const HeroNews: React.FC<HeroNewsProps> = ({}) => {
    const seo = {
        title: "Blog e News",
        description:
          "Scopri le ultime novità nel mondo della fisioterapia su Fisioste: notizie, aggiornamenti e approfondimenti per rimanere sempre al passo con le ultime tendenze e scoperte nel settore. Entra ora e resta aggiornato con Fisioste!",
        url: "news",
        index: true,
      };
    return(
        <>
        <Seo metadata={seo}/>
            <div
                className="h-[160px] md:h-[200px] bg-gradient-to-t from-white to-[#d8e8ff] flex justify-start"
                /*style={{
                    backgroundImage: "url('/img/news/banner.png')",
                    backgroundSize: "cover",
                }}*/
            >
                <div className="container m-auto">
                    <h1 className="text-secondary"><span className="text-black">I Nostri </span>Articoli</h1>
                    <hr className="border border-secondary w-[200px] mt-2 mb-4"/>
                </div>
            </div>


            {/*<div className="h-[48vh] md:hidden lg:h-[55vh] p-2 flex justify-start bg-no-repeat bg-auto"
                 style={{
                     backgroundImage: "url('/img/servizi/banners/mobile/TerapieFisiche.png')",
                     backgroundSize: "cover",
                 }}
            >
                <div className="container m-auto">
                    <h1 className="text-secondary"><span className="text-black">I Nostri </span>Articoli</h1>
                    <hr className="border border-secondary w-[200px] mt-2 mb-4"/>
                </div>
            </div>*/}
        </>
    )

}