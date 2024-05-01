"use client"

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./backgroundletters.css";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456798";

function getRandomLetter(): string {
  return letters[Math.floor(Math.random() * letters.length)];
}

function getRandomNumberInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function BackgroundLetters(): JSX.Element {
  const { scrollY } = useScroll();


  const opacity = useTransform(scrollY, [0, 1000], [0.1, 0.4]);
  const translateY = useTransform(scrollY, [0, 1000], [0, -300]);
  const translateX = useTransform(scrollY, [0, 1000], [0, 20]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const [randomLetters, setRandomLetters] = useState<string[]>([]);

  useEffect(() => {
    const generatedLetters = Array.from({ length: 50 }, () => getRandomLetter());
    setRandomLetters(generatedLetters);
  }, []); 

  return (
    <div className="background-letters">
      {randomLetters.map((letter, index) => {
        const randomScale = getRandomNumberInRange(0.4, 0.8);
        const randomYOffset = getRandomNumberInRange(-50, 50);
        const randomXOffset = getRandomNumberInRange(-50, 50);
        const randomRotate = getRandomNumberInRange(-90, 90);
        const randomColor = getRandomNumberInRange(180, 360);

        return (
          <motion.div
            ref={ref}
            initial={{y: 100, opacity: 0 }}
            animate={{y: inView ? 0 : 100,opacity: inView ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 3 }}


          >
            <motion.p
              key={index}
              style={{
                fontSize: `${randomScale * 3}rem`,
                top: `${80 + randomYOffset}vh`,
                left: `${50 + randomXOffset}vw`,
                rotate: `${randomRotate}deg`,
                color: `rgb(180, 180, ${randomColor})`,
                opacity: opacity,
                translateY: translateY,
                translateX: translateX,

              }}
              ref={ref}
              initial={{ y: 200, opacity: 0.01}}
              animate={{ y: -200, opacity: 0.1}}
              transition={{
                y: { duration: 30, repeat: Infinity, repeatType: "reverse" },
              }}


            >
              {letter}
            </motion.p>
          </motion.div>
        );
      })}
    </div>
  );
}

export default BackgroundLetters;
