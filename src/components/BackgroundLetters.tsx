"use client"

import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./backgroundletters.css";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456798";

function getRandomLetter(): string {
  return letters[Math.floor(Math.random() * letters.length)];
}

function getRandomNumberInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function BackgroundLetters(): JSX.Element {
  const { scrollY } = useViewportScroll();

  const rotate = useTransform(scrollY, [0, document.documentElement.clientHeight], [0, 100]);
  const opacity = useTransform(scrollY, [0, document.documentElement.clientHeight], [0, 0.3]);
  const translateY = useTransform(scrollY, [0, document.documentElement.clientHeight], [0, 200])

  const rotateSpring = { type: "spring", stiffness: 50 };
  const opacityBounce = { type: "spring", stiffness: 300, damping: 10 };

  return (
    <div className="background-letters">
      {Array.from({ length: 100 }).map((_, index) => {
        const randomScale = getRandomNumberInRange(0.5, 1.5); // Náhodná velikost
        const randomYOffset = getRandomNumberInRange(-50, 50); // Náhodný posun nahoru a dolů
        const randomXOffset = getRandomNumberInRange(-50, 50); // Náhodný posun doleva a doprava
        

        return (
          <motion.p
            key={index}
            style={{
              fontSize: `${randomScale * 3}rem`, // Změna velikosti podle náhodného faktoru
              top: `${50 + randomYOffset}vh`, // Náhodný posun nahoru a dolů
              left: `${50 + randomXOffset}vw`, // Náhodný posun doleva a doprava
              rotate: rotate, // Otáčení během scrollování
              opacity: opacity, // Změna opacity během scrollování
              translateY: translateY,
            }}
            transition={{ rotate: rotateSpring, opacity: opacityBounce }}
          >
            {getRandomLetter()}
          </motion.p>
        );
      })}
    </div>
  );
}

export default BackgroundLetters;
