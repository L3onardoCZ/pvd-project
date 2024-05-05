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
      <Header/>
      <Typography />
      <CardSection />
      <Footer />
      <BackgroundLetters />

    </>
  );
}
