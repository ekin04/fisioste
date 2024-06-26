import React from 'react';
import {fetchServizi} from "../api/servizi";
import {InferGetStaticPropsType} from "next";
import {useRouter} from "next/router";
import {Carosello, CaroselloItem} from "../../components/shared/Carosello";
import {PrenotaAppuntamento} from "../../components/home/components/prenotaAppuntamento/PrenotaAppuntamento";
import {FactoryServizi} from "../../components/servizi/articoli/FactoryServizi";
import SeoImage from '../../components/shared/SeoImage';

export async function getStaticPaths() {

    let servizi = await fetchServizi()

    const paths = servizi.map(s => {
        return {params: {idServizio: s.id.toString()}}
    })


    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps() {

    let servizi = await fetchServizi()

    return {
        props: {
            servizi
        },
        revalidate: 10, // In seconds
    }
}

const ServizioSpecifico = ({servizi}: InferGetStaticPropsType<typeof getStaticProps>) => {

    const router = useRouter()
    const { idServizio } = router.query
    let servizioSelezionato = servizi.filter(s => s.id === parseInt(idServizio as string))[0]

    let itemsCarosello: CaroselloItem[] = servizi.filter(s => s.description !== "").map(s => {
        return {
            id: s.id,
            imgUrl: s.imgUrl,
            nome: s.name,
            descrizione: s.description,
            tipo: 'servizio'
        }
    })


    if(servizioSelezionato){
        const seo = {
            title: servizioSelezionato.name,
            description: servizioSelezionato.description,
            url: "servizi/" + servizioSelezionato.id,
            index: true,
            image: servizioSelezionato.imgUrl
          };
        return(
            <>
            <SeoImage metadata={seo}/>
                {/*DESKTOP*/}
                <div
                    className="h-[48vh] lg:h-[40vh] bg-gradient-to-t from-white to-[#d8e8ff] hidden xl:flex justify-start bg-no-repeat bg-center"
                    style={{
                        backgroundImage: `url(${servizioSelezionato.bannerImgUrl})`,
                        backgroundSize: "cover",
                    }}
                >
                    <div className="container m-auto">
                        <h1 className="text-secondary">{servizioSelezionato.name}</h1>
                        {/*<hr className="border border-secondary w-[200px] mt-2 mb-4"/>*/}
                    </div>
                </div>

                {/*TABLET*/}

                <div className="h-[48vh] hidden sm:flex xl:hidden p-2 justify-start bg-center bg-no-repeat bg-auto"
                     style={{
                         backgroundImage: `url(${servizioSelezionato.bannerImgUrlTablet})`,
                         backgroundSize: "cover",
                     }}
                >
                    <div className="container m-auto">
                        <h1 className="text-secondary">{servizioSelezionato.name}</h1>
                        {/*<hr className="border border-secondary w-[200px] mt-2 mb-4"/>*/}
                    </div>
                </div>

                {/*MOBILE*/}

                <div className="h-[48vh] sm:hidden lg:h-[55vh] bg-center p-2 flex justify-start bg-no-repeat bg-auto"
                     style={{
                         backgroundImage: `url(${servizioSelezionato.bannerImgUrlMobile})`,
                         backgroundSize: "cover",
                     }}
                >
                    <div className="container m-auto">
                        <h1 className="text-secondary">{servizioSelezionato.name}</h1>
                        {/*<hr className="border border-secondary w-[200px] mt-2 mb-4"/>*/}
                    </div>
                </div>
                <div className="mt-[-50px]">
                    <PrenotaAppuntamento servizi={servizi} backgroundColor="white"/>
                </div>
                <div className="container pt-10 pb-20 m-auto">
                    <FactoryServizi servizio={servizioSelezionato.name}/>
                    <h2 className="mt-10 text-secondary mb-10 text-[25px]">Altri Servizi</h2>
                    <Carosello data={itemsCarosello}/>
                </div>
            </>
        )
    }


}

export default ServizioSpecifico