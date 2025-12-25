"use client";



import { motion } from 'framer-motion';

export default function Metrics() {
    return (
        <section className="py-20 border-t border-neutral-200 bg-neutral-50 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-neutral-200">
                    {[
                        { value: 'High', label: 'Trade Volume', color: 'text-neutral-900' },
                        { value: 'Global', label: 'Shipments', color: 'text-brand-teal' },
                        { value: '24/7', label: 'Uptime', color: 'text-neutral-900' },
                        { value: 'Fast', label: 'Clearance', color: 'text-brand-amber' }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className={`text-3xl md:text-5xl font-bold mb-2 ${item.color}`}>{item.value}</div>
                            <div className="text-sm text-neutral-500 uppercase tracking-widest">{item.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
