import React from 'react';
import {News} from "../../../data/news";
import Link from "next/link";

interface GrigliaNewsProps {
    news: News[]
}

export const GrigliaNews: React.FC<GrigliaNewsProps> = ({news}) => {
    return(
        <>
            <div className="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 py-2 mb-10">
                {news.filter(n => n.categoria !== "Info").map(n => {
                    return (
                        <div key={n.id}
                             className="shadow-xl flex flex-col bg-[#e1edff] justify-between rounded-2xl"
                             data-aos="fade-in"
                             data-aos-duration="1000"
                             data-aos-once="true"
                             data-aos-delay={n.id * 100}
                        >
                            <Link href={`/news/${n.id}`}>
                            <div className=" h-80 rounded-t-2xl bg-center"
                                 style={{
                                     backgroundImage: `url(${n.imgUrl})`,
                                     backgroundSize: 'cover',
                                     backgroundRepeat: "no-repeat"
                                 }}
                            /></Link>
                            <div className="flex flex-col p-4 ">
                                <h2 className="text-secondary">{n.titolo}</h2>
                                <hr className="border-t-2 border-secondary mt-2 mb-2"/>
                                <p>{(n.descrizione.length > 180) ? n.descrizione.substring(0, 180) + '...' : n.descrizione}</p>
                                <Link href={`/news/${n.id}`}>
                                    <button className="text-secondary py-1 mt-5 rounded-full border-2 border-secondary hover:cursor-pointer hover:bg-secondary hover:text-white">CONTINUA LA LETTURA</button>
                                </Link>
                            </div>
                        </div>

                    )
                })}
            </div>
        </>
    )

}