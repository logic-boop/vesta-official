"use client";
import { useState } from "react";
import ConsultationModal from "./components/ConsultationModal";
import Hero from "./components/Hero";
import {
  Home as HomeIcon,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Users,
  Wrench
} from "lucide-react";

// --- Types ---
interface ServiceCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-vesta-black min-h-screen">
      {/* Navigation - Enhanced Responsiveness */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-4 md:py-6 bg-gradient-to-b from-vesta-black to-transparent backdrop-blur-[2px]">
        <div className="text-vesta-gold font-bold tracking-[0.2em] text-lg md:text-xl">
          VESTA
        </div>
        
        <div className="flex items-center gap-3 md:gap-4">
          <button className="hidden sm:block text-vesta-gold font-bold text-[10px] tracking-widest uppercase border border-vesta-gold/30 px-4 py-2 hover:bg-vesta-gold/10 transition-all cursor-pointer">
            Portal
          </button>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-vesta-black bg-vesta-gold font-bold text-[10px] md:text-[11px] tracking-widest uppercase px-4 py-2 md:px-6 md:py-2.5 hover:bg-vesta-gold-light transition-all cursor-pointer shadow-lg shadow-vesta-gold/10"
          >
            Consultation
          </button>
        </div>
      </nav>

      {/* Hero Component */}
      <Hero onOpenModal={() => setIsModalOpen(true)} />

      {/* Signature Solutions Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-vesta-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          {/* Header Area */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
            <div className="text-left">
              <h2 className="text-vesta-gold uppercase font-bold tracking-[0.4em] text-[9px] md:text-[10px] mb-4">
                Signature Solutions
              </h2>
              <h3 className="text-3xl md:text-5xl font-serif text-white italic leading-tight">
                Elite Bespoke Logistics <br className="hidden md:block" /> & Management
              </h3>
            </div>
            <p className="text-gray-400 max-w-sm text-sm font-medium leading-relaxed opacity-80">
              Our services are designed to manage every variable of your transition,
              ensuring absolute discretion and operational excellence.
            </p>
          </div>

          {/* Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <ServiceCard
              icon={<HomeIcon size={22} />}
              title="Premier Home Acquisition"
              desc="Expert house hunting with video tours, neighborhood safety analysis, and landlord verification."
            />

            <ServiceCard
              icon={<Sparkles size={22} />}
              title="Residence Readiness"
              desc="Guaranteed utility connection, professional deep cleaning, and grocery stocking before your arrival."
            />

            <ServiceCard
              icon={<ShieldCheck size={22} />}
              title="Staffing & Security Vetting"
              desc="Bespoke recruitment of domestic staff including drivers, cooks, and nannies with rigorous integrity checks."
            />

            <ServiceCard
              icon={<TrendingUp size={22} />}
              title="Asset Transfer & Liquidation"
              desc="Secure transit supervision for high-value items and airport-ready luxury vehicle sourcing."
            />

            <ServiceCard
              icon={<Users size={22} />}
              title="Family Support Services"
              desc="Comprehensive school placement registration and private healthcare network mapping."
            />

            <ServiceCard
              icon={<Wrench size={22} />}
              title="24/7 Fixer Service"
              desc="Direct access to managed plumbing, AC repair, and IT support for continuous home maintenance."
            />
          </div>
        </div>
      </section>

      {/* Modal Component */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Footer Branding */}
      <footer className="py-12 flex flex-col items-center border-t border-white/5 px-6 text-center">
        <div className="w-12 h-[1px] bg-vesta-gold/20 mb-8"></div>
        <div className="text-vesta-gold/60 font-bold text-[8px] md:text-[9px] tracking-[0.5em] md:tracking-[0.6em] uppercase">
          Consultation by Referral Only
        </div>
      </footer>
    </main>
  );
}

// --- Responsive Helper Component ---

function ServiceCard({ title, desc, icon }: ServiceCardProps) {
  return (
    <div className="group p-6 md:p-8 border border-white/5 bg-white/[0.02] hover:border-vesta-gold/30 transition-all duration-500 relative overflow-hidden flex flex-col items-start">
      {/* Background Glow Effect */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-vesta-gold/5 blur-[60px] group-hover:bg-vesta-gold/10 transition-all duration-700" />

      {/* Icon */}
      <div className="text-vesta-gold mb-6 group-hover:scale-110 transition-transform duration-500 opacity-90">
        {icon}
      </div>

      <h4 className="text-vesta-gold font-serif text-lg md:text-xl mb-3 group-hover:translate-x-1 transition-transform duration-300">
        {title}
      </h4>

      <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
        {desc}
      </p>
    </div>
  );
}