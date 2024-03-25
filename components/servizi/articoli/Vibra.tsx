import React from "react";

interface VibraProps {}

export const Vibra: React.FC<VibraProps> = ({}) => {
  return (
    <>
      <p className="text-[18px] mb-10">
        È un elettromedicale in grado di produrre vibrazioni meccano-sonore
        dall’elevato valore terapeutico, capaci di indurre risposte adattive di
        tipo metabolico e neurofisiologico nella catena neuromuscolare e nelle
        strutture mio-osteoarticolari.
      </p>
      <h2 className="text-secondary text-[25px] mb-3">VIBRA È IN GRADO DI:</h2>
      <ul className="list-disc px-10 mb-10 text-[18px]">
        <li>Migliorare la propriocezione e l’equilibrio posturale</li>
        <li>Mantenere ed ottimizzare il tono e il trofismo</li>
        <li>Aumentare la resistenza fisica</li>
        <li>Migliorare la coordinazione muscolare</li>
      </ul>
      <h2 className="text-secondary text-[25px] mb-3">A COSA SERVE?</h2>
      <ul className="list-disc px-10 mb-10 text-[18px]">
        <li>recupero pre-post operatorio</li>
        <li>terapia del dolore</li>
        <li>medicina estetica</li>
        <li>aumento performance sportiva</li>
        <li>tonificazione</li>
        <li>decontratturante</li>
        <li>drenaggio linfatico</li>
      </ul>
      <hr />
    </>
  );
};
