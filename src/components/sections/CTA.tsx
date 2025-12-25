"use client";

import { motion } from 'framer-motion';

export default function CTA() {
    return (
        <section className="max-w-5xl mx-auto py-32 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="px-4"
            >
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tight mb-6 md:mb-8 text-neutral-900">
                    Ready to upgrade <br /> your supply chain?
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 mb-8 md:mb-12 max-w-2xl mx-auto font-light">
                    Join 500+ exporters who have switched to the PrimeLink Operating System.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto bg-neutral-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-teal transition-colors shadow-lg shadow-brand-teal/20">
                        Start Trading
                    </button>
                    <button className="w-full sm:w-auto bg-white text-neutral-900 border border-neutral-200 px-8 py-4 rounded-full font-semibold hover:bg-neutral-50 transition-colors">
                        Contact Sales
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
