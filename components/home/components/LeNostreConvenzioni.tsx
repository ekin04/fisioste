import React, {useEffect, useState} from 'react';
import Image from 'next/image'
import {RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri";
import Link from "next/link";
import {Carousel} from "react-responsive-carousel";

interface LeNostreConvenzioniProps {
}

export const LeNostreConvenzioni: React.FC<LeNostreConvenzioniProps> = ({}) => {

    let data = [
        {id: 1, imgUrl: '/img/convenzioni/conv1.jpg', width: '250px', height: '150px', alt: 'cnvenzione 1'},
        {id: 2, imgUrl: '/img/convenzioni/conv2.jpg', width: '250px', height: '150px', alt: 'cnvenzione 2'},
        {id: 3, imgUrl: '/img/convenzioni/conv3.jpg', width: '250px', height: '150px', alt: 'cnvenzione 3'},
        {id: 4, imgUrl: '/img/convenzioni/conv4.jpg', width: '250px', height: '150px', alt: 'cnvenzione 4'},
        {id: 5, imgUrl: '/img/convenzioni/conv5.jpg', width: '250px', height: '150px', alt: 'cnvenzione 5'},
        {id: 6, imgUrl: '/img/convenzioni/conv6.jpg', width: '250px', height: '150px', alt: 'cnvenzione 6'},
        {id: 7, imgUrl: '/img/convenzioni/conv7.jpg', width: '250px', height: '150px', alt: 'cnvenzione 7'},
        {id: 8, imgUrl: '/img/convenzioni/conv8.jpg', width: '250px', height: '150px', alt: 'cnvenzione 8'},
        {id: 9, imgUrl: '/img/convenzioni/conv9.jpg', width: '250px', height: '150px', alt: 'cnvenzione 9'},
        {id: 10, imgUrl: '/img/convenzioni/conv10.jpg', width: '250px', height: '150px', alt: 'cnvenzione 10'},
        {id: 11, imgUrl: '/img/convenzioni/conv11.jpg', width: '250px', height: '150px', alt: 'cnvenzione 11'},
        {id: 12, imgUrl: '/img/convenzioni/conv12.jpg', width: '250px', height: '150px', alt: 'cnvenzione 12'},
        {id: 13, imgUrl: '/img/convenzioni/conv13.jpg', width: '250px', height: '150px', alt: 'cnvenzione 13'},
        {id: 14, imgUrl: '/img/convenzioni/conv14.jpg', width: '250px', height: '150px', alt: 'cnvenzione 14'},
        {id: 15, imgUrl: '/img/convenzioni/conv15.jpg', width: '250px', height: '150px', alt: 'cnvenzione 15'},
        {id: 16, imgUrl: '/img/convenzioni/conv16.jpg', width: '250px', height: '150px', alt: 'cnvenzione 16'},
        {id: 17, imgUrl: '/img/convenzioni/logoCampa.gif', width: '250px', height: '150px', alt: 'cnvenzione 16'},

    ]

    let convenzioniPrimaRiga = data.filter(d => d.id < 5)
    let convenzioniSecondaRiga = data.filter(d => d.id > 4)


    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        setScreenWidth(window.innerWidth)
    }, []);

    return (
        <>
            <div className="container  m-auto flex py-16 flex-col ju items-center text-center">
                <div
                    data-aos="fade-down"
                    data-aos-duration="2000"
                    data-aos-once="true"
                    className="xl:mb-20 mb-10"
                >
                    <h1 className="mb-2">Le nostre <span className="text-secondary">convenzioni</span></h1>
                    <hr className="border border-gray-600 w-[100px] mb-5 mx-auto"/>
                    <h2 className="text-secondary text-xl md:text-2xl mb-2">
                        HAI UN FONDO DI ASSISTENZA SANITARIA INTEGRATIVA O IL TUO CONTRATTO DI LAVORO NE PREVEDE UNO?
                    </h2>
                    <p className='text-base md:text-lg mb-8'>
                        Il centro FISIOSTE è convenzionato con i maggiori fondi di Assistenza Sanitaria Integrativa, che coprono economicamente la maggior parte delle prestazioni effettuate.
                    </p>
                    <h2 className="text-secondary text-xl md:text-2xl mb-2">
                        COS’E’?
                    </h2>
                    <p className='text-base md:text-lg mb-8'>
                        Il Fondo di Assistenza Sanitaria Integrativa è lo strumento di welfare aziendale integrativo
                        nato per <br/>garantire ai cittadini un’adeguata e tempestiva copertura sanitaria, soprattutto
                        durante l’età lavorativa.
                    </p>
                    <h2 className="text-secondary text-xl md:text-2xl mb-2">
                        CHI RIGUARDA?
                    </h2>
                    <p className='text-base md:text-lg mb-8'>
                        L’assistenza sanitaria integrativa, può riguardare il singolo cittadino, o potrebbe essere già
                        prevista nel contratto collettivo di lavoro,<br/>dagli albi professionali, o da contratti
                        integrativi predisposti dalle singole aziende.
                    </p>
                    <h2 className="text-secondary text-xl md:text-2xl mb-2">
                        A COSA SERVE?
                    </h2>
                    <p  className='text-base md:text-lg mb-8'>
                        Con l’assistenza sanitari integrativa, puoi evitare le lunghe liste d’attesa e soprattutto avere
                        agevolazioni economiche sulle prestazioni; inoltre, i fondi offrono una copertura totale o
                        parziale delle spese sostenute presso la struttura convenzionata.
                    </p>

                </div>
                {/*<Carousel showArrows showIndicators={false} showStatus={false} showThumbs={false}
                          centerSlidePercentage={33}
                          autoPlay
                          infiniteLoop
                          centerMode={screenWidth >= 1440}
                >
                    {data.map(item => {
                        return(
                            <div key={item.id} className="flex items-center justify-center h-full">
                                <Image
                                    src={item.imgUrl}
                                    width={item.width}
                                    height={item.height}
                                    layout="intrinsic"
                                    alt={item.alt}
                                />
                            </div>
                        )
                    })}
                </Carousel>*/}
                <div className="grid md:grid-cols-4 md:gap-20 md:mb-8"
                     data-aos="zoom-in"
                     data-aos-duration="1000"
                     data-aos-once="true"
                >
                    {data.map(item => {
                        return (
                            <div key={item.id} className="flex items-center justify-center h-full">
                                <Image
                                    src={item.imgUrl}
                                    width={item.width}
                                    height={item.height}
                                    layout="intrinsic"
                                    alt={item.alt}
                                />
                            </div>
                        )
                    })}
                </div>
                {/*<div className="grid md:grid-cols-3 md:gap-20"
                     data-aos="zoom-in"
                     data-aos-duration="1000"
                     data-aos-once="true"
                >
                    {convenzioniSecondaRiga.map(item => {
                        return(
                            <div key={item.id} className="flex items-center justify-center h-full">
                                <Image
                                    src={item.imgUrl}
                                    width={item.width}
                                    height={item.height}
                                    layout="intrinsic"
                                    alt={item.alt}
                                />
                            </div>
                        )
                    })}
                </div>*/}
                <h2 className="text-center md:mt-20 mt-10"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-once="true"
                >Elenco in continuo aggiornamento</h2>
            </div>
        </>
    )

}