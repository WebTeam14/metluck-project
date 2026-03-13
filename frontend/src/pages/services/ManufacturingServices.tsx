import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import heroPicture2 from "@/assets/Picture2.png";

/* Capability Images */
import fabricationImg from "@/assets/services/manufacturing/fabrication.jpeg";
import manufacturingImg from "@/assets/services/manufacturing/manufacturing.jpg";
import storageImg from "@/assets/services/manufacturing/storage.jpeg";
import blastingImg from "@/assets/services/manufacturing/blasting.jpeg";
import testingImg from "@/assets/services/manufacturing/testing.jpeg";
import qualityImg from "@/assets/services/manufacturing/quality.jpeg";

const capabilities = [
  {
    img: fabricationImg,
    title: "Fabrication",
    description:
      "State-of-the-art fabrication services for industrial components.",
  },
  {
    img: manufacturingImg,
    title: "Manufacturing",
    description:
      "High-quality manufacturing of industrial parts and equipment.",
  },
  {
    img: storageImg,
    title: "Storage",
    description:
      "Secure storage facilities for materials and finished products.",
  },
  {
    img: blastingImg,
    title: "Sand Blasting & Painting",
    description:
      "Professional surface preparation and coating services.",
  },
  {
    img: testingImg,
    title: "Testing",
    description:
      "Comprehensive quality testing and inspection services.",
  },
  {
    img: qualityImg,
    title: "Quality Assurance",
    description:
      "Rigorous QA/QC processes ensuring highest standards.",
  },
];

const ManufacturingServices = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main>

        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">
          <div className="absolute inset-0">
            <img
              src={heroPicture2}
              alt="Manufacturing & Production"
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
              Manufacturing & Production
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/80"
            >
              40,000 m² Production Facility
            </motion.p>
          </div>
        </section>

        {/* Facility Overview */}
        <section className="section-padding bg-background">
          <div className="section-container">

            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <p className="text-sm text-muted-foreground mb-2">
                  Manufacturing and Production
                </p>

                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Total Land Area: 40,000 m²
                </h2>

                <h3 className="text-xl font-semibold mb-4">
                  Facility Capabilities
                </h3>

                <ul className="space-y-3">

                  <li className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-primary rounded-full"></span>
                    Manufacturing
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-primary rounded-full"></span>
                    Fabrication
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-primary rounded-full"></span>
                    Storage
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-primary rounded-full"></span>
                    Sand Blasting
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-primary rounded-full"></span>
                    Painting and Testing
                  </li>

                </ul>

              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src={heroPicture2}
                  alt="Manufacturing Facility"
                  className="rounded-lg shadow-industrial w-full"
                />
              </motion.div>

            </div>

          </div>
        </section>

        {/* Capabilities with Images */}
        <section className="section-padding bg-muted">
          <div className="section-container">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                Our Capabilities
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive manufacturing and production capabilities
              </p>
            </motion.div>

            {/* Image Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {capabilities.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition hover:-translate-y-2"
                >

                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-6 text-center">

                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                      {item.title}
                    </h3>

                    <p className="text-muted-foreground">
                      {item.description}
                    </p>

                  </div>

                </motion.div>
              ))}

            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="section-container text-center">

            <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-6">
              Ready to Start Your Project?
            </h2>

            <Link
              to="/contact"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Get a Quote <ArrowRight className="w-5 h-5" />
            </Link>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ManufacturingServices;