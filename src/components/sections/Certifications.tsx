"use client";

import { motion } from 'framer-motion';
import {
    Award,
    ShieldCheck,
    FileCheck,
    Globe,
    Leaf,
    BadgeCheck
} from 'lucide-react';

const FONT = {
    header: 'font-rajdhani',
    body: 'font-outfit',
};

const certs = [
    { name: "APEDA", description: "Registered Member", icon: Globe },
    { name: "FSSAI", description: "Food Safety Certified", icon: Leaf },
    { name: "ISO 9001:2015", description: "Quality Management", icon: Award },
    { name: "SPICES BOARD", description: "Authorized Exporter", icon: BadgeCheck },
    { name: "IEC", description: "Import Export Code", icon: FileCheck },
    { name: "GST", description: "Government Registered", icon: ShieldCheck },
];

export default function Certifications() {
    return (
        <section className="py-20 bg-[#022C22] border-t border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="text-center mb-12">
                    <h3 className={`text-[#F59E0B] text-sm font-bold tracking-[0.2em] uppercase mb-4 ${FONT.header}`}>
                        Compliance & Trust
                    </h3>
                    <h2 className={`text-2xl md:text-3xl font-bold uppercase text-white ${FONT.header}`}>
                        Fully Licensed & <span className="text-white/50">Certified</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {certs.map((cert, index) => {
                        const Icon = cert.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group transition-colors duration-300"
                            >
                                <div className="p-3 mb-3 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] group-hover:scale-110 transition-transform duration-300">
                                    <Icon size={24} strokeWidth={1.5} />
                                </div>
                                <div className={`text-lg font-bold text-white uppercase ${FONT.header}`}>
                                    {cert.name}
                                </div>
                                <div className={`text-[10px] text-white/40 uppercase tracking-wider mt-1 text-center ${FONT.body}`}>
                                    {cert.description}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
