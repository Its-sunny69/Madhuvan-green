"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Beverages } from "@/assets/background-image";
import { beveragesData } from "@/data/beveragesData";

export default function BeveragesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-500, 500]);
  const MobileX = useTransform(scrollYProgress, [0, 0.7], [-500, 500]);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center px-4 py-16 sm:p-16"
      ref={sectionRef}
      style={{ backgroundImage: `url('${Beverages.src}')` }}
    >
      <div className="relative z-10 overflow-x-hidden text-center">
        <motion.h1
          className="text-5xl font-bold text-white/50 sm:text-7xl md:text-9xl"
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ x: isMobile ? MobileX : x }}
        >
          Beverages
        </motion.h1>
        <motion.h2
          className="text-2xl text-yellow-400 sm:text-4xl md:text-6xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Signature Drinks for Perfect Moments
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 py-16 sm:grid-cols-2 md:grid-cols-4">
          {beveragesData.map((beverageCategory, index) => (
            <motion.div
              key={index}
              className="rounded-lg bg-black/10 p-4 text-left text-white backdrop-blur-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: isMobile ? 0 : index * 0.4 + 0.5,
              }}
            >
              <h3 className="text-xl font-semibold sm:text-2xl">
                {beverageCategory.type}
              </h3>
              <ul className="mt-4 list-inside list-disc text-lg">
                {beverageCategory.list.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
