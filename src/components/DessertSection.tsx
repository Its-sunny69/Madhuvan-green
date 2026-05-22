"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { Food11 } from "@/assets/food";
import { Dessert1, Dessert2 } from "@/assets/background-image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
      delay: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export default function DessertSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <div
      className="relative min-h-screen overflow-hidden px-4 py-16 sm:p-16"
      ref={sectionRef}
    >
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-end overflow-hidden select-none">
        <motion.div className="h-full w-1/2" style={{ x }}>
          <Image
            src={Dessert2}
            className="h-full w-full object-cover"
            width={100}
            height={200}
            alt="dessert"
            unoptimized
          />
        </motion.div>
      </div>

      <div className="relative z-10">
        <motion.h1
          className="bg-cover bg-clip-text text-5xl font-bold text-transparent sm:text-7xl md:text-9xl"
          style={{
            backgroundImage: `url("${Dessert1.src}")`,
          }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Desserts
        </motion.h1>
        <motion.h2
          className="text-2xl text-yellow-400 sm:text-4xl md:text-6xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Sweet Endings for Fine Dining
        </motion.h2>

        <div className="mt-16">
          <motion.ul
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
          >
            <motion.li variants={itemVariants}>
              Royal Gulab Jamun Delight
            </motion.li>
            <motion.li variants={itemVariants}>
              Saffron Pistachio Rasmalai
            </motion.li>
            <motion.li variants={itemVariants}>
              Classic Chocolate Lava Cake
            </motion.li>
            <motion.li variants={itemVariants}>
              Caramel Custard Royale
            </motion.li>
            <motion.li variants={itemVariants}>
              Vanilla Bean Ice Cream with Nuts
            </motion.li>
          </motion.ul>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 flex flex-col items-end justify-end md:-bottom-30 md:-left-30">
        <motion.div
          initial={{ rotate: 0 }}
          whileInView={{ rotate: 720 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src={Food11}
            className="pointer-events-none w-32 select-none sm:w-48 md:w-72"
            alt="food"
            width={192}
            height={192}
          />
        </motion.div>
      </div>
    </div>
  );
}
