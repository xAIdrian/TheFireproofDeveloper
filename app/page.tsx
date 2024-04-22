import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ButtonLead from '@/components/ButtonLead';
import TestimonialsAvatars from '@/components/TestimonialsAvatars';

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <Problem />
        <FeaturesAccordion />
        <FAQ />
        <div style={{ padding: '48px', width: '100%', 'justifyItems': 'center', paddingLeft: '100px', paddingRight: '100px' }}>
          <p className="mx-auto font-extrabold text-3xl md:text-3xl tracking-tight mb-6 md:mb-8">
            Enter your email to learn how to thrive in the age of AI
          </p>
          <ButtonLead/>
          <br/>
          <TestimonialsAvatars priority={true} />
        </div>
      </main>
      <Footer />
    </>
  );
}
