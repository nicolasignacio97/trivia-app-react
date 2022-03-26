import React from 'react'
import { categorias } from '../data/preguntas';
import { Base } from './Base';

export const Conocimiento = () => {
    const preguntas = categorias[3].preguntas;
    return (
        <div>
            <Base preguntas={preguntas} />
        </div>
    )
}
