import Image from "next/image";
import React from 'react'; 

import Header from "../components/Header";
import Footer from "../components/Footer";
import CardSection from "../components/CardSection";
import Typography from "../components/Typography";



export default function Home() {
  return (
    <>
      <Header />
      <Typography />
      <CardSection />
      <Footer />
    </>
  );
}
