// @ts-nocheck
"use client"
import SmallHeader from "@/components/SmallHeader";
import SmallFooter from "@/components/SmallFooter";
import Dashboard from "@/components/Dashboard";
import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import ScrollBar from "@/components/ScrollBar";


export default function Account(){

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
                    console.log(error);
                    setIsLoggedIn(false);
                })
        }, []);

    return(
        <>
            <title>Account</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="PVD-project je webová aplikace, která slouží k procvičování Vaší klávesnicové gramotnosti." />
            <meta name="keywords" content="psaní všemi deseti, psani vsemi deseti, PVD, PVD-PROJECT, pvd-project, all ten fingers" />
            <ScrollBar/>
            <SmallHeader isLoggedIn={isLoggedIn} jmeno={jmeno} prijmeni={prijmeni}/>
            <Dashboard isLoggedIn={isLoggedIn}/>
            <SmallFooter/>
        </>
    )
}
