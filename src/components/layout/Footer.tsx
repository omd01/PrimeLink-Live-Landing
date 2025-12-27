"use client";

import { Icon } from '@iconify/react';
import Link from 'next/link';

interface FooterProps {
    theme?: 'default' | 'physical';
}

export default function Footer({ theme = 'default' }: FooterProps) {
    const currentYear = new Date().getFullYear();

    const styles = {
        default: {
            bg: 'bg-neutral-950',
            text: 'text-white',
            accent: 'text-brand-teal', // For hovers
            button: 'bg-white text-black hover:bg-brand-teal hover:text-white',
            dot: 'bg-green-500',
            decoration: 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
        },
        physical: {
            bg: 'bg-[#022C22]',
            text: 'text-white',
            accent: 'text-[#F59E0B]',
            button: 'bg-[#F59E0B] text-[#022C22] hover:bg-white hover:text-[#022C22] shadow-[0_0_20px_-5px_#F59E0B]',
            dot: 'bg-[#F59E0B]',
            decoration: 'bg-gradient-to-r from-transparent via-[#F59E0B]/50 to-transparent'
        }
    };

    const activeStyle = styles[theme];

    return (
        <footer className={`${activeStyle.bg} ${activeStyle.text} rounded-t-[3rem] py-24 px-4 md:px-8 mt-24 relative overflow-hidden transition-colors duration-500`}>
            {/* Background Decoration */}
            <div className={`absolute top-0 inset-x-0 h-px ${activeStyle.decoration}`}></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* 1. Top Section: Call to Action */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-none mb-8">
                            Ready to <span className="text-neutral-500">Upgrade?</span>
                        </h2>
                        <Link href="/contact" className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${activeStyle.button}`}>
                            Get Started
                            <Icon icon="solar:arrow-right-up-linear" className="text-xl" />
                        </Link>
                    </div>

                    <div className="flex flex-col gap-4 text-right">
                        <div className="flex items-center gap-3 justify-end text-neutral-400">
                            <span className={`w-2 h-2 rounded-full animate-pulse ${activeStyle.dot}`}></span>
                            Systems Operational
                        </div>
                        <p className="text-neutral-500 max-w-xs">
                            Join 850+ forwarders managing trade on PrimeLink OS.
                        </p>
                    </div>
                </div>

                {/* 2. Middle Section: Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-16 mb-24">
                    <div>
                        <h4 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-6">Platform</h4>
                        <ul className="space-y-4 text-lg text-neutral-300 font-light">
                            <li><Link href="#" className={`hover:${activeStyle.accent} transition-colors`}>Physical Trade</Link></li>
                            <li><Link href="#" className={`hover:${activeStyle.accent} transition-colors`}>Digital Tools</Link></li>
                            <li><Link href="#" className={`hover:${activeStyle.accent} transition-colors`}>Logistics Network</Link></li>
                            <li><Link href="#" className={`hover:${activeStyle.accent} transition-colors`}>Pricing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-6">Company</h4>
                        <ul className="space-y-4 text-lg text-neutral-300 font-light">
                            <li><Link href="#" className={`hover:${activeStyle.accent} transition-colors`}>About Us</Link></li>
                            <li><Link href="#" className={`hover:${activeStyle.accent} transition-colors`}>Careers</Link></li>
                            <li><Link href="#" className={`hover:${activeStyle.accent} transition-colors`}>Press</Link></li>
                            <li><Link href="/contact" className={`hover:${activeStyle.accent} transition-colors`}>Contact</Link></li>
                            <li><Link href="/legal/terms" className={`hover:${activeStyle.accent} transition-colors`}>Terms & Conditions</Link></li>
                            <li><Link href="/legal/privacy" className={`hover:${activeStyle.accent} transition-colors`}>Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-6">Resources</h4>
                        <ul className="space-y-4 text-lg text-neutral-300 font-light">
                            <li><Link href="#" className={`hover:${activeStyle.accent} transition-colors`}>Documentation</Link></li>
                            <li><Link href="#" className={`hover:${activeStyle.accent} transition-colors`}>API Reference</Link></li>
                            <li><Link href="#" className={`hover:${activeStyle.accent} transition-colors`}>Community</Link></li>
                            <li><Link href="#" className={`hover:${activeStyle.accent} transition-colors`}>Status</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-6">Social</h4>
                        <ul className="space-y-4 text-lg text-neutral-300 font-light">
                            <li><Link href="#" className={`hover:${activeStyle.accent} transition-colors`}>LinkedIn</Link></li>
                            <li><Link href="#" className={`hover:${activeStyle.accent} transition-colors`}>Twitter / X</Link></li>
                            <li><Link href="#" className={`hover:${activeStyle.accent} transition-colors`}>Instagram</Link></li>
                            <li><Link href="#" className={`hover:${activeStyle.accent} transition-colors`}>GitHub</Link></li>
                        </ul>
                    </div>
                </div>

                {/* 3. Bottom Section: Mega Typography */}
                <div className="border-t border-white/10 pt-12 flex flex-col items-center">
                    <p className="text-neutral-500 mb-8 font-mono text-xs tracking-widest">
                        © {currentYear} PRIMELINK EXIM PRIVATE LIMITED. ALL RIGHTS RESERVED.
                    </p>

                    {/* The Giant Text */}
                    <div className="w-full text-center">
                        <span className="block text-[12vw] leading-[0.8] font-bold tracking-tighter text-white/5 select-none pointer-events-none">
                            PRIMELINK
                        </span>
                    </div>
                </div>

            </div>
        </footer>
    );
}
