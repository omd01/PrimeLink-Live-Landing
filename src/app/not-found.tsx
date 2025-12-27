"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white text-neutral-900 flex items-center justify-center relative overflow-hidden selection:bg-brand-teal selection:text-white">

            {/* Background Noise - Subtle for Light Mode */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-amber rounded-full blur-[150px] opacity-[0.08]" />

            <div className="text-center relative z-10 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative inline-block">
                        <h1 className="text-[12rem] md:text-[20rem] font-bold font-rajdhani text-transparent leading-none select-none opacity-10"
                            style={{ WebkitTextStroke: '2px #D97706' }}>
                            404
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-brand-amber font-rajdhani font-bold text-xl md:text-3xl bg-white px-4 py-1 border border-brand-amber/20 rounded-full tracking-widest uppercase shadow-sm">
                                Container Not Found
                            </span>
                        </div>
                    </div>

                    <p className="text-neutral-600 font-outfit text-lg md:text-xl max-w-lg mx-auto mt-4 mb-12">
                        The shipment you are looking for seems to have drifted off course. Let's get you back to the main port.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link href="/" className="group relative px-8 py-3 rounded-full bg-neutral-900 text-white font-bold uppercase tracking-wider font-rajdhani hover:scale-105 transition-transform hover:bg-neutral-800 shadow-lg">
                            <span className="flex items-center gap-2">
                                <Home size={18} />
                                Return Home
                            </span>
                        </Link>

                        <button onClick={() => window.history.back()} className="group px-8 py-3 rounded-full border border-neutral-200 hover:bg-neutral-50 text-neutral-900 font-bold uppercase tracking-wider font-rajdhani transition-colors">
                            <span className="flex items-center gap-2">
                                <ArrowLeft size={18} />
                                Go Back
                            </span>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Footer minimal */}
            <div className="absolute bottom-8 text-center w-full text-neutral-400 text-xs font-outfit uppercase tracking-widest">
                PrimeLink Exim Pvt Ltd &copy; {new Date().getFullYear()}
            </div>

        </main>
    );
}
