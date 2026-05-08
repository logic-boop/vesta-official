"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";

export default function ConsultationModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log("Lead Captured:", data);
    // We will integrate Resend/Nodemailer here later
    alert("Request Sent. Our team will contact you shortly.");
    reset();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-vesta-accent border border-vesta-gold/20 p-10 rounded-sm shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-vesta-gold/50 hover:text-vesta-gold transition-colors">
              <X size={20} />
            </button>

            <div className="text-center mb-8">
              <h2 className="text-vesta-gold font-serif text-3xl mb-2">Private Consultation</h2>
              <p className="text-gray-200 text-xs tracking-widest uppercase">Referral-Only Executive Access</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-vesta-gold text-[12px] uppercase tracking-widest mb-2">Full Name</label>
                <input 
                  {...register("name", { required: true })}
                  className="w-full bg-black/50 border border-vesta-gold/10 p-3 text-white focus:border-vesta-gold/50 outline-none transition-all"
                  placeholder="Ex: James Kendrick"
                />
              </div>

              <div>
                <label className="block text-vesta-gold text-[12px] uppercase tracking-widest mb-2">Organization / Title</label>
                <input 
                  {...register("org")}
                  className="w-full bg-black/50 border border-vesta-gold/10 p-3 text-white focus:border-vesta-gold/50 outline-none transition-all"
                  placeholder="Ex: CEO, Neural Core"
                />
              </div>

              <div>
                <label className="block text-vesta-gold text-[12px] uppercase tracking-widest mb-2">Transition Timeline</label>
                <select 
                  {...register("timeline")}
                  className="w-full bg-black/50 border border-vesta-gold/10 p-3 text-white focus:border-vesta-gold/50 outline-none transition-all"
                >
                  <option value="immediate">Immediate (Within 30 days)</option>
                  <option value="quarter">Next 90 Days</option>
                  <option value="planning">Future Planning</option>
                </select>
              </div>

              <button className="w-full py-4 bg-vesta-gold text-vesta-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-vesta-gold-light transition-all duration-300">
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}