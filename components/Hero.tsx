import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import ButtonLead from "./ButtonLead";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h2 className="font-bold text-xl text-red-500 text-center">To experienced software engineers worried about AI...</h2>

        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 text-center">
          3 simple steps to protect your career and secure your future from AI and tech layoffs
        </h1>
        <p className="text-lg opacity-80 leading-relaxed text-center">
          He was a hard-working engineer at a top tech company, where he worked his way up, earning the respect and admiration of everyone. His career was going great, he had finally bought a home, gotten married, and each promotion meant more opportunities for his growing family. 
        </p>
        <p className="text-lg opacity-80 leading-relaxed text-center">
          But the rise of AI changed everything. The technology started taking over simple coding tasks but it got more complex. Slowly, the company he loved began to favor machines for their coding speed and cost-effectiveness, leading to mass layoffs.
        </p>
        <p className="text-lg opacity-80 leading-relaxed text-center">
          One day, he was told his job was no longer needed. Losing his job was just the beginning of his troubles. He tried to get a new job but he found that his skills were outdated, replaced by the very technology he thought would make him more productive. 
        </p>
        <p className="text-lg opacity-80 leading-relaxed text-center">
          He faced rejection after rejection, as the secure career he was promised seemed to no longer exist. Money problems followed, resulting in the loss of his home, fights with his family, and eventually a divorce.            Here&apos;s the harsh reality: as AI progresses, even the most skilled professionals will be replaced and forgotten. 
        </p>
      </div>
    </section>
  );
};

export default Hero;
