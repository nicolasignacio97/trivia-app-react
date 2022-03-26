import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';


export const Base = ({ preguntas }) => {
    const navigate = useNavigate();

    const [puntos, setpuntos] = useState(0)
    const [contador, setcontador] = useState(0)

    const pregunta = preguntas[contador].pregunta;
    const respuestas = preguntas[contador].respuestas;

    const handleanswer = (opcion) => {
        if (opcion === preguntas[contador].correcta) {
            setpuntos(puntos + 1);
            setcontador(contador + 1)
        } else {
            setcontador(contador + 1)
        }
    }
    const puntosTotales = preguntas.length - 1;
    useEffect(() => {
        if (contador === puntosTotales) {
            if (puntos === 1) {
                Swal.fire(`Obtuviste ${puntos} punto de ${puntosTotales}`)
                navigate('/')
            } else {
                Swal.fire(`Obtuviste ${puntos} puntos de ${puntosTotales}`)
                navigate('/')
            }
        }
    }, [contador, navigate, puntosTotales, puntos])

    return (
        <>
            <div className="container mt-5">
                <div className="row mb-5">
                    <div className="col">
                        <h1 className="text-center fs-1">Trivia React</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className="text-center mb-5 fs-1">{pregunta}</h3>
                    </div>
                </div>
            </div>
            <div className="container">

                <div className="row preguntas">
                    {
                        respuestas.map(({ opcion, color }) => (
                            <div className="col-6 mt-2" key={opcion}>
                                <button
                                    type="button"
                                    className={`btn ${color} w-100 h-100 text-light fs-3`}
                                    onClick={() => handleanswer(opcion)}
                                >{opcion}</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
