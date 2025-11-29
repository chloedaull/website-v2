"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { User, Code, Rocket, Sparkles, PenTool } from "lucide-react";

const cards = [
  {
    title: "Who I Am",
    text: "A developer who values refinement, structure and elegant design philosophy.",
    icon: <User className="w-10 h-10 text-[#A67B5B]" />,
    row: "row-span-2",
    col: "",
  },
  {
    title: "My Background",
    text: "CS fundamentals, UI/UX passion, and digital craftsmanship.",
    icon: <PenTool className="w-10 h-10 text-[#A67B5B]" />,
    row: "row-span-3",
    col: "lg:col-span-2",
  },
  {
    title: "What I Do",
    text: "Frontend, React, motion, interfaces and modern stack.",
    icon: <Code className="w-10 h-10 text-[#A67B5B]" />,
    row: "row-span-2",
    col: "",
  },
  {
    title: "My Approach",
    text: "Detail-oriented, natural motion, minimalistic experience.",
    icon: <Sparkles className="w-10 h-10 text-[#A67B5B]" />,
    row: "row-span-2",
    col: "",
  },
  {
    title: "My Vision",
    text: "Crafting elegant, warm, premium digital experiences.",
    icon: <Rocket className="w-10 h-10 text-[#A67B5B]" />,
    row: "row-span-3",
    col: "lg:col-span-2",
  },
];

// Elegant 3D hover tilt
function FloatingCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  return (
    <motion.div
      style={{ rotateX, rotateY }}
      onMouseMove={(e) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        x.set(e.clientX - (rect.left + rect.width / 2));
        y.set(e.clientY - (rect.top + rect.height / 2));
      }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 140, damping: 16 }}
      className={`relative bg-white border border-[#E7DFD7] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function AboutMe() {
  return (
    <section className="w-full py-32 bg-[#F7F3EF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-5xl md:text-6xl font-serif mb-20 text-[#A67B5B]"
        >
          About Me
        </motion.h2>

        {/* Asymmetrical Mosaic Grid */}
        <div
          className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-4
    gap-8
    auto-rows-[120px]   /* base row height – very elegant */
  "
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`${card.row} ${card.col}`}
            >
              <FloatingCard className="h-full flex flex-col justify-between">
                <div>{card.icon}</div>
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-[#A67B5B] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#3A3A3A] leading-relaxed text-[17px]">
                    {card.text}
                  </p>
                </div>
              </FloatingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
