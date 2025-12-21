"use client";

import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="max-w-7xl mx-auto mb-32 relative">

            {/* Hero Header Content - Center Aligned */}
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-20 animate-fade-in">

                <div className="flex items-center gap-2 text-neutral-500 mb-6 text-sm md:text-base">
                    <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                    <span className="uppercase tracking-widest text-xs font-bold text-brand-teal">The Modern Trade Backbone</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-8xl font-medium tracking-tighter leading-tight mb-8 text-neutral-900">
                    Move cargo globally. <br />
                    Manage it <span className="text-brand-teal">digitally.</span>
                </h1>

                <p className="text-lg text-neutral-600 leading-relaxed font-light max-w-2xl mx-auto">
                    PrimeLink combines 20 years of physical logistics infrastructure with next-gen API verification.
                    Source products, book freight, and verify partners—all in one OS.
                </p>

            </div>

            {/* Hero Image / Visual */}
            <div className="relative w-full rounded-[2.5rem] bg-neutral-100 overflow-hidden aspect-[16/10] md:aspect-[21/9] animate-fade-in delay-200 group border border-neutral-200">
                {/* Background decorative elements (Teal/Green Gradient) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-neutral-50 via-white to-teal-50 opacity-60"></div>

                {/* Mockup Container */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-12 w-[85%] md:w-[70%] transition-transform duration-700 group-hover:-translate-y-4">
                    {/* Laptop Bezel */}
                    <div className="relative bg-[#1a1a1a] rounded-t-2xl p-1 md:p-2 shadow-2xl border-t border-l border-r border-white/10">
                        <div className="bg-black rounded-t-lg overflow-hidden relative aspect-video group">
                            {/* Dashboard Image (Dark UI) */}
                            <Image
                                src="/image.jpeg"
                                alt="PrimeLink Trade Dashboard"
                                fill
                                className="object-cover opacity-90 transition-all duration-700"
                            />
                            {/* Screen Overlay UI elements */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                            <div className="absolute bottom-8 left-8 text-white">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    <span className="text-xs font-mono text-green-400 uppercase">Quality Verified</span>
                                </div>
                                <h3 className="text-2xl md:text-4xl font-medium tracking-tight">Order #ORG-8821 <br /><span className="text-neutral-300 text-lg">Origin: Kerala → Hamburg</span></h3>
                            </div>

                            {/* Floating Data Points */}
                            <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-lg text-right">
                                <div className="text-xs text-neutral-200 uppercase">Net Weight</div>
                                <div className="text-xl font-bold text-white">12,500 KG</div>
                            </div>
                        </div>
                    </div>
                    {/* Laptop Base */}
                    <div className="h-4 md:h-6 bg-[#2a2a2a] w-full rounded-b-xl shadow-xl flex items-center justify-center">
                        <div className="w-16 h-1 bg-white/20 rounded-full"></div>
                    </div>
                </div>
            </div>

        </section>
    );
}
