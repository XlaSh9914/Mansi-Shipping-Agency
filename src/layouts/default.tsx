import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { Button, Divider } from "@nextui-org/react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Logo } from "@/components/icons";
import { Navbar } from "@/components/navbar";

type Crumb = {
  label: string;
  icon: JSX.Element;
  href?: string;
};

export default function DefaultLayout({
  children,
  breadcrumbs = [],
}: {
  children: React.ReactNode;
  breadcrumbs?: Crumb[];
}) {
  return (
    <div id="start" className="relative flex flex-col">
      <Navbar />
      <main className="container mx-auto max-w-[85vw] flex-grow pt-8">
        <section className="hidden md:flex pb-6">
          <Breadcrumbs color="primary" size="lg" variant="solid">
            {breadcrumbs.map((crumb, index) => (
              <BreadcrumbItem
                key={index}
                href={crumb.href}
                startContent={crumb.icon}
              >
                {crumb.label}
              </BreadcrumbItem>
            ))}
          </Breadcrumbs>
        </section>
        {children}
      </main>
      <footer className="bg-gradient-to-r from-blue-600 to-blue-900 text-white py-12 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="hidden md:flex items-center gap-2">
              <Logo color={"white"} size={2} />
            </div>
            <div className="md:hidden flex items-center gap-2 h-[5vh]">
              <Logo color={"white"} size={1.5} />
            </div>
            <div className="col-span-2 content-center">
              <p className="text-white-400 leading-relaxed mb-4">
                Your trusted partner for comprehensive freight forwarding and
                logistics solutions across 194 countries worldwide.
              </p>
              <div className="flex gap-2">
                <Button
                  isIconOnly
                  className="text-white-400 hover:text-white"
                  variant="ghost"
                >
                  <FaFacebookF className="w-5 h-5" />
                </Button>
                <Button
                  isIconOnly
                  className="text-white-400 hover:text-white"
                  variant="ghost"
                >
                  <FaXTwitter className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-white-400">
                <li>
                  <a
                    className="hover:text-white transition-colors"
                    href="/services/air-freight"
                  >
                    Air Freight
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white transition-colors"
                    href="/services/sea-freight"
                  >
                    Sea Freight
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white transition-colors"
                    href="/services/land-transport"
                  >
                    Land Transport
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white transition-colors"
                    href="/services/customs-clearance"
                  >
                    Customs Clearance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-white-400">
                <li>
                  <a
                    className="hover:text-white transition-colors"
                    href="/about"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white transition-colors"
                    href="/team"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white transition-colors"
                    href="/careers"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white transition-colors"
                    href="/contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Divider className="my-8 bg-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center text-white-400">
            <p>© 2025 Mansi Shipping Agency. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                className="hover:text-white transition-colors"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
              <a
                className="hover:text-white transition-colors"
                href="/terms-of-service"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
