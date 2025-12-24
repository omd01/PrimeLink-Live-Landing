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
        const BRAND_TEAL = 0x0D9488;  // PrimeLink Teal
        const BRAND_AMBER = 0xD97706; // PrimeLink Amber
        const GLOBE_RADIUS = 5;

        // --- SCENE SETUP ---
        const scene = new THREE.Scene();
        // No background color set = transparent

        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Aspect ratio fixed in resize

        // Initial View: Focused roughly on India/Middle East
        const indiaPosition = latLonToVector3(20.5937, 78.9629, GLOBE_RADIUS);
        camera.position.copy(indiaPosition.normalize().multiplyScalar(9.6));

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "high-performance"
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        // We defer setting size until we have the container dimensions

        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enableZoom = false; // Disable zoom to keep layout stable
        controls.enablePan = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.8;

        // --- LIGHTING (Crucial for Light Mode 3D) ---
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
        dirLight.position.set(10, 10, 5);
        scene.add(dirLight);

        // --- OBJECTS ---

        // 1. The Base Sphere (The Ocean)
        const globeGeometry = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
        const globeMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.05, // Very subtle glass look
            shininess: 0,
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
                            // Density check to avoid too many points
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
                    color: BRAND_TEAL, // Teal points
                    size: 0.06,
                    transparent: true,
                    opacity: 0.6,
                    sizeAttenuation: true
                });

                const pointsMesh = new THREE.Points(pointsGeometry, pointsMaterial);
                pointsGroup.add(pointsMesh);
            })
            .catch(err => console.error("Globe data error:", err));


        // 3. Data Arcs & Animations
        const animatedArrows: { mesh: THREE.Mesh; curve: THREE.Curve<THREE.Vector3>; progress: number; speed: number; reverse: boolean }[] = [];

        // Helper: Create Curves
        function createAnimatedCurve(startCoords: { lat: number, lon: number }, endCoords: { lat: number, lon: number }, reverse: boolean) {
            const startVector = latLonToVector3(startCoords.lat, startCoords.lon, GLOBE_RADIUS);
            const endVector = latLonToVector3(endCoords.lat, endCoords.lon, GLOBE_RADIUS);

            // Curve Math
            const midPoint = new THREE.Vector3().addVectors(startVector, endVector).multiplyScalar(0.5);
            const distance = startVector.distanceTo(endVector);
            midPoint.normalize().multiplyScalar(GLOBE_RADIUS + distance * 0.4); // Arc height

            const curve = new THREE.QuadraticBezierCurve3(startVector, midPoint, endVector);

            // Static Line (Faint Trace)
            const points = curve.getPoints(50);
            const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
            const lineMat = new THREE.LineBasicMaterial({
                color: BRAND_TEAL,
                transparent: true,
                opacity: 0.15
            });
            const lineObj = new THREE.Line(lineGeo, lineMat);
            globe.add(lineObj);

            // Animated Arrow/Particle
            const arrowGeo = new THREE.SphereGeometry(0.08, 8, 8); // Simple dot is cleaner than arrow
            const arrowMat = new THREE.MeshBasicMaterial({ color: BRAND_AMBER });
            const arrow = new THREE.Mesh(arrowGeo, arrowMat);

            const arrowObj = {
                mesh: arrow,
                curve: curve,
                progress: Math.random(),
                speed: 0.003 + Math.random() * 0.002, // Randomized speed
                reverse: reverse
            };

            globe.add(arrow);
            animatedArrows.push(arrowObj);
        }

        // Define Routes (India Hub)
        const india = { lat: 20.59, lon: 78.96 };
        const routes = [
            { lat: 51.50, lon: -0.12 }, // London
            { lat: 25.20, lon: 55.27 }, // Dubai
            { lat: 1.35, lon: 103.81 }, // Singapore
            { lat: 40.71, lon: -74.00 }, // NYC
            { lat: -33.86, lon: 151.20 }, // Sydney
            { lat: 35.67, lon: 139.65 }, // Tokyo
            { lat: 52.52, lon: 13.40 }, // Berlin
            { lat: -1.29, lon: 36.82 }, // Nairobi
        ];

        routes.forEach(dest => {
            createAnimatedCurve(india, dest, false); // Outbound
            createAnimatedCurve(dest, india, true);  // Inbound
        });

        // --- RESIZE HANDLER ---
        const handleResize = () => {
            if (!mountRef.current) return;
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        // Initial sizing
        handleResize();
        window.addEventListener('resize', handleResize);

        // --- ANIMATION LOOP ---
        let animationFrameId: number;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            controls.update();

            // Animate Arrows
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

        // --- CLEANUP ---
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            if (mountRef.current && renderer.domElement) {
                if (mountRef.current.contains(renderer.domElement)) {
                    mountRef.current.removeChild(renderer.domElement);
                }
            }
            // Dispose Three.js resources
            globeGeometry.dispose();
            globeMaterial.dispose();
            renderer.dispose();
        };

    }, []);

    return (
        <section className="max-w-7xl mx-auto py-24 border-t border-neutral-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Content (Preserved from your original code) */}
                <div>
                    <span className="text-brand-amber font-mono text-sm tracking-widest uppercase mb-4 block">Global Infrastructure</span>
                    <h2 className="text-4xl md:text-5xl font-medium mb-6 leading-tight text-neutral-900">
                        Built on bedrock.<br />
                        <span className="text-neutral-400">Not just code.</span>
                    </h2>
                    <p className="text-lg text-neutral-600 font-light leading-relaxed mb-8">
                        Software can't move containers. We have established physical presence in key trade hubs across
                        India, UAE, and Singapore. Our digital layer sits on top of real warehouses, real trucks, and
                        real people.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200 hover:bg-white hover:shadow-md transition-all">
                            <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                                <Icon icon="solar:globe-linear" className="text-xl" />
                            </div>
                            <div>
                                <h4 className="text-neutral-900 font-medium">Global Coverage</h4>
                                <p className="text-sm text-neutral-500">Active export lanes across major trade regions.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200 hover:bg-white hover:shadow-md transition-all">
                            <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                                <Icon icon="solar:warehouse-linear" className="text-xl" />
                            </div>
                            <div>
                                <h4 className="text-neutral-900 font-medium">Strategic Warehousing</h4>
                                <p className="text-sm text-neutral-500">Consolidation points in key logistics hubs.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: The 3D Canvas Container */}
                <div
                    ref={mountRef}
                    className="relative w-full aspect-square md:aspect-[4/3] bg-neutral-50 rounded-3xl border border-neutral-200 overflow-hidden cursor-move"
                >
                    {/* Optional: Simple Overlay for "Live Tracking" UI */}
                    <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md border border-neutral-200 px-4 py-2 rounded-lg shadow-sm z-10 pointer-events-none">
                        <p className="text-xs text-brand-teal font-mono animate-pulse flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                            LIVE TRACKING ACTIVE
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
