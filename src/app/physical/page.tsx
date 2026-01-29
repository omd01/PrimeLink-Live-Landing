"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import Link from 'next/link';
import {
    ArrowUpRight
} from 'lucide-react';
import { Icon } from '@iconify/react';
import OurStory from '@/components/sections/OurStory';
import Excellence from '@/components/sections/Excellence';
import WhyUs from '@/components/sections/WhyUs';
import Certifications from '@/components/sections/Certifications';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// --- CONFIGURATION ---
const COLORS = {
    deepHarbor: '#022C22',
    signalAmber: '#F59E0B',
    glassBorder: 'rgba(255, 255, 255, 0.1)',
    surface: 'rgba(255, 255, 255, 0.03)'
};

const FONT = {
    header: 'font-rajdhani',
    body: 'font-outfit',
    digital: 'font-space-grotesk' // fallback to mono if not loaded
};

// --- COMPONENTS ---

const MagneticButton = ({ children, primary = false }: { children: React.ReactNode, primary?: boolean }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
                relative px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all
                ${primary
                    ? `bg-[#F59E0B] text-[#022C22] shadow-[0_0_20px_-5px_#F59E0B]`
                    : `border border-white/20 text-white hover:bg-white/5`
                }
                ${FONT.header}
            `}
        >
            {children}
        </motion.button>
    );
};

// --- SECTONS ---

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, 100]);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#022C22]">
            {/* Cinematic Background */}
            <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
                <Image
                    src="/image.jpeg"
                    alt="Industrial Port"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#022C22]/30 via-[#022C22]/60 to-[#022C22]" />
            </motion.div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center"
                >
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 ${COLORS.glassBorder} bg-white/5 backdrop-blur-md`}>
                        <div className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                        <span className={`text-[#F59E0B] text-xs font-bold tracking-[0.2em] uppercase ${FONT.header}`}>
                            Borders Crossed, Promises Kept.
                        </span>
                    </div>

                    <h1 className={`text-5xl md:text-9xl font-bold text-white uppercase leading-[0.85] tracking-tight mb-8 ${FONT.header}`}>
                        Primelink<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Trade</span>
                    </h1>

                    <div className="flex flex-col items-center justify-center mt-12 w-full max-w-md mx-auto">
                        <form className="relative flex items-center p-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 w-full group transition-all duration-300 hover:bg-white/15 focus-within:bg-white/20 focus-within:border-white/30 ]">

                            <input
                                type="tel"
                                placeholder="Enter Phone Number..."
                                className={`bg-transparent border-none text-white placeholder-white/40 focus:outline-none px-4 py-3 w-full font-outfit text-lg tracking-wide`}
                                suppressHydrationWarning
                            />
                            <button
                                type="submit"
                                className={`bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-8 py-3.5 font-bold uppercase text-sm tracking-wider shadow-lg hover:bg-white/20 hover:shadow-white/10 transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap flex items-center gap-2 ${FONT.header}`}
                                suppressHydrationWarning
                            >
                                <Icon icon="ic:baseline-whatsapp" className="text-xl" />
                                {/* <span className="hidden sm:inline">WhatsApp Us</span> */}
                                <span className="sm:hidden">Chat</span>
                            </button>
                        </form>
                        <p className="mt-4 text-xs text-white/40 font-light tracking-wide flex items-center gap-2">
                            <Icon icon="solar:shield-check-linear" className="text-[#F59E0B]" />
                            We respect your privacy. No spam.
                        </p>


                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity: useTransform(scrollY, [0, 100], [1, 0]) }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-[#F59E0B] to-transparent" />
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            </motion.div>
        </section>
    );
};

const BentoGrid = () => {
    const items = [
        { title: "Beetroot Powder", subtitle: "Organic Beetroot Powder", img: "/images/physical/beetroot.jpeg", col: "md:col-span-2", row: "md:row-span-2", link: "/physical/beetroot" },
        { title: "Gawar Powder", subtitle: "fresh from Rajasthan", img: "/images/physical/gawar.png", col: "md:col-span-1", row: "md:row-span-1", link: "/physical/gawar" },
        { title: "Moringa", subtitle: "Organic Moringa Powder", img: "/images/physical/moringa.jpeg", col: "md:col-span-1", row: "md:row-span-1", link: "/physical/moringa" },
        { title: "Turmeric Powder", subtitle: "Organic Turmeric", img: "/images/physical/termaric.png", col: "md:col-span-2", row: "md:row-span-1", link: "/physical/turmeric" },
    ];

    return (
        <section className="py-32 px-6 bg-[#022C22]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className={`text-4xl md:text-6xl text-white font-bold uppercase mb-4 ${FONT.header}`}>
                        The Catalog
                    </h2>
                    <div className="h-1 w-24 bg-[#F59E0B]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            className={`relative group overflow-hidden rounded-3xl border ${COLORS.glassBorder} ${item.col} ${item.row} bg-[#033a2d]`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover="hover"
                        >
                            <motion.div
                                className="absolute inset-0 z-0"
                                variants={{ hover: { scale: 1.05 } }}
                                transition={{ duration: 0.5 }}
                            >
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover opacity-90 group-hover:opacity-80 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#022C22] via-transparent to-transparent" />
                            </motion.div>

                            <div className="absolute bottom-0 left-0 p-8 w-full z-10 flex items-end justify-between">
                                <div>
                                    <h3 className={`text-3xl text-white font-bold uppercase ${FONT.header}`}>{item.title}</h3>
                                    <p className="text-white/60 text-sm mt-1">{item.subtitle}</p>
                                </div>
                                {item.link ? (
                                    <Link href={item.link}>
                                        <motion.button
                                            variants={{ hover: { y: 0, opacity: 1 } }}
                                            initial={{ y: 20, opacity: 0 }}
                                            className="w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center text-[#022C22]"
                                        >
                                            <ArrowUpRight size={20} />
                                        </motion.button>
                                    </Link>
                                ) : (
                                    <motion.button
                                        variants={{ hover: { y: 0, opacity: 1 } }}
                                        initial={{ y: 20, opacity: 0 }}
                                        className="w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center text-[#022C22]"
                                    >
                                        <ArrowUpRight size={20} />
                                    </motion.button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const RFQCalculator = () => {
    return (
        <section className="py-32 px-6 bg-[#022C22] relative">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16">
                    <div className="text-center mb-12">
                        <h2 className={`text-4xl md:text-5xl text-white font-bold uppercase mb-4 ${FONT.header}`}>
                            Instant Landed Cost
                        </h2>
                        <p className="text-white/60">Algorithm-driven pricing. Zero hidden fees.</p>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className={`text-xs text-[#F59E0B] uppercase tracking-widest font-bold ${FONT.header}`}>Commodity</label>
                            <input type="text" placeholder="e.g. Basmati Rice" className="w-full bg-[#022C22]/50 border border-white/10 rounded-xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-[#F59E0B] transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className={`text-xs text-[#F59E0B] uppercase tracking-widest font-bold ${FONT.header}`}>Destination</label>
                            <input type="text" placeholder="e.g. Rotterdam" className="w-full bg-[#022C22]/50 border border-white/10 rounded-xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-[#F59E0B] transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className={`text-xs text-[#F59E0B] uppercase tracking-widest font-bold ${FONT.header}`}>Volume</label>
                            <input type="text" placeholder="TEU / MT" className="w-full bg-[#022C22]/50 border border-white/10 rounded-xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-[#F59E0B] transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className={`text-xs text-[#F59E0B] uppercase tracking-widest font-bold ${FONT.header}`}>Incoterm</label>
                            <select className="w-full bg-[#022C22]/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#F59E0B] transition-colors">
                                <option>FOB</option>
                                <option>CIF</option>
                                <option>DDP</option>
                            </select>
                        </div>

                        <div className="md:col-span-2 mt-8">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-[#F59E0B] text-[#022C22] p-5 rounded-xl font-bold uppercase text-xl shadow-lg shadow-[#F59E0B]/20"
                            >
                                Calculate Quote
                            </motion.button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};



export default function PhysicalTradePage() {
    return (
        <main className="min-h-screen bg-[#022C22] text-white selection:bg-[#F59E0B] selection:text-[#022C22]">
            <Navbar />
            <Hero />
            <Excellence />
            <BentoGrid />
            <WhyUs />
            <Certifications />
            <Footer theme="physical" />
        </main>
    );
}
