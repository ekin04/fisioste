import React from "react";

interface ClinicaColonnaProps {}

export const ClinicaColonna: React.FC<ClinicaColonnaProps> = ({}) => {
  return (
    <>
      <div>
        <div className="max-w-5xl">
        <p className="text-[18px] mb-4">
          Grazie all’esperienza e la formazione continua, il nostro staff è in
          grado di fornire, dopo accurata valutazione, un percorso terapeutico
          individuale utilizzando una metodica altamente specializzata.
        </p>
        <p className="text-[18px] mb-4">
          Il nostro approccio riabilitativo è basato sulle migliori evidenze
          scientifiche e pratica clinica, questo garantisce il recupero precoce
          e la guarigione completa del paziente.
        </p>
        <p className="text-[18px] mb-10">
          Per ogni patologia è possibile utilizzare approcci diversi grazie
          all’utilizzo di terapia fisica all’avanguardia oppure tecniche di
          terapia manuale, osteopatia, posturale individuale ed esercizio
          terapeutico.
        </p>
        </div>
        <h2 className="text-secondary text-[25px] mb-3">
          QUALI PATOLOGIE È POSSIBILE CURARE?
        </h2>
        <p className="text-[18px] mb-3">
          I nostri trattamenti sono mirati per chi soffre di patologie legate al
          mal di schiena, acuto e cronico come:
        </p>
        <ul className="list-disc px-10 mb-10 text-[18px]">
          <li>Cervicalgia</li>
          <li>Scoliosi</li>
          <li>Ernia del disco</li>
          <li>Alterazioni Posturali</li>
          <li>Dolori muscolari, da artrosi, articolari</li>
          <li>Nevralgie come sciatalgia e cervicobrachialgia</li>
          <li>Patologie pre/post opertorie</li>
          <li>Prevenzione</li>
          <li>Disturbi dell’articolazione temporo-mandibolare</li>
          <li>Mal di testa</li>
        </ul>
        <hr/>
      </div>
    </>
  );
};
