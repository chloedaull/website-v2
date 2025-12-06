"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Float,
} from "@react-three/drei";

export default function AboutMe() {
  return (
    <section className="w-full bg-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold tracking-wide text-[#3A2F2A] mb-10 text-center">
          À propos de moi
        </h1>

        {/* Masonry layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {/* CARD 1 */}
          <div className="break-inside-avoid rounded-2xl bg-[#A67B5B] text-white p-6 shadow-lg relative overflow-hidden">
            <h2 className="text-2xl font-semibold mb-2">Mon parcours</h2>
            <p className="text-sm leading-relaxed">
              Passionnée par le design raffiné, les interfaces modernes et
              l’expérience utilisateur élégante.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="break-inside-avoid rounded-2xl bg-white text-[#3A2F2A] p-6 shadow-lg relative overflow-hidden h-72">
            <h2 className="text-2xl font-semibold mb-2">Compétences</h2>
            <ul className="text-sm space-y-1 leading-relaxed">
              <li>🎨 UX / UI Design</li>
              <li>💻 Développement Web</li>
              <li>📐 Design Visuel & Branding</li>
              <li>⚙️ Expériences élégantes & animées</li>
            </ul>
          </div>

          {/* CARD 3 — ROTATING GLOBE */}
          <div className="break-inside-avoid rounded-2xl bg-[#DCC4B5] text-[#3A2F2A] p-6 shadow-lg h-[500px] relative overflow-hidden">
            <h2 className="text-2xl font-semibold mb-4">Globe Interactif</h2>

            <div className="w-full h-80 rounded-xl overflow-hidden bg-[#EAD9CF]">
              <Canvas camera={{ position: [0, 0, 3] }}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[3, 3, 3]} intensity={1} />
                <Suspense fallback={null}>
                  <Float speed={2} rotationIntensity={1.2}>
                    <Sphere args={[1, 64, 64]}>
                      <MeshDistortMaterial
                        color="#A67B5B"
                        distort={0.25}
                        speed={2}
                        roughness={0.2}
                      />
                    </Sphere>
                  </Float>
                </Suspense>
                <OrbitControls enableZoom={false} autoRotate />
              </Canvas>
            </div>

            <p className="text-sm mt-4">
              Une planète organique animée en 3D, symbole de créativité et
              fluidité.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="break-inside-avoid rounded-2xl bg-[#A67B5B] text-white p-6 shadow-lg h-60 relative overflow-hidden">
            <h2 className="text-2xl font-semibold mb-2">Expérience</h2>
            <p className="text-sm leading-relaxed">
              Projets variés incluant interfaces web, dashboards, branding,
              animations, et conception visuelle moderne.
            </p>
          </div>

          {/* CARD 5 — ORBITING LANGUAGES */}
          <div className="break-inside-avoid rounded-2xl bg-white text-[#3A2F2A] p-6 shadow-lg h-[420px] relative overflow-hidden">
            <h2 className="text-2xl font-semibold mb-4">Technologies</h2>

            <div className="w-full h-72 rounded-xl overflow-hidden bg-[#EEE4DD]">
              <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <Suspense fallback={null}>
                  {/* Center sphere */}
                  <Float speed={2}>
                    <Sphere args={[0.7, 32, 32]}>
                      <MeshDistortMaterial
                        color="#A67B5B"
                        distort={0.3}
                        speed={3}
                      />
                    </Sphere>
                  </Float>

                  {/* Orbiting Tech Icons */}
                  <Float speed={4} floatIntensity={2} rotationIntensity={2}>
                    <mesh position={[2, 1, 0]}>
                      <sphereGeometry args={[0.25]} />
                      <meshStandardMaterial color="#3B82F6" />
                    </mesh>

                    <mesh position={[-2, -1, 0]}>
                      <sphereGeometry args={[0.25]} />
                      <meshStandardMaterial color="#F7DF1E" />
                    </mesh>

                    <mesh position={[0, -2, 1]}>
                      <sphereGeometry args={[0.25]} />
                      <meshStandardMaterial color="#000000" />
                    </mesh>
                  </Float>
                </Suspense>

                <OrbitControls enableZoom={false} autoRotate />
              </Canvas>
            </div>

            <p className="text-sm mt-4">
              Icônes flottantes : React, JavaScript, TypeScript, Next.js —
              toutes en orbite autour de ma créativité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
