import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PopularCourses = dynamic(() => import("@/components/Courses"), {
  ssr: false,
});
const Features = dynamic(() => import("@/components/Features"), { ssr: false });
const KnowledgeDeliverySection = dynamic(
  () => import("@/components/KnowledgeDeliverySection"),
  { ssr: false }
);
const MonetizeSection = dynamic(() => import("@/components/MonetizeSection"), {
  ssr: false,
});
const CommunicateSection = dynamic(
  () => import("@/components/CommunicateSection"),
  { ssr: false }
);
const ExternalTeacherSection = dynamic(
  () => import("@/components/ExternalTeacherSection"),
  { ssr: false }
);
const UpscaleHero = dynamic(() => import("@/components/UpscaleHero"), {
  ssr: false,
});

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
