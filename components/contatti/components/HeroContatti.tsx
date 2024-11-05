import React from 'react';

interface HeroContattiProps {
}

export const HeroContatti: React.FC<HeroContattiProps> = ({}) => {
    return (
        <>
            <div
                className="h-[450px] w-auto bg-gradient-to-t from-white to-[#d8e8ff] hidden md:flex justify-start bg-no-repeat bg-center"
                style={{
                    backgroundImage: "url('/img/2024/ipopressiva_banner.webp')",
                    backgroundSize: "cover",
                }}
            >
                <div className="container m-auto">
                    <h1 className="text-secondary"><span className="text-black">Entra in </span>Contatto <span
                        className="text-black">con noi</span></h1>
                    <hr className="border border-secondary w-[200px] mt-2 mb-4"/>
                    <h2>
                        A completa disposizione per rispondere alle tue domande e fornirti la soluzione migliore alle
                        tue esigenze.
                    </h2>
                </div>
            </div>


            <div className="h-[48vh] md:hidden lg:h-[55vh] p-2 flex justify-start bg-no-repeat bg-right"
                 style={{
                     backgroundImage: "url('/img/2024/ipopressiva_banner.webp')",
                     backgroundSize: "cover",
                 }}
            >
                <div className="container m-auto">
                    <h1 className="text-secondary"><span className="text-black">Entra in </span>Contatto <span
                        className="text-black">con noi</span></h1>
                    <hr className="border border-secondary w-[200px] mt-2 mb-4"/>
                    <h2>
                        A completa disposizione per rispondere alle tue domande e fornirti la soluzione migliore alle
                        tue esigenze.
                    </h2>
                </div>
            </div>
        </>
    )

}