import React from 'react';
import {MySelect} from "../../../../shared/MySelect";
import DatePicker from "react-datepicker";

interface PrenotaAppuntamentoMobileProps {
    options: { id: number, value: string }[],
    setService: (e: string) => void,
    startDate: Date,
    setStartDate: (d: Date) => void,
    setDataPrenotazione: (d: string) => void,
    setName: (n: string) => void,
    setEmail: (e: string) => void,
    email: string
    setEmailError: (e: boolean) => void,
    emailError: boolean,
    loading: boolean,
    inviaEmail: () => void,
    numero: string,
    setNumero: (n:string) => void
}

export const PrenotaAppuntamentoMobile: React.FC<PrenotaAppuntamentoMobileProps> = (
    {
        options, setService, startDate, setStartDate, setDataPrenotazione, setName, setEmail,
        email, setEmailError, emailError, loading, inviaEmail, numero, setNumero
    }
) => {
    return(
        <div className="bg-primary w-full xl:hidden md:px-20 py-8">
            {/*<h2 className="text-white text-2xl text-center mt-48 sm:mt-16">Prenota un appuntamento</h2>*/}


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="m-auto">
                    <MySelect options={options}
                              classNameButton="rounded-full p-3 w-[300px] lg:w-[280px]" backgroundColor="#6b84c7"
                              textColor="#264193" backgroundOptionColor="#6b84c7"
                              backgroundColorOptionsContainer="#e1edff"
                              placeholder="Seleziona un servizio"
                              onChange={(e) => setService(e.value)}
                    />
                </div>
                <div className="w-[300px] lg:w-[280px] m-auto">
                    <DatePicker
                        className="rounded-full w-full p-3 text-[14px] bg-[#6b84c7] text-white focus:outline-none"
                        dateFormat="dd/MM/YYY"
                        selected={startDate} onChange={(date: Date) => {
                        setStartDate(date)
                        setDataPrenotazione(date.toLocaleDateString())
                    }}/>
                </div>
                <div className="w-[300px] lg:w-[280px] m-auto">
                    <input
                        className="appearance-none rounded-full w-full p-3 text-[14px] bg-[#6b84c7] text-white focus:outline-none"
                        type="text"
                        id="nome"
                        placeholder="Nome e Cognome"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="w-[300px] lg:w-[280px] m-auto">
                    <input
                        className="appearance-none rounded-full w-full p-3 text-[14px] bg-[#6b84c7] text-white focus:outline-none"
                        type="number"
                        id="number"
                        placeholder="Numero Tel."
                        onChange={(e) => setNumero(e.target.value)}
                    />
                </div>
                <div className="relative w-[300px] lg:w-full  m-auto sm:col-span-2">
                    {loading && <span className="flex h-5 w-5 absolute right-0">
                                    <span
                                        className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-[#e1edff] opacity-75"/>
                                    <span className="relative inline-flex rounded-full h-5 w-5 bg-[#e1edff]"/>
                                </span>
                    }

                    <button
                        className='px-4 py-3 w-full rounded-full bg-secondary text-white font-bold hover:opacity-80'
                        onClick={() => {
                            (numero !== "") && inviaEmail()
                        }}
                    >
                        PRENOTA UN APPUNTAMENTO

                    </button>

                </div>
            </div>
        </div>
    )

}