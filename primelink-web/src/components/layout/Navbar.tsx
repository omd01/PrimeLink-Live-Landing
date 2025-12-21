"use client";

import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Image from 'next/image';

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
        <nav className="fixed top-0 w-full z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-[70]">
                <div className="flex items-center gap-3">
                    {/* Logo P */}
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-black font-bold text-lg">
                        <Image src="/EXIM.svg" alt="Logo" width={32} height={32} />
                    </div>
                    <span className="font-semibold text-lg tracking-tight text-neutral-900">PrimeLink Exim</span>
                </div>

                {/* Desktop Menu (Visible on LG and up) */}
                <div className="hidden lg:flex items-center gap-8 text-sm text-neutral-600 font-medium">
                    <Link href="#" className="hover:text-brand-teal transition-colors">Physical Trade</Link>
                    <Link href="#" className="hover:text-brand-teal transition-colors">Logistics</Link>
                    <Link href="#" className="hover:text-brand-teal transition-colors">Digital Tools</Link>
                    <Link href="#" className="hover:text-brand-teal transition-colors">About</Link>
                </div>

                {/* <Link href="#"
                    className="hidden lg:flex text-sm font-bold text-white bg-neutral-900 border border-neutral-900 px-5 py-2.5 rounded-full hover:bg-brand-teal hover:border-brand-teal hover:text-white transition-all duration-300 shadow-lg shadow-neutral-200">
                    Access Platform
                </Link> */}

                {/* Mobile Menu Button (Visible on LG and below) */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-neutral-900 p-2 relative z-[70]"
                >
                    <Icon icon="solar:hamburger-menu-linear" className="text-3xl" />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 w-screen h-screen bg-white/90 backdrop-blur-xl z-[60] flex flex-col transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
            >

                {/* Header Placeholder for Alignment */}
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between w-full border-b border-neutral-200/50">
                    <div className="flex items-center gap-3 opacity-0"> {/* Invisible logo to maintain spacing */}
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-black font-bold text-lg">
                            <Image src="/EXIM.svg" alt="Logo" width={32} height={32} />
                        </div>
                        <span className="font-semibold text-lg tracking-tight text-neutral-900">PrimeLink Exim</span>
                    </div>
                    <button onClick={toggleMenu} className="text-neutral-900 p-2">
                        <Icon icon="solar:close-circle-linear" className="text-3xl" />
                    </button>
                </div>

                <div className="flex flex-col items-center justify-center h-full gap-10">
                    <Link href="#" onClick={toggleMenu} className="text-3xl font-light text-neutral-800 hover:text-brand-teal transition-colors">Physical Trade</Link>
                    <Link href="#" onClick={toggleMenu} className="text-3xl font-light text-neutral-800 hover:text-brand-teal transition-colors">Logistics</Link>
                    <Link href="#" onClick={toggleMenu} className="text-3xl font-light text-neutral-800 hover:text-brand-teal transition-colors">Digital Tools</Link>
                    <Link href="#" onClick={toggleMenu} className="text-3xl font-light text-neutral-800 hover:text-brand-teal transition-colors">About</Link>

                    {/* <Link href="#" onClick={toggleMenu}
                        className="mt-8 text-lg font-medium text-white bg-neutral-900 border border-neutral-900 px-10 py-4 rounded-full hover:bg-brand-teal hover:border-brand-teal hover:text-white transition-all duration-300 shadow-xl shadow-neutral-200">
                        Access Platform
                    </Link> */}
                </div>
            </div>
        </nav>
    );
}
