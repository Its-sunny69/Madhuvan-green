import { Grass3, Grass4 } from "@/assets/background-image";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for the Madhuvan Greens website.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsAndContions() {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-16 sm:p-16">
      <div className="relative z-10 mx-auto rounded-xl bg-white/20 px-5 py-6 shadow-lg backdrop-blur-lg sm:px-10">
        <h1 className="text-center text-5xl font-bold text-black/50 sm:text-7xl md:text-9xl">
          Terms & Conditions
        </h1>

        <div className="mt-16 leading-relaxed text-gray-600 sm:text-lg">
          <p className="mb-4">Last Updated: 01-02-2026</p>

          <p className="mb-4">
            Welcome to Madhuvan Greens. By accessing and using this website, you
            agree to be bound by the following Terms and Conditions. If you do
            not agree, please discontinue use of the website.
          </p>

          <ul className="list-inside list-decimal space-y-6">
            <li>
              <strong>Website Use</strong>
              <p className="mt-2">
                This website is provided for general informational purposes
                only. We reserve the right to update, modify, or remove content
                at any time without prior notice.
              </p>
            </li>
            <li>
              <strong>No Online Transactions</strong>
              <p className="mt-2">
                Madhuvan Greens does not process online orders, payments, or
                reservations through this website. All booking or inquiries are
                redirected to third-party platforms such as WhatsApp, which
                operate under their own terms and privacy policies.
              </p>
            </li>
            <li>
              <strong>Intellectual Property</strong>
              <p className="mt-2">
                All content on this website, including text, images, logos, and
                design elements, is the property of Madhuvan Greens and may not
                be copied, reused, or distributed without prior written
                permission.
              </p>
            </li>
            <li>
              <strong>Third-Party Links</strong>
              <p className="mt-2">
                Our website may contain links to third-party platforms. Madhuvan
                Greens is not responsible for the content, policies, or
                practices of these external websites.
              </p>
            </li>
            <li>
              <strong>Limitation of Liability</strong>
              <p className="mt-2">
                Madhuvan Greens shall not be held liable for any damages arising
                from the use or inability to use this website or any third-party
                platforms linked from it.
              </p>
            </li>
            <li>
              <strong>Changes to Terms</strong>
              <p className="mt-2">
                We reserve the right to update these Terms & Conditions at any
                time. Continued use of the website signifies acceptance of the
                updated terms.
              </p>
            </li>
            <li>
              <strong>Governing Law</strong>
              <p className="mt-2">
                These Terms shall be governed by and interpreted in accordance
                with the laws of India.
              </p>
            </li>
            <li>
              <strong>Contact Information</strong>
              <p className="mt-2">
                For any questions regarding these Terms & Conditions, please
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

      <div className="absolute inset-y-0 -right-70 flex items-center justify-center sm:-right-80">
        <Image
          className="h-full w-full object-cover object-center"
          src={Grass3}
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
