"use client";



import { Icon } from '@iconify/react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Testimonials() {
    return (
        <section className="max-w-7xl mx-auto py-32 border-t border-neutral-100">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 px-4 md:px-0">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl"
                >
                    <span className="text-brand-teal font-mono text-xs tracking-widest uppercase mb-4 block">Trust & Verification</span>
                    <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 leading-tight">
                        Powering the next generation <br />
                        <span className="text-neutral-400">of global trade.</span>
                    </h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="hidden md:block"
                >
                    <button className="flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-brand-teal transition-colors">
                        Read all success stories
                        <Icon icon="solar:arrow-right-linear" />
                    </button>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
                {/* Testimonial 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="group relative bg-white p-8 md:p-10 rounded-3xl border border-neutral-200 hover:border-brand-teal/20 hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-500"
                >
                    <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                        <Icon icon="solar:quote-up-square-bold" className="text-4xl text-brand-teal" />
                    </div>

                    <div className="mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-50 rounded-full border border-neutral-100">
                            <Icon icon="solar:verified-check-bold" className="text-brand-teal" />
                            <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-500">Verified Partner</span>
                        </div>
                    </div>

                    <p className="text-xl text-neutral-700 font-light leading-relaxed mb-10">
                        "PrimeLink's API reduced our vendor verification time from <span className="text-neutral-900 font-medium">3 days to 3 minutes</span>. It's not just software; it's a competitive advantage."
                    </p>

                    <div className="flex items-center gap-4 border-t border-neutral-100 pt-6">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-100">
                            <Image
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Rajesh Gupta"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <div>
                            <h5 className="text-neutral-900 font-medium text-sm">Rajesh Gupta</h5>
                            <p className="text-xs text-neutral-500 uppercase tracking-wide">Director, Gupta Exports</p>
                        </div>
                    </div>
                </motion.div>

                {/* Testimonial 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="group relative bg-white p-8 md:p-10 rounded-3xl border border-neutral-200 hover:border-brand-teal/20 hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-500 md:-translate-y-8"
                >
                    <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                        <Icon icon="solar:quote-up-square-bold" className="text-4xl text-brand-teal" />
                    </div>

                    <div className="mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-50 rounded-full border border-neutral-100">
                            <Icon icon="solar:verified-check-bold" className="text-brand-teal" />
                            <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-500">Verified Partner</span>
                        </div>
                    </div>

                    <p className="text-xl text-neutral-700 font-light leading-relaxed mb-10">
                        "Finally, a logistics partner that speaks 'API'. The dashboard gives us <span className="text-neutral-900 font-medium">total visibility</span> over our 40+ monthly containers to Europe."
                    </p>

                    <div className="flex items-center gap-4 border-t border-neutral-100 pt-6">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-100">
                            <Image
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="Sarah Jenkins"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <div>
                            <h5 className="text-neutral-900 font-medium text-sm">Sarah Jenkins</h5>
                            <p className="text-xs text-neutral-500 uppercase tracking-wide">Logistics Head, RetailCo</p>
                        </div>
                    </div>
                </motion.div>

                {/* Testimonial 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="group relative bg-white p-8 md:p-10 rounded-3xl border border-neutral-200 hover:border-brand-teal/20 hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-500"
                >
                    <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                        <Icon icon="solar:quote-up-square-bold" className="text-4xl text-brand-teal" />
                    </div>

                    <div className="mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-50 rounded-full border border-neutral-100">
                            <Icon icon="solar:verified-check-bold" className="text-brand-teal" />
                            <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-500">Verified Partner</span>
                        </div>
                    </div>

                    <p className="text-xl text-neutral-700 font-light leading-relaxed mb-10">
                        "The SmartContracts feature alone saved us thousands in legal fees. It handles the <span className="text-neutral-900 font-medium">LC documentation</span> perfectly every time."
                    </p>

                    <div className="flex items-center gap-4 border-t border-neutral-100 pt-6">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-100">
                            <Image
                                src="https://randomuser.me/api/portraits/men/86.jpg"
                                alt="Amit Patel"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <div>
                            <h5 className="text-neutral-900 font-medium text-sm">Amit Patel</h5>
                            <p className="text-xs text-neutral-500 uppercase tracking-wide">CEO, Patel Spices</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
