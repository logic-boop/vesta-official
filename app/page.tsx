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

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-vesta-black min-h-screen">
      {/* Navigation - Minimalist */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-gradient-to-b from-vesta-black to-transparent">
        <div className="text-vesta-gold font-bold tracking-[0.2em] text-xl">VESTA</div>
        
        <div className="flex gap-4">
          <button className="text-vesta-gold font-bold text-[12px] tracking-widest uppercase border border-vesta-gold/30 px-4 py-2 hover:bg-vesta-gold/10 transition-all cursor-pointer">
            Client Portal
          </button>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-vesta-black bg-vesta-gold font-bold text-[12px] tracking-widest uppercase px-4 py-2 hover:bg-vesta-gold-light transition-all cursor-pointer shadow-lg shadow-vesta-gold/10"
          >
            Consultation
          </button>
        </div>
      </nav>

      {/* Passing the state to Hero so those buttons also trigger the modal */}
      <Hero onOpenModal={() => setIsModalOpen(true)} />

      {/* Signature Solutions Section */}
      <section className="py-24 px-8 bg-vesta-black border-t border-vesta-gold/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="text-left">
              <h2 className="text-vesta-gold uppercase font-bold tracking-[0.4em] text-[10px] mb-4">
                Signature Solutions
              </h2>
              <h3 className="text-3xl md:text-5xl font-serif text-white italic">
                Elite Bespoke Logistics & Management
              </h3>
            </div>
            <p className="text-gray-400 max-w-sm text-sm font-bold leading-relaxed">
              Our services are designed to manage every variable of your transition,
              ensuring absolute discretion and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<HomeIcon size={24} />}
              title="Premier Home Acquisition"
              desc="Expert house hunting with video tours, neighborhood safety analysis, and landlord verification."
            />

            <ServiceCard
              icon={<Sparkles size={24} />}
              title="Residence Readiness"
              desc="Guaranteed utility connection, professional deep cleaning, and grocery stocking before your arrival."
            />

            <ServiceCard
              icon={<ShieldCheck size={24} />}
              title="Staffing & Security Vetting"
              desc="Bespoke recruitment of domestic staff including drivers, cooks, and nannies with rigorous integrity checks."
            />

            <ServiceCard
              icon={<TrendingUp size={24} />}
              title="Asset Transfer & Liquidation"
              desc="Secure transit supervision for high-value items and airport-ready luxury vehicle sourcing."
            />

            <ServiceCard
              icon={<Users size={24} />}
              title="Family Support Services"
              desc="Comprehensive school placement registration and private healthcare network mapping."
            />

            <ServiceCard
              icon={<Wrench size={24} />}
              title="24/7 Fixer Service"
              desc="Direct access to managed plumbing, AC repair, and IT support for continuous home maintenance."
            />
          </div>
        </div>
      </section>

      {/* Modal Component */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Footer Branding */}
      <footer className="py-12 flex flex-col items-center border-t border-white/5">
        <div className="w-12 h-[1px] bg-vesta-gold/30 mb-6"></div>
        <div className="text-vesta-gold/80 font-bold text-[9px] tracking-[0.6em] uppercase">
          Consultation by Referral Only
        </div>
      </footer>
    </main>
  );
}

// --- Helper Component ---

interface ServiceCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

function ServiceCard({ title, desc, icon }: ServiceCardProps) {
  return (
    <div className="group p-8 border border-vesta-gold/10 bg-vesta-accent/20 hover:border-vesta-gold/40 transition-all duration-500 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-vesta-gold/5 blur-3xl group-hover:bg-vesta-gold/10 transition-all" />

      {/* Icon Wrapper */}
      <div className="text-vesta-gold mb-6 group-hover:scale-110 transition-transform duration-500 opacity-80">
        {icon}
      </div>

      <h4 className="text-vesta-gold font-serif text-xl mb-4 group-hover:translate-x-1 transition-transform duration-300">
        {title}
      </h4>

      <p className="text-gray-400 text-sm font-light leading-relaxed">
        {desc}
      </p>
    </div>
  );
}