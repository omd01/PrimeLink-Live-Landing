"use client";

import { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function GlobalReach() {
    const mountRef = useRef<HTMLDivElement>(null);

    // Helper Math
    function latLonToVector3(lat: number, lon: number, radius: number) {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);
        const x = -(radius * Math.sin(phi) * Math.cos(theta));
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);
        return new THREE.Vector3(x, y, z);
    }

    useEffect(() => {
        // --- CONFIGURATION ---
        // Light Mode Colors
        const BRAND_TEAL = 0x0D9488; // Deep Teal for visibility on white
        const BRAND_AMBER = 0xD97706; // Amber
        const GLOBE_RADIUS = 5;

        // --- SCENE SETUP ---
        const scene = new THREE.Scene();
        // Transparent BG handled by renderer

        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

        // Initial View: Focused roughly on India/Middle East
        const indiaPosition = latLonToVector3(20.5937, 78.9629, GLOBE_RADIUS);
        camera.position.copy(indiaPosition.normalize().multiplyScalar(10.5));

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "high-performance"
        });
        renderer.setPixelRatio(window.devicePixelRatio);

        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.8;

        // --- LIGHTING ---
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.0); // Bright ambient
        scene.add(ambientLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
        dirLight.position.set(10, 10, 5);
        scene.add(dirLight);

        // --- OBJECTS ---

        // 1. The Base Sphere (The Ocean - Transparent Glass)
        const globeGeometry = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
        const globeMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff, // White
            transparent: true,
            opacity: 0.05,   // Very subtle
            shininess: 90,   // High gloss
        });
        const globe = new THREE.Mesh(globeGeometry, globeMaterial);
        scene.add(globe);

        // 2. Continents (Points)
        const pointsGroup = new THREE.Group();
        globe.add(pointsGroup);

        fetch("https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json")
            .then(res => res.json())
            .then(data => {
                const points: number[] = [];
                data.features.forEach((feature: any) => {
                    const geometry = feature.geometry;
                    const coordinates = geometry.coordinates;
                    const processPolygon = (polygon: any[]) => {
                        polygon.forEach((point: any[]) => {
                            if (Math.random() > 0.15) {
                                const pos = latLonToVector3(point[1], point[0], GLOBE_RADIUS);
                                points.push(pos.x, pos.y, pos.z);
                            }
                        });
                    };
                    if (geometry.type === "Polygon") {
                        processPolygon(coordinates[0]);
                    } else if (geometry.type === "MultiPolygon") {
                        coordinates.forEach((polygon: any[]) => processPolygon(polygon[0]));
                    }
                });
                const pointsGeometry = new THREE.BufferGeometry();
                pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
                const pointsMaterial = new THREE.PointsMaterial({
                    color: BRAND_TEAL,
                    size: 0.07,
                    transparent: true,
                    opacity: 0.7,
                    sizeAttenuation: true
                });
                const pointsMesh = new THREE.Points(pointsGeometry, pointsMaterial);
                pointsGroup.add(pointsMesh);
            })
            .catch(err => console.error("Globe data error:", err));

        // 3. Data Arcs & Animations
        const animatedArrows: { mesh: THREE.Mesh; curve: THREE.Curve<THREE.Vector3>; progress: number; speed: number; reverse: boolean }[] = [];

        function createAnimatedCurve(startCoords: { lat: number, lon: number }, endCoords: { lat: number, lon: number }, reverse: boolean) {
            const startVector = latLonToVector3(startCoords.lat, startCoords.lon, GLOBE_RADIUS);
            const endVector = latLonToVector3(endCoords.lat, endCoords.lon, GLOBE_RADIUS);
            const midPoint = new THREE.Vector3().addVectors(startVector, endVector).multiplyScalar(0.5);
            const distance = startVector.distanceTo(endVector);
            midPoint.normalize().multiplyScalar(GLOBE_RADIUS + distance * 0.4);

            const curve = new THREE.QuadraticBezierCurve3(startVector, midPoint, endVector);
            const points = curve.getPoints(50);
            const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
            const lineMat = new THREE.LineBasicMaterial({
                color: BRAND_TEAL,
                transparent: true,
                opacity: 0.2
            });
            globe.add(new THREE.Line(lineGeo, lineMat));

            const arrowGeo = new THREE.SphereGeometry(0.1, 8, 8);
            const arrowMat = new THREE.MeshBasicMaterial({ color: BRAND_AMBER });
            const arrow = new THREE.Mesh(arrowGeo, arrowMat);
            const arrowObj = {
                mesh: arrow,
                curve: curve,
                progress: Math.random(),
                speed: 0.003 + Math.random() * 0.002,
                reverse: reverse
            };
            globe.add(arrow);
            animatedArrows.push(arrowObj);
        }

        const india = { lat: 20.59, lon: 78.96 };
        const routes = [
            { lat: 51.50, lon: -0.12 }, { lat: 25.20, lon: 55.27 }, { lat: 1.35, lon: 103.81 },
            { lat: 40.71, lon: -74.00 }, { lat: -33.86, lon: 151.20 }, { lat: 35.67, lon: 139.65 },
            { lat: 52.52, lon: 13.40 }, { lat: -1.29, lon: 36.82 },
        ];
        routes.forEach(dest => {
            createAnimatedCurve(india, dest, false);
            createAnimatedCurve(dest, india, true);
        });

        const handleResize = () => {
            if (!mountRef.current) return;
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        let animationFrameId: number;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            controls.update();
            animatedArrows.forEach(item => {
                if (item.reverse) {
                    item.progress -= item.speed;
                    if (item.progress < 0) item.progress = 1;
                } else {
                    item.progress += item.speed;
                    if (item.progress > 1) item.progress = 0;
                }
                const point = item.curve.getPoint(item.progress);
                item.mesh.position.copy(point);
            });
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            if (mountRef.current?.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
            }
            globeGeometry.dispose();
            globeMaterial.dispose();
            renderer.dispose();
        };

    }, []);

    return (
        <section className="max-w-7xl mx-auto py-24 border-t border-neutral-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Content */}
                <div className="order-2 lg:order-1">
                    <span className="text-brand-amber font-mono text-sm tracking-widest uppercase mb-4 block">Global Infrastructure</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 leading-tight text-neutral-900">
                        Built on bedrock.<br />
                        <span className="text-neutral-400">Not just code.</span>
                    </h2>
                    <p className="text-lg text-neutral-600 font-light leading-relaxed mb-8">
                        Software can't move containers. We have established physical presence in key trade hubs across
                        India, UAE, and Singapore. Our digital layer sits on top of real warehouses, real trucks, and
                        real people.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 rounded-2xl bg-neutral-50/50 border border-neutral-200 hover:border-brand-teal/30 hover:shadow-lg transition-all group">
                            <div className="text-3xl font-bold text-neutral-900 mb-1 group-hover:text-brand-teal transition-colors">12+</div>
                            <div className="text-sm text-neutral-500 font-medium">Global Hubs</div>
                        </div>
                        <div className="p-6 rounded-2xl bg-neutral-50/50 border border-neutral-200 hover:border-brand-teal/30 hover:shadow-lg transition-all group">
                            <div className="text-3xl font-bold text-neutral-900 mb-1 group-hover:text-brand-teal transition-colors">850+</div>
                            <div className="text-sm text-neutral-500 font-medium">Verified Partners</div>
                        </div>
                    </div>
                </div>

                {/* Right Side: The 3D Canvas + HUD (Light Mode) */}
                <div className="order-1 lg:order-2 relative w-full aspect-square md:aspect-[4/3] bg-white rounded-3xl overflow-hidden shadow-xl border border-neutral-100">

                    {/* The Globe Canvas (Transparent) */}
                    <div ref={mountRef} className="absolute inset-0 z-0 opacity-100" />

                    {/* HUD Overlay: Grid Lines (Grey) */}
                    <div className="absolute inset-0 pointer-events-none"
                        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                    </div>

                    {/* HUD Overlay: Status Badge (Light) */}
                    <div className="absolute top-6 left-6 z-10">
                        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-neutral-200 px-3 py-1.5 rounded-full shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
                            </span>
                            <span className="text-xs font-mono text-brand-teal tracking-wider font-semibold">SYSTEM ONLINE</span>
                        </div>
                    </div>

                    {/* HUD Overlay: Floating Metrics (Light) */}
                    <div className="absolute top-6 right-6 z-10 flex flex-col gap-2">
                        <div className="bg-white/80 backdrop-blur-md border border-neutral-200 px-4 py-3 rounded-xl text-right shadow-sm">
                            <div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-0.5">Active Vessels</div>
                            <div className="text-lg font-bold text-neutral-900 font-mono">24</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-md border border-neutral-200 px-4 py-3 rounded-xl text-right shadow-sm">
                            <div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-0.5">Latency</div>
                            <div className="text-lg font-bold text-brand-teal font-mono">12ms</div>
                        </div>
                    </div>

                    {/* HUD Overlay: Bottom Bar (Dark text) */}
                    <div className="absolute bottom-6 left-6 right-6 z-10 flex justify-between items-end text-neutral-400 font-mono text-xs">
                        <div>
                            <p>LAT: 20.5937 N</p>
                            <p>LON: 78.9629 E</p>
                        </div>
                        <div className="text-right">
                            <p>PRIMELINK OS v2.4</p>
                            <p>SECURE CONNECTION</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
