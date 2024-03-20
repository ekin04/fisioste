import React from "react";

interface ATMProps {}

export const ATM: React.FC<ATMProps> = ({}) => {
  return (
    <>
      <h2 className="text-secondary text-[25px] mb-3">
        RIABILITAZIONE TEMPORO MANDIBOLARE
      </h2>
      <p className="text-[18px] mb-3">
        Ha l’obiettivo di ripristinare le corrette funzionalità
        dell’articolazione, lavorando sulla correzione dei movimenti articolari,
        la risoluzione delle problematiche muscolari e delle deviazioni
        posturali patologiche.
      </p>
      <p className="text-[18px] mb-3">
        Le disfunzioni dell’ATM, si manifestano con click e scrosci nell’aprire
        e chiudere la bocca, dolore durante la masticazione, limitazione del
        movimento, blocco della mandibola, cambiamenti nell’occlusione dentale.
      </p>
      <p className="text-[18px] mb-3">
        Il trattamento, previa valutazione specifica, comprende tecniche di
        terapia manuale, terapia fisica ed esercizi posturali mirati al
        ripristino della corretta funzionalità dei muscoli della masticazione e
        a risolvere le alterazioni patologiche.
      </p>
      <p className="text-[18px] mb-10">
        L’ecografia ha il vantaggio di guardare “real time” e in dinamica le
        strutture anatomiche esaminate, caratteristica fondamentale per il
        fisioterapista in quanto esperto della funzione. La Fisioterapia
        Ecoguidata migliora l’immagine del professionista e rafforza l’alleanza
        terapeutica con il paziente.
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
    </>
  );
};
