import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import {
  CheckCircle,
  ArrowRight,
  FileText,
  ShieldCheck,
  Globe,
} from "lucide-react";
import { FaHandsHelping } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { FaUserGear } from "react-icons/fa6";

import DefaultLayout from "@/layouts/default";

export default function CargoInsurancePage() {
  const insuranceServices = [
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Single Transit Cover",
      description:
        "Insures cargo against risks for a specific voyage, based on INCOTERM (International Commercial Terms). Suitable for within India or export/import transit.",
      features: [
        "Specific Voyage Coverage",
        "INCOTERM Based",
        "Domestic & International",
        "Customizable Terms",
      ],
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Marine Open Policy",
      description:
        "Provides automatic insurance protection for a specific period. Premium is adjustable on declaration and remains open until cancelled.",
      features: [
        "Automatic Coverage",
        "Adjustable Premium",
        "Flexible Term",
        "Cancel Anytime",
      ],
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Sales Turnover Policy (STOP)",
      description:
        "Tailor-made product for discerning customers, covering sales turnover with minimum turnover requirements.",
      features: [
        "Tailored Coverage",
        "Sales Turnover Protection",
        "Minimum Turnover Required",
        "Comprehensive Protection",
      ],
    },
  ];

  const keyAdvantages = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Comprehensive Coverage",
      description:
        "All-risk policies cover most perils, except specific exclusions like wilful destruction or inherent vice.",
    },
    {
      icon: <FaHandsHelping className="w-6 h-6 text-blue-600" />,
      title: "Expert Intermediary Support",
      description:
        "Work with consultants or brokers for selecting the right policy and streamlined claim processing.",
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      title: "Global Claim Handling",
      description:
        "Navigate international claims with expert support, reducing risks in foreign jurisdictions.",
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      title: "Flexible Policy Options",
      description:
        "Choose from Single Transit, Marine Open, or Sales Turnover policies to suit your needs.",
    },
  ];

  const faqData = [
    {
      question: "What are the documents required for Single Transit Cover?",
      answer:
        "Name and Address of the Insured, Commodity, Packaging Information, Mode of Transit (By Rail/Road/Air/Sea/Courier/Post), Voyage From and To, Sum Insured (Invoice Value), Basis of Valuation (Invoice Terms), Copy of Invoice.",
    },
    {
      question: "What are the documents required for Marine Open Policy?",
      answer:
        "Details vary, but typically include insured details, commodity information, policy term, estimated turnover, and declaration forms for premium adjustments.",
    },
    {
      question: "Explain Types of Risk Coverage?",
      answer:
        "Cargo insurance offers three main covers: ICC-A (all risks with specific exclusions), ICC-B (limited perils like fire, collision), and ICC-C (basic coverage for major incidents like vessel sinking).",
    },
    {
      question: "Ocean Freight – Selection Parameters?",
      answer:
        "Key parameters include transit route, cargo type, packaging, value, mode of transport, and specific risk coverage (ICC-A, ICC-B, or ICC-C) based on your needs.",
    },
    {
      question:
        "Which areas in Tamil Nadu are you able to offer logistics services?",
      answer:
        "We provide logistics services in Chennai, Coimbatore, Madurai, Tiruchirappalli, and other key areas in Tamil Nadu.",
    },
    {
      question:
        "In which areas do you provide freight forwarding logistics services in India?",
      answer:
        "Our freight forwarding services cover major cities like Mumbai, Delhi, Bangalore, Chennai, Pune, and Kolkata.",
    },
    {
      question: "Do you serve import and export logistics services globally?",
      answer:
        "Yes, we offer import and export logistics services across 194+ countries, with comprehensive cargo insurance solutions.",
    },
  ];

  const breadcrumbTrail = [
    { label: "Home", icon: <TiHome />, href: "/" },
    { label: "Services", icon: <FaUserGear />, href: "/services" },
    { label: "Cargo Insurance", icon: <FaHandsHelping /> },
  ];

  return (
    <DefaultLayout breadcrumbs={breadcrumbTrail}>
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 rounded-[10px] overflow-hidden">
        <div className="absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="mb-6">
                <Chip className="mb-4" color="primary" variant="shadow">
                  Comprehensive Cargo Insurance
                </Chip>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Cargo Insurance Services
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-200">
                  Protect Your Cargo, Secure Your Business
                </h2>
                <p className="text-lg text-blue-100 mb-6">
                  Safeguard your shipments with Mansi Shipping Agency&apos;s
                  tailored cargo insurance solutions, covering risks across
                  global supply chains.
                </p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    All-Risk Coverage Options
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    Global Support in 194+ Countries
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">Expert Claim Assistance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">Flexible Policy Options</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
                  color="primary"
                  endContent={<ArrowRight className="w-5 h-5" />}
                  size="lg"
                >
                  Request Insurance Quote
                </Button>
                <Button
                  className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8"
                  size="lg"
                  variant="bordered"
                >
                  Talk to an Insurance Expert
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl transform rotate-3 opacity-20" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Cargo Insurance Solutions
                  </h3>
                  <p className="text-blue-100">
                    Secure & Comprehensive Protection
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">194+</div>
                    <div className="text-blue-100 text-sm">
                      Countries Covered
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-blue-100 text-sm">Claim Support</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">3</div>
                    <div className="text-blue-100 text-sm">Policy Types</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">ICC</div>
                    <div className="text-blue-100 text-sm">
                      Coverage Options
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cargo Insurance – Secure, Flexible, Global
            </h2>
            <div>
              <div className="bg-white rounded-3xl shadow p-8 md:p-12 border border-gray-100 hover:shadow-3xl transition-shadow duration-500">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        Mansi Shipping Agency offers{" "}
                        <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text">
                          comprehensive cargo insurance
                        </span>{" "}
                        with all-risk policies covering most perils, except
                        specific exclusions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full flex items-center justify-center">
                      <FaHandsHelping className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        Our{" "}
                        <span className="font-bold text-blue-600">
                          expert intermediaries
                        </span>{" "}
                        assist in selecting the right policy and streamline
                        claim processes for efficiency.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        With coverage in{" "}
                        <span className="font-bold text-blue-600">
                          194+ countries
                        </span>
                        , we provide tailored insurance solutions for global
                        import and export logistics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Chip className="mb-4" color="primary" variant="flat">
              Comprehensive Insurance Services
            </Chip>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tailored Cargo Insurance for Your Needs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From single transit to turnover-based policies, our insurance
              services protect your cargo across the supply chain.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insuranceServices.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-none bg-white group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between w-full">
                    <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-300 transition-colors">
                      <div className="group-hover:text-white transition-colors">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <h3 className="font-semibold text-lg text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Chip className="mb-4" color="primary" variant="flat">
              Why Choose Us
            </Chip>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Reliable Cargo Insurance Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our tailored policies and expert support ensure your cargo is
              protected, no matter the destination.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {keyAdvantages.map((advantage, index) => (
              <div
                key={index}
                className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Chip className="mb-4" color="primary" variant="flat">
              Frequently Asked Questions
            </Chip>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Know More About Cargo Insurance
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our cargo insurance services
              and coverage options.
            </p>
          </div>
          <Accordion className="gap-4" variant="splitted">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                aria-label={faq.question}
                className="bg-white border border-gray-200 rounded-lg shadow-sm"
                title={faq.question}
              >
                <p className="text-gray-600 leading-relaxed pb-4">
                  {faq.answer}
                </p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-[10px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Reliable Cargo Insurance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let Mansi Shipping Agency protect your shipments with tailored
            insurance solutions for global supply chains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
              color="primary"
              endContent={<ArrowRight className="w-5 h-5" />}
              size="lg"
            >
              Get Insurance Quote
            </Button>
            <Button
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8"
              size="lg"
              variant="bordered"
            >
              Speak to an Insurance Expert
            </Button>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Global Coverage</h3>
              <p className="text-blue-100 text-sm">194+ Countries Served</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">
                All-Risk Policies
              </h3>
              <p className="text-blue-100 text-sm">Comprehensive Protection</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandsHelping className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Expert Support</h3>
              <p className="text-blue-100 text-sm">Streamlined Claims</p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
