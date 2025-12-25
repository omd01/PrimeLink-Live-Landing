"use client";

import { useState } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Services() {
    const [activeCard, setActiveCard] = useState<'physical' | 'digital' | null>(null);

    return (
        <section className="max-w-7xl mx-auto py-12 md:py-24 mb-12 md:mb-24 px-4 md:px-0">

            <div className="mb-16 max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tighter mb-6 text-neutral-900 leading-[1.1]"
                >
                    We bridge the gap between <br />
                    <span className="text-neutral-400">Physical Chaos</span> and <span className="text-brand-teal">Digital Order.</span>
                </motion.h2>
            </div>

            {/* Interactive Flex Container */}
            <div
                className="flex flex-col md:flex-row gap-4 md:gap-6 h-[800px] w-full"
                onMouseLeave={() => setActiveCard(null)}
            >

                {/* Card 1: Physical Division */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    onMouseEnter={() => setActiveCard('physical')}
                    className={`
                        relative rounded-[2.5rem] overflow-hidden group hover:shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${activeCard === 'physical' ? 'md:flex-[2]' : activeCard === 'digital' ? 'md:flex-[1]' : 'md:flex-[1.5]'}
                        flex-1 flex flex-col justify-end
                    `}
                >
                    {/* Background Image with Zoom Effect */}
                    <div className="absolute inset-0 w-full h-full">
                        <div className="absolute inset-0 bg-neutral-900/30 z-10 group-hover:bg-neutral-900/20 transition-colors duration-500"></div>
                        <Image
                            src="/bg1.png"
                            alt="Physical Trade"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-20 p-8 md:p-12 text-white bg-gradient-to-t from-black/90 via-black/50 to-transparent h-full flex flex-col justify-end items-start border border-white/10 rounded-[2.5rem]">

                        <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl mb-6 border border-white/20">
                            <Icon icon="solar:box-minimalistic-bold-duotone" className="text-3xl text-brand-amber" />
                        </div>

                        <h3 className="text-3xl md:text-5xl font-medium mb-4 tracking-tight leading-none">
                            Physical <br /> Trade Division
                        </h3>

                        <p className={`
                            text-lg text-neutral-200 font-light leading-relaxed mb-8 max-w-md transition-all duration-500 overflow-hidden
                            ${activeCard === 'digital' ? 'h-0 opacity-0 mb-0' : 'h-auto opacity-100'}
                        `}>
                            End-to-end execution. We source verified products and handle the entire logistics chain from factory to port.
                        </p>

                        <Link href="/physical"
                            className={`
                                inline-flex items-center gap-3 text-white bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-4 rounded-full 
                                hover:bg-brand-amber hover:border-brand-amber transition-all duration-300
                                ${activeCard === 'digital' ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}
                            `}
                        >
                            <span className="font-semibold">Explore Physical</span>
                            <Icon icon="solar:arrow-right-linear" className="text-xl" />
                        </Link>
                    </div>
                </motion.div>

                {/* Card 2: Digital Division */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    onMouseEnter={() => setActiveCard('digital')}
                    className={`
                        relative rounded-[2.5rem] overflow-hidden group hover:shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${activeCard === 'digital' ? 'md:flex-[2]' : activeCard === 'physical' ? 'md:flex-[1]' : 'md:flex-[1.5]'}
                        flex-1 flex flex-col justify-end
                    `}
                >
                    {/* Background Image with Zoom Effect */}
                    <div className="absolute inset-0 w-full h-full">
                        <div className="absolute inset-0 bg-neutral-900/30 z-10 group-hover:bg-neutral-900/20 transition-colors duration-500"></div>
                        <Image
                            src="/bg2.png"
                            alt="Digital Tech"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-20 p-8 md:p-12 text-white bg-gradient-to-t from-teal-950/90 via-teal-900/50 to-transparent h-full flex flex-col justify-end items-start border border-white/10 rounded-[2.5rem]">

                        <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl mb-6 border border-white/20">
                            <Icon icon="solar:code-scan-bold-duotone" className="text-3xl text-brand-teal" />
                        </div>

                        <h3 className="text-3xl md:text-5xl font-medium mb-4 tracking-tight leading-none">
                            Digital <br /> Tech Division
                        </h3>

                        <p className={`
                            text-lg text-neutral-200 font-light leading-relaxed mb-8 max-w-md transition-all duration-500 overflow-hidden
                            ${activeCard === 'physical' ? 'h-0 opacity-0 mb-0' : 'h-auto opacity-100'}
                        `}>
                            The operating system for trade. Proprietary APIs, smart contracts, and real-time documentation automation.
                        </p>

                        <Link href="/digital"
                            className={`
                                inline-flex items-center gap-3 text-white bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-4 rounded-full 
                                hover:bg-brand-teal hover:border-brand-teal transition-all duration-300
                                ${activeCard === 'physical' ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}
                            `}
                        >
                            <span className="font-semibold">Explore Digital</span>
                            <Icon icon="solar:arrow-right-linear" className="text-xl" />
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
