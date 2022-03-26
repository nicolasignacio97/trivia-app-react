import React from 'react'
import { categorias } from '../data/preguntas';
import { Base } from './Base';

export const Geografia = () => {
    const preguntas = (categorias[2].preguntas);

    return (
        <div>
            <Base preguntas={preguntas} />
        </div>
    )
}
