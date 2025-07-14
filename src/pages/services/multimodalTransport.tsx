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
  Shuffle,
  Layers,
  FileText,
  SignalHigh,
  Globe,
  Award,
  Wrench,
  DollarSign,
  UserCheck,
  ShieldCheck,
  ListChecks,
  Clock,
  Ship,
  Eye,
} from "lucide-react";
import { FaShippingFast } from "react-icons/fa";

import { TiHome } from "react-icons/ti";
import { RiShip2Fill } from "react-icons/ri";
import { FaUserGear } from "react-icons/fa6";

import DefaultLayout from "@/layouts/default";

export default function MultimodalTransportPage() {
  const multimodalTransportServices = [
    {
      icon: <Shuffle className="w-8 h-8 text-blue-600" />,
      title: "Planning For MMT",
      description:
        "Understanding the cost, time, and flexibility related needs is crucial — and we do that for you with precision and care.",
      features: [
        "Route Optimization",
        "Cost Evaluation",
        "Transit Time Analysis",
        "Cargo Type Matching",
      ],
    },
    {
      icon: <Layers className="w-8 h-8 text-blue-600" />,
      title: "What’s on Offer",
      description:
        "Multimodal transport allows several combinations. We scout for the best routes and modes tailored to your cargo.",
      features: [
        "Road + Rail",
        "Rail + Sea",
        "Air + Sea",
        "Customized Solutions",
      ],
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      title: "Quote",
      description:
        "Based on market conditions, we provide you with 2-3 optimized MMT freight options to choose from.",
      features: [
        "Transparent Pricing",
        "Flexible Options",
        "Volume Discounts",
        "Quick Estimates",
      ],
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Documentation",
      description:
        "From contracts to regulatory filings, we assist with end-to-end multimodal documentation and procedures.",
      features: [
        "MTD Handling",
        "Customs Support",
        "End-to-End Paperwork",
        "Compliance Guaranteed",
      ],
    },
    {
      icon: <SignalHigh className="w-8 h-8 text-blue-600" />,
      title: "Status Update",
      description:
        "Your cargo is handled with utmost care. Count on us for reliable status updates and peace of mind.",
      features: [
        "Live Updates",
        "Milestone Alerts",
        "Dedicated Dashboard",
        "POC Tracking",
      ],
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Resolution of Issues",
      description:
        "Our strong network across modes enables us to solve logistics issues quickly and efficiently.",
      features: [
        "Rapid Escalation",
        "Local Support",
        "Proactive Alerts",
        "Network Assistance",
      ],
    },
  ];

  const keyFeatures = [
    {
      icon: <Shuffle className="w-6 h-6 text-blue-600" />,
      title: "Seamless Integration",
      description:
        "Combine rail, road, air, and sea into one smooth logistics flow under a single contract.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-blue-600" />,
      title: "Cost Efficiency",
      description:
        "Multimodal freight reduces handling and saves costs through optimized routing and consolidated services.",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-blue-600" />,
      title: "Single Point Contact",
      description:
        "No matter how many transport modes, you deal with just one party managing everything end-to-end.",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Faster Delivery",
      description:
        "By combining the fastest modes at each leg, we help reduce overall transit time without compromising cost.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Better Security",
      description:
        "Fewer handovers and simplified handling mean fewer risks of loss, damage, or delays along the route.",
    },
    {
      icon: <ListChecks className="w-6 h-6 text-blue-600" />,
      title: "Simplified Documentation",
      description:
        "You get one combined document covering the entire journey — making compliance and tracking way easier.",
    },
  ];

  const faqData = [
    {
      question: "Multimodal Transport – Intermodal Transport Differences?",
      answer:
        "In multimodal transport, a single contract governs the entire movement. In intermodal, multiple contracts exist for each mode involved.",
    },
    {
      question: "Should we choose specific multimodal transport containers?",
      answer:
        "Yes. Container selection depends on cargo type, routes, and equipment compatibility across modes. We help you choose the best fit.",
    },
    {
      question: "Multimodal Transport – Bill of Lading Differences?",
      answer:
        "A multimodal bill of lading (MBL) covers the entire journey, while intermodal might involve multiple BLs for each leg.",
    },
    {
      question:
        "Which areas in Tamil Nadu are you able to offer logistics services?",
      answer:
        "We cover major cities like Chennai, Coimbatore, Madurai, and Tiruchirappalli — and many more through our logistics network.",
    },
    {
      question:
        "In which areas do you provide freight forwarding logistics services in India?",
      answer:
        "We operate from all major Indian cities including Mumbai, Delhi, Bangalore, Kolkata, Chennai, Pune, and Hyderabad.",
    },
    {
      question: "How to track a multimodal transport document?",
      answer:
        "You can use the MMT tracking number — typically the Air Waybill or Bill of Lading — in our tracking system for real-time status.",
    },
    {
      question: "Who provides the multimodal transport document?",
      answer:
        "As a licensed MTO, we issue the multimodal transport document (MTD) covering the full journey.",
    },
    {
      question: "Is multimodal freight the best option available?",
      answer:
        "If you want cost-efficiency, better coordination, and improved transit time — multimodal freight is definitely the way to go.",
    },
    {
      question: "Do you serve import and export logistics services globally?",
      answer:
        "Yes, we handle multimodal imports and exports across 194+ countries with end-to-end support.",
    },
  ];

  const breadcrumbTrail = [
    { label: "Home", icon: <TiHome />, href: "/" },
    { label: "Services", icon: <FaUserGear />, href: "/services" },
    { label: "Multimodal Transport", icon: <FaShippingFast /> },
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
                  Integrated Transport Across Land, Air & Sea
                </Chip>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Multimodal Transport Solutions
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-200">
                  One Contract. Multiple Modes. Seamless Movement.
                </h2>
                <p className="text-lg text-blue-100 mb-6">
                  Combine road, rail, air, and sea under one reliable MMT
                  operator.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    Licensed Multimodal Transport Operator (MTO)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    One Document for Entire Journey
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    Integrated Tracking & Documentation
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    Customized Multimodal Route Planning
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
                  Get MMT Quote
                </Button>
                <Button
                  className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8"
                  size="lg"
                  variant="bordered"
                >
                  Talk to a Specialist
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl transform rotate-3 opacity-20" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaShippingFast className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Multimodal Transport
                  </h3>
                  <p className="text-blue-100">Smart End-to-End Logistics</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">1</div>
                    <div className="text-blue-100 text-sm">Single Contract</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">4+</div>
                    <div className="text-blue-100 text-sm">Transport Modes</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-blue-100 text-sm">Visibility</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">Global</div>
                    <div className="text-blue-100 text-sm">Coverage</div>
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
              Multimodal Transport – Integrated Shipping, One Contact
            </h2>
            <div>
              <div className="bg-white rounded-3xl shadow p-8 md:p-12 border border-gray-100 hover:shadow-3xl transition-shadow duration-500">
                <div className="space-y-8">
                  {/* Point 1 */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full flex items-center justify-center">
                      <Ship className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        Planning your logistics journey? Multimodal Transport
                        lets you combine road, rail, sea, and air under one
                        seamless flow.
                        <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text">
                          {" "}
                          Mansi Shipping Agency
                        </span>{" "}
                        helps you cut costs, reduce delays, and streamline
                        operations with a single point of coordination.
                      </p>
                    </div>
                  </div>

                  {/* Point 2 */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        As a{" "}
                        <span className="font-bold text-blue-600">
                          Licensed Multimodal Transport Operator (MTO)
                        </span>
                        , we’re equipped to issue through bills of lading and
                        handle complex transport chains with ease. We scout the
                        best mode combinations, ensuring{" "}
                        <span className="font-semibold text-red-600">
                          optimized timelines and costs
                        </span>{" "}
                        for every route.
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
                        Our multimodal reach spans{" "}
                        <span className="font-bold text-blue-600">
                          194+ countries
                        </span>
                        , backed by a robust network. From real-time tracking to
                        route optimization and documentation, we ensure your
                        cargo flows smoothly across borders and modes.
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
            {multimodalTransportServices.map((service, index) => (
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
              Know More About Multimodal Transport Services
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to commonly asked questions about our multimodal
              logistics processes and how we combine modes to deliver better
              efficiency.
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
            Interested in Our MMT Solutions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Ready to streamline your cargo movement across land, air & sea?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
              color="primary"
              endContent={<ArrowRight className="w-5 h-5" />}
              size="lg"
            >
              Get MMT Quote
            </Button>
            <Button
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8"
              size="lg"
              variant="bordered"
            >
              Schedule Consultation
            </Button>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shuffle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Single Contract</h3>
              <p className="text-blue-100 text-sm">Covers Entire Journey</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Multiple Modes</h3>
              <p className="text-blue-100 text-sm">Road, Rail, Air & Sea</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Full Visibility</h3>
              <p className="text-blue-100 text-sm">Real‑Time Tracking</p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
