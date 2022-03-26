import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Geografia } from '../components/Geografia';
import { HistoriaYModa } from '../components/HistoriaYModa';
import { Main } from '../components/Main';
export const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="historiaModa" element={<HistoriaYModa />} />
                <Route path="geografia" element={<Geografia />} />
            </Routes>
        </div>
    )
}
