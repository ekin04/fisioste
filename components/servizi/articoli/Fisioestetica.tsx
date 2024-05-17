import React from "react";

interface FisioesteticaProps {}

export const Fisioestetica: React.FC<FisioesteticaProps> = ({}) => {
  return (
    <>
      <div className="max-w ">
        <p className="text-[18px] mb-10">
          Con la <b>fisioestetica dermatofunzionale (FDF)</b> miglioriamo la
          qualità della vita dei nostri pazienti. Ci impegniamo, tramite
          percorsi individuali personalizzati e l’applicazione della 
          <b> fisioestetica dermatofunzionale (FDF)</b>, a favorire il ripristino
          e il miglioramento degli inestetismi, supportati da una preparazione
          in costante aggiornamento e dalla ricerca delle tecnologie più
          innovative.
        </p>
        <h2 className="text-secondary text-[25px] mb-3">TECNOLOGIA:</h2>
        <p className="text-[18px] mb-3">
        Gli apparati elettromedicali specifici per il trattamento della FDF sono:
        </p>
        <ul className="list-disc px-10 mb-10 text-[18px]">
          <li>Crioterapia</li>
          <li>Elettroterapia</li>
          <li>Laserterapia</li>
          <li>Massaggio</li>
          <li>Linfodrenaggio</li>
          <li>Onde d&apos;urto</li>
          <li>Tecarterapia</li>
          <li>Campi fms elettromagnetici</li>
          <li>Physio total body</li>
        </ul>

        <h2 className="text-secondary text-[25px] mb-3">A COSA SERVE?</h2>
        <p className="text-[18px] mb-3">
          La fisioestetica dermatofunzionale viene impiegata nel trattamento di:
        </p>
        <ul className="list-disc px-10 mb-3 text-[18px]">
          <li>Cellulite</li>
          <li>Tessuto adiposo localizzato</li>
          <li>Smagliature</li>
          <li>Dimagrimento</li>
          <li>Gambe gonfie e pesanti</li>
          <li>Acne </li>
          <li>Invecchiamento cutaneo : rughe, macchie, pelle devitalizzata </li>
          <li>Pre e post-operatorio</li>
        </ul>
        <p className="text-[18px] mt-4 mb-4">
          La <b>FDF</b> è indicata anche per la riparazione dei tessuti e per la riabilitazione delle funzioni d’organo generalmente in seguito a traumi, malattie o difetti congeniti quali ustioni, cicatrici e ulcere.
          </p>

        <p className="text-[18px] mb-10">
          I trattamenti sono mirati a ripristinare le funzioni dei tessuti,
          stimolando e aumentando il metabolismo cellulare, motivo per cui i
          risultati che ne derivano sono detti <b>conservativi</b>, ovvero
          perdurano nel tempo dato che si agisce direttamente sulla radice della
          problematica e sono praticabili a qualsiasi età: non sono invasivi e
          sono indolore.
        </p>

        <h2 className="text-secondary text-[25px] mb-3">
          PERCHÈ È IMPORTANTE?
        </h2>
        <p className="text-[18px] mb-4">
          L’obiettivo è quello di favorire il ripristino e il miglioramento di
          deviazioni estetiche, che influenzano direttamente l’autostima della
          persona e, di conseguenza, la qualità della vita.
        </p>
        <hr className="my-10"></hr>
      </div>
    </>
  );
};
