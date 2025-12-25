"use client";

import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    // Lock scroll when modal is open
    useEffect(() => {
        if (isVideoModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isVideoModalOpen]);

    return (
        <section className="max-w-7xl mx-auto mb-32 relative pt-2 md:pt-">

            {/* Hero Header Content - Center Aligned */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center text-center max-w-5xl mx-auto mb-20 px-4"
            >

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex items-center gap-2 text-neutral-500 mb-8 text-sm md:text-base bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-neutral-100"
                >
                    <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
                    <span className="uppercase tracking-widest text-xs font-bold text-brand-teal">The Modern Trade Backbone</span>
                </motion.div>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.1] mb-8 text-neutral-900">
                    The Operating System <br />
                    for <span className="text-brand-teal">Global Trade.</span>
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light max-w-2xl mx-auto mb-10"
                >
                    PrimeLink combines 20 years of physical logistics infrastructure with next-gen API verification.
                    Source products, book freight, and verify partners—all in one OS.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-neutral-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-teal transition-colors shadow-xl shadow-brand-teal/20 flex items-center justify-center gap-2"
                    >
                        Start Trading
                        <Icon icon="solar:arrow-right-linear" />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsVideoModalOpen(true)}
                        className="bg-white text-neutral-900 border border-neutral-200 px-8 py-4 rounded-full font-semibold hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2"
                    >
                        <Icon icon="solar:play-circle-linear" />
                        Watch Demo
                    </motion.button>
                </motion.div>

            </motion.div>

            {/* Hero Image / Visual - Floating Glass Dashboard */}
            <motion.div
                initial={{ opacity: 0, y: 100, rotateX: 20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.4, duration: 1, type: "spring", stiffness: 50 }}
                className="relative w-full px-4 md:px-0 perspective-1000"
            >
                <div className="relative w-full rounded-2xl md:rounded-[2rem] bg-white/20 backdrop-blur-xl border border-white/40 shadow-2xl p-2 md:p-3 overflow-hidden group">
                    {/* Inner content container */}
                    <div className="relative rounded-xl md:rounded-[1.5rem] overflow-hidden aspect-[16/10] md:aspect-[21/9] bg-neutral-900">
                        {/* Background decorative elements within the screen */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/20 via-neutral-900 to-neutral-900 z-10 opacity-50"></div>

                        <Image
                            src="/image.jpeg"
                            alt="PrimeLink Trade Dashboard"
                            fill
                            className="object-cover opacity-90 transition-all duration-700 group-hover:scale-105"
                        />

                        {/* Screen Overlay UI elements - Glass Badges */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent z-20"></div>

                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-30 text-white"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider backdrop-blur-md">
                                    ● Quality Verified
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-5xl font-medium tracking-tight mb-2">Order #ORG-8821</h3>
                            <p className="text-white/60 text-sm md:text-lg">Origin: Kerala → Hamburg</p>
                        </motion.div>

                        {/* Floating Data Widget */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            className="absolute top-6 right-6 md:top-10 md:right-10 z-30"
                        >
                            <div className="bg-neutral-900/60 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-2xl text-right shadow-2xl">
                                <div className="text-xs text-neutral-400 uppercase tracking-widest mb-1">Net Weight</div>
                                <div className="text-2xl md:text-3xl font-bold text-white mb-2">12,500 KG</div>
                                <div className="flex justify-end">
                                    <div className="h-1 w-24 bg-neutral-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "80%" }}
                                            transition={{ delay: 1.5, duration: 1 }}
                                            className="h-full bg-brand-teal rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* Decorative Glow behind the dashboard */}
                <div className="absolute -inset-4 bg-brand-teal/20 blur-[100px] -z-10 rounded-full opacity-50"></div>
            </motion.div>

            {/* VIDEO MODAL */}
            <AnimatePresence>
                {isVideoModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 border border-neutral-200/60 bg-white/20 backdrop-blur-xl shadow-sm text-brand-teal"
                    >

                        {/* Modal Content */}
                        <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
                            <button
                                onClick={() => setIsVideoModalOpen(false)}
                                className="absolute -top-12 right-0 md:-right-8  text-brand-teal/50 hover:text-brand-teal transition-colors"
                            >
                                <Icon icon="solar:close-circle-linear" className="text-4xl" />
                            </button>

                            <h3 className="text-4xl md:text-5xl font-medium mb-12 tracking-tight text-brand-teal text-center">PrimeLink in Action</h3>

                            {/* Video Grid - 4x Vertical Videos (Instagram Style) */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full h-[60vh] md:h-[70vh]">
                                {[1, 2, 3, 4].map((i) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        key={i}
                                        className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 group cursor-pointer hover:border-brand-teal/50 transition-all duration-300 shadow-2xl"
                                    >
                                        {/* Placeholder specific to "Instagram Reel" size aspect ratio roughly 9:16 */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-neutral-800">
                                            <Icon icon="solar:play-circle-bold" className="text-5xl text-white/20 group-hover:text-brand-teal group-hover:scale-110 transition-all duration-300" />
                                        </div>
                                        <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                            <p className="text-white font-medium">Demo Reel {i}</p>
                                            <p className="text-white/50 text-sm">Tap to play</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}
