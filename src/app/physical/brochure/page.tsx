"use client";

import React, { useRef } from 'react';
import {
    Download,
    Globe,
    Sprout,
    Layers,
    ShieldCheck,
    Award,
    Leaf,
    BadgeCheck,
    FileCheck,
    CheckCircle2,
    MapPin,
    Phone,
    Mail
} from 'lucide-react';
import Image from 'next/image';

const coverData = {
    title: "Global Trade Infrastructure",
    subtitle: "Bridging the gap between physical logistics and digital intelligence.",
    year: "2025-2026",
    company: "PRIMELINK EXIM PRIVATE LIMITED"
};

const narrativeData = [
    {
        title: "The Root",
        desc: "Started in the mandis of Gujarat. We vet every supplier in person, ensuring reliability starts at the source."
    },
    {
        title: "The Grind",
        desc: "Mastered the ports of Mundra & Nhava Sheva. Built a logistics network that anticipates delays before they happen."
    },
    {
        title: "The Standard",
        desc: "Operating with machine precision. Delivering 12,000+ MT annually with rigorous compliance and zero excuses."
    }
];

const valueProps = [
    { title: "Farm-Fresh Partnerships", desc: "Direct sourcing from 300+ farmers.", icon: Sprout },
    { title: "Multiple Processing", desc: "Fresh, Frozen, and Dehydrated solutions.", icon: Layers },
    { title: "Global-Grade Quality", desc: "Certified systems for international trade.", icon: ShieldCheck }
];

const products = [
    { title: "Beetroot Powder", subtitle: "Organic Beetroot Powder", origin: "Maharashtra", packaging: "25kg PP Bags", grades: "A++ / Standard" },
    { title: "Gawar Powder", subtitle: "Guar Gum", origin: "Rajasthan", packaging: "Paper Sacks", grades: "Industrial / Food" },
    { title: "Moringa", subtitle: "Superfood Leaf Powder", origin: "Tamil Nadu", packaging: "Vacuum Sealed", grades: "Premium Green" },
    { title: "Turmeric Powder", subtitle: "High Curcumin", origin: "Andhra Pradesh", packaging: "Bulk / Retail", grades: "Salem / Erode" },
];

const certs = [
    { name: "APEDA", code: "Reg. Member" },
    { name: "FSSAI", code: "Food Safety" },
    { name: "ISO 9001", code: "Quality Mgmt" },
    { name: "Spices Bd", code: "Auth. Exporter" },
    { name: "GST", code: "Govt. Reg" },
    { name: "IEC", code: "Import/Export" },
];

export default function BrochurePage() {

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-[#1a1a1a] p-0 md:p-8 flex justify-center print:bg-white print:p-0">

            {/* Print FAB */}
            <button
                onClick={handlePrint}
                className="fixed bottom-8 right-8 z-50 bg-[#F59E0B] text-[#022C22] p-4 rounded-full shadow-xl hover:scale-110 transition-transform print:hidden"
            >
                <Download size={24} strokeWidth={2.5} />
            </button>

            <div className="w-full max-w-[210mm] bg-white print:max-w-none">

                {/* --- PAGE 1: COVER --- */}
                <section className="w-[210mm] h-[297mm] relative bg-[#022C22] text-white overflow-hidden page-break">
                    {/* Background */}
                    <div className="absolute inset-0 z-0">
                        <Image src="/image.jpeg" alt="Cover" fill className="object-cover opacity-40 mix-blend-overlay" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#022C22] via-[#022C22]/80 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-16">
                        {/* Top: Branding */}
                        <div className="flex items-center gap-4">
                            {/* <Globe className="text-[#F59E0B] w-12 h-12" />
                             */}
                            <Image src="/TRADE.svg" alt="Logo" width={50} height={50} className="w-12 h-12" />
                            <div>
                                <h1 className="text-2xl font-bold tracking-widest uppercase font-rajdhani">PrimeLink Exim</h1>
                                <p className="text-[#F59E0B] text-xs tracking-[0.3em] uppercase">The Trade OS</p>
                            </div>
                        </div>

                        {/* Center: Title */}
                        <div>
                            <div className="w-32 h-1 bg-[#F59E0B] mb-8" />
                            <h2 className="text-7xl font-bold uppercase leading-[0.9] font-rajdhani mb-6">
                                Strategic<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-white">Business</span><br />
                                Profile
                            </h2>
                            <p className="text-xl text-white/60 max-w-md font-outfit">
                                {coverData.subtitle}
                            </p>
                        </div>

                        {/* Bottom: Meta */}
                        <div className="border-t border-white/20 pt-8 flex justify-between items-end">
                            <div>
                                <p className="text-[#F59E0B] uppercase tracking-widest text-sm font-bold mb-2">Fiscal Year</p>
                                <p className="text-4xl font-rajdhani">{coverData.year}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-white/40 text-sm">{coverData.company}</p>
                                <p className="text-white/40 text-sm">www.primelinkexim.com</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- PAGE 2: EXECUTIVE SUMMARY --- */}
                <section className="w-[210mm] h-[297mm] relative bg-white text-[#022C22] p-16 flex flex-col justify-between page-break">

                    {/* Header */}
                    <div className="flex justify-between items-center border-b-2 border-[#022C22]/10 pb-6">
                        <h3 className="text-2xl font-bold uppercase font-rajdhani text-[#022C22]">Executive Summary</h3>
                        <span className="text-[#F59E0B] font-bold">02</span>
                    </div>

                    {/* Narrative */}
                    <div className="flex-1 py-12">
                        <h2 className="text-4xl font-bold uppercase mb-12 font-rajdhani text-[#022C22]">Built on Grit. <br />Defined by Reliability.</h2>

                        <div className="space-y-10 border-l-2 border-[#022C22]/20 pl-10 ml-4 relative">
                            {narrativeData.map((item, i) => (
                                <div key={i} className="relative">
                                    <div className="absolute -left-[49px] top-0 w-4 h-4 rounded-full bg-[#022C22] ring-4 ring-white" />
                                    <h4 className="text-xl font-bold uppercase text-[#F59E0B] font-rajdhani mb-2">{item.title}</h4>
                                    <p className="text-[#022C22]/70 font-outfit leading-relaxed max-w-lg">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Value Props Grid */}
                    <div className="bg-[#022C22]/5 rounded-3xl p-10">
                        <div className="grid grid-cols-3 gap-8">
                            {valueProps.map((vp, i) => (
                                <div key={i}>
                                    <div className="mb-4 text-[#022C22]">
                                        <vp.icon size={32} />
                                    </div>
                                    <h5 className="font-bold uppercase font-rajdhani text-lg mb-2">{vp.title}</h5>
                                    <p className="text-sm text-[#022C22]/60 font-outfit">{vp.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- PAGE 3: STRATEGIC EDGE --- */}
                <section className="w-[210mm] h-[297mm] relative bg-[#f8f9fa] text-[#022C22] p-16 page-break">
                    {/* Header */}
                    <div className="flex justify-between items-center border-b-2 border-[#022C22]/10 pb-6 mb-12">
                        <h3 className="text-2xl font-bold uppercase font-rajdhani text-[#022C22]">Strategic Edge</h3>
                        <span className="text-[#F59E0B] font-bold">03</span>
                    </div>

                    {/* Content Split */}
                    <div className="grid grid-cols-2 gap-12 h-[80%]">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-4xl font-bold uppercase font-rajdhani mb-6">Operations <br /><span className="text-[#F59E0B]">Beyond Borders</span></h2>
                                <p className="text-[#022C22]/70 font-outfit text-lg leading-relaxed">
                                    Our operational framework is designed for speed without compromising compliance. From automated documentation to real-time container tracking, we treat physical trade with the precision of software.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-[#022C22] flex items-center justify-center text-white shrink-0">
                                        <Globe size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold uppercase font-rajdhani">Global Standards</h4>
                                        <p className="text-sm text-[#022C22]/60 mt-1">International-grade produce strict safety compliance.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-[#022C22] flex items-center justify-center text-white shrink-0">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold uppercase font-rajdhani">Efficiency First</h4>
                                        <p className="text-sm text-[#022C22]/60 mt-1">Timely, efficient sourcing and worldwide delivery.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Side */}
                        <div className="relative h-full rounded-2xl overflow-hidden bg-gray-200">
                            <Image
                                src="/images/physical/moringa.jpeg"
                                alt="Operations"
                                fill
                                className="object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-[#022C22]/20 mix-blend-multiply" />
                        </div>
                    </div>
                </section>

                {/* --- PAGE 4: PRODUCT PORTFOLIO --- */}
                <section className="w-[210mm] h-[297mm] relative bg-white text-[#022C22] p-16 page-break">
                    {/* Header */}
                    <div className="flex justify-between items-center border-b-2 border-[#022C22]/10 pb-6 mb-12">
                        <h3 className="text-2xl font-bold uppercase font-rajdhani text-[#022C22]">Product Portfolio</h3>
                        <span className="text-[#F59E0B] font-bold">04</span>
                    </div>

                    <p className="text-[#022C22]/60 font-outfit max-w-2xl mb-12">
                        Premium commodities sourced directly from the finest origins in India. Processed, graded, and packed for international markets.
                    </p>

                    {/* Product Grid Table */}
                    <div className="grid grid-cols-1 gap-0 border border-[#022C22]/10 rounded-2xl overflow-hidden">
                        {/* Table Header */}
                        <div className="grid grid-cols-4 bg-[#022C22] text-white p-4 font-bold uppercase font-rajdhani text-sm tracking-wider">
                            <div className="col-span-1">Commodity</div>
                            <div className="col-span-1">Specifications</div>
                            <div className="col-span-1">Origin</div>
                            <div className="col-span-1">Packaging</div>
                        </div>

                        {products.map((p, i) => (
                            <div key={i} className={`grid grid-cols-4 p-6 border-b border-[#022C22]/5 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                <div className="col-span-1">
                                    <h4 className="font-bold text-lg font-rajdhani uppercase text-[#022C22]">{p.title}</h4>
                                    <p className="text-xs text-[#022C22]/50 italic">{p.subtitle}</p>
                                </div>
                                <div className="col-span-1 text-sm font-outfit flex items-center">
                                    {p.grades}
                                </div>
                                <div className="col-span-1 text-sm font-outfit flex items-center">
                                    {p.origin}
                                </div>
                                <div className="col-span-1 text-sm font-outfit flex items-center font-semibold text-[#022C22]/80">
                                    {p.packaging}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Image Strip */}
                    <div className="grid grid-cols-4 gap-4 mt-12 h-40">
                        {products.map((p, i) => (
                            <div key={i} className="relative rounded-xl overflow-hidden bg-gray-100">
                                {/* Placeholder images based on index roughly matching bento grid if paths same */}
                                {/* Using hardcoded known images */}
                                <Image
                                    src={i === 0 ? "/images/physical/beetroot.jpeg" : i === 1 ? "/images/physical/gawar.png" : i === 2 ? "/images/physical/moringa.jpeg" : "/images/physical/termaric.png"}
                                    alt={p.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                </section>

                {/* --- PAGE 5: TRUST & BACK --- */}
                <section className="w-[210mm] h-[297mm] relative bg-[#022C22] text-white p-16 flex flex-col justify-between page-break">

                    {/* Header */}
                    <div className="flex justify-between items-center border-b border-white/20 pb-6">
                        <h3 className="text-2xl font-bold uppercase font-rajdhani text-white">Compliance & Trust</h3>
                        <span className="text-[#F59E0B] font-bold">05</span>
                    </div>

                    {/* Certs */}
                    <div className="py-20">
                        <h2 className="text-5xl font-bold uppercase font-rajdhani mb-16">Fully Licensed <br />For Global Trade.</h2>
                        <div className="grid grid-cols-3 gap-8">
                            {certs.map((c, i) => (
                                <div key={i} className="border border-white/10 bg-white/5 p-6 rounded-2xl">
                                    <h4 className="text-[#F59E0B] font-bold uppercase font-rajdhani text-xl">{c.name}</h4>
                                    <p className="text-sm text-white/50 mt-1 uppercase tracking-widest">{c.code}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Back Cover Contact */}
                    <div className="bg-[#F59E0B] text-[#022C22] p-12 rounded-[2.5rem] relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold uppercase font-rajdhani mb-8">Ready to Partner?</h2>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <p className="font-bold uppercase tracking-widest text-xs mb-2 opacity-60">Headquarters</p>
                                    <p className="font-outfit font-bold text-lg">Mumbai, India</p>
                                    <p className="font-outfit text-sm opacity-80">1203, Trade Tower, Bandra Kurla Complex</p>
                                </div>
                                <div>
                                    <p className="font-bold uppercase tracking-widest text-xs mb-2 opacity-60">Contact</p>
                                    <p className="flex items-center gap-2 font-bold"><Phone size={16} /> +91 98765 43210</p>
                                    <p className="flex items-center gap-2 font-bold"><Mail size={16} /> export@primelink.com</p>
                                </div>
                            </div>
                        </div>
                        {/* Decoration */}
                        <Globe className="absolute -right-12 -bottom-12 text-[#022C22]/10 w-64 h-64" />
                    </div>

                </section>

                <style jsx global>{`
                    @media print {
                        @page {
                            size: A4;
                            margin: 0;
                        }
                        body {
                            background: white;
                        }
                        .page-break {
                            break-after: page;
                            height: 297mm;
                            width: 210mm;
                        }
                        .print\\:hidden {
                            display: none !important;
                        }
                    }
                `}</style>

            </div>
        </div>
    );
}
