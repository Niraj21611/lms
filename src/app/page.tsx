"use client"

import Hero from "@/components/Hero";
import PopularCourses from "@/components/Courses";
import Features from "@/components/Features";
import KnowledgeDeliverySection from "@/components/KnowledgeDeliverySection";
import MonetizeSection from "@/components/MonetizeSection";
import UpscaleHero from "@/components/UpscaleHero";
import CommunicateSection from "@/components/CommunicateSection";
import ExternalTeacherSection from "@/components/ExternalTeacherSection";

export default function Home() {
  return (
    <>
      <Hero/>
      <PopularCourses/>
      <Features/>
      <KnowledgeDeliverySection/>
      <MonetizeSection/>
      <CommunicateSection/>
      {/* <BusinessSection/> */}
      <ExternalTeacherSection />
      <UpscaleHero />
    </> 
  );
}
