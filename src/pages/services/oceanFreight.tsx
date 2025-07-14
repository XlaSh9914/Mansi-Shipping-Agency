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
  Clock,
  Globe,
  Award,
  Ship,
  Search,
  FileText,
  Shield,
  AlertTriangle,
  Boxes,
  Thermometer,
  Warehouse,
  Truck,
  PackageCheck,
  RefreshCcw,
  Move,
  MapPin,
  PackageX,
} from "lucide-react";
import { TiHome } from "react-icons/ti";
import { RiShip2Fill } from "react-icons/ri";
import { FaUserGear } from "react-icons/fa6";

import DefaultLayout from "@/layouts/default";

export default function OceanFreightPage() {
  const oceanFreightServices = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Planning For Sea Freight",
      description:
        "Find solutions based on cargo volume and requirement, fit to LCL/FCL, with best routing and risk coverage.",
      features: [
        "LCL/FCL Options",
        "Route Optimization",
        "Risk Assessment",
        "Custom Solutions",
      ],
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Tracking",
      description:
        "We keep you updated on the cargo's location and status throughout its journey.",
      features: [
        "Real-time Updates",
        "End-to-End Tracking",
        "Status Alerts",
        "Online Visibility",
      ],
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Quote",
      description:
        "We provide 2–3 best rate options from major shipping lines for you to choose from.",
      features: [
        "Contract Rates",
        "Multiple Options",
        "Transparent Pricing",
        "Quick Estimates",
      ],
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Documentation",
      description:
        "We guide you through every document required for sea freight. We hold MTO license and issue HBL as per needs.",
      features: [
        "BL & HBL Issuance",
        "MTO Licensed",
        "Customs Assistance",
        "Risk-Free Process",
      ],
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Safety and Security",
      description:
        "We ensure safe handling of cargo with expert advisory and precautionary steps.",
      features: [
        "Cargo Handling Advice",
        "Packaging Guidance",
        "Safety Protocols",
        "Cargo Insurance",
      ],
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-blue-600" />,
      title: "Resolution of Issues",
      description:
        "Our strong network ensures quick resolution to any logistics issue in real time.",
      features: [
        "On-ground Teams",
        "Quick Support",
        "Route Management",
        "Issue Escalation",
      ],
    },
    {
      icon: <Ship className="w-8 h-8 text-blue-600" />,
      title: "Full Container Load (FCL",
      description:
        "Optimise costs with full container loads — best for bulk or dedicated shipments.",
      features: [
        "Dedicated Container",
        "Lower Cost per Unit",
        "Fast Transit",
        "High Volume Suitability",
      ],
    },
    {
      icon: <Boxes className="w-8 h-8 text-blue-600" />,
      title: "Less Than Container Load (LCL)",
      description:
        "Great for smaller volumes — we consolidate cargo to give you flexibility and savings.",
      features: [
        "Shared Space",
        "Flexible Volume",
        "Budget-Friendly",
        "Scheduled Departures",
      ],
    },
  ];

  const keyFeatures = [
    {
      icon: <Thermometer className="w-8 h-8 text-blue-600" />,
      title: "Temperature Control",
      description:
        "Transport temperature-sensitive goods using our cold chain and reefer solutions.",
    },
    {
      icon: <Warehouse className="w-8 h-8 text-blue-600" />,
      title: "Warehousing Solution",
      description:
        "Store your cargo safely post-shipping with our high-standard warehousing support.",
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "RORO",
      description:
        "Roll-On/Roll-Off shipping for vehicles and wheeled cargo — quick and secure transport.",
    },
    {
      icon: <PackageCheck className="w-8 h-8 text-blue-600" />,
      title: "Project Cargo",
      description:
        "Breakbulk and out-of-gauge handling for heavy lift and oversized cargo.",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-blue-600" />,
      title: "Dangerous Goods Cargo",
      description:
        "Certified expertise in handling dangerous, hazardous and liquid cargo.",
    },
    {
      icon: <RefreshCcw className="w-8 h-8 text-blue-600" />,
      title: "Air-Sea Freight",
      description:
        "Combo of air and sea to balance speed and cost — when neither alone works.",
    },
    {
      icon: <Move className="w-8 h-8 text-blue-600" />,
      title: "Special Equipment’s",
      description:
        "We provide SOC/COC containers, open top, flat rack, reefer and more.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Door-to-Door",
      description:
        "Hassle-free shipping with doorstep pickup and delivery options.",
    },
    {
      icon: <PackageX className="w-8 h-8 text-blue-600" />,
      title: "Oversized / Odd Dimensioned Cargo",
      description:
        "We move non-container cargo with custom logistics solutions to fit anything.",
    },
  ];

  const faqData = [
    {
      question: "Ocean Freight – Is it the cheapest option?",
      answer:
        "Yes, ocean freight is among the cheapest options for international shipping — almost 10x cheaper than air freight. Best for stable supply chains.",
    },
    {
      question: "Ocean Freight - Pre-Requisites?",
      answer:
        "You need proper documentation (BL, invoice, packing list), cargo booking, packaging, labeling, and customs paperwork before proceeding.",
    },
    {
      question: "Ocean Freight – Risk reduction?",
      answer:
        "With proper documentation, insurance, trusted carriers, and packaging — risk can be significantly minimized.",
    },
    {
      question:
        "Which areas in Tamil Nadu are you able to offer logistics services?",
      answer:
        "We serve across Tamil Nadu — Chennai, Coimbatore, Madurai, Tiruchirappalli, and more via our extended network.",
    },
    {
      question:
        "In which areas do you provide freight forwarding logistics services in India?",
      answer:
        "We operate from all major cities & ports: Mumbai, Chennai, Delhi, Kolkata, Bangalore, Hyderabad, Pune, Ahmedabad and offer pan-India coverage.",
    },
    {
      question: "Ocean Freight – Selection Parameters?",
      answer:
        "Based on cargo volume, delivery urgency, budget, destination port, and container type — we help select the best freight option.",
    },
    {
      question: "Ocean Freight – How to leverage?",
      answer:
        "Use ocean freight for bulk shipments, long-term supply chains, or cost-effective global movement. Combine with warehousing and consolidation for better ROI.",
    },
    {
      question: "Ocean Freight – Storage?",
      answer:
        "We offer storage solutions at ports, ICDs, and bonded warehouses to support staging, repacking, and customs clearance.",
    },
    {
      question: "Do you serve import and export logistics services globally?",
      answer:
        "Yes, our network spans 194+ countries. We offer complete global import/export support including DDU, DDP, and door-to-door.",
    },
  ];

  const breadcrumbTrail = [
    { label: "Home", icon: <TiHome />, href: "/" },
    { label: "Services", icon: <FaUserGear />, href: "/services" },
    { label: "Ocean Freight", icon: <RiShip2Fill /> },
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
                  Global Ocean Freight Services
                </Chip>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Ocean Freight Forwarding
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-200">
                  Navigate the globe with confidence and control
                </h2>
                <p className="text-lg text-blue-100 mb-6">
                  From FCL to LCL, we help you move the ocean your way.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    Licensed MTO & HBL Issuance
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    Consolidation & Warehousing Solutions
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    Real-time Tracking & Global Reach
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    Customized Solutions for All Cargo Types
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
                  Get Sea Quote
                </Button>
                <Button
                  className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8"
                  size="lg"
                  variant="bordered"
                >
                  Contact Our Team
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl transform rotate-3 opacity-20" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <RiShip2Fill className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Global Ocean Freight
                  </h3>
                  <p className="text-blue-100">Trusted Maritime Forwarder</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">194+</div>
                    <div className="text-blue-100 text-sm">
                      Countries Served
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-blue-100 text-sm">Assistance</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">MTO</div>
                    <div className="text-blue-100 text-sm">Licensed</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">FCL/LCL</div>
                    <div className="text-blue-100 text-sm">
                      Flexible Options
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
              Trusted Ocean Freight Forwarding Company in India
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
                        Need to move heavy, bulk, or containerized cargo across
                        borders? Ocean freight offers the most cost-effective
                        solution for international logistics.
                        <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text">
                          {" "}
                          Mansi Shipping Agency
                        </span>{" "}
                        is a reliable Ocean Freight Forwarder in India,
                        delivering flexible FCL, LCL, and specialized container
                        solutions worldwide.
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
                        We are a{" "}
                        <span className="font-bold text-blue-600">
                          Licensed Multimodal Transport Operator (MTO)
                        </span>{" "}
                        with decades of experience in the maritime logistics
                        space. Our long-standing ties with leading carriers
                        allow us to offer
                        <span className="font-semibold text-red-600">
                          {" "}
                          competitive sea freight contracts
                        </span>{" "}
                        and flexible sailing schedules suited to your cargo
                        needs.
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
                        Our global network supports{" "}
                        <span className="font-bold text-blue-600">
                          exports and imports across 194+ countries
                        </span>
                        . Whether it&apos;s full containers, less-than-container
                        load, or project cargo — we provide seamless
                        documentation, warehousing, consolidation, and customs
                        clearance with real-time tracking and full visibility.
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
              International Ocean Freight Forwarding Services
            </Chip>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete Sea Cargo & Container Shipping Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From FCL & LCL shipments to project cargo, consolidation, and
              special equipment handling — our sea freight services are designed
              to fit your logistics needs globally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {oceanFreightServices.map((service, index) => (
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
              Expert Ocean Cargo Freight Handling Services Across India
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With end-to-end transparency, we deliver your cargo securely, on
              time, and within budget — no surprises, just seamless shipping.
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
              Know More About International Ocean Freight Services
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our sea freight forwarding
              solutions
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
              Get Ocean Freight Quote
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
                <RiShip2Fill className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">
                Ocean Freight Expert
              </h3>
              <p className="text-blue-100 text-sm">MTO Licensed Services</p>
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
