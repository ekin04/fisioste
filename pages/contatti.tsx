import type { NextPage } from 'next'

import {ContattiComponent} from "../components/contatti/ContattiComponent";
import Seo from '../components/shared/Seo';


const Contatti: NextPage = () => {
    const seo = {
        title: "Contatti",
        description:
          "Fisioste Viale della Resistenza, 29/a Teramo +393288349050 info@fisioste.it",
        url: "contatti",
        index: true,
      };
    return (
    <>
    <Seo metadata={seo}/>
    <ContattiComponent/>
    </>
    )
}

export default Contatti