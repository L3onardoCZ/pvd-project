"use client"

import React from 'react';
import "./card.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface CardProps {
  heading: string;
  paragraph: string;
}

const Card: React.FC<CardProps> = ({ heading, paragraph }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });


  return (
    <motion.div 
    ref={ref}
            initial={{y: 100, opacity: 0 }}
            animate={{y: inView ? 0 : 100,opacity: inView ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
    
    className="div">
      <h2>{heading}</h2>
      <p>{paragraph}</p>
    </motion.div>
  );
}

export default Card;