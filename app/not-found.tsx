"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-vesta-black px-6 text-center">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[25%] -left-[10%] w-[50%] h-[50%] bg-vesta-gold/5 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h1 className="text-vesta-gold font-serif text-8xl md:text-9xl mb-4 opacity-20">
          404
        </h1>
        
        <h2 className="text-white font-serif text-2xl md:text-3xl mb-6 tracking-tight">
          Position Unknown
        </h2>
        
        <p className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.3em] mb-12 max-w-md mx-auto leading-relaxed">
          The coordinates you have provided do not exist within our secure perimeter.
        </p>

        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="border border-vesta-gold/30 px-8 py-4 text-vesta-gold text-[10px] md:text-xs uppercase tracking-[0.4em] hover:bg-vesta-gold hover:text-vesta-black transition-all duration-500"
          >
            Return to HomePage
          </motion.button>
        </Link>
      </motion.div>

      {/* Signature Branding */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <p className="text-[8px] text-vesta-gold/30 uppercase tracking-[0.5em]">
          VESTA SECURE ASSET 01
        </p>
      </div>
    </main>
  );
}