import { Grass2, Grass4 } from "@/assets/background-image";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Madhuvan Greens website.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-16 sm:p-16">
      <div className="relative z-10 mx-auto rounded-xl bg-white/20 px-5 py-6 shadow-lg backdrop-blur-lg sm:px-10">
        <h1 className="text-center text-5xl font-bold text-black/50 sm:text-7xl md:text-9xl">
          Privacy Policy
        </h1>

        <div className="mt-16 leading-relaxed text-gray-600 sm:text-lg">
          <p className="mb-4">Last Updated: 01-02-2026</p>

          <p className="mb-4">
            This Privacy Policy describes the policies and procedures of
            Madhuvan Greens ("we", "our", or "us") regarding the collection,
            use, and disclosure of information when you use our website.
          </p>

          <p className="mb-6">
            By accessing or using this website, you agree to the terms of this
            Privacy Policy.
          </p>

          <ul className="list-inside list-decimal space-y-6">
            <li>
              <strong>No Collection of Personal Information</strong>
              <p className="mt-2">
                Madhuvan Greens does not collect, store, or process any personal
                data through this website. The website does not contain contact
                forms, user registration, account creation, or online payment
                features.
              </p>
              <p className="mt-2">
                When users click the "Contact" or "WhatsApp" button, they are
                redirected to a third-party platform (WhatsApp). Any personal
                information shared on that platform is governed solely by
                WhatsApp's Privacy Policy.
              </p>
            </li>
            <li>
              <strong>Use of Analytics Services</strong>
              <p className="mt-2">
                We may use third-party analytics tools, including but not
                limited to:
              </p>
              <ul className="mt-2 ml-4 list-inside list-disc">
                <li>Vercel Analytics</li>
                <li>Google Analytics</li>
              </ul>
              <p className="mt-2">
                These services may collect non-identifiable and aggregated usage
                data, such as IP address (anonymized), device type, browser
                type, operating system, pages visited, and session duration.
                This information is used strictly for website performance
                monitoring and service improvement.
              </p>
            </li>
            <li>
              <strong>Cookies and Tracking Technologies</strong>
              <p className="mt-2">
                Our website may use cookies and similar tracking technologies
                provided by analytics services. These cookies do not collect
                personally identifiable information and are used only to analyze
                website traffic and usage behavior.
              </p>
              <p className="mt-2">
                You may disable cookies through your browser settings.
              </p>
            </li>
            <li>
              <strong>Third-Party Links</strong>
              <p className="mt-2">
                This website may contain links to third-party websites or
                services. Madhuvan Greens has no control over, and assumes no
                responsibility for, the content, privacy policies, or practices
                of any third-party sites or services.
              </p>
            </li>
            <li>
              <strong>Data Security</strong>
              <p className="mt-2">
                As we do not collect or store personal data on our servers, we
                do not retain any personally identifiable information.
                Reasonable security measures are applied to protect any
                anonymous data collected through analytics tools.
              </p>
            </li>
            <li>
              <strong>Policy Updates</strong>
              <p className="mt-2">
                We reserve the right to update or modify this Privacy Policy at
                any time. Any changes will be effective immediately upon posting
                the updated policy on this page.
              </p>
            </li>
            <li>
              <strong>Contact Information</strong>
              <p className="mt-2">
                For any questions regarding this Privacy Policy, you may
                contact:
              </p>
              <p className="mt-2">
                Madhuvan Greens
                <br />
                Email: info@madhuvangreens.com
                <br />
                Phone: +91 XXXXXXXXXX
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute inset-y-0 -left-40 flex items-center justify-center sm:-left-80">
        <Image
          className="h-full w-full object-cover object-center"
          src={Grass2}
          alt="rope stem"
          width={100}
          height={700}
          unoptimized
        />
      </div>
      <div className="absolute inset-x-0 -top-10 flex items-center justify-center md:-top-50">
        <Image
          className="h-full w-full"
          src={Grass4}
          alt="rope stem"
          width={1000}
          height={400}
          unoptimized
        />
      </div>
    </div>
  );
}
