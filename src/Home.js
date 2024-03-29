import React from "react";
import {Route, Routes, useLocation} from 'react-router-dom'
import About from "./About";
import './Home.css';
import Contact from "./Contact";
import Body from "./Body";
import Work from "./work";
import { AnimatePresence } from "framer-motion";
export default function Home() {
    const location = useLocation();
    return <>
        
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path='/*' element={<Body/>}/>
                    <Route path='/About' element={<About/>}/>
                    <Route path='/Contact' element={<Contact/>}/>
                    <Route path='/Work' element={<Work/>}/>
                </Routes>
            </AnimatePresence>
            
            
         
    </>
}