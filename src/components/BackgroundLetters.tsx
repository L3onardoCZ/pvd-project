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

  const rotate = useTransform(scrollY, [0, 1000], [0, 100]);
  const opacity = useTransform(scrollY, [0, 1000], [0.1, 0.4]);
  const translateY = useTransform(scrollY, [0, 1000], [0, -300]);
  const translateX = useTransform(scrollY, [0, 1000], [0, 20]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const [randomLetters, setRandomLetters] = useState<string[]>([]);

  useEffect(() => {
    const generatedLetters = Array.from({ length: 80 }, () => getRandomLetter());
    setRandomLetters(generatedLetters);
  }, []); 

  return (
    <div className="background-letters">
      {randomLetters.map((letter, index) => {
        const randomScale = getRandomNumberInRange(0.4, 1);
        const randomYOffset = getRandomNumberInRange(-50, 50);
        const randomXOffset = getRandomNumberInRange(-50, 50);

        return (
          <motion.p
            key={index}
            style={{
              fontSize: `${randomScale * 3}rem`,
              top: `${80 + randomYOffset}vh`,
              left: `${50 + randomXOffset}vw`,
              rotate: rotate,
              opacity: opacity,
              translateY: translateY,
              translateX: translateX,
            }}
            ref={ref}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: inView ? 0 : 200, opacity: inView ? 0.2 : 0 }}
            transition={{
              y: { duration: 30, repeat: Infinity, repeatType: "reverse" },
            }}
          >
            {letter}
          </motion.p>
        );
      })}
    </div>
  );
}

export default BackgroundLetters;
