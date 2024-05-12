// @ts-nocheck
"use client";

import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import texts from "./texts.json"; 
import "./typingsection.css";
import { useRouter } from 'next/navigation';

export default function TypingSection({isLoggedIn}) {
    /* tohle si kdyžtak zakomentářuj */
    const router = useRouter();

    useEffect(() => {
      if (isLoggedIn == false) {
        router.push('/');
      }
    }, [isLoggedIn]);
    /* tohle si kdyžtak zakomentářuj */
    const [progress, setProgress] = useState<number>(0);
    const [typedText, setTypedText] = useState<string>("");
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
    const [timeElapsed, setTimeElapsed] = useState<number>(0);
    const totalTextLength: number = 200;
    const [currentText, setCurrentText] = useState<string>(""); 

    useEffect(() => {

        const randomIndex: number = Math.floor(Math.random() * texts.length);
        setCurrentText(texts[randomIndex]);
    }, []); 

    useEffect(() => {
        if (progress > 0 && progress < 100) {
            const startTime = Date.now(); // Začáteční čas
            const interval = setInterval(() => {
                const currentTime = Date.now(); // Aktuální čas
                const elapsedTime = Math.floor((currentTime - startTime) / 10); // Uplynulý čas v setinách sekundy
                setTimeElapsed(elapsedTime);
            }, 10); // Interval spouštěný každých 10 milisekund (pro přesnost setin sekundy)
            setTimer(interval);
        } else {
            if (timer) clearInterval(timer);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [progress]);

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const typed: string = event.target.value;
        setTypedText(typed);

        const matchedText: string[] = typed.split(" ");
        let matchedLength: number = 0;

        for (let i = 0; i < matchedText.length; i++) {
            if (matchedText[i] === currentText.split(" ")[i]) {
                matchedLength += matchedText[i].length + 1;
            } else {
                break;
            }
        }

        const calculatedProgress: number = (matchedLength / currentText.length) * 100;
        setProgress(calculatedProgress > 100 ? 100 : calculatedProgress);
    };

    const renderText = (): JSX.Element[] => {
        const words: string[] = currentText.split(" ");
        return words.map((word: string, index: number) => {
            const opacity: number = index * (100 / words.length) <= progress ? 1 : 0.5;
            const transition: string = "opacity 0.5s ease"; 
            return (
                <span key={index} style={{ opacity: opacity, transition: transition }}>
                    {word}{" "}
                </span>
            );
        });
    };

    const textContainerStyle: React.CSSProperties = {
        transition: "opacity 0.5s ease",
    };

    const formatTime = (time: number): string => {
        const minutes: number = Math.floor(time / 6000); // 100 setin sekundy = 1 minuta
        const seconds: number = Math.floor((time % 6000) / 100); // Zbývající část pro sekundy
        const centiseconds: number = time % 100; // Setiny sekundy
        return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}.${centiseconds < 10 ? "0" : ""}${centiseconds}`;
    };

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });

    return (
        <div className="w-full flex justify-center">
            <div className="w-1/2 flex flex-col justify-center gap-4">
                <motion.div
                    ref={ref}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
                    transition={{ type: "spring", stiffness: 120, duration: 0.5}}
                
                >
                    <Progress value={progress} />
                </motion.div>

                <motion.p 
                    ref={ref}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
                    transition={{ type: "spring", stiffness: 120, duration: 0.5, delay: 0.2}}
                
                
                className="text-xl pattern" style={textContainerStyle}>
                    {renderText()}
                </motion.p>

                <motion.div
                ref={ref}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 120, duration: 0.5, delay: 0.4}}
                
                >
                    <Textarea
                    className="textarea resize-none h-[200px] text-xl"
                    onChange={handleTextChange}
                    placeholder={currentText}
                    disabled={progress >= 100}
                    
                    />
                </motion.div>

                <motion.p 
                ref={ref}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 120, duration: 0.5, delay: 0.6}}
                
                className="text-lg">Time Elapsed: {formatTime(timeElapsed)}</motion.p>

            </div>
        </div>
    );
}
