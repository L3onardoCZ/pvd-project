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


export default function Home() {

  const[isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios.post(String(sessionStorage.getItem("url") + "/server/isLoggedIn.php"))
        .then(function(response) {
            console.log(response.data);
            setIsLoggedIn(response.data);
        })
        .catch(function(error) {
            console.log(error);
            setIsLoggedIn(false);
        })
}, []);

  useEffect(() => {
    sessionStorage.setItem("url", "http://localhost/pvd-project")
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn}/>
      <Typography />
      <CardSection />
      <Footer />
      <BackgroundLetters />

    </>
  );
}
