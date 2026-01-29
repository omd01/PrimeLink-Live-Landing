"use client";

import { motion } from 'framer-motion';
import { Globe, Link2, Sprout, Package, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const features = [
    {
        icon: Globe,
        title: "Global Quality Standards",
        desc: "International-grade produce with strict safety compliance."
    },
    {
        icon: Link2,
        title: "Reliable Supply Chain",
        desc: "Timely, efficient sourcing and worldwide delivery."
    },
    {
        icon: Sprout,
        title: "Farmer-First Approach",
        desc: "Sustainably grown by 300+ empowered farmers."
    },
    {
        icon: Package,
        title: "Custom Solutions",
        desc: "Flexible packaging and export-ready customization."
    }
];

export default function Excellence() {
    return (
        <section className="py-16 md:py-32 bg-[#022C22] relative overflow-hidden">
            {/* Background noise/texture similar to other sections */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#F59E0B 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Features Grid */}
                {/* Features Grid: Industrial Spec Sheet Style */}
                <div className="grid grid-cols-1 md:grid-cols-4 mb-32 border-y border-white/10">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`
                                relative p-8 group transition-colors hover:bg-white/5
                                border-b md:border-b-0 border-white/10 md:border-r last:border-r-0
                            `}
                        >
                            {/* Tech Header */}
                            <div className="flex justify-between items-start mb-12 opacity-50 group-hover:opacity-100 transition-opacity">
                                <span className="font-mono text-xs text-[#F59E0B] tracking-widest">
                                    0{i + 1}
                                </span>
                                <feature.icon size={16} className="text-[#F59E0B]" />
                            </div>

                            {/* Main Title */}
                            <h3 className="text-3xl font-rajdhani font-bold text-white uppercase leading-[0.9] mb-4 group-hover:text-[#F59E0B] transition-colors">
                                {feature.title.split(" ").map((word, w) => (
                                    <span key={w} className="block">{word}</span>
                                ))}
                            </h3>

                            {/* Desc */}
                            <div className="h-[1px] w-8 bg-white/20 mb-4 group-hover:w-full group-hover:bg-[#F59E0B]/50 transition-all duration-500" />
                            <p className="text-white/60 font-outfit text-sm leading-relaxed max-w-[20ch]">
                                {feature.desc}
                            </p>

                            {/* Corner Accents */}
                            <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-2 h-2 border-t border-r border-[#F59E0B]" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Main Content Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">

                    {/* Visual Composite */}
                    <div className="relative mb-8 lg:mb-0">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[300px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden border border-white/10"
                        >
                            <Image
                                src="/images/physical/moringa.jpeg"
                                alt="Farmer Harvesting"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#022C22]/80 to-transparent mix-blend-multiply" />
                        </motion.div>

                        {/* Floating Product Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="absolute -bottom-6 right-0 md:-bottom-12 md:right-8 w-40 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden border-4 border-[#022C22] shadow-2xl"
                        >
                            <div className="relative w-full h-full bg-white">
                                <Image
                                    src="/images/physical/termaric.png"
                                    alt="Premium Product"
                                    fill
                                    className="object-cover p-2"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:pl-8 pt-12 lg:pt-0"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-[#F59E0B] text-xs font-bold tracking-[0.2em] uppercase font-rajdhani">
                                PrimeLink World Trade
                            </span>
                            <div className="h-[1px] w-12 bg-[#F59E0B]/50" />
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold uppercase text-white font-rajdhani mb-8 leading-[0.9]">
                            Exporting Excellence <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Empowering Lives</span>
                        </h2>

                        <p className="text-white/70 font-outfit text-lg mb-8 leading-relaxed">
                            At PrimeLink, we deliver nature's finest in three premium forms: <span className="text-white font-bold">Fresh, Frozen, and Dehydrated</span>.
                            With a strong network of 300+ farmers and cutting-edge processing facilities, we ensure every product meets international quality standards.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Global Trade Expertise",
                                "Trusted Farmer Network",
                                "Tailored Export Solutions"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white/80 font-rajdhani font-semibold tracking-wide uppercase">
                                    <CheckCircle2 className="text-[#F59E0B]" size={20} />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="group relative px-8 py-3 rounded-full border border-white/20 hover:border-[#F59E0B] transition-colors bg-[#033a2d]/30 hover:bg-[#F59E0B]/10 overflow-hidden">
                            <span className="relative z-10 text-white font-bold uppercase tracking-wider font-rajdhani flex items-center gap-2">
                                Know More
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </span>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
