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
  Warehouse,
  ShieldCheck,
  Clock,
  Package,
  Truck,
  Lock,
  BarChart,
  Globe,
} from "lucide-react";
import { FaHandsHelping } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { FaUserGear } from "react-icons/fa6";

import DefaultLayout from "@/layouts/default";

export default function StorageWarehousingPage() {
  const warehousingServices = [
    {
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: "Receiving & Inventory Update",
      description:
        "Efficient receiving processes with real-time inventory updates to ensure accurate stock management.",
      features: [
        "Goods Inspection",
        "Inventory Tracking",
        "Real-Time Updates",
        "Quality Control",
      ],
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "PO/Order Management",
      description:
        "Streamlined purchase order and order management for seamless warehouse operations.",
      features: [
        "Order Processing",
        "PO Tracking",
        "Order Fulfillment",
        "Data Management",
      ],
    },
    {
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: "Repacking & Packaging",
      description:
        "Customized repacking and packaging solutions to meet specific client requirements.",
      features: [
        "Custom Packaging",
        "Protective Packing",
        "Branding Options",
        "Eco-Friendly Materials",
      ],
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Dispatch Handling",
      description:
        "Efficient dispatch processes to ensure timely and accurate delivery of goods.",
      features: [
        "Dispatch Coordination",
        "Delivery Scheduling",
        "Carrier Management",
        "Tracking Support",
      ],
    },
    {
      icon: <Warehouse className="w-8 h-8 text-blue-600" />,
      title: "Rack & Bonded Storage",
      description:
        "Advanced rack and bonded storage solutions for secure and compliant storage.",
      features: [
        "Pallet Rack Storage",
        "Bonded Warehousing",
        "High-Volume Capacity",
        "Secure Storage",
      ],
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Value-Added Services",
      description:
        "Comprehensive value-added services like labeling, cross-stuffing, and stock transfers.",
      features: [
        "Stamping & Labeling",
        "Cross-Stuffing",
        "Stock Transfers",
        "Pre-Retailing",
      ],
    },
  ];

  const keyAdvantages = [
    {
      icon: <Warehouse className="w-6 h-6 text-blue-600" />,
      title: "Professional Racking Systems",
      description:
        "Interlocking and racking systems designed to handle large cargo volumes efficiently.",
    },
    {
      icon: <Truck className="w-6 h-6 text-blue-600" />,
      title: "Forklift Facility",
      description:
        "Advanced forklift systems for fast and safe handling of goods.",
    },
    {
      icon: <Lock className="w-6 h-6 text-blue-600" />,
      title: "High-Level Security",
      description:
        "CCTV, 24-hour surveillance, alarms, and fire systems for maximum protection.",
    },
    {
      icon: <Package className="w-6 h-6 text-blue-600" />,
      title: "Custom Storage Solutions",
      description:
        "Tailored solutions including pallet rack and bonded storage for specific needs.",
    },
    {
      icon: <BarChart className="w-6 h-6 text-blue-600" />,
      title: "Comprehensive Reporting",
      description:
        "Detailed reports like ageing, inventory, and transaction reports for full visibility.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Dedicated Operations",
      description:
        "Turnkey solutions for industries like fashion, automotive, and consumer goods.",
    },
  ];

  const faqData = [
    {
      question: "What is the warehousing process?",
      answer:
        "Warehousing involves storing goods for later distribution, using facilities designed for efficient accumulation and management of inventory.",
    },
    {
      question: "Which areas in Tamil Nadu do you offer logistics services?",
      answer:
        "We provide logistics services in Chennai, Coimbatore, Madurai, Tiruchirappalli, and other key areas in Tamil Nadu.",
    },
    {
      question:
        "Which areas in India do you provide freight forwarding logistics services?",
      answer:
        "Our freight forwarding services cover major cities like Mumbai, Delhi, Bangalore, Chennai, Pune, and Kolkata.",
    },
    {
      question: "What kind of reports will we be able to get?",
      answer:
        "We provide ageing reports, inventory reports, transaction reports, and other critical documentation for full transparency.",
    },
    {
      question: "Do you serve global logistics for storage and warehousing?",
      answer:
        "Yes, we offer storage and warehousing services across 194+ countries, with facilities near airports and seaports worldwide.",
    },
  ];

  const breadcrumbTrail = [
    { label: "Home", icon: <TiHome />, href: "/" },
    { label: "Services", icon: <FaUserGear />, href: "/services" },
    { label: "Storage & Warehousing", icon: <FaHandsHelping /> },
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
                  Global Warehousing Solutions
                </Chip>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Storage & Warehousing Services
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-200">
                  Efficient Storage for Seamless Supply Chains
                </h2>
                <p className="text-lg text-blue-100 mb-6">
                  Optimize your logistics with Mansi Shipping Agency&apos;s
                  global warehousing solutions, strategically located near
                  airports and seaports.
                </p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    10+ Years of Warehousing Expertise
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
                    Advanced Storage Technologies
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    Cost-Effective Supply Chain Solutions
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
                  Request Warehousing Quote
                </Button>
                <Button
                  className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8"
                  size="lg"
                  variant="bordered"
                >
                  Talk to a Warehousing Expert
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl transform rotate-3 opacity-20" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Warehouse className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Warehousing Solutions
                  </h3>
                  <p className="text-blue-100">Secure & Efficient Storage</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">194+</div>
                    <div className="text-blue-100 text-sm">
                      Countries Served
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-blue-100 text-sm">Secure Storage</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-blue-100 text-sm">Surveillance</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">PAN</div>
                    <div className="text-blue-100 text-sm">India Coverage</div>
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
              Storage & Warehousing – Secure, Efficient, Global
            </h2>
            <div>
              <div className="bg-white rounded-3xl shadow p-8 md:p-12 border border-gray-100 hover:shadow-3xl transition-shadow duration-500">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full flex items-center justify-center">
                      <Warehouse className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        Mansi Shipping Agency offers{" "}
                        <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text">
                          global warehousing solutions
                        </span>{" "}
                        with strategically located facilities near airports and
                        seaports, reducing logistics costs and delivery times.
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
                          advanced storage technologies
                        </span>{" "}
                        include cold storage, bonded warehousing, and secure
                        facilities with 24/7 surveillance for maximum
                        protection.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        With a presence in{" "}
                        <span className="font-bold text-blue-600">
                          194+ countries
                        </span>
                        , we provide tailored solutions for industries like
                        fashion, automotive, and consumer goods, ensuring
                        efficient supply chain management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warehousing Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Chip className="mb-4" color="primary" variant="flat">
              Comprehensive Warehousing Services
            </Chip>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tailored Storage Solutions for Your Business
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From receiving to dispatch, our warehousing services are designed
              to optimize your supply chain and reduce costs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {warehousingServices.map((service, index) => (
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
              Advanced Warehousing for Efficient Logistics
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art facilities and expert team ensure secure,
              cost-effective, and reliable storage solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              Know More About Storage & Warehousing
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our warehousing services,
              processes, and global capabilities.
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
            Need Efficient Warehousing Solutions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let Mansi Shipping Agency manage your storage needs with secure,
            cost-effective, and global warehousing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
              color="primary"
              endContent={<ArrowRight className="w-5 h-5" />}
              size="lg"
            >
              Get Warehousing Quote
            </Button>
            <Button
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8"
              size="lg"
              variant="bordered"
            >
              Speak to a Warehousing Expert
            </Button>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Warehouse className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Global Reach</h3>
              <p className="text-blue-100 text-sm">194+ Countries Served</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Secure Storage</h3>
              <p className="text-blue-100 text-sm">24/7 Surveillance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-blue-100 text-sm">Efficient Operations</p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
