import AboutSection from "@/components/AboutSection";
import AmbienceSection from "@/components/AmbienceSection";
import BeveragesSection from "@/components/BeveragesSection";
import ContactSection from "@/components/ContactSection";
import DessertSection from "@/components/DessertSection";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import TeamSection from "@/components/TeamSection";
import Image from "next/image";
import Whatsapp2 from "@/assets/social-icons/whatsapp2.svg";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/opengraph-image`,
    servesCuisine: ["Indian", "Vegetarian", "Non-vegetarian"],
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    geo: { "@type": "GeoCoordinates", ...siteConfig.geo },
    hasMap: siteConfig.mapsUrl,
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <section id="hero-section">
        <HeroSection />
      </section>

      <section id="about-us">
        <AboutSection />
      </section>

      <section id="our-menu">
        <MenuSection />
      </section>

      <section id="our-team">
        <TeamSection />
      </section>

      <section id="ambience">
        <AmbienceSection />
      </section>

      <section id="desserts">
        <DessertSection />
      </section>

      <section id="beverages">
        <BeveragesSection />
      </section>

      <section id="contact-us">
        <ContactSection />
      </section>

      <div className="fixed bottom-5 left-5 z-100 cursor-pointer rounded-full shadow-lg transition-all hover:scale-110">
        <Link
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="w-16"
            src={Whatsapp2}
            alt="Whatsapp"
            width={100}
            height={100}
          />
        </Link>
      </div>
    </main>
  );
}
