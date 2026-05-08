"use client";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-vesta-black overflow-hidden px-4">
      {/* Subtle Gold Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.08)_0%,transparent_70%)]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 text-center max-w-5xl"
      >
        <h2 className="text-vesta-gold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-[12px] mb-4 md:mb-6 font-bold">
          Elite Relocation & Management
        </h2>
        
        {/* Adjusted scaling: 4xl on mobile, 8xl on desktop */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-white mb-6 md:mb-8 tracking-tighter leading-[1.1]">
          The Art of <span className="text-vesta-gold">Perfect Transition</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg mb-8 md:mb-12 font-medium md:font-bold leading-relaxed px-2">
          We help individuals and families relocate, settle and transition comfortably into new homes and environments. 
          Boutique relocation solutions for the discerning few. 
          Discretion, precision, and a seamless arrival.
        </p>

        {/* Responsive buttons: Stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center">
          <button 
            onClick={onOpenModal} 
            className="w-full sm:w-auto px-10 py-4 bg-vesta-gold text-vesta-black font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-vesta-gold-light transition-all cursor-pointer"
          >
            Request Consultation
          </button>
          <button className="w-full sm:w-auto px-10 py-4 border border-vesta-gold/40 text-vesta-gold font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-vesta-gold/10 transition-all cursor-pointer">
            Our Portfolio
          </button>
        </div>
      </motion.div>

      {/* Referral Badge - Hidden on very small heights to avoid overlap */}
      <div className="absolute bottom-8 md:bottom-12 font-bold text-vesta-gold/60 text-[9px] md:text-[11px] tracking-[0.4em] md:tracking-[0.6em] uppercase text-center w-full px-4">
        Consultation by Referral Only
      </div>
    </section>
  );
}