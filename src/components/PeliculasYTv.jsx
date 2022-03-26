import React from 'react'
import { categorias } from '../data/preguntas'
import { Base } from './Base';

export const PeliculasYTv = () => {
    const preguntas = categorias[1].preguntas;
    return (
        <div>
            <Base preguntas={preguntas}/>
        </div>
    )
}
