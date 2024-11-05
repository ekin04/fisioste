import React from "react";

interface FMSProps {}

export const FMS: React.FC<FMSProps> = ({}) => {
  return (
    <>
      <div className="max-w-5xl">
        <p className="text-[18px] mb-10">
          L’innovativa tecnologia dei CAMPI FMS (Functional Magnetic Screen –
          campi magnetici ad alta intensità), genera impulsi sulle cellule
          nervose e favorisce una contrazione muscolare, tramite l’utilizzo di
          un campo magnetico pulsato.
        </p>
        <h2 className="text-secondary text-[25px] mb-3">IL TRATTAMENTO:</h2>
        <ul className="list-disc px-10 mb-10 text-[18px]">
          <li>È indolore e non invasivo</li>
          <li>Non richiede il contatto con la pelle</li>
          <li>Raggiunge la muscolatura profonda</li>
          <li>È indicato in tutte le età</li>
          <li>Favorisce miglioramenti apprezzabili in poche sedute</li>
        </ul>
        <h2 className="text-secondary text-[25px] mb-3">SI UTILIZZA PER:</h2>
        <ul className="list-disc px-10 mb-10 text-[18px]">
          <li>
            Riabilitazione pavimento pelvico <i>(incontinenza, vulvodinia, ipotono,
            ipertono, lesione nervo pudendo, dolore pelvico)</i>
          </li>
          <li>Riatletizzazione</li>
          <li>Rinforzo muscolare</li>
          <li>Nevralgie</li>
          <li>Sciatalgia</li>
          <li>Lesioni del nervo</li>
          <li>Discopatia</li>
          <li>Tonificazione e modellamento</li>
        </ul>
        <hr />
      </div>
    </>
  );
};
