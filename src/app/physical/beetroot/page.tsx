"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Leaf,
    Sprout,
    CheckCircle2,
    Cookie,
    Sparkles,
    CupSoda
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const FONT = {
    header: "font-rajdhani",
    body: "font-outfit",
};

const ProductSpecsTable = () => {
    return (
        <div className="w-full">
            <h3 className={`text-2xl font-bold uppercase ${FONT.header} mb-4 text-white border-l-4 border-[#F59E0B] pl-4`}>
                Product Specifications
            </h3>
            <div className="border border-white/20 rounded-2xl overflow-hidden overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead className="bg-white/5 text-[#F59E0B]">
                        <tr>
                            <th className={`p-4 font-bold uppercase ${FONT.header} border-b border-r border-white/10`}>Category</th>
                            <th className={`p-4 font-bold uppercase ${FONT.header} border-b border-r border-white/10`}>Type</th>
                            <th className={`p-4 font-bold uppercase ${FONT.header} border-b border-r border-white/10`}>Grade & Quality</th>
                            <th className={`p-4 font-bold uppercase ${FONT.header} border-b border-r border-white/10`}>Shelf Life</th>
                            <th className={`p-4 font-bold uppercase ${FONT.header} border-b border-white/10`}>Packaging</th>
                        </tr>
                    </thead>
                    <tbody className={`${FONT.body} text-white/80`}>
                        {[
                            {
                                category: "Fresh",
                                type: "Crimson Globe / Detroit Dark Red",
                                grade: "A Grade, Firm, Deep Red Color",
                                shelf: "1-3 months (Cold Storage)",
                                pack: "10-25kg Mesh Bags / Cartons"
                            },
                            {
                                category: "Frozen",
                                type: "IQF Cubes, Slices (Blanched)",
                                grade: "A Grade, Uniform Cut, IQF",
                                shelf: "18-24 months (at -18°C)",
                                pack: "LDPE Polybags (1kg - 5kg)"
                            },
                            {
                                category: "Dehydrated",
                                type: "Air-Dried Flakes, Spray Dried Powder",
                                grade: "Premium Food Grade, 100% Pure",
                                shelf: "12-24 months (Cool Dry Place)",
                                pack: "Foil Pouches, HDPE Drums/Sacks"
                            }
                        ].map((row, i) => (
                            <tr key={i} className="border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-colors">
                                <td className="p-4 font-bold text-white border-r border-white/10">{row.category}</td>
                                <td className="p-4 border-r border-white/10">{row.type}</td>
                                <td className="p-4 border-r border-white/10">{row.grade}</td>
                                <td className="p-4 border-r border-white/10">{row.shelf}</td>
                                <td className="p-4">{row.pack}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const ProductDetails = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">

            {/* 1. TRUST & CERTIFICATIONS */}
            <div className="border-y border-white/10 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "FSSAI Approved", icon: ShieldCheck },
                        { label: "USDA Organic", icon: Leaf },
                        { label: "Non-GMO Project", icon: CheckCircle2 },
                        { label: "100% Vegan", icon: Sprout },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center justify-center gap-3 text-center group">
                            <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#F59E0B]/20 group-hover:border-[#F59E0B] transition-colors">
                                <item.icon className="w-6 h-6 text-[#F59E0B]" />
                            </div>
                            <span className={`text-sm font-bold uppercase tracking-wider ${FONT.header} text-white/80`}>
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* 2. NUTRITION FACTS TABLE */}
                <div>
                    <h3 className={`text-3xl font-bold uppercase ${FONT.header} mb-8 text-white`}>
                        Nutrition Profile <span className="text-[#F59E0B] text-lg align-middle ml-2">(Per 100g)</span>
                    </h3>
                    <div className="border border-white/20 rounded-2xl overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <tbody className={`${FONT.body} text-white/80`}>
                                {[
                                    { label: "Energy", value: "380 Kcal" },
                                    { label: "Carbohydrates", value: "78.0 g" },
                                    { label: "Protein", value: "11.2 g" },
                                    { label: "Total Fat", value: "0.8 g" },
                                    { label: "Iron", value: "6.5 mg" },
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-colors">
                                        <td className="p-4 font-medium border-r border-white/10">{row.label}</td>
                                        <td className="p-4 font-bold text-white text-right">{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 3. USAGE SECTION */}
                <div>
                    <h3 className={`text-3xl font-bold uppercase ${FONT.header} mb-8 text-white`}>
                        Versatile Usage
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                            { title: "Smoothies", icon: CupSoda, desc: "Boost morning shakes" },
                            { title: "Baking", icon: Cookie, desc: "Natural red velvet color" },
                            { title: "Face Masks", icon: Sparkles, desc: "Glowing skin therapy" },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 hover:bg-white/10"
                            >
                                <card.icon className="w-8 h-8 text-[#F59E0B] mb-4" />
                                <h4 className={`text-lg font-bold uppercase ${FONT.header} mb-1`}>{card.title}</h4>
                                <p className="text-xs text-white/60">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. TECHNICAL SPECIFICATIONS (HSN CODES) */}
            <div className="w-full">
                <h3 className={`text-2xl font-bold uppercase ${FONT.header} mb-4 text-white border-l-4 border-[#F59E0B] pl-4`}>
                    HSN Codes
                </h3>
                <div className="border border-white/20 rounded-2xl overflow-hidden overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead className="bg-white/5 text-[#F59E0B]">
                            <tr>
                                <th className={`p-4 font-bold uppercase ${FONT.header} border-b border-r border-white/10`}>Product Form</th>
                                <th className={`p-4 font-bold uppercase ${FONT.header} border-b border-white/10`}>HSN Code</th>
                            </tr>
                        </thead>
                        <tbody className={`${FONT.body} text-white/80`}>
                            {[
                                { form: "Beetroot Powder (Dehydrated)", hsn: "0712 90 90" },
                                { form: "Fresh Beetroot (Salad Beet)", hsn: "0706 90 30" },
                                { form: "Frozen Beetroot (IQF)", hsn: "0710 80 90" },
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-bold text-white border-r border-white/10">{row.form}</td>
                                    <td className="p-4">{row.hsn}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    );
};

export default function BeetrootPage() {
    return (
        <main className="min-h-screen bg-[#022C22] text-white">
            <Navbar />

            {/* HERO SECTION */}
            <section className="pt-32 pb-8 px-6 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-12"
                >
                    <h1 className={`text-5xl md:text-7xl font-bold uppercase ${FONT.header} mb-4`}>
                        Beetroot Powder
                    </h1>
                    <div className="h-1 w-24 bg-[#F59E0B]" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Image */}
                    <div className="space-y-8 w-full">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-video w-full rounded-3xl overflow-hidden border border-white/20"
                        >
                            <Image
                                src="/images/physical/beetroot.jpeg"
                                alt="Organic Beetroot Powder"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Right Column (or below on mobile): Description */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="prose prose-lg prose-invert">
                            <h3 className={`text-3xl text-[#F59E0B] font-bold uppercase ${FONT.header} mb-4`}>
                                Nature's Superfood
                            </h3>
                            <p className={`text-white/80 ${FONT.body} leading-relaxed text-lg`}>
                                Our premium Organic Beetroot Powder is sourced from the finest farms, ensuring maximum retention of nutrients and vibrant color. Rich in nitrates, antioxidants, and essential minerals, it's the perfect addition to a healthy lifestyle.
                            </p>
                            <p className={`text-white/80 ${FONT.body} leading-relaxed text-lg mt-4`}>
                                Carefully processed to preserve its natural goodness, our beetroot powder is ideal for smoothies, baking, and natural food coloring.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
                            <div>
                                <span className="block text-xs text-[#F59E0B] uppercase tracking-widest mb-1">Origin</span>
                                <span className={`text-xl font-bold ${FONT.header}`}>Maharashtra, India</span>
                            </div>
                            <div>
                                <span className="block text-xs text-[#F59E0B] uppercase tracking-widest mb-1">Grade</span>
                                <span className={`text-xl font-bold ${FONT.header}`}>Premium Organic</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Inserted Specification Table (Full Width) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mt-12"
                >
                    <ProductSpecsTable />
                </motion.div>
            </section>

            {/* NEW PRODUCT DETAILS SECTION */}
            <ProductDetails />

            <Footer theme="physical" />
        </main>
    );
}
