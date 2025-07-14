import React, { useState } from "react";
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
  Plane,
  Ship,
  Package,
  Clock,
  Shield,
  Zap,
  Users,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Globe,
  Award,
  Timer,
  Snowflake,
  Radiation,
  Target,
  FileText,
} from "lucide-react";
import { TiHome } from "react-icons/ti";
import { PiAirplaneTakeoffFill } from "react-icons/pi";
import { FaUserGear } from "react-icons/fa6";

import DefaultLayout from "@/layouts/default";

export default function AirFreightPage() {
  const airFreightServices = [
    {
      icon: <Plane className="w-8 h-8 text-blue-600" />,
      title: "Air Charter Services",
      description:
        "Based on your shipment we provide you with part or full chartering services. This solution suits freights which are oversized and overweight that don't fit in regular crates.",
      features: [
        "Part Charter",
        "Full Charter",
        "Oversized Cargo",
        "Overweight Freight",
      ],
    },
    {
      icon: <Ship className="w-8 h-8 text-blue-600" />,
      title: "Sea-Air Freight",
      description:
        "When the sea is too slow and the air is too expensive, why not try a combination of the two? Perfect balance of cost and speed.",
      features: [
        "Cost Effective",
        "Faster than Sea",
        "Global Routes",
        "Flexible Scheduling",
      ],
    },
    {
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: "Air Consolidation",
      description:
        "This is a cost-effective mode of air freight. Your shipment is moved in fixed schedules along with other freights.",
      features: [
        "Fixed Schedules",
        "Shared Costs",
        "Regular Departures",
        "Economical Solution",
      ],
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Dangerous Goods Shipments",
      description:
        "We at Mansi Shipping Agency handle dangerous goods as per the regulatory procedures with expertise.",
      features: [
        "IATA Certified",
        "Safety Compliance",
        "Expert Handling",
        "Regulatory Adherence",
      ],
    },
    {
      icon: <Timer className="w-8 h-8 text-blue-600" />,
      title: "Time Critical Shipment",
      description:
        "We provide express service for time critical cargo enabling maximum visibility for such emergency logistics.",
      features: [
        "Express Service",
        "Real-time Tracking",
        "Priority Handling",
        "24/7 Support",
      ],
    },
    {
      icon: <Radiation className="w-8 h-8 text-blue-600" />,
      title: "Radioactive Material",
      description:
        "Safe Radioactive Material Transport Services. For such materials handling expertise is of utmost importance.",
      features: [
        "Specialized Handling",
        "Safety Protocols",
        "Expert Team",
        "Secure Transport",
      ],
    },
    {
      icon: <Snowflake className="w-8 h-8 text-blue-600" />,
      title: "Perishable Shipments",
      description:
        "Fresh Perishable Goods & Cold Chain Logistics. We deliver farm fresh perishables with cutting-edge approach.",
      features: [
        "Cold Chain",
        "Temperature Control",
        "Fresh Delivery",
        "Specialized Equipment",
      ],
    },
    {
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: "Repacking and Storage",
      description:
        "Affordable Repacking & Storage Solutions at Airports. We provide one stop solution for economical packaging.",
      features: [
        "Airport Storage",
        "Repacking Services",
        "Cost Effective",
        "Secure Facilities",
      ],
    },
  ];

  const keyFeatures = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Customer Focused Service",
      description:
        "Mansi Shipping Agency values its customers, providing professional and tailor-made solutions.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-600" />,
      title: "Tracking Facility",
      description:
        "Tech-savvy approach that enables freight tracking at your ease with real-time updates.",
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "High-speed Services",
      description:
        "High-speed delivery with our comprehensive network spanning globally.",
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Flexible Delivery Options",
      description:
        "Airport to airport, door to airport, airport to door and door to door delivery options.",
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      title: "Professional Documentation",
      description:
        "Experienced team providing flawless documentation as per international standards.",
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: "Regulatory Compliance",
      description:
        "Decades of expertise in tariffs and customs laws, rules, and regulations.",
    },
  ];

  const faqData = [
    {
      question: "What are the documents required for air freight?",
      answer:
        "The Air Waybill (AWB) is the title document for commodities travelling by air and is hence non-negotiable. Commercial invoice, a packing list is a list of the contents of a box that completes the details on the invoice that the sender must issue. Authorization for customs clearance. Other document requirements are subjected to the commodity.",
    },
    {
      question: "How much does air freight cost?",
      answer:
        "Air freight costs depend on various factors including weight, dimensions, destination, urgency, and type of goods. We provide competitive pricing with our contractual rates from major airlines. Contact us for a detailed quote based on your specific requirements.",
    },
    {
      question: "What are the other services you can provide?",
      answer:
        "Apart from air freight, we offer sea freight, land transportation, customs clearance, warehousing, packaging, insurance, and complete door-to-door logistics solutions across 194 countries.",
    },
    {
      question:
        "In which areas do you provide freight forwarding logistics services in India?",
      answer:
        "We operate from all major Indian cities and ports including Mumbai, Delhi, Chennai, Kolkata, Bangalore, Hyderabad, Pune, Ahmedabad, and provide pan-India coverage through our extensive network.",
    },
    {
      question: "What is the difference between air freight and air courier?",
      answer:
        "If you use a delivery service, the items would be viewed as a mail shipment rather than freight. This is a great choice for thin, light packets mostly non-commercial that need to get somewhere quickly. However, courier firms do not have an integrated logistics operation that includes things such as customs clearance, which may result in delays or surcharges.",
    },
    {
      question: "What is the biggest advantage of air freight?",
      answer:
        "Speed is the primary advantage of air freight. It's the fastest mode of transportation for international shipping, making it ideal for time-sensitive cargo, perishable goods, and high-value items that need quick delivery.",
    },
    {
      question: "Are air cargo charges for packaging high?",
      answer:
        "Air cargo packaging charges vary based on the type of goods, packaging requirements, and destination. We offer competitive packaging solutions and can provide cost-effective options while ensuring your cargo's safety and compliance.",
    },
    {
      question: "Do you serve import and export logistics services globally?",
      answer:
        "Yes, we provide comprehensive import and export logistics services globally with experience serving across 194 countries. Our network and partnerships enable us to handle shipments to and from virtually any destination worldwide.",
    },
  ];

  const breadcrumbTrail = [
    { label: "Home", icon: <TiHome />, href: "/" },
    { label: "Services", icon: <FaUserGear />, href: "/services" },
    { label: "Air Freight", icon: <PiAirplaneTakeoffFill /> },
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
                  International Air Cargo Services
                </Chip>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Air Freight Services
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-200">
                  No destination is too far when you trust us with logistics
                </h2>
                <p className="text-lg text-blue-100 mb-6">
                  Fly beyond in an instant with our air cargo services
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">IATA Accredited Member</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    Experience across 194 countries
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    Contractual prices with major airlines
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    No shipment too large, small or complicated
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
                  Get Quote Now
                </Button>
                <Button
                  className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8"
                  size="lg"
                  variant="bordered"
                >
                  Call Us Today
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl transform rotate-3 opacity-20" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PiAirplaneTakeoffFill className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    International Air Freight
                  </h3>
                  <p className="text-blue-100">Forwarder in India</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">194</div>
                    <div className="text-blue-100 text-sm">Countries</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-blue-100 text-sm">Support</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">IATA</div>
                    <div className="text-blue-100 text-sm">Certified</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">Fast</div>
                    <div className="text-blue-100 text-sm">Delivery</div>
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
              International Air Freight Forwarding Company in India
            </h2>
            <div>
              <div className="bg-white rounded-3xl shadow p-8 md:p-12 border border-gray-100 hover:shadow-3xl transition-shadow duration-500">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        Do you have an{" "}
                        <span className="font-semibold text-red-600">
                          urgent cargo
                        </span>{" "}
                        waiting at your premise? Is time the most valuable
                        component of your supply chain? Is honouring your
                        delivery commitment your ultimatum? Air freight is the
                        perfect solution.
                        <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text">
                          {" "}
                          Mansi Shipping Agency
                        </span>{" "}
                        is a prominent Air Freight Forwarder in India. We have a
                        pedigree for timely service at competitive air cargo
                        prices.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        We are an accredited member of the{" "}
                        <span className="font-bold text-blue-600">
                          International Air Transport Association (IATA)
                        </span>
                        . Mansi Shipping Agency has developed commercial
                        relationships with all major airlines. This makes us an
                        International freight company with contractual prices.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        This helps us provide a broad range of air logistics
                        facilities for shipping worldwide and across a wide
                        range of industries. We have experience serving across{" "}
                        <span className="font-bold text-blue-600">
                          194 countries
                        </span>
                        . Our Network and experience with international freight
                        shipment expand into various corners of the globe. This
                        helps us provide you quick transit, constant
                        communication, consolidation, and intermodal
                        opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Air Freight Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Chip className="mb-4" color="primary" variant="flat">
              International Air Freight Forwarding Services
            </Chip>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Air Cargo Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From charter services to specialized cargo handling, we provide
              complete air freight solutions tailored to your specific
              requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {airFreightServices.map((service, index) => (
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
              Expert Air Cargo Freight Handling Services Across India
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach ensures your cargo reaches its
              destination safely, on time, and within budget with complete
              transparency.
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
              Know More About International Air Cargo Services
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our air freight forwarding
              services
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
            Interested with this service?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Want to work with us for your Next Project?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
              color="primary"
              endContent={<ArrowRight className="w-5 h-5" />}
              size="lg"
            >
              Get Air Freight Quote
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
                <PiAirplaneTakeoffFill className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">
                Air Freight Expert
              </h3>
              <p className="text-blue-100 text-sm">IATA Certified Services</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Global Network</h3>
              <p className="text-blue-100 text-sm">194 Countries Coverage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">24/7 Support</h3>
              <p className="text-blue-100 text-sm">Round the Clock Service</p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
