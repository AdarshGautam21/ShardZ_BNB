import React from 'react'
import Header from "@/components/main/Header";
import Hero from "@/components/main/Hero";
import Text from "@/components/main/component1";
import Features from '../components/main/Features';
import "@/app/globals.css";
function HomePage() {
  return (
    <div className="bg-black h-full pt-[3vw]" >
        <Header/>
        <Text/>
        <Hero/>
        <Features/>

    </div>

  )
}

export default HomePage