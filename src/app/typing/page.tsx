// @ts-nocheck
"use client"
import SmallHeader from "@/components/SmallHeader";
import SmallFooter from "@/components/SmallFooter";
import TypingSection from "@/components/TypingSection";
import axios from "axios";
import ScrollBar from "@/components/ScrollBar";
import { useState, useEffect } from "react";
import Dashboard from "@/components/Dashboard";


export default function typing(){

    const[isLoggedIn, setIsLoggedIn] = useState();
    const[prijmeni, setPrijmeni] = useState("");
    const[jmeno, setJmeno] = useState();
        useEffect(() => {
            axios.post("http://localhost/pvd-project/server/isLoggedIn.php")
                .then(function(response) {
                    console.log(response.data.boolean);
                    setIsLoggedIn(response.data.boolean);
                    setJmeno(response.data.jmeno);
                    setPrijmeni(response.data.prijmeni);
                })
                .catch(function(error) {
                    console.error(error);
                    setIsLoggedIn(false);
                })
        }, []);

    return(
        <>
            <title>Typing</title>
            <ScrollBar/>
            <SmallHeader isLoggedIn={isLoggedIn} jmeno={jmeno} prijmeni={prijmeni}/>
            <TypingSection isLoggedIn={isLoggedIn}/>
            <SmallFooter/>

        </>
    )
}