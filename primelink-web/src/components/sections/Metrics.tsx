"use client";

export default function Metrics() {
    return (
        <section className="py-20 border-t border-neutral-200 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-neutral-200">
                    <div>
                        <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">High</div>
                        <div className="text-sm text-neutral-500 uppercase tracking-widest">Trade Volume</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-bold text-brand-teal mb-2">Global</div>
                        <div className="text-sm text-neutral-500 uppercase tracking-widest">Shipments</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">24/7</div>
                        <div className="text-sm text-neutral-500 uppercase tracking-widest">Uptime</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-bold text-brand-amber mb-2">Fast</div>
                        <div className="text-sm text-neutral-500 uppercase tracking-widest">Clearance</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
