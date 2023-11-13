import React from "react";
import {Route, Routes, useLocation} from 'react-router-dom'
import About from "./About";
import './Home.css';
import Footer from "./Footer";
import Body from "./Body";
import { AnimatePresence } from "framer-motion";
export default function Home() {
    const location = useLocation();
    return <>
        <div className='poggywoggy'>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path='/*' element={<Body/>}/>
                    <Route path='/About' element={<About/>}/>
                    <Route path='/Contact' element={<Footer/>}/>
                </Routes>
            </AnimatePresence>
            
            
         </div>
    </>
}