import Link from "next/link";
import React from "react";
import { ArrowDown, Download } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 pt-16 sm:pt-24">
      {/* Background */}
      <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,#173b4e,rgba(255,255,255,0))] pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl sm:max-w-5xl lg:max-w-6xl flex flex-col items-center text-center space-y-6 sm:space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-wide leading-tight text-white ">
          Hello, I am{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-300 to-blue-500 drop-shadow-[0_0_15px_rgba(14,165,233,0.4)]">
            Sankar Karmakar
          </span>
          ,<br className="hidden sm:block md:hidden" />{" "}
          <br className="hidden md:block" /> a Full-Stack Web Developer
        </h2>

        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-400 max-w-sm sm:max-w-md md:max-w-2xl leading-relaxed px-4 sm:px-0">
          Detail-oriented Web Developer with strong front-end and back-end
          skills, backed by a BCA (Hons.), with hands-on experience in building
          responsive and efficient static and dynamic websites. Skilled in
          database management and committed to delivering high-quality web
          solutions.
        </p>

        {/* Download CV Button */}
        <Link
          href="/pdfs/Sankar_Karmakar_CV.pdf"
          className="group relative inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl 
             bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl 
             border border-white/20 shadow-xl sm:shadow-2xl
             text-white font-semibold text-sm sm:text-base overflow-hidden 
             transition-all duration-500 ease-out
             hover:scale-102 active:scale-95 sm:hover:scale-105
             hover:border-sky-400/60 hover:shadow-[0_0_25px_rgba(14,165,233,0.6)] sm:hover:shadow-[0_0_40px_rgba(14,165,233,0.6)]
             focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:ring-offset-2 focus:ring-offset-transparent"
          target="_blank"
        >
          {/* Animated gradient background */}
          <div
            className="absolute inset-0 bg-linear-to-r from-sky-500/30 via-blue-500/30 to-sky-500/30 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                   animate-shimmer bg-size-[200%_100%] group-hover:bg-size-[100%_100%] sm:bg-size-[200%_100%] sm:group-hover:bg-size-[100%_100%]"
          />

          {/* Border glow effect */}
          <div
            className="absolute inset-0 rounded-xl sm:rounded-2xl bg-linear-to-r from-sky-400 to-blue-500 
                   opacity-0 group-hover:opacity-20 blur-sm sm:blur-md transition-opacity duration-500"
          />

          {/* Inner shadow */}
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.1)]" />

          {/* Content */}
          <Download
            className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 
                   group-hover:scale-110 group-hover:rotate-12"
          />

          <span className="relative z-10 bg-linear-to-r from-white to-slate-200 bg-clip-text text-transparent">
            Download CV
          </span>
        </Link>

        {/* Scroll Down Arrow */}
        <div className="pt-8 sm:pt-12">
          <Link
            href="#experience"
            className="group flex flex-col items-center gap-2 sm:gap-3 cursor-pointer"
          >
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-slate-500 group-hover:text-sky-400 transition-colors duration-300">
              Scroll Down
            </span>
            <div className="p-2 sm:p-3 rounded-full border border-white/10 bg-white/5 text-white shadow-[0_0_10px_rgba(0,0,0,0.5)] sm:shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:bg-sky-500/20 group-hover:border-sky-500 group-hover:shadow-[0_0_15px_rgba(14,165,233,0.4)] sm:group-hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all duration-300 animate-bounce">
              <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
