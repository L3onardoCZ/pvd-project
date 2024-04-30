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
  const decisiveHeight = Math.max(
    document.body.offsetHeight,
    document.documentElement.scrollHeight
  );
  const rotate = useTransform(scrollY, [0, decisiveHeight], [0, 100]);
  const opacity = useTransform(scrollY, [0, decisiveHeight], [0, 0.2]);
  const translateY = useTransform(scrollY, [0, decisiveHeight], [0, -500])
  const translateX = useTransform(scrollY, [0, decisiveHeight], [0, 100])


  return (
    <div className="background-letters">
      {Array.from({ length: 100 }).map((_, index) => {
        const randomScale = getRandomNumberInRange(0.5, 1.5); 
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
          >
            {getRandomLetter()}
          </motion.p>
        );
      })}
    </div>
  );
}

export default BackgroundLetters;
