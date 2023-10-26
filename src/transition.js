import React from "react";
import {motion} from 'framer-motion';
const transition = (OgComponent) => {
    return () => (
        <>
        <OgComponent/>
        <motion.div
            className="down"
            initial={{scaleY:0, zIndex:20}}
            animate={{scaleY:0, zIndex:20}}
            exit={{scaleY:1, zIndex:1}}
            transition={{duration:1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
            className="up"
            initial={{opacity:1, zIndex:20}}
            animate={{opacity:0, zIndex:3}}
            exit={{opacity: 0, zIndex:1, scaleY:0}}
            transition={{duration:1, ease: [0.22, 1, 0.36, 1]}}
        />
        </>
    )
}
export default transition;