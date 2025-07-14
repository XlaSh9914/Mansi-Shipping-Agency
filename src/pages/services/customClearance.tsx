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
  SearchCheck,
  Globe,
  FileSignature,
  DollarSign,
  ClipboardList,
  UserCog,
  ShieldAlert,
  Warehouse,
  ShieldCheck,
  Clock,
  ArrowBigRight,
  Banknote,
  BookUser,
  Briefcase,
} from "lucide-react";
import { FaHandsHelping } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { FaUserGear } from "react-icons/fa6";

import DefaultLayout from "@/layouts/default";

export default function CustomsClearancePage() {
  const customsClearanceServices = [
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Customs Broker Service",
      description:
        "We assist in smooth import and export customs clearance by acting as a reliable link between the customer and customs authorities.",
      features: [
        "Import & Export Clearance",
        "Freight Brokerage",
        "End-to-End Coordination",
        "Efficient Filing",
      ],
    },
    {
      icon: <BookUser className="w-8 h-8 text-blue-600" />,
      title: "Customs Procedure Consulting",
      description:
        "Customized guidance on procedures, regulations, and customs regimes to streamline your cargo movement.",
      features: [
        "Import/Export Advisory",
        "Compliance Planning",
        "Duty Structures",
        "Regulatory Updates",
      ],
    },
    {
      icon: <Banknote className="w-8 h-8 text-blue-600" />,
      title: "SEZ/FTWZ/EOU Clearance",
      description:
        "We specialize in clearance for SEZs, Free Trade Zones, and 100% Export Oriented Units — duty-free handling with full compliance.",
      features: [
        "SEZ Protocols",
        "FTWZ Access",
        "100% EOU Processing",
        "Duty-Free Benefits",
      ],
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Bonding & De-bonding",
      description:
        "We help avoid penalties by guiding clients through port bonding procedures and assist with seamless de-bonding.",
      features: [
        "Bond Execution",
        "Duty Suspension",
        "Release Coordination",
        "Port Compliance",
      ],
    },
    {
      icon: <ArrowBigRight className="w-8 h-8 text-blue-600" />,
      title: "Hi Sea Sale",
      description:
        "We enable clearance for shipments sold under hi-sea sale terms before they arrive at the destination port.",
      features: [
        "Documentation Prep",
        "Ownership Transfers",
        "Onboard Transaction Support",
        "Legal Compliance",
      ],
    },
    {
      icon: <Warehouse className="w-8 h-8 text-blue-600" />,
      title: "Bonded Warehouse Management",
      description:
        "We provide secure storage solutions for dutiable goods before clearance, sale, or manufacturing.",
      features: [
        "Bonded Storage",
        "Duty Suspension",
        "Inventory Control",
        "Customs Supervision",
      ],
    },
  ];

  const keyFeatures = [
    {
      icon: <SearchCheck className="w-6 h-6 text-blue-600" />,
      title: "Advance Clearance Planning",
      description:
        "We plan shipments ahead to reduce customs risks, delays, and cost overruns.",
    },
    {
      icon: <FileSignature className="w-6 h-6 text-blue-600" />,
      title: "Review Services",
      description:
        "Comprehensive pre-import and post-entry compliance review to ensure complete accuracy.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-blue-600" />,
      title: "Cost Efficiency",
      description:
        "Our strategies ensure the most economical approach to customs clearance.",
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-blue-600" />,
      title: "Complete Documentation",
      description:
        "We handle all paperwork and data archiving, ensuring future retrieval and compliance.",
    },
    {
      icon: <UserCog className="w-6 h-6 text-blue-600" />,
      title: "Expert Consultation",
      description:
        "We assess your product and business to recommend the most effective clearance methods.",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-blue-600" />,
      title: "Issue Resolution",
      description:
        "Our data-driven system ensures fast and efficient handling of clearance-related issues.",
    },
  ];

  const faqData = [
    {
      question: "What is the procedure for customs clearance?",
      answer:
        "It starts with accurate documentation and product classification, followed by HS code tabulation and duty calculation.",
    },
    {
      question: "How is clearance of Letter Mail Articles done?",
      answer:
        "Letter mail articles are cleared through designated postal customs centers with minimal documentation.",
    },
    {
      question:
        "Where can a passenger lodge customs complaints or suggestions?",
      answer:
        "Complaints can be filed at the airport customs office or through the official Indian Customs portal.",
    },
    {
      question: "How long does customs clearance take in India?",
      answer:
        "It usually takes 1–3 working days, depending on cargo type, documentation, and inspection requirements.",
    },
    {
      question: "Which areas in Tamil Nadu do you offer logistics services?",
      answer:
        "We cover Chennai, Coimbatore, Madurai, Tiruchirappalli, and more through our network.",
    },
    {
      question:
        "Which areas in India do you offer freight forwarding services?",
      answer:
        "We serve all major cities including Mumbai, Delhi, Bangalore, Chennai, Pune, and Kolkata.",
    },
    {
      question: "What are certified shipments needing compulsory clearance?",
      answer:
        "Shipments involving FSSAI, PQ, AQ, ADC, CDSCO, TC, CRCL, and RFCL certifications require compliance.",
    },
    {
      question: "What is BIS certificate and is it mandatory?",
      answer:
        "The BIS certificate ensures product conformity. It's mandatory for many regulated imports.",
    },
    {
      question: "What does Hi Sea Sale shipment mean?",
      answer:
        "It refers to a sale transaction of cargo while it’s still on the high seas before reaching the port.",
    },
    {
      question: "Do you handle Air Cargo Customs Clearance?",
      answer:
        "Yes, we offer comprehensive import/export clearance for air cargo across major airports.",
    },
    {
      question: "Do you serve import and export logistics globally?",
      answer:
        "Yes, we operate across 194+ countries with full support for global customs clearance.",
    },
  ];

  const breadcrumbTrail = [
    { label: "Home", icon: <TiHome />, href: "/" },
    { label: "Services", icon: <FaUserGear />, href: "/services" },
    { label: "Customs Clearance", icon: <FaHandsHelping /> },
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
                  End-to-End Customs Clearance Support
                </Chip>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Customs Clearance Services
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-200">
                  Expert Brokerage for Seamless Cargo Movement
                </h2>
                <p className="text-lg text-blue-100 mb-6">
                  Navigate complex import/export regulations with ease — powered
                  by 10+ years of customs clearance expertise.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    10+ Years of Clearance Expertise
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    Import & Export Customs Support
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    SEZ/FTWZ/EOU & Bonding Guidance
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    Regulatory Compliance & EPCG Assistance
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
                  Request Clearance Support
                </Button>
                <Button
                  className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8"
                  size="lg"
                  variant="bordered"
                >
                  Talk to a Customs Expert
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl transform rotate-3 opacity-20" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Customs Brokerage
                  </h3>
                  <p className="text-blue-100">
                    Hassle-Free Regulatory Clearance
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">10+</div>
                    <div className="text-blue-100 text-sm">
                      Years Experience
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-blue-100 text-sm">
                      Regulation Aligned
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">PAN</div>
                    <div className="text-blue-100 text-sm">India Coverage</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-blue-100 text-sm">Expert Support</div>
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
              Customs Clearance – Smooth, Compliant, Hassle-Free
            </h2>
            <div>
              <div className="bg-white rounded-3xl shadow p-8 md:p-12 border border-gray-100 hover:shadow-3xl transition-shadow duration-500">
                <div className="space-y-8">
                  {/* Point 1 */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        Need reliable customs support?{" "}
                        <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text">
                          Mansi Shipping Agency
                        </span>{" "}
                        offers over 10 years of experience in import/export
                        customs clearance. We handle the paperwork, regulations,
                        and compliance while you focus on your business.
                      </p>
                    </div>
                  </div>

                  {/* Point 2 */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        As your{" "}
                        <span className="font-bold text-blue-600">
                          trusted customs broker
                        </span>
                        , we manage SEZ/FTWZ/EOU clearance, Hi-sea sales, bonded
                        warehousing, and EPCG authorizations. Our team ensures{" "}
                        <span className="font-semibold text-red-600">
                          full compliance
                        </span>{" "}
                        while avoiding port penalties and delays.
                      </p>
                    </div>
                  </div>

                  {/* Point 3 */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        With nationwide presence and{" "}
                        <span className="font-bold text-blue-600">
                          global logistics support
                        </span>
                        , we coordinate customs clearance for air, sea, and land
                        freight across 194+ countries. Enjoy smooth
                        documentation, regulatory advice, and post-clearance
                        support at every step.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ocean Freight Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Chip className="mb-4" color="primary" variant="flat">
              Multimodal Transport Operator Services
            </Chip>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Integrated Multimodal Logistics for Seamless Delivery
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From road-rail combinations to air-sea freight, we offer optimized
              multimodal transport solutions that ensure cost efficiency,
              quicker transit, and reduced complexity in your supply chain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {customsClearanceServices.map((service, index) => (
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

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Chip className="mb-4" color="primary" variant="flat">
              Why Choose Us
            </Chip>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Multimodal Transport Expertise Across India
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine different modes of transport to move your cargo
              efficiently and reliably — offering end-to-end visibility, faster
              delivery, and simplified logistics under one contract.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
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
              Know More About Customs Clearance Services
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to frequently asked questions about our import/export
              clearance processes, documentation support, and compliance
              expertise.
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
            Need Hassle-Free Customs Clearance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our experts handle your import/export clearance — with
            compliance, documentation, and speed you can count on.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
              color="primary"
              endContent={<ArrowRight className="w-5 h-5" />}
              size="lg"
            >
              Get Customs Quote
            </Button>
            <Button
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8"
              size="lg"
              variant="bordered"
            >
              Speak to a Customs Expert
            </Button>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">End-to-End Docs</h3>
              <p className="text-blue-100 text-sm">
                Compliance & Record Support
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">
                Clearance Experts
              </h3>
              <p className="text-blue-100 text-sm">10+ Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">
                Quick Turnaround
              </h3>
              <p className="text-blue-100 text-sm">Import & Export Clearance</p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
