"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";

export default function ConsultationModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log("Lead Captured:", data);
    alert("Request Sent. Our team will contact you shortly.");
    reset();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-vesta-black border border-vesta-gold/20 p-6 md:p-10 rounded-sm shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 text-vesta-gold/50 hover:text-vesta-gold transition-colors z-10 p-2"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-6 md:mb-8 mt-4 md:mt-0">
              <h2 className="text-vesta-gold font-serif text-2xl md:text-3xl mb-2">Private Consultation</h2>
              <p className="text-gray-400 text-[9px] md:text-xs tracking-[0.2em] uppercase">Referral-Only Executive Access</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">
              <div>
                <label className="block text-vesta-gold text-[10px] md:text-[12px] uppercase tracking-widest mb-2 font-bold">Full Name</label>
                <input 
                  {...register("name", { required: true })}
                  className="w-full bg-white/5 border border-vesta-gold/10 p-3 text-white focus:border-vesta-gold/50 outline-none transition-all placeholder:text-gray-600 text-sm"
                  placeholder="Ex: James Kendrick"
                />
              </div>

              <div>
                <label className="block text-vesta-gold text-[10px] md:text-[12px] uppercase tracking-widest mb-2 font-bold">Organization / Title</label>
                <input 
                  {...register("org")}
                  className="w-full bg-white/5 border border-vesta-gold/10 p-3 text-white focus:border-vesta-gold/50 outline-none transition-all placeholder:text-gray-600 text-sm"
                  placeholder="Ex: CEO, Neural Core"
                />
              </div>

              <div>
                <label className="block text-vesta-gold text-[10px] md:text-[12px] uppercase tracking-widest mb-2 font-bold">Transition Timeline</label>
                <select 
                  {...register("timeline")}
                  className="w-full bg-white/5 border border-vesta-gold/10 p-3 text-white focus:border-vesta-gold/50 outline-none transition-all text-sm appearance-none cursor-pointer"
                >
                  <option value="immediate" className="bg-black">Immediate (Within 30 days)</option>
                  <option value="quarter" className="bg-black">Next 90 Days</option>
                  <option value="planning" className="bg-black">Future Planning</option>
                </select>
              </div>

              <button className="w-full py-4 mt-4 bg-vesta-gold text-vesta-black font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-vesta-gold-light transition-all duration-300 shadow-lg active:scale-[0.98]">
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}