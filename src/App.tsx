import { Route, Routes } from "react-router-dom";

import HealthcarePage from "./pages/industry-solutions/healthcare";
import ValvesPumpsPage from "./pages/industry-solutions/valvesPumps";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import AirFreightPage from "@/pages/services/airFreight";
import OceanFreightPage from "@/pages/services/oceanFreight";
import MultimodalTransportPage from "@/pages/services/multimodalTransport";
import CustomsClearancePage from "@/pages/services/customClearance";
import StorageWarehousingPage from "@/pages/services/warehousing";
import CargoInsurancePage from "@/pages/services/cargoInsurance";
import AerospaceDefensePage from "@/pages/industry-solutions/aerospaceDefence";
import ContactUsPage from "@/pages/contactUs";
import AutomotivePage from "@/pages/industry-solutions/automotive";
import EngineeringIndustrialPage from "@/pages/industry-solutions/enggIndustrialProducts";
import ApparelsTextilePage from "@/pages/industry-solutions/apparelsTextile";
import HeavyMachineryPage from "@/pages/industry-solutions/machineryEquipment";
import HazardousProductsPage from "@/pages/industry-solutions/dangerousGoods";
import OilGasPage from "@/pages/industry-solutions/oilGas";
import GreenEnergyPage from "@/pages/industry-solutions/greenEnergy";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<AirFreightPage />} path="/services/air-freight" />
      <Route element={<OceanFreightPage />} path="/services/ocean-freight" />
      <Route
        element={<MultimodalTransportPage />}
        path="/services/multimodal-transport"
      />
      <Route
        element={<CustomsClearancePage />}
        path="/services/customs-clearance"
      />
      <Route
        element={<StorageWarehousingPage />}
        path="/services/storage-warehousing"
      />
      <Route
        element={<CargoInsurancePage />}
        path="/services/cargo-insurance"
      />
      {/* Industry Solutions */}
      <Route
        element={<AerospaceDefensePage />}
        path="/industry-solutions/aerospace-defence"
      />
      <Route
        element={<HealthcarePage />}
        path="/industry-solutions/healthcare"
      />
      <Route
        element={<ValvesPumpsPage />}
        path="/industry-solutions/valves-pumps"
      />
      <Route
        element={<AutomotivePage />}
        path="/industry-solutions/automotive"
      />
      <Route
        element={<EngineeringIndustrialPage />}
        path="/industry-solutions/engg-industrial-products"
      />
      <Route
        element={<ApparelsTextilePage />}
        path="/industry-solutions/apparels-textile"
      />
      <Route
        element={<HeavyMachineryPage />}
        path="/industry-solutions/machinery-equipment"
      />
      <Route
        element={<HazardousProductsPage />}
        path="/industry-solutions/dangerous-goods"
      />
      <Route element={<OilGasPage />} path="/industry-solutions/oil-gas" />
      <Route
        element={<GreenEnergyPage />} 
        path="/industry-solutions/green-energy"
      />
      <Route element={<ContactUsPage />} path="/contact-us" />
    </Routes>
  );
}

export default App;
