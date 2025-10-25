import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PopularCourses = dynamic(() => import("@/components/Courses"));
const Features = dynamic(() => import("@/components/Features"));
const KnowledgeDeliverySection = dynamic(
  () => import("@/components/KnowledgeDeliverySection")
);
const MonetizeSection = dynamic(() => import("@/components/MonetizeSection"));
const CommunicateSection = dynamic(
  () => import("@/components/CommunicateSection")
);
const ExternalTeacherSection = dynamic(
  () => import("@/components/ExternalTeacherSection")
);
const UpscaleHero = dynamic(() => import("@/components/UpscaleHero"));

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularCourses />
      <Features />
      <KnowledgeDeliverySection />
      <MonetizeSection />
      <CommunicateSection />
      <ExternalTeacherSection />
      <UpscaleHero />
      <Footer />
    </div>
  );
}
