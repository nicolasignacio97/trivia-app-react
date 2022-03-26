import React from 'react'
import { categorias } from '../data/preguntas';
import { Base } from './Base'

export const HistoriaYModa = () => {
    const preguntas = (categorias[0].preguntas);
    return (
        <div>
            <Base preguntas={preguntas} />
        </div>
    )
}
