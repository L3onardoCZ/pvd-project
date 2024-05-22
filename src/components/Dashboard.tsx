// @ts-nocheck
"use client"

import AccountTab from "./AccountTab"
import Leaderboard from "./Leaderboard"
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Dashboard({isLoggedIn}){

    const[topWpm, setTopWpm] = useState();
    const[exercises, setExercises] = useState();
    const[avgWpm, setAvgWpm] = useState();

    useEffect(() => {
        axios.post("http://localhost/pvd-project/server/stats_load.php")
            .then(function(response) {
                console.log(response.data);
                setTopWpm(response.data.maxWpm);
                setExercises(response.data.pocetCviceni);
                setAvgWpm(response.data.avgWpm);
            })
            .catch(function(error) {
                console.error(error);
            })
    }, [])

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
                <p>Největší WPM:</p>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    {topWpm}
                </h1>
                <p>Průměrné WPM</p>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    {avgWpm}
                </h1>
                <p>Počet cvičení</p>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    {exercises}
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