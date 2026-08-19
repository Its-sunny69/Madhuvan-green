"use client";

import Image from "next/image";
import InstagramIcon from "@/assets/social-icons/instagram.svg";
import FacebookIcon from "@/assets/social-icons/facebook.svg";
import WhatsAppIcon from "@/assets/social-icons/whatsapp.svg";
import { Food1 } from "@/assets/food";
import { motion } from "motion/react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black text-white">
      <div className="grid grid-cols-1 gap-4 px-4 py-16 sm:grid-cols-3 sm:p-16">
        <div>
          <p className="text-2xl">Quick Links</p>
          <ul className="mt-4 ml-2 w-fit space-y-2">
            <li className="w-fit transition-all hover:scale-95 hover:opacity-60">
              <Link href="/">Home</Link>
            </li>
            <li className="w-fit transition-all hover:scale-95 hover:opacity-60">
              <Link href="/#about-us">About Us</Link>
            </li>
            <li className="w-fit transition-all hover:scale-95 hover:opacity-60">
              <Link href="/#our-menu">Our Menu</Link>
            </li>
            <li className="w-fit transition-all hover:scale-95 hover:opacity-60">
              <Link href="/#contact-us">Contact Us</Link>
            </li>
            <li className="w-fit transition-all hover:scale-95 hover:opacity-60">
              <Link href="/privacy-policy">Privacy & Policy</Link>
            </li>
            <li className="w-fit transition-all hover:scale-95 hover:opacity-60">
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-2xl">Follow us on:</p>
          <ul className="mt-4 ml-2 w-fit space-y-2">
            <li className="w-fit transition-all hover:scale-95 hover:opacity-60">
              <Link href="#" className="flex items-center justify-center gap-2">
                <Image
                  src={WhatsAppIcon}
                  alt="WhatsApp"
                  width={24}
                  height={24}
                />
                WhatsApp
              </Link>
            </li>
            <li className="w-fit transition-all hover:scale-95 hover:opacity-60">
              <Link href="#" className="flex items-center justify-center gap-2">
                <Image
                  src={InstagramIcon}
                  alt="Instagram"
                  width={24}
                  height={24}
                />
                Instagram
              </Link>
            </li>
            <li className="w-fit transition-all hover:scale-95 hover:opacity-60">
              <Link href="#" className="flex items-center justify-center gap-2">
                <Image
                  src={FacebookIcon}
                  alt="Facebook"
                  width={24}
                  height={24}
                />
                Facebook
              </Link>
            </li>
          </ul>
        </div>
        <div></div>
      </div>

      <div className="w-full text-center text-[2.5rem] font-bold opacity-10 sm:text-7xl md:text-9xl">
        Madhuvan Greens
      </div>

      <div className="w-full py-2 text-center text-gray-600">
        © {new Date().getFullYear()} Madhuvan Greens {isMobile ? <br /> : "|"}{" "}
        Made with ❤️ by{" "}
        <Link
          href="https://x.com/dynamos_dev"
          className="transition-all hover:text-white"
          target="_blank"
          rel="noreferrer noopener"
        >
          DevDynamos
        </Link>
      </div>

      <div className="absolute -top-30 -right-30 flex flex-col items-end justify-end">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src={Food1}
            className="pointer-events-none w-72 select-none sm:w-96 md:w-[30rem]"
            alt="Food1"
            width={192}
            height={192}
            unoptimized={true}
          />
        </motion.div>
      </div>
    </div>
  );
}
