import React from "react";

interface PavimentoProps {}

export const Pavimento: React.FC<PavimentoProps> = ({}) => {
  return (
    <>
      <p className="text-[18px] mb-10">
        La riabilitazione del pavimento pelvico è una branca della fisioterapia
        che si occupa della cura e della prevenzione delle condizioni che
        possono presentarsi sia nel sesso femminile che in quello maschile.
      </p>

      <h2 className="text-secondary text-[25px] mb-3">
        QUALI PATOLOGIE È POSSIBILE CURARE?
      </h2>
      <ul className="list-disc px-10 text-[18px] mb-10">
        <li>Perineo discendente e prolassi</li>
        <li>Prostatite</li>
        <li>Emorroidi</li>
        <li>Riduzione del tono vaginale</li>
        <li>Incontinenza:</li>
        <ul className="mb-1">
          <li>- Urinaria &#40;da urgenza, da stress, mista&#41;</li>
          <li>- Urinaria post prostatectomia</li>
          <li>- Nicturia</li>
          <li>- Fecale </li>
        </ul>
        <li>Dolore pelvico e disturbi sessuali:</li>
        <ul className="mb-1">
          <li>- Disfunzione erettile</li>
          <li>- Anorgasmia</li>
          <li>- Eiaculazione precoce o ritardata</li>
          <li>- Dispareunia </li>
          <li>- Vaginismo</li>
          <li>- Vulvodinia</li>
          <li>- Nevralgia del pudendo</li>
        </ul>
        <li>Riabilitazione del pavimento pelvico:</li>
        <ul className="mb-1">
          <li>- Pre e post parto</li>
          <li>- Post chirurgia</li>
        </ul>
      </ul>

      <h2 className="text-secondary text-[25px] mb-3 ">
        GLI OBIETTIVI DELLA RIABILITAZIONE DEL PAVIMENTO PELVICO:
      </h2>
      <ul className=" list-decimal list-outside text-[18px] px-10">
        <li>
          Ripristinare l’attività degli sfinteri uretale e anale, due muscoli
          che consentono la continenza quando sono contratti e lo svuotamento
          quando sono rilassati;
        </li>
        <li>Normalizzare il tono muscolare perineo;</li>
        <li>
          Ripristinare la coordinazione e la sinergia dei muscoli addominali e
          perianali;
        </li>
        <li>
          Verificare ed eventualmente correggere la dinamica respiratoria;
        </li>
        <li>Consigliare un’adeguata strategia comportamentale minzionale;</li>
        <li>
          Consigliare una corretta assunzione dei liquidi e alimenti per
          facilitare il regolare svuotamento di{" "}
        </li>
        vescica e intestino;
        <li>Consigliare e addestrare all’utilizzo di ausili terapeutici.</li>
      </ul>
      <hr className="my-10"/>
    </>
  );
};
