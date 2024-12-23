import React from "react";
import { Tecar } from "./Tecar";
import { Fisioestetica } from "./Fisioestetica";
import { Ondedurto } from "./Ondedurto";
import { TerapiaManuale } from "./TerapiaManuale";
import { FEG } from "./FEG";
import { Osteopatia } from "./Osteopatia";
import { LaserTerapia } from "./LaserTerapia";
import { RiabilitazionePosturale } from "./RiabilitazionePosturale";
import { TerapieFisiche } from "./TerapieFisiche";
import { ClinicaColonna } from "./ClinicaColonna";
import { Pavimento } from "./PavimentoPelvico";
import { ATM } from "./ATM";
import { Vibra } from "./Vibra";
import { OndedurtoFocali } from "./OndedurtoFocali";
import { Criolipolisi } from "./Criolipolisi";
import { FMS } from "./FMS";
import { Endometriosi } from "./Endometriosi";
import { DiastasiAddominale } from "./DiastasiAddominale";
interface FactoryServiziProps {
  servizio: string;
}

export const FactoryServizi: React.FC<FactoryServiziProps> = ({ servizio }) => {
  switch (servizio) {
    case "Tecar Terapia":
      return <Tecar />;
    case "Fisioestetica Dermatofunzionale":
      return <Fisioestetica />;
    case "Onde d'urto radiali":
      return <Ondedurto />;
    case "Onde d'urto focali":
      return <OndedurtoFocali />;
    case "Terapia Manuale":
      return <TerapiaManuale />;
    case "FEG":
      return <FEG />;
    case "Osteopatia":
      return <Osteopatia />;
    case "Laser Terapia":
      return <LaserTerapia />;
    case "Rieducazione Posturale":
      return <RiabilitazionePosturale />;
    case "Ultrasuono":
      return <TerapieFisiche />;
    case "Clinica Della Colonna":
      return <ClinicaColonna />;
    case "Riabilitazione Pavimento Pelvico":
      return <Pavimento />;
    case "Riabilitazione temporo mandibilare (ATM)":
      return <ATM />;
    case "Vibra 3.0":
      return <Vibra />;
    case "Criolipolisi":
      return <Criolipolisi />;
    case "Campi Elettromagnetici FMS":
      return <FMS />;
    case "Trattamento Endometriosi":
      return <Endometriosi />;
    case "Trattamento Diastasi Addominale":
      return <DiastasiAddominale />;

    default:
      return <></>;
  }
};
