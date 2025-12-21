"use client";

import { Icon } from '@iconify/react';

export default function GlobalReach() {
    return (
        <section className="max-w-7xl mx-auto py-24 border-t border-neutral-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Text Side */}
                <div>
                    <span className="text-brand-amber font-mono text-sm tracking-widest uppercase mb-4 block">Global Infrastructure</span>
                    <h2 className="text-4xl md:text-5xl font-medium mb-6 leading-tight text-neutral-900">
                        Built on bedrock.<br />
                        <span className="text-neutral-400">Not just code.</span>
                    </h2>
                    <p className="text-lg text-neutral-600 font-light leading-relaxed mb-8">
                        Software can't move containers. We have established physical presence in key trade hubs across
                        India, UAE, and Singapore. Our digital layer sits on top of real warehouses, real trucks, and
                        real people.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200 hover:bg-white hover:shadow-md transition-all">
                            <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                                <Icon icon="solar:globe-linear" className="text-xl" />
                            </div>
                            <div>
                                <h4 className="text-neutral-900 font-medium">Global Coverage</h4>
                                <p className="text-sm text-neutral-500">Active export lanes across major trade regions.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200 hover:bg-white hover:shadow-md transition-all">
                            <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                                <Icon icon="solar:warehouse-linear" className="text-xl" />
                            </div>
                            <div>
                                <h4 className="text-neutral-900 font-medium">Strategic Warehousing</h4>
                                <p className="text-sm text-neutral-500">Consolidation points in key logistics hubs.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Side (Abstract Representation) */}
                <div className="relative aspect-square md:aspect-[4/3] bg-neutral-50 rounded-3xl border border-neutral-200 p-8 overflow-hidden group">
                    {/* Map Background Image */}
                    <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-5 mix-blend-multiply"></div>

                    {/* Glowing Nodes (CSS Animation) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                        {/* Node 1: India */}
                        <div className="absolute top-[55%] left-[68%] w-3 h-3 bg-brand-teal rounded-full shadow-[0_0_20px_rgba(13,148,136,0.6)] animate-pulse"></div>
                        <div className="absolute top-[55%] left-[68%] w-32 h-32 border border-brand-teal/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

                        {/* Node 2: Dubai */}
                        <div className="absolute top-[50%] left-[62%] w-2 h-2 bg-brand-amber rounded-full shadow-[0_0_15px_rgba(217,119,6,0.6)] delay-100"></div>

                        {/* Node 3: Singapore */}
                        <div className="absolute top-[60%] left-[78%] w-2 h-2 bg-neutral-400 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.2)] delay-300"></div>

                        {/* Connecting Lines (SVG) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-brand-teal/30"
                            style={{ strokeDasharray: 5, animation: 'dash 30s linear infinite' }}>
                            <path d="M 680 550 Q 620 500 520 450" fill="none" strokeWidth="1" />
                            <path d="M 680 550 Q 780 600 850 550" fill="none" strokeWidth="1" />
                        </svg>
                    </div>

                    <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md border border-neutral-200 px-4 py-2 rounded-lg shadow-sm">
                        <p className="text-xs text-brand-teal font-mono animate-pulse">● LIVE TRACKING ACTIVE</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
