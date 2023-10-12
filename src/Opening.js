import './Opening.css';
import React from 'react';
import {  motion, useMotionValue, useTransform, animate} from "framer-motion"
import { useEffect } from "react";


export default function Opening() {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, 100, { duration: 5 });

        return animation.stop;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <div className='Aop'>
        <motion.ex 
            initial={{ opacity: 0 }}
            animate={{opacity:1}}>
                {rounded}
        </motion.ex>;
        </div>
}

