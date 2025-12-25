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
            >
                <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8 text-neutral-900">
                    Ready to upgrade <br /> your supply chain?
                </h2>
                <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto font-light">
                    Join 500+ exporters who have switched to the PrimeLink Operating System.
                </p>
            </motion.div>
        </section>
    );
}
