import React from "react";
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
  ShieldCheck,
  Globe,
  Wrench,
  Factory,
} from "lucide-react";
import { FaShippingFast } from "react-icons/fa";
import { FaPersonMilitaryPointing } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { FaUserGear } from "react-icons/fa6";

import DefaultLayout from "@/layouts/default";

export default function AerospaceDefensePage() {
  const industryServices = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Custom Built Solutions",
      description:
        "Tailored logistics solutions designed to meet the unique needs of aerospace and defense products, ensuring compliance and efficiency.",
      features: [
        "Bespoke Handling",
        "Government Compliance",
        "Specialized Packaging",
        "Customized Processes",
      ],
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Turn-Key System",
      description:
        "A streamlined framework (Understand, Enquire, Plan, Offer) for seamless integration of your products into our logistics system.",
      features: [
        "Efficient Workflow",
        "Rapid Onboarding",
        "Scalable Solutions",
        "End-to-End Management",
      ],
    },
    {
      icon: <FaUserGear className="w-8 h-8 text-blue-600" />,
      title: "Specialized Team",
      description:
        "Over 20 years of logistics expertise, working with major aerospace and defense firms to deliver specialized solutions.",
      features: [
        "Experienced Professionals",
        "Industry-Specific Knowledge",
        "24/7 Support",
        "Global Expertise",
      ],
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Tech-Savvy Operations",
      description:
        "Cutting-edge technology to optimize supply chain processes, ensuring precision and efficiency for aerospace and defense logistics.",
      features: [
        "Advanced Tracking",
        "Real-Time Updates",
        "Automation Integration",
        "Data Analytics",
      ],
    },
  ];

  const keyAdvantages = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Government Compliance",
      description:
        "Expert handling of complex regulatory requirements for aerospace and defense logistics.",
    },
    {
      icon: <FaShippingFast className="w-6 h-6 text-blue-600" />,
      title: "24/7 On-Time Delivery",
      description:
        "Round-the-clock logistics support to ensure timely deliveries for critical aerospace components.",
    },
    {
      icon: <Factory className="w-6 h-6 text-blue-600" />,
      title: "Strategic Mumbai Hub",
      description:
        "Strong presence in Mumbai, a key logistics hub, ensuring seamless connectivity and efficient operations.",
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      title: "Global Network",
      description:
        "Serving airlines, OEMs, and tier suppliers across 194+ countries with seamless logistics solutions.",
    },
  ];

  const faqData = [
    {
      question:
        "What services do you offer for the aerospace and defense industry?",
      answer:
        "We provide custom logistics solutions, including specialized handling, government compliance, turn-key systems, and tech-driven supply chain management for aerospace and defense products.",
    },
    {
      question: "How do you ensure compliance with government regulations?",
      answer:
        "Our team stays updated with all regulatory requirements, leveraging our experience and knowledge hub to ensure full compliance with Indian and international standards.",
    },
    {
      question: "Which areas in India do you serve for aerospace logistics?",
      answer:
        "Based in Mumbai, we provide seamless logistics services across India, with strong connectivity to major aerospace and defense hubs.",
    },
    {
      question: "Do you support global aerospace and defense logistics?",
      answer:
        "Yes, we serve a global network across 194+ countries, supporting airlines, OEMs, tier suppliers, and raw material providers with comprehensive logistics solutions.",
    },
    {
      question: "What technology do you use for aerospace logistics?",
      answer:
        "We employ advanced tracking, real-time updates, automation, and data analytics to ensure precision and efficiency in aerospace and defense supply chains.",
    },
  ];

  const breadcrumbTrail = [
    { label: "Home", icon: <TiHome />, href: "/" },
    {
      label: "Industry Solutions",
      icon: <FaUserGear />,
      href: "/",
    },
    { label: "Aerospace & Defense", icon: <FaPersonMilitaryPointing /> },
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
                  Aerospace & Defense Logistics
                </Chip>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Aerospace & Defense Solutions
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-200">
                  Precision Logistics for Critical Industries
                </h2>
                <p className="text-lg text-blue-100 mb-6">
                  Mansi Shipping Agency delivers tailored solutions for aerospace,
                  aviation, and defense, ensuring compliance and efficiency
                  across global supply chains.
                </p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    20+ Years of Industry Expertise
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    Global Network Across 194+ Countries
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    Advanced Technology Integration
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    Mumbai-Based Logistics Hub
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
                  color="primary"
                  endContent={<ArrowRight className="w-5 h-5" />}
                  size="lg"
                >
                  Request Logistics Quote
                </Button>
                <Button
                  className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8"
                  size="lg"
                  variant="bordered"
                >
                  Talk to an Industry Expert
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl transform rotate-3 opacity-20" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaPersonMilitaryPointing className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Aerospace & Defense Solutions
                  </h3>
                  <p className="text-blue-100">Precision & Compliance</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">194+</div>
                    <div className="text-blue-100 text-sm">
                      Countries Served
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">20+</div>
                    <div className="text-blue-100 text-sm">
                      Years of Expertise
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-blue-100 text-sm">Support</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">Mumbai</div>
                    <div className="text-blue-100 text-sm">Logistics Hub</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Introduction */}
      <section className="pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Aerospace & Defense – Precision, Compliance, Global
            </h2>
            <div>
              <div className="bg-white rounded-3xl shadow p-8 md:p-12 border border-gray-100 hover:shadow-3xl transition-shadow duration-500">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full flex items-center justify-center">
                      <Factory className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        Mansi Shipping Agency specializes in{" "}
                        <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text">
                          aerospace and defense logistics
                        </span>
                        , serving airlines, OEMs, tier suppliers, and raw
                        material providers with tailored solutions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        Our{" "}
                        <span className="font-bold text-blue-600">
                          Mumbai-based logistics hub
                        </span>{" "}
                        ensures seamless connectivity and efficient operations
                        for aerospace and defense logistics.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        With a{" "}
                        <span className="font-bold text-blue-600">
                          global network across 194+ countries
                        </span>
                        , we provide cutting-edge technology and 24/7 support
                        for your supply chain needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Chip className="mb-4" color="primary" variant="flat">
              Comprehensive Industry Solutions
            </Chip>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tailored Logistics for Aerospace & Defense
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our specialized services ensure precision, compliance, and
              efficiency for aerospace and defense supply chains.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {industryServices.map((service, index) => (
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
              Precision Logistics for Aerospace & Defense
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our expertise and technology ensure reliable, compliant, and
              efficient logistics for your critical operations.
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
              Know More About Aerospace & Defense Logistics
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our logistics solutions for
              the aerospace and defense industry.
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
            Need Precision Aerospace Logistics?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let Mansi Shipping Agency manage your aerospace and defense supply chain
            with tailored, compliant, and tech-driven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
              color="primary"
              endContent={<ArrowRight className="w-5 h-5" />}
              size="lg"
            >
              Get Logistics Quote
            </Button>
            <Button
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8"
              size="lg"
              variant="bordered"
            >
              Speak to an Industry Expert
            </Button>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Global Reach</h3>
              <p className="text-blue-100 text-sm">194+ Countries Served</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">
                Regulatory Compliance
              </h3>
              <p className="text-blue-100 text-sm">Government Standards Met</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShippingFast className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Fast Delivery</h3>
              <p className="text-blue-100 text-sm">24/7 Operations</p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
