import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import heroIndustrial from "@/assets/industrial.png";

/* Service Images */
import plantMaintenance from "@/assets/services/industrial/plant-maintenance.jpg";
import industrialService from "@/assets/services/industrial/industrial-services.jpg";
import projectService from "@/assets/services/industrial/project-services.jpeg";
import electricalService from "@/assets/services/industrial/electrical-instrument.jpeg";
import technicalSupport from "@/assets/services/industrial/technical-support.jpg";
import mechanicalOH from "@/assets/services/industrial/mechanical-overhaul.jpeg";
import valveService from "@/assets/services/industrial/valve-services.jpeg";
import plantModification from "@/assets/services/industrial/plant-modification.jpeg";
import buildingMaintenance from "@/assets/services/industrial/building-maintenance.jpeg";

/* Services Data */
const services = [
  {
    img: plantMaintenance,
    title: "Plant Maintenance & Turnaround",
    description:
      "Complete maintenance solutions for industrial plants with minimal downtime.",
  },
  {
    img: industrialService,
    title: "Industrial Services",
    description:
      "Comprehensive industrial support services for large scale plants and facilities.",
  },
  {
    img: projectService,
    title: "Project & Services",
    description:
      "Professional project execution and engineering services for industrial sectors.",
  },
  {
    img: electricalService,
    title: "Electrical & Instrument Services",
    description:
      "Expert electrical and instrumentation solutions for industrial applications.",
  },
  {
    img: technicalSupport,
    title: "Technical Support Services",
    description:
      "Reliable technical assistance and maintenance support for plant operations.",
  },
  {
    img: mechanicalOH,
    title: "Mechanical Rotating OH Services",
    description:
      "Comprehensive rotating equipment overhaul and mechanical repair services.",
  },
  {
    img: valveService,
    title: "Valve Services",
    description:
      "Professional valve inspection, maintenance, repair, and replacement services.",
  },
  {
    img: plantModification,
    title: "Plant Modification Services",
    description:
      "Plant upgrade and modification services to improve efficiency and productivity.",
  },
  {
    img: buildingMaintenance,
    title: "Plant Building Maintenance Services",
    description:
      "Complete building maintenance and facility management services.",
  },
];

const IndustrialServices = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">
          <div className="absolute inset-0">
            <img
              src={heroIndustrial}
              alt="Industrial Services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 gradient-overlay" />
          </div>

          <div className="relative z-10 text-center text-primary-foreground">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-heading font-bold mb-4"
            >
              Industrial Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/80"
            >
              Complete Industrial Support Solutions
            </motion.p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="section-padding bg-background">
          <div className="section-container">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                Comprehensive Industrial Support
              </h2>

              <p className="text-lg text-muted-foreground">
                We provide complete industrial support services to major industries
                across Saudi Arabia. Our experienced team ensures safe, efficient,
                and reliable operations for your facilities.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="overflow-hidden rounded-xl bg-white shadow-md 
                             transition duration-300 
                             hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
                >

                  {/* Image */}
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />

                  {/* Content */}
                  <div className="p-6 text-center">

                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>

                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="section-container text-center">

            <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-6">
              Need Industrial Services?
            </h2>

            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your industrial service requirements.
            </p>

            <a
              href="/contact"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </a>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IndustrialServices;