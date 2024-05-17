import React from "react";

interface ATMProps {}

export const ATM: React.FC<ATMProps> = ({}) => {
  return (
    <>
      <p className="text-[18px] mb-3">
      Lavorando sulla correzione dei movimenti articolari, su eventuali problematiche muscolari e deviazioni posturali patologiche, tramite una <b>riabilitazione temporo mandibolare</b> si ripristinano le corrette funzionalità dell’articolazione.
      </p>
      <p className="text-[18px] mb-3">
      Il trattamento elimina le manifestazioni più evidenti delle disfunzioni: click e scrosci nell’aprire e chiudere la bocca, dolore durante la masticazione , limitazione del movimento, blocco della mandibola, cambiamenti nell’occlusione dentale.
      </p>
      <p className="text-[18px] mb-3">
      Con la riabilitazione temporo mandibolare è possibile andare a trattare i fenomeni di bruxismo,eventuali limitazioni articolari della mandibola (apertura, protrazione, retrazione, e lateralità), mal occlusione, rumori articolari, mal di testa, tensioni cervicali e acufeni.
      </p>
      <p className="text-[18px] mb-10">
      Con i percorsi individuali personalizzati e la valutazione dell’utilizzo di tecniche di terapia manuale, terapia fisica ed esercizi posturali mirati, i muscoli della masticazione riprendono la loro corretta funzionalità e si risolvono le eventuali alterazioni patologiche.
      </p>
      <h2 className="text-secondary text-[25px] mb-3">
        QUALI PROBLEMATICHE TRATTA:
      </h2>
      <ul className="list-disc px-10 mb-10 text-[18px]">
        <li>Bruxismo</li>
        <li>
          Limitazione articolare della mandibola in apertura, protrazione,
          retrazione, e lateralità
        </li>
        <li>Malocclusione</li>
        <li>Rumori articolari (click)</li>
        <li>Mal di testa</li>
        <li>Tensioni cervicali</li>
        <li>Acufeni</li>
      </ul>
      <hr/>
    </>
  );
};
