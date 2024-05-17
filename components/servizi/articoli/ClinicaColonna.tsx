import React from "react";

interface ClinicaColonnaProps {}

export const ClinicaColonna: React.FC<ClinicaColonnaProps> = ({}) => {
  return (
    <>
      <div>
        <div className="max-w-5xl">
        <p className="text-[18px] mb-4">
        Curiamo le diverse <b>patologie della colonna</b> con esperienza, formazione e metodica altamente specializzata. Valutiamo ogni percorso terapeutico rendendolo personalizzato e individuale curando le diverse patologie della colonna.
        </p>
        <p className="text-[18px] mb-4">
        Recupero precoce e guarigione completa del paziente, grazie al nostro approccio riabilitativo, basato sulle migliori evidenze scientifiche e pratiche cliniche.
        </p>
        <p className="text-[18px] mb-10">
        Studiamo i giusti approcci per ogni tipo di patologia, personalizzando la cura in base alle esigenze del paziente tramite terapie fisiche all’avanguardia, tecniche di terapia manuale, osteopatia, posturale individuale ed esercizio terapeutico.
        </p>
        </div>
        <h2 className="text-secondary text-[25px] mb-3">
          QUALI PATOLOGIE È POSSIBILE CURARE?
        </h2>
        <p className="text-[18px] mb-3">
        Ci occupiamo di studiare trattamenti mirati per tutte le patologie che la colonna può presentare, legate al mal di schiena, acuto e cronico, come:
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
