// @ts-nocheck
"use client"

import Image from "next/image";
import React, { use, useEffect, useState } from 'react'; 
import BackgroundLetters from "../components/BackgroundLetters";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardSection from "../components/CardSection";
import Typography from "../components/Typography";
import axios from "axios";
import HeroParallaxDemo from "@/components/HeroParallax";


export default function Home() {

  const[isLoggedIn, setIsLoggedIn] = useState(false);
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

  return (
    <>
      <title>Domů</title>
      <Header isLoggedIn={isLoggedIn} jmeno={jmeno} prijmeni={prijmeni}/>
      <Typography />
      <CardSection />
      <Footer />
      <BackgroundLetters />

    </>
  );
}
