"use client";

import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';
import { Sprout, Anchor, Globe, LucideIcon } from 'lucide-react';

interface Phase {
    year: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    icon: LucideIcon;
}

const phases: Phase[] = [
    {
        year: "2018",
        subtitle: "The Root",
        title: "BOOTS ON THE GROUND",
        description: "We didn't start in a boardroom. We started in the mandis (markets) of Gujarat and the textile mills of Surat. We learned that true export reliability starts with the raw material. We vet every supplier in person, not via email.",
        image: "/images/physical/termaric.png", // Raw Spices Texture
        icon: Sprout
    },
    {
        year: "2021",
        subtitle: "The Grind",
        title: "TAMING THE CHAOS",
        description: "Shipping is messy. We spent years mapping the bottlenecks at Mundra and Nhava Sheva ports. We built a logistics network that anticipates customs delays before they happen, ensuring your container never sits idle.",
        image: "/image.jpeg", // Port/Industrial
        icon: Anchor
    },
    {
        year: "2024",
        subtitle: "The Scale",
        title: "THE MODERN STANDARD",
        description: "Today, we operate with the precision of a machine. We combine our deep sourcing roots with rigorous compliance to deliver 12,000+ metric tons annually. No excuses. Just delivered cargo.",
        image: "/cargo.png", // Containers/Scale
        icon: Globe
    }
];

export default function OurStory() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activePhase, setActivePhase] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="relative py-32 md:py-48 bg-[#022C22] overflow-hidden">

            {/* Background Images - Transitioning based on active phase */}
            <div className="absolute inset-0 z-0">
                {phases.map((phase, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activePhase === index ? 'opacity-20' : 'opacity-0'}`}
                    >
                        <img
                            src={phase.image}
                            alt={phase.title}
                            className="w-full h-full object-cover filter grayscale contrast-125 mix-blend-overlay"
                        />
                        <div className="absolute inset-0 bg-[#022C22]/90" />
                    </div>
                ))}

                {/* Topographic Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#F59E0B 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24 md:mb-40"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 border-white/10 bg-white/5 backdrop-blur-md">
                        <div className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                        <span className="text-[#F59E0B] text-xs font-bold tracking-[0.2em] uppercase font-rajdhani">
                            The Evolution
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-bold uppercase text-white font-rajdhani mb-6 leading-none">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Story</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto font-outfit text-lg">
                        From the mandis to the world stage. Built on grit, defined by reliability.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Central Timeline Track */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2" />
                    <motion.div
                        style={{ scaleY, transformOrigin: "top" }}
                        className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#F59E0B] -translate-x-1/2 z-10 shadow-[0_0_15px_#F59E0B]"
                    />

                    <div className="space-y-32 md:space-y-48">
                        {phases.map((phase, i) => (
                            <TimelineCard
                                key={i}
                                phase={phase}
                                index={i}
                                setActive={() => setActivePhase(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineCard({ phase, index, setActive }: { phase: Phase, index: number, setActive: () => void }) {
    const isEven = index % 2 === 0;
    const Icon = phase.icon;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onViewportEnter={setActive}
            className={`flex items-center gap-8 md:gap-24 relative ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        >
            {/* Year Node (Center) */}
            <div className={`absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#022C22] border-2 border-[#F59E0B] rounded-full z-20 shadow-[0_0_10px_#F59E0B]`} />

            {/* Content Side */}
            <div className={`flex-1 pl-12 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                <div className="group relative">
                    {/* Massive Year Background */}
                    <span
                        className={`absolute -top-8 md:-top-16 ${isEven ? 'right-0 md:right-0' : 'left-0 md:left-0'} text-6xl md:text-9xl font-bold font-rajdhani text-transparent opacity-10 select-none pointer-events-none transition-all duration-500 group-hover:opacity-20 group-hover:tracking-widest`}
                        style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.3)' }}
                    >
                        {phase.year}
                    </span>

                    <div className="relative bg-[#033a2d]/50 backdrop-blur-sm border border-white/5 p-6 md:p-8 rounded-3xl hover:bg-[#033a2d] transition-all duration-300 group-hover:border-white/10">
                        {/* Icon Header */}
                        <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                            <div className="p-2 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B]">
                                <Icon size={24} />
                            </div>
                            <span className="text-[#F59E0B] font-rajdhani font-bold tracking-widest uppercase text-sm">
                                {phase.subtitle}
                            </span>
                        </div>

                        <h3 className="text-3xl md:text-5xl font-bold text-white uppercase font-rajdhani mb-4 leading-none">
                            {phase.title}
                        </h3>
                        <p className="text-white/60 font-outfit text-base leading-relaxed">
                            {phase.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Empty Side for Desktop Layout Balance */}
            <div className="hidden md:block flex-1" />
        </motion.div>
    );
}
