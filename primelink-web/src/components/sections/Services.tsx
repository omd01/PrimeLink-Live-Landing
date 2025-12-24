"use client";

import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
    return (
        <section className="max-w-7xl mx-auto py-24 border-t border-neutral-200">

            <div className="mb-16 max-w-3xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 text-neutral-900">
                    We bridge the gap between <br />
                    <span className="text-neutral-400">Physical Chaos</span> and <span className="text-brand-teal">Digital Order.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

                {/* Card 1: Physical Division */}
                <div className="group relative rounded-3xl bg-white border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    {/* Image Section */}
                    <div className="relative h-64 md:h-72 w-full overflow-hidden">
                        <Image
                            src="/physical-trade.jpg"
                            alt="Physical Trade Division"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col justify-between flex-1">
                        <div>
                            <div className="w-12 h-12 rounded-full bg-brand-amber/10 flex items-center justify-center mb-6 text-brand-amber">
                                <Icon icon="solar:box-minimalistic-bold-duotone" className="text-2xl" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight text-neutral-900">Physical Trade Division</h3>
                            <p className="text-lg text-neutral-600 font-light leading-relaxed mb-8">
                                End-to-end execution. We source verified products and handle the entire logistics chain from factory to port.
                            </p>
                        </div>
                        <Link href="/physical" className="inline-flex items-center gap-2 text-brand-amber font-semibold group-hover:gap-3 transition-all">
                            Explore Physical Services
                            <Icon icon="solar:arrow-right-linear" className="text-lg" />
                        </Link>
                    </div>
                </div>

                {/* Card 2: Digital Division */}
                <div className="group relative rounded-3xl bg-white border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    {/* Image Section */}
                    <div className="relative h-64 md:h-72 w-full overflow-hidden">
                        <Image
                            src="/digital-tech.jpg"
                            alt="Digital Tech Division"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col justify-between flex-1">
                        <div>
                            <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center mb-6 text-brand-teal">
                                <Icon icon="solar:code-scan-bold-duotone" className="text-2xl" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight text-neutral-900">Digital Tech Division</h3>
                            <p className="text-lg text-neutral-600 font-light leading-relaxed mb-8">
                                The operating system for trade. Proprietary APIs, smart contracts, and real-time documentation automation.
                            </p>
                        </div>
                        <Link href="/digital" className="inline-flex items-center gap-2 text-brand-teal font-semibold group-hover:gap-3 transition-all">
                            Explore Digital Tools
                            <Icon icon="solar:arrow-right-linear" className="text-lg" />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
