"use client";

import { RopeStem } from "@/assets/background-image";
import { Food10 } from "@/assets/food";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function AboutSection() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.8], [250, -250]);
  const x1 = useTransform(scrollYProgress, [0, 0.5], [-200, 0]);
  const x2 = useTransform(scrollYProgress, [0, 0.5], [200, 0]);

  useEffect(() => {
    const unsubscribe = y.on("change", (value) => {
      console.log(value);
    });
    return () => unsubscribe();
  }, [y]);

  return (
    <div
      className="relative flex min-h-screen items-center justify-end overflow-hidden px-4 py-16 sm:justify-start sm:p-16"
      ref={aboutRef}
    >
      <div className="z-5 w-[80%]">
        <motion.h1
          className="text-5xl font-bold text-green-500 sm:text-7xl md:text-9xl"
          style={{ x: x1 }}
        >
          About Us
        </motion.h1>
        <motion.h2
          className="text-2xl text-yellow-400 sm:text-4xl md:text-6xl"
          style={{ x: x2 }}
        >
          A Nature-Inspired Luxury Family Restaurant
        </motion.h2>
        <motion.div
          className="mt-16 leading-relaxed text-gray-600 sm:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <p>
            Madhuvan Greens is a premium family restaurant that combines the
            elegance of fine dining with the tranquility of nature. Established
            with a vision to create a unique dining experience, we focus on
            delivering exquisite flavors in a setting that feels both luxurious
            and welcoming.
          </p>
          <p className="mt-4">
            Inspired by nature, our restaurant features a green-themed ambiance
            with jungle-style elements, natural stone textures, and warm wooden
            interiors—creating a calm yet elegant space for dining. With warm
            hospitality and a peaceful atmosphere, we provide the perfect
            setting for family dinners, celebrations, and special occasions.
          </p>
        </motion.div>
      </div>

      <motion.div className="bg-accent absolute inset-y-0 right-5 flex items-center justify-center">
        <motion.div
          initial={{ rotate: 0 }}
          whileInView={{ rotate: 720 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ y }}
        >
          <Image
            src={Food10}
            className="pointer-events-none w-32 select-none sm:w-48 md:w-72"
            alt="food"
            width={192}
            height={192}
          />
        </motion.div>
      </motion.div>

      <motion.div className="absolute inset-y-0 -left-10 flex items-center justify-center">
        <Image
          className="h-full"
          src={RopeStem}
          alt="stem rope"
          width={100}
          height={700}
        />
      </motion.div>
    </div>
  );
}
