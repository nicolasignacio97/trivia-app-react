import React from 'react'
import { useNavigate } from 'react-router-dom';
import { categorias } from '../data/preguntas';



export const Main = () => {
    const navigate = useNavigate();
    const handleCategoria = (name) => {
        if (name === 'Historia y Moda') {
            navigate('historiaModa')
        } else if (name === 'Geografía') {
            navigate('geografia')
        }
        else if (name === 'Películas y TV') {
            navigate('peliculasytv')
        }
        else if (name === 'Conocimiento general') {
            navigate('conocimientogeneral')
        }
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row mb-5">
                    <div className="col">
                        <h1 className="text-center">Trivia React</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className="text-center mb-5">Selecciona una Categoría</h3>
                    </div>
                </div>
            </div>
            <div className="container">

                <div className="row preguntas">
                    {
                        categorias.map(({ nombre, color }) => (
                            <div className="col-6 mt-2" key={nombre}>
                                <button
                                    type="button"
                                    className={`btn ${color} w-100 h-100 text-light fs-3`}
                                    onClick={() => handleCategoria(nombre)}
                                >{nombre}</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>

    )
}
