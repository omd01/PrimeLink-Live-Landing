'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import {
    OrbitControls,
    Text,
    Environment,
    ContactShadows,
    Float
} from '@react-three/drei';
import * as THREE from 'three';

// --- Configuration ---
const CONTAINER_COLOR = "#1e40af"; // Deep Royal Blue
const TEXT_COLOR = "#ffffff";
const CONTAINER_WIDTH = 5;
const CONTAINER_HEIGHT = 2.2;
const CONTAINER_DEPTH = 2.2;

const ContainerModel = () => {
    // Material
    const containerMaterial = new THREE.MeshStandardMaterial({
        color: CONTAINER_COLOR,
        metalness: 0.6,
        roughness: 0.2, // Low roughness = shiny and new
    });

    const frameMaterial = new THREE.MeshStandardMaterial({
        color: "#172554", // Slightly darker blue for the frame
        metalness: 0.7,
        roughness: 0.2,
    });

    return (
        <group dispose={null}>
            {/* 1. Main Body */}
            <mesh
                castShadow
                receiveShadow
                material={containerMaterial}
                position={[0, 0, 0]}
            >
                <boxGeometry args={[CONTAINER_WIDTH - 0.2, CONTAINER_HEIGHT - 0.2, CONTAINER_DEPTH - 0.2]} />
            </mesh>

            {/* 2. Structural Frame Details */}
            {[
                [-1, 1], [1, 1], [-1, -1], [1, -1]
            ].map(([xSign, zSign], idx) => (
                <mesh key={idx} position={[xSign * (CONTAINER_WIDTH / 2 - 0.1), 0, zSign * (CONTAINER_DEPTH / 2 - 0.1)]} material={frameMaterial}>
                    <boxGeometry args={[0.2, CONTAINER_HEIGHT, 0.2]} />
                </mesh>
            ))}

            {/* Horizontal Bars */}
            {[
                [0, CONTAINER_HEIGHT / 2 - 0.1, CONTAINER_DEPTH / 2 - 0.1],
                [0, -CONTAINER_HEIGHT / 2 + 0.1, CONTAINER_DEPTH / 2 - 0.1],
                [0, CONTAINER_HEIGHT / 2 - 0.1, -CONTAINER_DEPTH / 2 + 0.1],
                [0, -CONTAINER_HEIGHT / 2 + 0.1, -CONTAINER_DEPTH / 2 + 0.1],
            ].map((pos, idx) => (
                <mesh key={`h-${idx}`} position={new THREE.Vector3(...pos)} material={frameMaterial}>
                    <boxGeometry args={[CONTAINER_WIDTH, 0.2, 0.2]} />
                </mesh>
            ))}

            {/* 4. The "CARGO" Text */}
            <Text
                position={[0, 0, CONTAINER_DEPTH / 2 + 0.01]}
                fontSize={1.2}
                // Using standard font URL or fallback font
                font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                color={TEXT_COLOR}
                anchorX="center"
                anchorY="middle"
                letterSpacing={-0.05}
            >
                cargo
            </Text>

            <Text
                position={[0, 0, -CONTAINER_DEPTH / 2 - 0.01]}
                rotation={[0, Math.PI, 0]}
                fontSize={1.2}
                font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                color={TEXT_COLOR}
                anchorX="center"
                anchorY="middle"
                letterSpacing={-0.05}
            >
                cargo
            </Text>
        </group>
    );
};

interface CargoContainerProps {
    className?: string;
}

export default function CargoContainer({ className }: CargoContainerProps) {
    return (
        <div className={`relative ${className || "h-[500px] w-full"}`}>
            <Canvas shadows camera={{ position: [4, 2, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <Environment preset="city" />

                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                    <ContainerModel />
                </Float>

                <ContactShadows
                    position={[0, -1.4, 0]}
                    opacity={0.5}
                    scale={10}
                    blur={1.5}
                    far={1}
                />

                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 2}
                    autoRotate
                    autoRotateSpeed={2}
                />
            </Canvas>
        </div>
    );
}
