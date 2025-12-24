"use client";

import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Image from 'next/image';

// --- Data Structure for Navigation ---
const NAV_ITEMS = [
    {
        label: "Physical Trade",
        href: "/trade",
        subItems: [
            { label: "Sourcing", href: "#" },
            { label: "Quality Control", href: "#" },
            { label: "Procurement", href: "#" }
        ]
    },
    {
        label: "Logistics",
        href: "/logistics",
        subItems: [
            { label: "Global Freight", href: "#" },
            { label: "Customs Clearance", href: "#" },
            { label: "Warehousing", href: "#" }
        ]
    },
    { label: "Digital Tools", href: "#" },
    { label: "About", href: "#" }
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            {/* Main Floating Pill Navbar */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-full border border-neutral-200/60 bg-white/70 backdrop-blur-xl shadow-sm transition-all duration-300 overflow-visible">
                <div className="h-14 md:h-16 px-6 flex items-center justify-between">

                    <div className="flex items-center gap-3">
                        {/* Logo P */}
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-black font-bold text-lg">
                            <Image src="/EXIM.svg" alt="Logo" width={32} height={32} />
                        </div>
                        <span className="font-semibold text-lg tracking-tight text-neutral-900">PrimeLink Exim</span>
                    </div>

                    {/* Desktop Menu (Visible on LG and up) */}
                    <div className="hidden lg:flex items-center gap-8 text-sm text-neutral-600 font-medium h-full">
                        {NAV_ITEMS.map((item) => (
                            <div key={item.label} className="relative group h-full flex items-center">
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-1 hover:text-brand-teal transition-colors py-2"
                                >
                                    {item.label}
                                    {item.subItems && (
                                        <Icon icon="solar:alt-arrow-down-linear" className="group-hover:rotate-180 transition-transform duration-200 text-xs opacity-50" />
                                    )}
                                </Link>

                                {/* Dropdown Menu - Floating Card Style */}
                                {item.subItems && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out">
                                        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-neutral-100 overflow-hidden p-2">
                                            {item.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.label}
                                                    href={subItem.href}
                                                    className="block px-4 py-3 text-sm text-neutral-600 rounded-xl hover:bg-neutral-50 hover:text-brand-teal transition-colors"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <Link href="#"
                        className="hidden lg:flex text-sm font-bold text-white bg-neutral-900 border border-neutral-900 px-5 py-2.5 rounded-full hover:bg-brand-teal hover:border-brand-teal hover:text-white transition-all duration-300 shadow-lg shadow-neutral-200">
                        Access Platform
                    </Link>

                    {/* Mobile Menu Button (Visible on LG and below) */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden text-neutral-900 p-2 relative z-[70]"
                    >
                        <Icon icon="solar:hamburger-menu-linear" className="text-3xl" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Placed outside nav to escape transform/clipping */}
            <div
                className={`fixed inset-0 w-screen h-screen bg-white/90 backdrop-blur-xl z-[60] flex flex-col transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
            >
                {/* Header Placeholder for Alignment */}
                <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between w-full pt-6">
                    <div className="flex items-center gap-3 opacity-0">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-black font-bold text-lg">
                            <Image src="/EXIM.svg" alt="Logo" width={32} height={32} />
                        </div>
                        <span className="font-semibold text-lg tracking-tight text-neutral-900">PrimeLink Exim</span>
                    </div>
                    <button onClick={toggleMenu} className="text-neutral-900 p-2">
                        <Icon icon="solar:close-circle-linear" className="text-3xl" />
                    </button>
                </div>

                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {NAV_ITEMS.map((item) => (
                        <div key={item.label} className="flex flex-col items-center gap-4">
                            <Link
                                href={item.href}
                                onClick={toggleMenu}
                                className="text-3xl font-light text-neutral-800 hover:text-brand-teal transition-colors"
                            >
                                {item.label}
                            </Link>
                            {/* Simple Mobile Sub-items display */}
                            {item.subItems && (
                                <div className="flex flex-col items-center gap-2 mb-4">
                                    {item.subItems.map(sub => (
                                        <Link
                                            key={sub.label}
                                            href={sub.href}
                                            onClick={toggleMenu}
                                            className="text-sm font-medium text-neutral-400 uppercase tracking-widest"
                                        >
                                            {sub.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    <Link href="#" onClick={toggleMenu}
                        className="mt-8 text-lg font-medium text-white bg-neutral-900 border border-neutral-900 px-10 py-4 rounded-full hover:bg-brand-teal hover:border-brand-teal hover:text-white transition-all duration-300 shadow-xl shadow-neutral-200">
                        Access Platform
                    </Link>
                </div>
            </div>
        </>
    );
}
