import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Partner from "./pages/Partner";
import Presence from "./pages/Presence";

/* Services */
import IndustrialServices from "./pages/services/IndustrialServices";
import ManufacturingServices from "./pages/services/ManufacturingServices";
import EngineeringServices from "./pages/services/EngineeringServices";
import EquipmentRental from "./pages/services/EquipmentRental";
import CivilConstruction from "./pages/services/CivilConstruction";
import FacilityManagement from "./pages/services/FacilityManagement";
import TradingMaterials from "./pages/services/TradingMaterials";
import ITSolutions from "./pages/services/ITSolutions";
import ScaffoldingServices from "./pages/services/ScaffoldingServices";
import ManpowerSupport from "./pages/services/ManpowerSupport";

/* Projects */
import OngoingProjects from "./pages/projects/OngoingProjects";
import CompletedProjects from "./pages/projects/CompletedProjects";

/* Operations */
import SaudiArabiaOperations from "./pages/operations/SaudiArabiaOperations";
import IndiaOperations from "./pages/operations/IndiaOperations";
import MiddleEastOperations from "./pages/operations/MiddleEastOperations";

function App() {
  return (
    <BrowserRouter>

      {/* Scroll to Top on Route Change */}
      <ScrollToTop />

      <Routes>

        {/* Main Pages */}
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/operations" element={<Presence />} />

        {/* Service Pages */}
        <Route path="/services/industrial" element={<IndustrialServices />} />
        <Route path="/services/manufacturing" element={<ManufacturingServices />} />
        <Route path="/services/engineering" element={<EngineeringServices />} />
        <Route path="/services/equipment-rental" element={<EquipmentRental />} />
        <Route path="/services/civil-construction" element={<CivilConstruction />} />
        <Route path="/services/facility-management" element={<FacilityManagement />} />
        <Route path="/services/trading" element={<TradingMaterials />} />
        <Route path="/services/it-solutions" element={<ITSolutions />} />
        <Route path="/services/scaffolding" element={<ScaffoldingServices />} />
        <Route path="/services/manpower" element={<ManpowerSupport />} />

        {/* Project Pages */}
        <Route path="/projects/ongoing" element={<OngoingProjects />} />
        <Route path="/projects/completed" element={<CompletedProjects />} />

        {/* Operations Pages */}
        <Route path="/operations/saudi-arabia" element={<SaudiArabiaOperations />} />
        <Route path="/operations/india" element={<IndiaOperations />} />
        <Route path="/operations/middle-east" element={<MiddleEastOperations />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;