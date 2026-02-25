"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Image from 'next/image';

// --- Data Structure for Navigation ---
const NAV_ITEMS = [
    {
        label: "Physical Trade",
        href: "/physical",
    },
    { label: "Digital Tools", href: "/digital" },
    { label: "About", href: "/about" }
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const isPhysical = pathname?.startsWith('/physical');
    const isDigital = pathname === '/digital';

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

    const textColorClass = isPhysical ? 'text-white' : 'text-neutral-900';
    const navItemColorClass = isPhysical ? 'text-white/80' : 'text-neutral-600';
    const borderColorClass = isPhysical ? 'border-white/30' : isDigital ? 'border-neutral-200' : 'border-white/20';

    return (
        <>
            {/* Main Floating Pill Navbar */}
            <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl bg-white/10 backdrop-blur-md border ${borderColorClass} rounded-full shadow-lg transition-all duration-300 overflow-visible`}>
                <div className="h-14 md:h-16 px-6 flex items-center justify-between">

                    <a href="/"><div className="flex items-center gap-3">
                        {/* Logo P */}
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-black font-bold text-lg">
                            <Image src={isDigital ? "/DIGITAL.svg" : "/EXIM.svg"} alt="PrimeLink Logo" width={32} height={32} />
                        </div>
                        <span className={`font-semibold text-lg tracking-tight transition-colors ${textColorClass}`}>PrimeLink Exim</span>
                    </div>
                    </a>

                    {/* Desktop Menu (Visible on LG and up) */}
                    <div className={`hidden lg:flex items-center gap-8 text-sm font-medium h-full ${navItemColorClass}`}>
                        {NAV_ITEMS.map((item) => (
                            <div key={item.label} className="relative group h-full flex items-center">
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-1 hover:text-brand-teal transition-colors py-2"
                                >
                                    {item.label}
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <Link href="/physical/brochure"
                        className="hidden lg:flex text-sm font-bold text-white bg-neutral-900 border  border-neutral-900 px-5 py-2.5 rounded-full hover:bg-brand-teal hover:border-brand-teal hover:text-white transition-all duration-300 ">
                        Explore Brochure
                    </Link>

                    {/* Mobile Menu Button (Visible on LG and below) */}
                    <button
                        onClick={toggleMenu}
                        className={`lg:hidden p-2 relative z-[70] transition-colors ${textColorClass}`}
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
                        </div>
                    ))}

                    <Link href="/physical/brochure" onClick={toggleMenu}
                        className="mt-8 text-lg font-medium text-white bg-neutral-900 border border-neutral-900 px-10 py-4 rounded-full hover:bg-brand-teal hover:border-brand-teal hover:text-white transition-all duration-300 shadow-xl shadow-neutral-200">
                        Explore Brochure
                    </Link>
                </div>
            </div>
        </>
    );
}
