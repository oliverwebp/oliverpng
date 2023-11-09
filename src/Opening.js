import './Opening.css';
import React from 'react';
import {  cubicBezier, motion} from "framer-motion"


export default function Opening() {
    const floor1 = Math.floor(Math.random() * (40 - 20) + 20);
    const floor2 = Math.floor(Math.random() * (85-60) + 60);
    return <>
    <div className='bgop'>
        <div className='nom'>
            <p>Oliver Nguyen</p>
        </div>
        <div className='pnom'>
            <p>Portfolio</p>
        </div>
    <motion.div
        className='box' 
        animate={{
            y: ["calc(0vh)", "calc(0vh)", "calc("+floor1+"vh)","calc("+floor1+"vh)", "calc("+floor2+"vh)", "calc("+floor2+"vh)", "calc(93vh)", "calc(93vh)"],
        }}
        transition={{
            duration: 5,
            ease: cubicBezier(0.37, 0, 0.63, 1),
        }}
    >
        <motion.p className='colorfloor'
        animate = {{
            y: ["calc(0em)", "calc(0em)", "calc(-1.3em)", "calc(-1.3em)", "calc(-2.5em)", "calc(-2.5em)", "calc(-3.7em)", "calc(-3.7em)"]
        }}
            transition={{
                duration: 5,
                ease: "easeInOut",
            }}
        >
            0%
            <br></br>
            {floor1}%
            <br></br>
            {floor2}%
            <br></br>
            100%
        </motion.p>
    </motion.div>
    </div>
    </>
}

