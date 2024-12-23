import React from 'react';

interface TerapieFisicheProps {
}

export const TerapieFisiche: React.FC<TerapieFisicheProps> = ({}) => {
    return (
        <>
            <p className="text-[18px] mb-2 mt-2"><span className="font-bold">Ultrasuono:</span> in campo terapeutico gli
                ultrasuoni sono ottenuti in modo artificiale sfruttando le proprietà di alcuni cristalli minerali
                sottoposti all’azione di un campo elettrico.
            </p>
            <p className="text-[18px] mb-2 ">L’irradiazione ultrasonica genera, quindi, un micro massaggio di notevole
                intensità, agendo in profondità nei tessuti. Da questa vibrazione, viene generato del calore, che genera
                effetto termico.
            </p>
            <hr className='my-10'/>
            
        </>
    )

}