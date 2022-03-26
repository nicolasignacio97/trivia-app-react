import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Conocimiento } from '../components/Conocimiento';
import { Geografia } from '../components/Geografia';
import { HistoriaYModa } from '../components/HistoriaYModa';
import { Main } from '../components/Main';
import { PeliculasYTv } from '../components/PeliculasYTv';
export const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="historiaModa" element={<HistoriaYModa />} />
                <Route path="geografia" element={<Geografia />} />
                <Route path="peliculasytv" element={<PeliculasYTv />} />
                <Route path="conocimientogeneral" element={<Conocimiento />} />
            </Routes>
        </div>
    )
}
