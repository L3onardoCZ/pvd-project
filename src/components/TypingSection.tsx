// @ts-nocheck
"use client";

import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import texts from "./texts.json"; 
import "./typingsection.css";
import { useRouter } from 'next/navigation';
import axios from "axios";

export default function TypingSection({isLoggedIn}) {

    const handleReload = () => {
        window.location.reload();
    }

    axios.defaults.withCredentials = true;

    /* tohle si kdyžtak zakomentářuj */
    const router = useRouter();

    useEffect(() => {
      if (isLoggedIn == false) {
        router.push('/');
      }
    }, [isLoggedIn]);
    /* tohle si kdyžtak zakomentářuj */
    const [hasError, setHasError] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);
    const [typedText, setTypedText] = useState<string>("");
    const [timeElapsed, setTimeElapsed] = useState<number>(0);
    const [timerRunning, setTimerRunning] = useState<boolean>(false);
    const totalTextLength: number = 200;
    const [currentText, setCurrentText] = useState<string>(""); 
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const[isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const randomIndex: number = Math.floor(Math.random() * texts.length);
        setCurrentText(texts[randomIndex]);
    }, []); 

    useEffect(() => {
        if (progress === 0) {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
            setTimeElapsed(0);
            setTimerRunning(false);
        } else if (progress === 100 && timerRef.current) {
            clearInterval(timerRef.current);
            setTimerRunning(false);
            zapsatVysledek();
        }
    }, [progress]);

    

    const startTimer = () => {
        if (!timerRunning) {
            setTimerRunning(true);
            const startTime = Date.now() - timeElapsed * 10;
            timerRef.current = setInterval(() => {
                const currentTime = Date.now();
                const elapsedTime = Math.floor((currentTime - startTime) / 10);
                setTimeElapsed(elapsedTime);
            }, 10);
        }
    };

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const typed: string = event.target.value;
        setTypedText(typed);
    
        const matchedText: string[] = typed.split(" ");
        let matchedLength: number = 0;
        let hasError = false;
    
        for (let i = 0; i < matchedText.length; i++) {
            if (matchedText[i] === currentText.split(" ")[i]) {
                matchedLength += matchedText[i].length + 1;
            } else {
                hasError = true;
                break;
            }
        }
    
        const calculatedProgress: number = (matchedLength / currentText.length) * 100;
        setProgress(calculatedProgress > 100 ? 100 : calculatedProgress);
    
        if (calculatedProgress > 0) {
            startTimer();
        }
    
        setHasError(hasError);
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
        const minutes: number = Math.floor(time / 6000); 
        const seconds: number = Math.floor((time % 6000) / 100); 
        const centiseconds: number = time % 100; 
        return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}.${centiseconds < 10 ? "0" : ""}${centiseconds}`;
    };

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const zapsatVysledek = () => {
        
        if((100 / (timeElapsed / 6000)).toFixed(2) <= 300) {
            let wpm = (100 / (timeElapsed / 6000)).toFixed(2);
            let data = {
                "timeElapsed": timeElapsed / 6000,
                "wpm": wpm
            };

            axios.post("http://localhost/pvd-project/server/stats_upload.php", data)
                .then(function(response) {
                    console.log(response.data);
                    setIsVisible(true);
                })
                .catch(function(error) {
                    console.error(error);
                    setIsVisible(true);
                    alert("Nelze se připojit k serveru.");
                });
        } else setIsVisible(true);
    };

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
                    className="text-xl pattern" style={textContainerStyle}
                >
                    {renderText()}
                </motion.p>

                <motion.div
                    ref={ref}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
                    transition={{ type: "spring", stiffness: 120, duration: 0.5, delay: 0.4}}
                >
                    <Textarea
                    className={`textarea resize-none h-[200px] text-xl transition duration-500 ease-in-out`}
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
                    className="text-lg"
                >
                    Uplynulý čas: {formatTime(timeElapsed)}
                </motion.p>
                {isVisible && (((100 / (timeElapsed / 6000)).toFixed(2) > 300) ? <p>Nepodváděj!</p> : <p>WPM: {(100 / (timeElapsed / 6000)).toFixed(2)}</p>)}

                {isVisible && <button onClick={handleReload}>Další text</button>}
            </div>
            
        </div>
    );
}
