import React from "react";

interface HeroChiSiamoProps {}

export const HeroChiSiamo: React.FC<HeroChiSiamoProps> = ({}) => {
  return (
    <>
      <div
        className="pt-10 bg-gradient-to-t from-white to-[#d8e8ff] flex justify-start"
        /*style={{
                    backgroundImage: "url('/img/chisiamo/team_banner.png')",
                    backgroundSize: "cover",
                }}*/
        data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        <div className="container m-auto">
          <h1 className="text-secondary">
            <span className="text-black">Il </span>
            Team
            <span className="text-black"> di professionisti </span>
          </h1>
          <hr className="border border-secondary w-[200px] mt-2 mb-4" />
          
          <p className=" text-lg mb-2 mt-5">
          Ci interessiamo della vostra salute e del vostro benessere dal 2010.</p>
            <p className="text-lg mb-2">
            Da quell’anno nel nostro Centro di Fisioterapia e Osteopatia di Teramo ci dedichiamo e specializziamo nella cura delle patologie della colonna vertebrale, nell’ estetica dermatofunzionale e nella riabilitazione del pavimento pelvico.</p>
            <p className="text-lg mb-2">
            Garantiamo il miglior approccio terapeutico personalizzato per ogni patologia, aggiornandoci costantemente sulle nuove metodiche nel campo della fisioterapia e sulle tecnologie più innovative in terapia fisica.</p>
            <p className="text-lg mb-2">
            Il nostro <b>STAFF</b> ha come obiettivo quello  di impegnarsi con dedizione e competenza al coinvolgimento attivo dei pazienti durante il percorso riabilitativo e rieducativo.</p>
          
          </div>
        </div>
      
    </>
  );
};
