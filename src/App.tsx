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
      <Route element={<ContactUsPage />} path="/contact-us" />
    </Routes>
  );
}

export default App;
