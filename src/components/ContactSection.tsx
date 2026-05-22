"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ContactBg } from "@/assets/background-image";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5], [500, 0]);

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:p-16"
      ref={sectionRef}
    >
      <motion.div className="z-0 text-center" style={{ y }}>
        <motion.h1 className="z-10 text-5xl font-bold text-black sm:text-7xl md:text-9xl">
          Contact Us
        </motion.h1>
        <motion.h2 className="text-2xl text-yellow-400 sm:text-4xl md:text-6xl">
          Talk to Madhuvan Greens
        </motion.h2>
      </motion.div>

      <div
        className="relative z-5 mt-16 flex min-h-80 flex-col gap-4 overflow-hidden rounded-xl bg-cover bg-center p-4 text-white sm:p-8 md:flex-row"
        style={{ backgroundImage: `url(${ContactBg.src})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="z-10 space-y-4 md:w-3/5">
          <motion.div
            className="text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <p>
              We’d love to welcome you to Madhuvan Greens, your destination for
              a luxury family dining experience. Whether you want to book a
              table, host a celebration, or ask about our menu, our team is
              always happy to assist you.
            </p>
          </motion.div>
          <motion.div
            className="text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <p className="font-semibold">📍 Visit Us </p>
            <p className="pl-4">
              Madhuvan Greens
              <br />
              Raj Silverstone New panvel highway near McDonald's katrap, east,
              Badlapur, Maharashtra 421503
            </p>
          </motion.div>
          <motion.div
            className="text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <p className="font-semibold">📞 Contact No.</p>
            <p className="pl-4">+91-12345-67890</p>
          </motion.div>

          <motion.button
            className="group mt-8 cursor-pointer rounded-full bg-yellow-300 px-6 py-4 font-bold text-yellow-900 transition-all ease-in-out hover:scale-95 hover:bg-yellow-300/80 hover:shadow-lg"
            initial={{ opacity: 0, filter: "blur(2px)", scale: 0.8 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 2 }}
          >
            Contact Us!
            <div className="h-[1px] w-0 bg-yellow-800 transition-all duration-300 ease-in-out group-hover:w-full"></div>
          </motion.button>
        </div>

        <div className="z-10 md:w-2/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.4397584916507!2d73.22170092345144!3d19.174214803456123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be793322131d5b1%3A0x49d538f3be11da44!2sMadhuvan%20Greens%20Restaurant!5e0!3m2!1sen!2sin!4v1738149600000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
