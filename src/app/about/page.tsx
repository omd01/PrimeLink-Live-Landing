"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf, Truck, Globe, Award, TrendingUp, Anchor, ShieldCheck, Box, Zap, Users, BarChart } from "lucide-react";

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="bg-white min-h-screen">

                {/* --- SECTION 1: HERO (Centered Theme, Original Content) --- */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* "Our Story" Badge */}
                            <div className="flex items-center justify-center gap-2 mb-6">
                                <span className="text-[#0D9488] text-xs font-bold tracking-[0.2em] uppercase font-rajdhani">
                                    Our Story
                                </span>
                                <div className="h-[1px] w-12 bg-[#0D9488]/50" />
                            </div>

                            {/* Main Title: Global Trade (Brand Teal) Architects (Black) */}
                            <h1 className="text-5xl md:text-7xl font-bold text-black font-rajdhani mb-8 leading-tight">
                                <span className="text-[#0D9488]">Global Trade</span> <br />
                                Architects.
                            </h1>

                            {/* Subtext: Neutral Grey */}
                            <p className="text-neutral-500 font-outfit text-xl leading-relaxed max-w-3xl mx-auto mb-12">
                                PrimeLink Exim is a premier Indian export house engineering the seamless movement of agricultural commodities to global markets. We transcend traditional trading by integrating robust logistics, stringent quality control, and market intelligence.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                {/* Primary Button: Black */}
                                <button className="px-8 py-4 bg-black text-white rounded-full font-bold font-rajdhani hover:bg-neutral-800 transition-all shadow-lg hover:shadow-black/20">
                                    Our Mission
                                </button>
                                {/* Secondary Button: White with Border */}
                                <button className="px-8 py-4 bg-white text-black border border-neutral-200 rounded-full font-bold font-rajdhani hover:border-black transition-all">
                                    Contact Us
                                </button>
                            </div>
                        </motion.div>

                        {/* Hero Image / Video Container */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="mt-20 relative w-full aspect-[21/9] md:aspect-[2/1] rounded-[2.5rem] overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/physical/hero_container_full_hd.png"
                                alt="Global Trade Infrastructure"
                                fill
                                className="object-cover"
                            />
                            {/* Dark Gradient Overlay for text contrast if needed */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                                <p className="text-white text-sm font-bold tracking-wider uppercase font-rajdhani mb-1">Global Reach</p>
                                <p className="text-2xl md:text-3xl font-bold text-white font-rajdhani">Connecting India to the World</p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* --- SECTION 2: BRIDGING THE GAP (Mission/Who We Are) --- */}
                <section className="py-20 lg:py-32 bg-[#F8FAFC] relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-[#0D9488]/5 rounded-full blur-3xl opacity-50" />
                    </div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            {/* Bridge Title: Black Main, Grey "Chaos", Brand Teal "Order" */}
                            <h2 className="text-3xl md:text-5xl font-bold text-black font-rajdhani mb-6 leading-tight">
                                We bridge the gap between <br className="hidden md:block" />
                                <span className="text-neutral-400">India's Production</span> and <span className="text-[#0D9488]">Global Demand.</span>
                            </h2>
                            <p className="text-neutral-500 font-outfit text-lg">
                                Ensuring that every shipment is a testament to reliability, efficiency, and world-class standards.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            {/* Card 1: Production Capabilities */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="group relative h-[500px] rounded-[2.5rem] overflow-hidden"
                            >
                                <Image
                                    src="/images/physical/moringa.jpeg"
                                    alt="Physical Agriculture"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-10">
                                    <div className="w-12 h-12 bg-[#D97706] rounded-full flex items-center justify-center mb-6 text-black">
                                        <Leaf size={24} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white font-rajdhani mb-3">Rich Production</h3>
                                    <p className="text-white/80 font-outfit text-lg leading-relaxed">
                                        Sourcing the finest produce directly from 500+ certified growers across India's most fertile regions.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Card 2: International Demand */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="group relative h-[500px] rounded-[2.5rem] overflow-hidden"
                            >
                                <Image
                                    src="/images/physical/hero_container_port.png"
                                    alt="Global Logistics"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#024c3b]/90 via-[#000]/40 to-transparent mix-blend-multiply" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-10">
                                    <div className="w-12 h-12 bg-[#0D9488] rounded-full flex items-center justify-center mb-6 text-white">
                                        <Globe size={24} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white font-rajdhani mb-3">International Standards</h3>
                                    <p className="text-white/80 font-outfit text-lg leading-relaxed">
                                        Navigating complex customs, certifications, and trade laws to deliver quality worldwide.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 3: THE EXPORT ENGINE (Bedrock Style) --- */}
                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-16 items-start">
                            <div className="lg:w-1/2">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-[#D97706] text-xs font-bold tracking-[0.2em] uppercase font-rajdhani">
                                        The Process
                                    </span>
                                    <div className="h-[1px] w-12 bg-[#D97706]/50" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-black font-rajdhani mb-6">
                                    The Export Engine
                                </h2>
                                <p className="text-neutral-500 font-outfit text-lg leading-relaxed mb-8">
                                    We curated our supply chain for speed, safety, and scalability. From the farm to the final destination, we control every variable.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { title: "Strategic Sourcing", desc: "Certified growers, export-grade quality." },
                                        { title: "Logistics Excellence", desc: "Optimized multimodal transport & cold-chain." },
                                        { title: "Regulatory Compliance", desc: "Handling phytosanitary & customs protocols." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0 text-[#0D9488]">
                                                <ShieldCheck size={14} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-black font-rajdhani text-lg">{item.title}</h4>
                                                <p className="text-neutral-500 font-outfit text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:w-1/2 relative">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="relative rounded-[2.5rem] bg-[#F8FAFC] border border-neutral-100 p-8 shadow-sm h-full min-h-[400px] overflow-hidden"
                                >
                                    <Image
                                        src="/images/physical/engineering_parts.png"
                                        alt="Process"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20" />
                                    <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-6 rounded-xl border border-white/50">
                                        <h4 className="font-bold text-black font-rajdhani text-xl mb-2">Our Promise</h4>
                                        <p className="text-neutral-600 text-sm">"We act as the bridge... ensuring every shipment is a testament to reliability."</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 4: MISSION & VISION (Original Content) --- */}
                {/* Keeping this dark as it works well for contrast, but making it Black/Teal based */}
                <section className="py-20 bg-black text-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                            {/* Mission */}
                            <div>
                                <h3 className="text-3xl font-bold font-rajdhani mb-6 text-[#D97706]">Our Mission</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Ensure on-time delivery across global destinations",
                                        "Maintain international quality & safety standards",
                                        "Provide transparent and traceable supply chains",
                                        "Build long-term, valuable partnerships",
                                        "Innovate in packaging technologies"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="mt-1 w-2 h-2 rounded-full bg-[#D97706] flex-shrink-0" />
                                            <span className="text-white/80 font-outfit text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Vision */}
                            <div>
                                <h3 className="text-3xl font-bold font-rajdhani mb-6 text-[#0D9488]">Our Vision</h3>
                                <p className="text-white/80 font-outfit text-lg leading-relaxed border-l-4 border-[#0D9488] pl-6">
                                    We envision PrimeLink Exim as the most trusted node in the global food supply chain—synonymous with reliability, innovation, and trade integrity. We aim to redefine how India trades with the world, making geographical distances irrelevant through superior logistics.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* --- SECTION 5: VALUES (High/Global/Fast) --- */}
                <section className="py-20 bg-white border-y border-neutral-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-neutral-100">
                            {[
                                { label: "High", sub: "Performance", color: "text-black" },
                                { label: "Global", sub: "Reach", color: "text-[#0D9488]" }, // Brand Teal
                                { label: "24/7", sub: "Support", color: "text-black" },
                                { label: "Fast", sub: "Transit", color: "text-[#D97706]" } // Brand Amber
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center justify-center p-4">
                                    <h3 className={`text-4xl font-bold ${item.color} font-rajdhani mb-2`}>{item.label}</h3>
                                    <p className="text-neutral-400 font-outfit text-xs uppercase tracking-widest">{item.sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SECTION 6: FOUNDER'S MESSAGE (Original Content) --- */}
                <section className="py-20 lg:py-32 bg-[#F8FAFC] relative overflow-hidden">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-12 md:p-16 rounded-[2rem] shadow-xl border border-neutral-100 relative"
                        >
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#D97706] rounded-full flex items-center justify-center text-white text-3xl font-serif">
                                "
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-black font-rajdhani mb-8 mt-4">
                                Trade Built on Trust
                            </h2>

                            <p className="text-neutral-500 font-outfit text-lg md:text-xl leading-relaxed mb-10 italic">
                                "At PrimeLink, every container we ship carries more than just commodities—it carries a promise. A promise of quality, of timeliness, and of unwavering integrity. We don't just move goods; we build the bridges that allow businesses to thrive across borders."
                            </p>

                            <div className="flex flex-col items-center gap-2 mt-8">
                                <div className="h-[1px] w-12 bg-[#D97706]" />
                                <span className="text-xs font-bold tracking-widest uppercase text-neutral-400 font-rajdhani">
                                    Founder
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
