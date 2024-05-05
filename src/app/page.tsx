"use client"

import Image from "next/image";
import React, { use, useEffect } from 'react'; 
import BackgroundLetters from "../components/BackgroundLetters";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardSection from "../components/CardSection";
import Typography from "../components/Typography";



export default function Home() {

  useEffect(() => {
    sessionStorage.setItem("url", "http://localhost/pvd-project")
  }, []);

  return (
    <>
      <Header />
      <Typography />
      <CardSection />
      <Footer />
      <BackgroundLetters />

    </>
  );
}
