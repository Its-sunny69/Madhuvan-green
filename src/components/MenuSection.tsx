"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Card, Carousel } from "./ui/apple-cards-carousel";
import Image from "next/image";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Food6, Food8, Food3 } from "@/assets/food";
import { Plank1, Stone } from "@/assets/background-image";
import { menuData, specialtyDishesData } from "@/data/menuData";

export default function MenuSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0.4, 0.8], [-250, 0]);
  const mobileY = useTransform(scrollYProgress, [0.3, 0.6], [-250, 0]);

  const opacity = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);
  const opacityY = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  const x = useTransform(scrollYProgress, [0, 0.4], [200, 0]);

  const cards = menuData.map((item, index) => (
    <Card key={item.title} card={item} index={index} />
  ));

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-green-800 px-4 py-16 sm:p-16"
      ref={ref}
    >
      <div className="relative z-10">
        <motion.h1
          className="z-10 mb-16 text-right text-5xl font-bold text-green-500 sm:text-7xl md:text-9xl"
          style={{ x }}
        >
          Our Menu
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <Carousel items={cards} />
        </motion.div>
      </div>

      <div className="mt-16">
        <motion.h1
          className="mb-8 text-center text-5xl font-bold text-green-500 sm:text-7xl md:mb-16 md:text-9xl"
          style={{
            y: isMobile ? mobileY : y,
            opacity: isMobile ? opacityY : opacity,
          }}
        >
          Our Specialty Dishes
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <InfiniteMovingCards
            items={specialtyDishesData}
            direction="right"
            speed="slow"
          />
        </motion.div>
      </div>

      <motion.div className="absolute top-15 -left-10 z-20 flex items-center justify-center md:left-0">
        <Image
          className="h-32 w-32 -rotate-90 sm:w-64 md:-rotate-45"
          src={Plank1}
          alt="Plank1"
          width={200}
          height={200}
        />
      </motion.div>
      <motion.div className="absolute bottom-0 left-0 z-20 flex items-center justify-center">
        <Image
          className="w-52 sm:w-72 md:w-96"
          src={Stone}
          alt="stone"
          width={200}
          height={200}
        />
      </motion.div>

      <div className="absolute -top-20 left-1/4 z-0 flex flex-col items-end justify-end md:-top-40">
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
            src={Food6}
            className="pointer-events-none w-48 select-none md:w-72"
            alt="food"
            width={192}
            height={192}
          />
        </motion.div>
      </div>
      <div className="absolute top-20 left-1/6 flex flex-col items-end justify-end">
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
            src={Food8}
            className="pointer-events-none w-32 select-none sm:w-48 md:w-64"
            alt="food"
            width={192}
            height={192}
          />
        </motion.div>
      </div>

      <div className="absolute right-0 bottom-0 z-20 flex flex-col items-end justify-end">
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
            src={Food3}
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
