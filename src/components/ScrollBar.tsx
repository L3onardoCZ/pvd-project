"use client"

import { motion, useScroll } from "framer-motion"

export default function ScrollBar() {
    const { scrollYProgress } = useScroll();
    
    return (
        <>
            <div className="z-40 bg-white">
                <motion.div style={{ scaleX: scrollYProgress }} />  
            </div>
        </>
      
    )
}

