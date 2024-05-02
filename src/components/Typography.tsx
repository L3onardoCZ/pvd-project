"use client"

import React, { useState } from "react";
import "./textLeftRight.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import AnimatedTextWord from "./AnimatedTextWord";

export default function Typography() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <>
      <div className="flex w-full justify-center mt-6">
        <div className="flex max-w-[1000px]">
          <motion.div
            ref={ref1}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: inView1 ? 0 : -100, opacity: inView1 ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 120, duration: 0.5 }}
            className="textLeft h-32 text-right p-4"
          >
            <h3 className="font-bold">Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam eveniet mollitia aliquid cum voluptatem consequatur,
              magni animi dolorum soluta aspernatur, consequuntur nihil natus
              quos autem tempore, nobis a. Quia, numquam?
            </p>
          </motion.div>
          <motion.div
            ref={ref2}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: inView2 ? 0 : -100, opacity: inView2 ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 120, duration: 0.5 }}
            className="textRight mt-40 h-32 p-4"
          >
            <h3 className="font-bold">Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam eveniet mollitia aliquid cum voluptatem consequatur,
              magni animi dolorum soluta aspernatur, consequuntur nihil natus
              quos autem tempore, nobis a. Quia, numquam?
            </p>
          </motion.div>
        </div>
      </div>
      <div className="flex w-full justify-center mt-6">
        <div className="flex max-w-[1000px]">
          <motion.div
            ref={ref3}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: inView3 ? 0 : -100, opacity: inView3 ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 120, duration: 0.5 }}
            className="textLeft h-32 text-right p-4"
          >
            <h3 className="font-bold">Lorem ipsum</h3>
            <AnimatedTextWord text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam eveniet mollitia aliquid cum voluptatem consequatur,
              magni animi dolorum soluta aspernatur, consequuntur nihil natus
              quos autem tempore, nobis a. Quia, numquam?"/>
          </motion.div>
          <motion.div
            ref={ref4}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: inView4 ? 0 : -100, opacity: inView4 ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 120, duration: 0.5 }}
            className="textRight mt-40 h-32 p-4"
          >
            <h3 className="font-bold">Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam eveniet mollitia aliquid cum voluptatem consequatur,
              magni animi dolorum soluta aspernatur, consequuntur nihil natus
              quos autem tempore, nobis a. Quia, numquam?
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
