"use client";

import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import "./typingsection.css";

export default function TypingSection() {
    const [progress, setProgress] = useState<number>(0);
    const [typedText, setTypedText] = useState<string>("");
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
    const [timeElapsed, setTimeElapsed] = useState<number>(0);
    const totalTextLength: number = 200;
    const text: string =
        "The Smiths live in a house. They have a living room. They watch TV in the living room. The father cooks food in the kitchen. They eat in the dining room. The house has two bedrooms. They sleep in the bedrooms. They keep their clothes in the closet. There is one bathroom. They brush their teeth in the bathroom.";

    useEffect(() => {
        if (progress > 0 && progress < 100) {
            const interval = setInterval(() => {
                setTimeElapsed((prevTimeElapsed) => prevTimeElapsed + 1);
            }, 1000);
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
            if (matchedText[i] === text.split(" ")[i]) {
                matchedLength += matchedText[i].length + 1;
            } else {
                break;
            }
        }

        const calculatedProgress: number = (matchedLength / text.length) * 100;
        setProgress(calculatedProgress > 100 ? 100 : calculatedProgress);
    };

    const renderText = (): JSX.Element[] => {
        const words: string[] = text.split(" ");
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
        const minutes: number = Math.floor(time / 60);
        const seconds: number = time % 60;
        return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    return (
        <div className="w-full flex justify-center">
            <div className="w-1/2 flex flex-col justify-center gap-4">
                <Progress value={progress} />
                <p className="text-xl pattern" style={textContainerStyle}>
                    {renderText()}
                </p>
                <Textarea
                    className="textarea resize-none h-[200px] text-xl"
                    onChange={handleTextChange}
                    placeholder={text}
                    disabled={progress >= 100}
                />

                    <p className="text-lg">Time Elapsed: {formatTime(timeElapsed)}</p>

            </div>
        </div>
    );
}
