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


  return (
    <>
      <title>Domů</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="PVD-project je webová aplikace, která slouží k procvičování Vaší klávesnicové gramotnosti." />
      <meta name="keywords" content="psaní všemi deseti, psani vsemi deseti, PVD, PVD-PROJECT, pvd-project, all ten fingers" />
      <Header/>
      <Typography />
      <CardSection />
      <Footer />
      <BackgroundLetters />

    </>
  );
}
