"use client";

import { motion } from "motion/react";
import FireflyBackground from "@/animations/FireflyBackground";
import { useEffect, useState } from "react";
import { Chicken } from "@/assets/food";
import { Grass1, Leaf, Rope } from "@/assets/background-image";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollIntoView = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative z-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="https://res.cloudinary.com/dmlxsk90o/video/upload/so_2,f_webp,q_auto/v1769930730/video1_lcie70.mp4"
      >
        <source
          src="https://res.cloudinary.com/dmlxsk90o/video/upload/f_auto/v1769930730/video1_lcie70.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 z-0 bg-black opacity-50"></div>

      <div className="absolute inset-0 z-0">
        <FireflyBackground />
      </div>

      {!isMobile ? (
        <motion.div
          className="absolute top-0 right-0 z-10 m-4 rounded-full backdrop-blur-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <nav className="">
            <ul className="flex space-x-6 px-6 py-4 font-bold">
              <li className="group">
                <Link href="/" className="hover:text-yellow-300">
                  Home
                </Link>
                <div className="h-[1px] w-0 bg-yellow-600 transition-all duration-300 ease-in-out group-hover:w-full"></div>
              </li>
              <li className="group">
                <Link href="#our-menu" className="hover:text-yellow-300">
                  Menu
                </Link>
                <div className="h-[1px] w-0 bg-yellow-600 transition-all duration-300 ease-in-out group-hover:w-full"></div>
              </li>
              <li className="group">
                <Link href="#about-us" className="hover:text-yellow-300">
                  About Us
                </Link>
                <div className="h-[1px] w-0 bg-yellow-600 transition-all duration-300 ease-in-out group-hover:w-full"></div>
              </li>
              <li className="group">
                <Link href="#contact-us" className="hover:text-yellow-300">
                  Contact Us
                </Link>
                <div className="h-[1px] w-0 bg-yellow-600 transition-all duration-300 ease-in-out group-hover:w-full"></div>
              </li>
            </ul>
          </nav>
        </motion.div>
      ) : (
        <>
          <motion.button
            className="absolute top-4 right-4 z-50 flex flex-col gap-1.5 rounded-lg p-3 backdrop-blur-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          >
            <motion.div
              className="h-0.5 w-6 bg-yellow-400"
              animate={isMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="h-[1px] w-6 bg-yellow-400"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="h-0.5 w-6 bg-yellow-400"
              animate={
                isMenuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.div
            className="absolute top-0 right-0 z-40 h-screen w-full backdrop-blur-md"
            initial={{ opacity: 0, x: 400 }}
            animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 400 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
          >
            <nav className="px-6 pt-20">
              <ul className="flex flex-col space-y-6 text-2xl font-bold">
                <li className="group w-fit">
                  <Link
                    href="/"
                    className="transition-colors hover:text-yellow-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <motion.div className="h-[2px] w-0 bg-yellow-600 transition-all duration-300 ease-in-out group-hover:w-full"></motion.div>
                </li>
                <li className="group w-fit">
                  <Link
                    href="#our-menu"
                    className="transition-colors hover:text-yellow-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Menu
                  </Link>
                  <motion.div className="h-[2px] w-0 bg-yellow-600 transition-all duration-300 ease-in-out group-hover:w-full"></motion.div>
                </li>
                <li className="group w-fit">
                  <Link
                    href="#about-us"
                    className="transition-colors hover:text-yellow-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <motion.div className="h-[2px] w-0 bg-yellow-600 transition-all duration-300 ease-in-out group-hover:w-full"></motion.div>
                </li>
                <li className="group w-fit">
                  <Link
                    href="#contact-us"
                    className="transition-colors hover:text-yellow-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <motion.div className="h-[2px] w-0 bg-yellow-600 transition-all duration-300 ease-in-out group-hover:w-full"></motion.div>
                </li>
              </ul>
            </nav>
          </motion.div>
        </>
      )}

      <div className="relative z-10 p-4 text-center sm:mt-16">
        <motion.div
          initial={{ opacity: 0, filter: "blur(2px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
        >
          <motion.h1
            className="z-10 bg-clip-text text-6xl font-bold text-transparent sm:text-7xl md:text-9xl"
            initial={{
              backgroundImage:
                "linear-gradient(90deg, rgb(255, 213, 0) 0%, rgb(225, 225, 225) 10%, rgb(255, 213, 0) 20%)",
            }}
            animate={{
              backgroundImage: [
                "linear-gradient(90deg, rgb(255, 213, 0) -10%, rgb(225, 225, 225) 0%, rgb(255, 213, 0) 10%)",
                "linear-gradient(90deg, rgb(255, 213, 0) 0%, rgb(225, 225, 225) 10%, rgb(255, 213, 0) 20%)",
                "linear-gradient(90deg, rgb(255, 213, 0) 10%, rgb(225, 225, 225) 20%, rgb(255, 213, 0) 30%)",
                "linear-gradient(90deg, rgb(255, 213, 0) 20%, rgb(225, 225, 225) 30%, rgb(255, 213, 0) 40%)",
                "linear-gradient(90deg, rgb(255, 213, 0) 30%, rgb(225, 225, 225) 40%, rgb(255, 213, 0) 50%)",
                "linear-gradient(90deg, rgb(255, 213, 0) 40%, rgb(225, 225, 225) 50%, rgb(255, 213, 0) 60%)",
                "linear-gradient(90deg, rgb(255, 213, 0) 50%, rgb(225, 225, 225) 60%, rgb(255, 213, 0) 70%)",
                "linear-gradient(90deg, rgb(255, 213, 0) 60%, rgb(225, 225, 225) 70%, rgb(255, 213, 0) 80%)",
                "linear-gradient(90deg, rgb(255, 213, 0) 70%, rgb(225, 225, 225) 80%, rgb(255, 213, 0) 90%)",
                "linear-gradient(90deg, rgb(255, 213, 0) 80%, rgb(225, 225, 225) 90%, rgb(255, 213, 0) 100%)",
                "linear-gradient(90deg, rgb(255, 213, 0) 90%, rgb(225, 225, 225) 100%, rgb(255, 213, 0) 110%)",
                // "linear-gradient(90deg, rgb(255, 213, 0) 80%, rgb(225, 225, 225) 90%, rgb(255, 213, 0) 100%)",
                // "linear-gradient(90deg, rgb(255, 213, 0) 70%, rgb(225, 225, 225) 80%, rgb(255, 213, 0) 90%)",
                // "linear-gradient(90deg, rgb(255, 213, 0) 60%, rgb(225, 225, 225) 70%, rgb(255, 213, 0) 80%)",
                // "linear-gradient(90deg, rgb(255, 213, 0) 50%, rgb(225, 225, 225) 60%, rgb(255, 213, 0) 70%)",
                // "linear-gradient(90deg, rgb(255, 213, 0) 40%, rgb(225, 225, 225) 50%, rgb(255, 213, 0) 60%)",
                // "linear-gradient(90deg, rgb(255, 213, 0) 30%, rgb(225, 225, 225) 40%, rgb(255, 213, 0) 50%)",
                // "linear-gradient(90deg, rgb(255, 213, 0) 20%, rgb(225, 225, 225) 30%, rgb(255, 213, 0) 40%)",
                // "linear-gradient(90deg, rgb(255, 213, 0) 10%, rgb(225, 225, 225) 20%, rgb(255, 213, 0) 30%)",
                // "linear-gradient(90deg, rgb(255, 213, 0) 0%, rgb(225, 225, 225) 10%, rgb(255, 213, 0) 20%)",
                // "linear-gradient(90deg, rgb(255, 213, 0) -10%, rgb(225, 225, 225) 0%, rgb(255, 213, 0) 10%)",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            Madhuvan Greens
          </motion.h1>
        </motion.div>

        <div className="z-10 mt-8">
          <motion.p
            className="text-xl font-bold sm:text-xl"
            initial={{ opacity: 0, filter: "blur(2px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
          >
            A Family Restaurant to Enjoy{" "}
            <span className="text-green-500">veg</span> and{" "}
            <span className="text-red-500">non-veg</span> delights surrounded by
            <br /> greenery, calm vibes, and flavors everyone loves.
          </motion.p>
        </div>

        <motion.button
          className="group mt-16 cursor-pointer rounded-full px-6 py-4 font-bold text-yellow-400 backdrop-blur-md transition-all ease-in-out hover:scale-95 hover:shadow-lg sm:mt-8 sm:text-lg"
          initial={{ opacity: 0, filter: "blur(2px)", scale: 0.8 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 2 }}
          onClick={() => scrollIntoView("#our-menu")}
        >
          Explore Menu
          <div className="h-[1px] w-0 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></div>
        </motion.button>
      </div>

      <motion.div
        className="absolute top-0 -left-50 z-5 sm:-left-40"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
      >
        <Image
          className="w-[20rem] opacity-80"
          src={Leaf}
          alt="leaf"
          width={320}
          height={520}
        />
      </motion.div>

      <motion.div
        className="absolute top-0 z-5 md:-top-30"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
      >
        <Image className="w-full" src={Grass1} alt="grass" />
      </motion.div>

      <motion.div
        className="absolute -top-35 right-0 z-0 flex flex-col items-center justify-center sm:right-10"
        initial={{ y: -600 }}
        animate={{ y: -50 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 10,
          mass: 1.2,
          delay: 3,
        }}
      >
        <Image
          className="h-[32rem] w-4 sm:w-6"
          src={Rope}
          alt="rope"
          width={96}
          height={384}
        />
        <Image
          className="w-32 -rotate-50 sm:w-48"
          src={Chicken}
          alt="chicken"
          width={128}
          height={128}
        />
      </motion.div>
    </div>
  );
}
