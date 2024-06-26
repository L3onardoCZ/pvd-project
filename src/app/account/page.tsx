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
                    console.error(error);
                    setIsLoggedIn(false);
                })
        }, []);

    return(
        <>
            <title>Account</title>
            <ScrollBar/>
            <SmallHeader isLoggedIn={isLoggedIn} jmeno={jmeno} prijmeni={prijmeni}/>
            <Dashboard isLoggedIn={isLoggedIn} jmeno={jmeno} prijmeni={prijmeni}/>
            <SmallFooter/>
        </>
    )
}
