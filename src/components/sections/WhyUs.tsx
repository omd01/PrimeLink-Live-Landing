"use client";

import { motion } from 'framer-motion';
import { Sprout, Layers, ShieldCheck, LucideIcon } from 'lucide-react';

// --- CONFIGURATION ---
const FONT = {
    header: 'font-rajdhani',
    body: 'font-outfit',
};

interface FeatureProps {
    title: string;
    description: string;
    icon: LucideIcon;
    index: number;
}

const FeatureCard = ({ title, description, icon: Icon, index }: FeatureProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-8 rounded-3xl border border-white/5 bg-[#033a2d]/30 backdrop-blur-sm hover:bg-[#033a2d]/50 transition-colors duration-300"
        >
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex items-start gap-6">
                <div className="p-3 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} strokeWidth={1.5} />
                </div>

                <div>
                    <h3 className={`text-2xl font-bold uppercase text-white mb-2 ${FONT.header}`}>
                        {title}
                    </h3>
                    <p className={`text-white/60 leading-relaxed ${FONT.body}`}>
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default function WhyUs() {
    const features = [
        {
            title: "Farm-Fresh Partnerships",
            description: "Direct sourcing ensures authentic quality. We eliminate middlemen to bring you the purest harvest straight from the source.",
            icon: Sprout
        },
        {
            title: "Multiple Processing Solutions",
            description: "Fresh, Frozen, and Dehydrated under one roof. Versatile processing capabilities tailored to your specific market needs.",
            icon: Layers
        },
        {
            title: "Global-Grade Quality",
            description: "Certified systems for international trade. Rigorous quality checks ensuring compliance with global export standards.",
            icon: ShieldCheck
        }
    ];

    return (
        <section className="relative py-32 px-6 bg-[#022C22] overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#033a2d]/20 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 border-white/10 bg-white/5 backdrop-blur-md">
                        <span className={`text-[#F59E0B] text-xs font-bold tracking-[0.2em] uppercase ${FONT.header}`}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className={`text-4xl md:text-6xl font-bold uppercase text-white mb-6 ${FONT.header}`}>
                        Our Commitment to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#F59E0B]/60">Excellence</span>
                    </h2>

                    <p className={`text-white/60 max-w-2xl mx-auto text-lg ${FONT.body}`}>
                        Redefining standards with integrity, innovation, and an unwavering focus on quality.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            index={index}
                            {...feature}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
