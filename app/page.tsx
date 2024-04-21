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
        <div style={{ padding: '48px', width: '100%', 'justifyItems': 'center' }}>
        <h2 className="mx-auto font-extrabold text-3xl md:text-5xl tracking-tight mb-6 md:mb-8">
          Enter your email to learn how to replace AI before it replaces you
        </h2>
          <ButtonLead/>
          <TestimonialsAvatars priority={true} />
        </div>
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
