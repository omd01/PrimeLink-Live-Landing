"use client";

import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function Testimonials() {
    return (
        <section className="max-w-7xl mx-auto py-24 border-t border-neutral-200">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-medium mb-4 text-neutral-900">Trusted by modern exporters</h2>
                <p className="text-neutral-500">Join the network of forward-thinking trade professionals.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Testimonial 1 */}
                <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200 hover:bg-white hover:shadow-lg transition-all">
                    <div className="flex gap-1 text-brand-amber mb-6">
                        {[...Array(5)].map((_, i) => (
                            <Icon key={i} icon="solar:star-bold" />
                        ))}
                    </div>
                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                        "PrimeLink's API reduced our vendor verification time from 3 days to 3 minutes. It's not just
                        software; it's a competitive advantage."
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-200">
                            <Image
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Rajesh Gupta"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h5 className="text-neutral-900 font-medium">Rajesh Gupta</h5>
                            <p className="text-xs text-neutral-500">Director, Gupta Exports</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200 hover:bg-white hover:shadow-lg transition-all">
                    <div className="flex gap-1 text-brand-amber mb-6">
                        {[...Array(5)].map((_, i) => (
                            <Icon key={i} icon="solar:star-bold" />
                        ))}
                    </div>
                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                        "Finally, a logistics partner that speaks 'API'. The dashboard gives us total visibility over
                        our 40+ monthly containers to Europe."
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-200">
                            <Image
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="Sarah Jenkins"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h5 className="text-neutral-900 font-medium">Sarah Jenkins</h5>
                            <p className="text-xs text-neutral-500">Logistics Head, RetailCo UK</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200 hover:bg-white hover:shadow-lg transition-all">
                    <div className="flex gap-1 text-brand-amber mb-6">
                        {[...Array(5)].map((_, i) => (
                            <Icon key={i} icon="solar:star-bold" />
                        ))}
                    </div>
                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                        "The SmartContracts feature alone saved us thousands in legal fees. It handles the LC
                        documentation perfectly every time."
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-200">
                            <Image
                                src="https://randomuser.me/api/portraits/men/86.jpg"
                                alt="Amit Patel"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h5 className="text-neutral-900 font-medium">Amit Patel</h5>
                            <p className="text-xs text-neutral-500">CEO, Patel Spices</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
