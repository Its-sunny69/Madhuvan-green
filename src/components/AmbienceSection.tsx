"use client";

import { motion } from "motion/react";

export default function AmbienceSection() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent px-4 py-16 md:p-16">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="https://res.cloudinary.com/dmlxsk90o/video/upload/so_2,f_webp,q_auto/v1769932027/video2_ia83tj.mp4"
      >
        <source
          src="https://res.cloudinary.com/dmlxsk90o/video/upload/f_auto/v1769932027/video2_ia83tj.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 z-0 bg-black opacity-50"></div>

      <div className="relative sm:w-[80%]">
        <motion.h1
          className="z-10 text-5xl font-bold text-white sm:text-7xl md:text-9xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Ambience
        </motion.h1>
        <motion.h2
          className="text-2xl text-yellow-400 sm:text-4xl md:text-6xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          An Elegant Space for Fine Dining
        </motion.h2>
        <motion.div
          className="mt-16 leading-relaxed text-white sm:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <p>
            At Madhuvan Greens, our ambiance is inspired by the beauty of
            nature. Lush greenery, jungle-style elements, natural stone
            textures, and warm wooden finishes come together to create a calm
            yet luxurious dining environment.
          </p>
          <p className="mt-4">
            Designed as a green-themed family restaurant, our space offers a
            peaceful escape from the city while maintaining a premium fine
            dining feel. Soft lighting, earthy tones, and elegant décor make it
            the perfect place for family gatherings, celebrations, and special
            occasions.
          </p>
          <p className="mt-4">
            Every corner reflects harmony between nature and comfort—so you
            don’t just dine, you unwind.
          </p>
          <button className="group mt-8 cursor-pointer rounded-full bg-yellow-300 px-6 py-4 font-bold text-yellow-900 transition-all ease-in-out hover:scale-95 hover:bg-yellow-300/80 hover:shadow-lg">
            Reserve Table
            <div className="h-[1px] w-0 bg-yellow-800 transition-all duration-300 ease-in-out group-hover:w-full"></div>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
