import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white text-neutral-900 selection:bg-brand-teal selection:text-white">
            <Navbar />

            <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
                <div className="prose prose-neutral prose-lg max-w-none prose-headings:font-rajdhani prose-headings:uppercase prose-p:font-outfit prose-li:font-outfit text-neutral-600">
                    {children}
                </div>
            </div>

            <Footer />
        </div>
    );
}
