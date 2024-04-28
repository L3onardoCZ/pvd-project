"use client"
import "./progressbar.css"


import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div className="progress-bar z-40" style={{ scaleX }} />

    </>
  );
}
