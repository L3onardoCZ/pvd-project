// @ts-nocheck
"use client"

import AccountTab from "./AccountTab"
import Leaderboard from "./Leaderboard"
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
   


export default function Dashboard({isLoggedIn}){
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });


    return(
        <>
            <motion.div 
                ref={ref}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 120, duration: 0.5}}
            
            className="w-full flex justify-center gap-8">
                <p>Placement</p>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    2
                </h1>
                <p>Top WPM</p>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    350
                </h1>
                <p>Excercises</p>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    24
                </h1>
            </motion.div>
            <motion.div 
                ref={ref}
                initial={{ y: 100 , opacity: 0}}
                animate={{ y: inView ? 0 : 100, opacity: inView? 1 : 0 }}
                transition={{ type: "spring", stiffness: 120, duration: 0.5, delay: 0.2}}
                
            
            className="w-full flex justify-center gap-8 mt-8">
                <AccountTab isLoggedIn={isLoggedIn}/>
                <Leaderboard/>
            </motion.div>
        </>
    )
}