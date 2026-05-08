"use client";
import { motion } from "framer-motion";

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
    return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-vesta-black overflow-hidden">
      {/* Subtle Gold Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.08)_0%,transparent_70%)]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 text-center px-6"
      >
        <h2 className="text-vesta-gold tracking-[0.4em] uppercase text-[12px] mb-6 font-bold">
          Elite Relocation & Management
        </h2>
        
        <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 tracking-tighter">
          The Art of <span className="text-vesta-gold">Perfect Transition</span>
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto text-lg mb-12 font-bold leading-relaxed">
          We help individuals and families relocate, settle and transition comfortably into new homes and environments. 
          Boutique relocation solutions for the discerning few. 
          Discretion, precision, and a seamless arrival.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button onClick={onOpenModal} className="px-10 py-4 bg-vesta-gold text-vesta-black font-bold uppercase tracking-widest text-xs hover:bg-vesta-gold-light transition-all">
            Request Consultation
          </button>
          <button className="px-10 py-4 border border-vesta-gold/40 text-vesta-gold font-bold uppercase tracking-widest text-xs hover:bg-vesta-gold/10 transition-all">
            Our Portfolio
          </button>
        </div>
      </motion.div>

      {/* Referral Badge */}
      <div className="absolute bottom-12 font-bold text-vesta-gold/80 text-[11px] tracking-[0.6em] uppercase">
        Consultation by Referral Only
      </div>
    </section>
  );
}