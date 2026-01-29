"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Icon } from '@iconify/react';
import Image from "next/image";

export default function DigitalHubPage() {
    return (
        <main className="min-h-screen bg-white text-neutral-900 selection:bg-brand-teal selection:text-white font-sans overflow-hidden">
            <Navbar />

            <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6">

                {/* Background Tech Grid */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(#0D9488 1px, transparent 1px), linear-gradient(90deg, #0D9488 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-brand-teal/20 bg-brand-teal/5 mb-8">
                                <span className="text-[10px] font-mono uppercase tracking-widest text-[#0D9488]">Typography: Space Grotesk</span>
                            </div>

                            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-neutral-900 mb-4">
                                PrimeLink
                            </h1>
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#0D9488] mb-12">
                                Digital
                            </h2>

                            <div className="flex items-center gap-8 mb-16">
                                <div className="flex flex-col gap-2">
                                    <div className="w-12 h-12 rounded-full bg-[#0D9488] shadow-lg shadow-brand-teal/20" />
                                    <span className="text-xs font-bold uppercase text-neutral-400 tracking-wider">Neural Teal</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="w-12 h-12 rounded-full bg-[#06B6D4] shadow-lg shadow-brand-cyan/20" />
                                    <span className="text-xs font-bold uppercase text-neutral-400 tracking-wider">Data Cyan</span>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-[#ecfdf5] border border-[#0D9488]/20 flex items-center justify-between shadow-sm">
                                <div>
                                    <h3 className="text-[#065F46] font-bold text-lg md:text-xl flex items-center gap-2">
                                        API Status: Operational
                                    </h3>
                                    <p className="text-[#065F46]/70 text-sm mt-1">Latency: 24ms | Uptime: 99.99%</p>
                                </div>
                                <button className="px-6 py-3 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold text-sm tracking-wide transition-colors flex items-center gap-2">
                                    View Documentation
                                    <Icon icon="solar:arrow-right-linear" />
                                </button>
                            </div>

                        </motion.div>

                        {/* Visual - The Digital Asset Node */}
                        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
                            {/* Central Nodes */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="relative w-64 h-64 md:w-96 md:h-96"
                            >
                                <div className="absolute inset-0 bg-[#0D9488] rounded-full opacity-10 animate-pulse" />

                                {/* Network Graphic (SVG) */}
                                <div className="relative w-full h-full p-8 md:p-12">
                                    <Image
                                        src="/DIGITAL.svg"
                                        alt="The Digital Asset"
                                        fill
                                        className="object-contain drop-shadow-xl"
                                        priority
                                    />
                                </div>

                                <div className="absolute -bottom-16 w-full text-center">
                                    <span className="font-mono text-xs text-neutral-400 tracking-[0.3em] uppercase">The Digital Asset</span>
                                </div>
                            </motion.div>
                        </div>

                    </div>

                    {/* Services Coming Soon Grid */}
                    <div className="mt-32">
                        <h3 className="text-center text-neutral-400 font-mono text-xs uppercase tracking-widest mb-12">System Modules</h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                            {[
                                { title: "Trade Intelligence", icon: "solar:graph-up-linear" },
                                { title: "Smart Contracts", icon: "solar:document-add-linear" },
                                { title: "Logistics API", icon: "solar:box-linear" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="group relative p-8 rounded-2xl border border-neutral-100 hover:border-[#0D9488]/30 bg-white shadow-sm hover:shadow-xl hover:shadow-brand-teal/5 transition-all duration-300"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-neutral-50 group-hover:bg-[#0D9488]/10 text-neutral-400 group-hover:text-[#0D9488] flex items-center justify-center mb-6 transition-colors">
                                        <Icon icon={item.icon} className="text-2xl" />
                                    </div>
                                    <h4 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-[#0D9488] transition-colors">{item.title}</h4>
                                    <div className="flex items-center gap-2 mt-4">
                                        <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse"></span>
                                        <span className="text-xs font-mono text-[#06B6D4] uppercase tracking-wider">Coming Soon</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            <Footer theme="digital" />
        </main>
    );
}
