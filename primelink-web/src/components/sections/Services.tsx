"use client";

import { Icon } from '@iconify/react';

export default function Services() {
    return (
        <section className="max-w-7xl mx-auto py-24 border-t border-neutral-200">

            <div className="mb-16 max-w-3xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 text-neutral-900">
                    We bridge the gap between <br />
                    <span className="text-neutral-400">Physical Chaos</span> and <span className="text-brand-teal">Digital Order.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Card 1: Sourcing (Physical) */}
                <div className="group relative p-8 md:p-10 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-brand-teal/30 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-auto md:h-96 gap-6 overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-3xl group-hover:bg-brand-teal/10 transition-all"></div>

                    <div>
                        <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:text-white transition-colors text-neutral-900">
                            <Icon icon="solar:hand-shake-linear" className="text-2xl" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight text-neutral-900">Source</h3>
                        <p className="text-lg text-neutral-600 font-light leading-relaxed">
                            Direct access to verified Indian manufacturers. We handle negotiation, QC, and procurement physically.
                        </p>
                    </div>
                    <div className="flex justify-between items-end border-t border-neutral-200 pt-4 mt-4">
                        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Physical Division</span>
                        <span className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-all duration-300 text-neutral-400">
                            <Icon icon="solar:arrow-right-linear" className="text-lg" />
                        </span>
                    </div>
                </div>

                {/* Card 2: Logistics (Movement) */}
                <div className="group relative p-8 md:p-10 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-brand-amber/30 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-auto md:h-96 gap-6 overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-amber/5 rounded-full blur-3xl group-hover:bg-brand-amber/10 transition-all"></div>

                    <div>
                        <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center mb-6 group-hover:bg-brand-amber group-hover:text-white transition-colors text-neutral-900">
                            <Icon icon="solar:box-minimalistic-linear" className="text-2xl" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight text-neutral-900">Move</h3>
                        <p className="text-lg text-neutral-600 font-light leading-relaxed">
                            End-to-end freight management. From customs clearance to container stuffing, we move it on the ground.
                        </p>
                    </div>
                    <div className="flex justify-between items-end border-t border-neutral-200 pt-4 mt-4">
                        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Logistics Division</span>
                        <span className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-brand-amber group-hover:text-white transition-all duration-300 text-neutral-400">
                            <Icon icon="solar:arrow-right-linear" className="text-lg" />
                        </span>
                    </div>
                </div>

                {/* Card 3: Digital (Tech) */}
                <div className="group relative p-8 md:p-10 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-auto md:h-96 gap-6 overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-200/50 rounded-full blur-3xl group-hover:bg-neutral-200 transition-all"></div>

                    <div>
                        <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors text-neutral-900">
                            <Icon icon="solar:code-scan-linear" className="text-2xl" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight text-neutral-900">Digitize</h3>
                        <p className="text-lg text-neutral-600 font-light leading-relaxed">
                            PrimeVerify APIs and SmartContracts. Automate your documentation and verify entities instantly.
                        </p>
                    </div>
                    <div className="flex justify-between items-end border-t border-neutral-200 pt-4 mt-4">
                        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Digital Division</span>
                        <span className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300 text-neutral-400">
                            <Icon icon="solar:arrow-right-linear" className="text-lg" />
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}
