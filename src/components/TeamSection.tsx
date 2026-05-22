"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Food4 } from "@/assets/food";
import { Plank2 } from "@/assets/background-image";
import { useEffect, useRef, useState } from "react";
import { memberData } from "@/data/memberData";

export default function TeamSection() {
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

  const x = useTransform(scrollYProgress, [0, 0.4], [150, 0]);

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-cover bg-fixed bg-center px-4 py-16 sm:p-16"
      ref={ref}
      style={{ backgroundImage: `url(${Plank2.src})` }}
    >
      <div className="relative z-10">
        <motion.h1
          className="text-5xl font-bold text-black/50 sm:text-7xl md:text-9xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: isMobile ? 0 : 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Our Team
        </motion.h1>
        <motion.h2
          className="text-2xl text-yellow-400 sm:text-4xl md:text-6xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Passion That Creates Perfect Flavors
        </motion.h2>
      </div>

      <motion.div
        className="flex justify-around space-x-4 overflow-x-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        {memberData.map((member, index) => (
          <CardContainer key={index} isMobile={isMobile}>
            <CardBody className="group/card border-green/[0.1] dark:border-green/[0.2] relative h-auto w-auto rounded-xl border bg-white p-6 sm:w-[20rem] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
              <CardItem
                translateZ="100"
                className="mt-4 w-full"
                isMobile={isMobile}
              >
                <img
                  src={member.src}
                  height="1000"
                  width="1000"
                  className="h-72 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>

              <div className="mt-10">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                  isMobile={isMobile}
                >
                  {member.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="mt-2 max-w-sm text-neutral-500 dark:text-neutral-300"
                  isMobile={isMobile}
                >
                  {member.role}
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </motion.div>

      <div className="absolute top-10 right-0 flex flex-col items-end justify-end sm:top-0">
        <motion.div style={{ x }}>
          <Image
            src={Food4}
            className="pointer-events-none w-48 -rotate-90 select-none md:w-72"
            alt="food"
            width={192}
            height={192}
          />
        </motion.div>
      </div>
    </div>
  );
}
