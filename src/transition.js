import React from "react";
import {motion} from 'framer-motion';
const transition = (OgComponent) => {
    return () => (
        <>
        <OgComponent/>
        <motion.div
            className="down"
            initial={{opacity:0, scaleY:0, zIndex:20}}
            animate={{opacity:1,scaleY:0, zIndex:20}}
            exit={{opacity:1, scaleY:1, zIndex:20}}
            transition={{duration:1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
            className="up"
            initial={{opacity:1, zIndex:20}}
            animate={{
                opacity:0,
                zIndex:3}}
            exit={{opacity: 0, zIndex:20, scaleY:0}}
            transition={{duration:1, ease: [0.22, 1, 0.36, 1]}}
        />
        </>
    )
}
export default transition;