import { PiAirplaneTakeoffFill } from "react-icons/pi";
import { RiShip2Fill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import { FaPersonMilitaryPointing } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { GiTeePipe } from "react-icons/gi";

export type SiteConfig = typeof siteConfig;

export type Service = typeof services;

export const siteConfig = {
  name: "Mansi Shipping Agency",
  description: "Reliable Logistics & Maritime Solutions",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    // {
    //   label: "About Us",
    //   href: "/about",
    // },
    {
      label: "Our Services",
      dropdownItem: [
        {
          label: "Air Freight",
          href: "/services/air-freight",
          icon: PiAirplaneTakeoffFill,
        },
        {
          label: "Ocean Freight",
          href: "/services/ocean-freight",
          icon: RiShip2Fill,
        },
        {
          label: "Multimodal Transport",
          href: "/services/multimodal-transport",
          icon: FaShippingFast,
        },
        {
          label: "Customs Clearance",
          href: "/services/customs-clearance",
          icon: FaHandsHelping,
        },
        {
          label: "Storage & Warehousing",
          href: "/services/storage-warehousing",
          icon: FaWarehouse,
        },
        {
          label: "Cargo Insurance",
          href: "/services/cargo-insurance",
          icon: HiClipboardDocumentCheck,
        },
      ],
    },
    {
      label: "Industry Solutions",
      dropdownItem: [
        {
          label: "Aerospace & Defense",
          href: "/industry-solutions/aerospace-defence",
          icon: FaPersonMilitaryPointing,
        },
        {
          label: "Healthcare",
          href: "/industry-solutions/healthcare",
          icon: FaAmbulance,
        },
        {
          label: "Valves & Pumps",
          href: "/industry-solutions/valves-pumps",
          icon: GiTeePipe,
        },
        // {
        //   label: "Automotive",
        //   href: "",
        //   icon: FaCarSide,
        // },
        // {
        //   label: "Engineering Industrial Products",
        //   href: "",
        //   icon: FaGears,
        // },
        // {
        //   label: "Fashion & Retails",
        //   href: "",
        //   icon: GiClothes,
        // },
        // {
        //   label: "Machinery & Equipment's",
        //   href: "",
        //   icon: FaTools,
        // },
        // {
        //   label: "Dangerous Goods",
        //   href: "",
        //   icon: IoIosWarning,
        // },
        // {
        //   label: "Oil And Gas",
        //   href: "",
        //   icon: MdOilBarrel,
        // },
        // {
        //   label: "Green Energy",
        //   href: "",
        //   icon: MdEnergySavingsLeaf,
        // },
      ],
    },
    // {
    //   label: "Business Solutions",
    //   dropdownItem: [
    //     {
    //       label: "Exporters / Importers",
    //       href: "",
    //       icon: MdImportExport,
    //     },
    //     {
    //       label: "Contract Logistics",
    //       href: "",
    //       icon: FaRoute,
    //     },
    //     {
    //       label: "Consulting Solutions",
    //       href: "",
    //       icon: GrUserExpert,
    //     },
    //   ],
    // },
  ],
  links: {
    github: "https://github.com/frontio-ai/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};

export const services = [
  {
    name: "Air Freight",
    description: [
      "We are an accredited member of the International Air Transport Association. Mansi Shipping Agency has developed commercial relationships with all major airlines, and it helps us emerge as an international freight company with contractual prices.",
      "It helps us provide a broad range of air logistics facilities for shipping worldwide and across a wide range of industries.",
      "We have set our service hubs at Chennai, Coimbatore, Trichy, and other key locations, operating across the globe in more than 194+ countries. We have experience providing service for Europe, China, the USA, and other vital regions. It helps us provide you with quick transit, constant communication, consolidation, and intermodal opportunities.",
    ],
    image: "/airCargoServiceCard.jpg",
    href: "/services/air-freight",
    logo: PiAirplaneTakeoffFill,
  },
  {
    name: "Ocean Freight",
    description: [
      "Want to ship to the US? The UK? Australia?… We have all the major routes covered, from the Indian Ocean to the South China Sea, the Pacific to the Atlantic. At Mansi Shipping Agency, the wide range of Sea freight services we offer, let’s your dream set sail!!",
      "Ocean Freight is one of the most cost-effective means of shipments available today. All that is required is a close association with the customer, understanding their requirements in terms of volume, lead time, budgets.",
      "With this close-knit approach in handling the customer’s supply chain, we offer the best possible sea freight solutions. With the access of more than 300 Shipping Routes and 10000 + Port Points, we ensure that ocean freight is a cakewalk.",
      "All the customer has to do is trust us with their international sea freight shipping.",
    ],
    image: "/oceanFreightShippingServiceCard.webp",
    href: "/services/oceanFreight",
    logo: RiShip2Fill,
  },
  {
    name: "Multimodel Transport",
    description: [
      " A hybrid solution always brings out greater efficiency and flexibility in any domain. International logistics is no different. Multimodal Transport leverages this hybrid system. It utilizes more than one mode of Transport to ship goods.",
      "Like any multimodal transport operator, at Mansi Shipping Agency, we ship through a single contract. We offer a great deal of convenience and flexibility. Yes, we manage the shipments based on cost, time, risk and market scenarios. We understand customer needs.",
      "We come up with the best combination. We execute it with perfection!!",
      "Clear documentation becomes important in executing a multimodal transport contract. A proper multimodal transport network is also important to execute shipments with ease. Our strengths in these areas help us deliver value. It is the reason our clients trust us with these complicated shipments.",
    ],
    image: "/MultiModeTransportServiceCard.jpg",
    href: "/services/airCargo",
    logo: FaShippingFast,
  },
  {
    name: "Customs Clearance",
    description: [
      "One of the most important parts of logistics is the customs clearance process. The world economic climate makes customs clearance complex and unstable. Thus vast expertise and knowledge are required to counter these challenges.",
      "Our team of experts have over ten years of custom duty clearance experience. Our experienced team knows the necessity for effective customs brokerage. They also ensure complete compliance with freight safety and security regulations.",
      "At Mansi Shipping Agency, we keep ourselves updated with regulations for import customs clearance. We also have up-to-date knowledge in customs clearance for export. It enables us to handle customs clearance with higher accuracy. Throughout the transit, our team of experts stays in touch with our clients. We assist with freight handling and solving any related issues.",
    ],
    image: "/customsClearanceServiceCard.webp",
    href: "/services/airCargo",
    logo: FaHandsHelping,
  },
  {
    name: "Storage & Warehousing",
    description: [
      "Storage and Warehousing of goods after transit before delivering is a huge part of the supply chain. Mansi Shipping Agency offer contract warehousing for storage and warehousing services for your goods across the globe. Our warehouses are strategically located near airports and seaports around the world to reduce the logistics costs.",
      "Modern packaging, cold storage and warehousing techniques are available. We offer a wide range of value-added services. Some of them are Atmospheric, chilled, frozen, hazardous, and bonded operations and pre-retailing.",
      "Our services are designed to help you reduce delivery times, reduce overall product shipping and warehousing costs, increase supply chain, and improve customer satisfaction.",
      "Mansi Shipping Agency experts have efficient systems that can generate value for your company by effective means of supply chain management storage and warehousing methods.",
    ],
    image: "/warehousingServiceCard.webp",
    href: "/services/airCargo",
    logo: FaWarehouse,
  },
  {
    name: "Cargo Insurance",
    description: [
      "One of the most important parts of logistics is the customs clearance process. The world economic climate makes customs clearance complex and unstable. Thus vast expertise and knowledge are required to counter these challenges.",
      "Our team of experts have over ten years of custom duty clearance experience. Our experienced team knows the necessity for effective customs brokerage. They also ensure complete compliance with freight safety and security regulations.",
      "Thus, Mansi Shipping Agency helps our clients with seamless supply chain management.",
      "At Mansi Shipping Agency, we keep ourselves updated with regulations for import customs clearance. We also have up-to-date knowledge in customs clearance for export. It enables us to handle customs clearance with higher accuracy. Throughout the transit, our team of experts stays in touch with our clients. We assist with freight handling and solving any related issues.",
    ],
    image: "/cargoInsuranceServiceCard.webp",
    href: "/services/airCargo",
    logo: HiClipboardDocumentCheck,
  },
];
