import React from 'react';
import Image from "next/image";
import {HeroChiSiamo} from "./components/HeroChiSiamo";
import {TeamCards} from "./components/TeamCards";
import {DiconoDiNoi} from "../home/components/DiconoDiNoi";
import {TeamMember} from "../../data/team";
import {LeNostreConvenzioni} from "../home/components/LeNostreConvenzioni";
import Seo from '../shared/Seo';

interface ChiSiamoComponentProps {
    team: TeamMember[]
}

export const ChiSiamoComponent: React.FC<ChiSiamoComponentProps> = ({team}) => {
    const seo = {
        title: "Chi Siamo",
        description:
          "Dal 2010 nel nostro Centro di Fisioterapia e Osteopatia di Teramo ci dedichiamo e specializziamo nella cura delle patologie della colonna vertebrale, nell’ estetica dermatofunzionale e nella riabilitazione del pavimento pelvico.",
        url: "chiSiamo",
        index: true,
      };
    return(
        <>
        <Seo metadata={seo}/>
            <HeroChiSiamo/>
            <TeamCards team={team}/>
            <DiconoDiNoi/>
            <LeNostreConvenzioni/>
        </>

    )

}