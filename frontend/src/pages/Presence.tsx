
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Building2, Users, Briefcase } from "lucide-react";

import map from "@/assets/map.png";

const locations = [
  {
    title: "Saudi Arabia",
    city: "Al Jubail",
    description:
      "Headquarters of Metluck Group delivering industrial construction, engineering, plant maintenance, and manpower services to major industries.",
    projects: "120+ Projects",
    workforce: "300+ Workforce",
  },
  {
    title: "India",
    city: "Lucknow",
    description:
      "Operations supporting infrastructure development, real estate projects, engineering services, and supply chain management.",
    projects: "80+ Projects",
    workforce: "150+ Workforce",
  },
  {
    title: "Middle East",
    city: "Regional Operations",
    description:
      "Engineering, industrial services, scaffolding, and technical manpower supply across multiple Middle Eastern countries.",
    projects: "60+ Projects",
    workforce: "100+ Workforce",
  },
];

const Presence = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative h-[45vh] flex items-center justify-center mt-[120px] bg-primary">
          <div className="text-center text-primary-foreground max-w-3xl px-4">
            <h1 className="text-5xl font-heading font-bold mb-4">
              Our Global Presence
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Metluck Group operates across Saudi Arabia, India and the Middle
              East delivering world-class engineering, construction and
              industrial services.
            </p>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding bg-background">
          <div className="section-container grid lg:grid-cols-2 gap-12 items-center">

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={map}
                alt="Metluck Global Operations Map"
                className="w-full object-contain"
              />

              {/* Saudi Arabia Pin */}
              {/* <div className="absolute top-[45%] left-[55%] flex flex-col items-center group">
                <MapPin className="text-red-500 w-7 h-7 animate-bounce" />
                <span className="text-xs bg-primary text-white px-2 py-1 rounded mt-1 opacity-0 group-hover:opacity-100">
                  Saudi Arabia
                </span>
              </div> */}

              {/* India Pin */}
              {/* <div className="absolute top-[50%] left-[70%] flex flex-col items-center group">
                <MapPin className="text-red-500 w-7 h-7 animate-bounce" />
                <span className="text-xs bg-primary text-white px-2 py-1 rounded mt-1 opacity-0 group-hover:opacity-100">
                  India
                </span>
              </div> */}

              {/* Middle East Pin */}
              {/* <div className="absolute top-[42%] left-[60%] flex flex-col items-center group">
                <MapPin className="text-red-500 w-7 h-7 animate-bounce" />
                <span className="text-xs bg-primary text-white px-2 py-1 rounded mt-1 opacity-0 group-hover:opacity-100">
                  Middle East
                </span>
              </div> */}
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold mb-6">
                Expanding Across Regions
              </h2>

              <p className="text-muted-foreground mb-6">
                With headquarters in Saudi Arabia and strong operational
                presence in India and the Middle East, Metluck Group delivers
                reliable industrial solutions, infrastructure development and
                engineering excellence for global clients.
              </p>

              <p className="text-muted-foreground">
                Our international network enables us to mobilize skilled
                manpower, advanced equipment and engineering expertise
                efficiently across multiple industries.
              </p>
            </motion.div>

          </div>
        </section>

        {/* Locations */}
        <section className="section-padding section-alt">
          <div className="section-container">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-heading font-bold mb-4">
                Our Key Operational Locations
              </h2>
              <p className="text-muted-foreground">
                Delivering engineering and industrial excellence across
                multiple regions with dedicated teams and project support
                capabilities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {locations.map((loc, index) => (
                <motion.div
                  key={loc.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="card-industrial p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>

                    <div>
                      <h3 className="text-xl font-heading font-bold">
                        {loc.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {loc.city}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {loc.description}
                  </p>

                  <div className="flex justify-between text-sm">

                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      {loc.projects}
                    </div>

                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      {loc.workforce}
                    </div>

                  </div>
                </motion.div>
              ))}

            </div>

          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-primary">
          <div className="section-container grid md:grid-cols-3 gap-8 text-center text-primary-foreground">

            <div>
              <Building2 className="mx-auto mb-3 w-8 h-8" />
              <h3 className="text-3xl font-bold">250+</h3>
              <p className="text-primary-foreground/80">
                Completed Projects
              </p>
            </div>

            <div>
              <Users className="mx-auto mb-3 w-8 h-8" />
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-primary-foreground/80">
                Skilled Workforce
              </p>
            </div>

            <div>
              <MapPin className="mx-auto mb-3 w-8 h-8" />
              <h3 className="text-3xl font-bold">3+</h3>
              <p className="text-primary-foreground/80">
                Operational Regions
              </p>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Presence;