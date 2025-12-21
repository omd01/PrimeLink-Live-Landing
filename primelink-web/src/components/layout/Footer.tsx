"use client";

import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-neutral-200 bg-neutral-50 pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-neutral-900 rounded flex items-center justify-center text-white font-bold text-lg">P</div>
                            <span className="font-bold text-xl text-neutral-900">PrimeLink</span>
                        </div>
                        <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                            The unified operating system for global trade. Bridging the gap between physical logistics and digital intelligence.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-brand-teal hover:text-white transition-all">
                                <Icon icon="ri:twitter-x-fill" className="text-xl" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-brand-teal hover:text-white transition-all">
                                <Icon icon="ri:linkedin-fill" className="text-xl" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-brand-teal hover:text-white transition-all">
                                <Icon icon="ri:instagram-fill" className="text-xl" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="text-neutral-900 font-bold mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm text-neutral-500">
                            <li><Link href="#" className="hover:text-brand-teal transition-colors">Physical Sourcing</Link></li>
                            <li><Link href="#" className="hover:text-brand-teal transition-colors">Global Freight</Link></li>
                            <li><Link href="#" className="hover:text-brand-teal transition-colors">PrimeVerify API</Link></li>
                            <li><Link href="#" className="hover:text-brand-teal transition-colors">SmartContracts</Link></li>
                            <li><Link href="#" className="hover:text-brand-teal transition-colors">Market Intelligence</Link></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="text-neutral-900 font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-neutral-500">
                            <li><Link href="#" className="hover:text-brand-teal transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-brand-teal transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-brand-teal transition-colors">Press Kit</Link></li>
                            <li><Link href="#" className="hover:text-brand-teal transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-brand-teal transition-colors">Partners</Link></li>
                        </ul>
                    </div>

                    {/* Links Column 3 (Newsletter) */}
                    <div>
                        <h4 className="text-neutral-900 font-bold mb-6">Stay Updated</h4>
                        <p className="text-sm text-neutral-500 mb-4">Get the latest trade insights and commodity trends.</p>
                        <div className="flex gap-2">
                            <input type="email" placeholder="Enter email"
                                className="bg-white border border-neutral-200 rounded-lg px-4 py-2 text-sm text-neutral-900 focus:outline-none focus:border-brand-teal w-full" />
                            <button className="bg-brand-teal text-white px-4 py-2 rounded-lg font-bold hover:bg-neutral-900 transition-colors">
                                <Icon icon="solar:arrow-right-linear" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
                    <p>© 2025 PrimeLink Exim Pvt Ltd. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-brand-teal transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-brand-teal transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-brand-teal transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
