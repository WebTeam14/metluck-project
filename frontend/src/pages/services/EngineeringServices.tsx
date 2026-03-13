import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroEngineer from "@/assets/engineer.jpg";

/* Service Images */
import civilImg from "@/assets/services/engineering/civil-construction.jpeg";
import steelImg from "@/assets/services/engineering/steel-fabrication.jpeg";
import mechanicalImg from "@/assets/services/engineering/mechanical-erection.jpeg";
import pipingImg from "@/assets/services/engineering/piping-fabrication.jpeg";
import electricalImg from "@/assets/services/engineering/electrical-instrument.jpeg";
import paintingImg from "@/assets/services/engineering/painting.jpeg";
import frpImg from "@/assets/services/engineering/frp-piping.jpeg";
import commissioningImg from "@/assets/services/engineering/pre-commissioning.jpeg";

const services = [
{
img: civilImg,
title: "Civil & Building Construction",
description: "Complete civil and building construction services from foundation to finish."
},
{
img: steelImg,
title: "Structural Steel Fabrication & Erection",
description: "Expert structural steel fabrication and on-site erection services."
},
{
img: mechanicalImg,
title: "Mechanical Equipment Erection",
description: "Professional installation and erection of mechanical equipment."
},
{
img: pipingImg,
title: "Piping Fabrication & Erection",
description: "Industrial piping fabrication and erection services."
},
{
img: frpImg,
title: "FRP / GRP / GRE / HDPE Piping Installation",
description: "Installation of corrosion resistant piping systems."
},
{
img: electricalImg,
title: "Electrical & Instrumentation Works",
description: "Complete electrical and instrumentation solutions for plants."
},
{
img: paintingImg,
title: "Industrial Painting",
description: "Surface preparation and protective coating services."
},
{
img: commissioningImg,
title: "Pre Commissioning",
description: "System testing and preparation before plant startup."
}
];

const EngineeringServices = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main>

        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">

          <div className="absolute inset-0">
            <img
              src={heroEngineer}
              alt="Engineering & Construction"
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
              Engineering & Construction
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/80"
            >
              End-to-End EPC Solutions
            </motion.p>

          </div>

        </section>


        {/* Overview */}
        <section className="section-padding bg-background">

          <div className="section-container">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >

              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                Complete EPC Solutions
              </h2>

              <p className="text-lg text-muted-foreground">
                We deliver end-to-end Engineering, Procurement, and Construction (EPC)
                solutions for industrial and infrastructure projects across Saudi Arabia
                and the Middle East.
              </p>

            </motion.div>


            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {services.map((service, index) => (

                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition hover:-translate-y-2"
                >

                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />

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


        {/* EPC Process */}
        <section className="section-padding bg-muted">

          <div className="section-container">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >

              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                Our EPC Process
              </h2>

            </motion.div>


            <div className="grid md:grid-cols-4 gap-8">

              {["Engineering", "Procurement", "Construction", "Commissioning"].map((step, index) => (

                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >

                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-heading font-bold text-foreground">
                    {step}
                  </h3>

                </motion.div>

              ))}

            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="section-padding bg-primary">

          <div className="section-container text-center">

            <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-6">
              Start Your Engineering Project
            </h2>

            <Link
              to="/contact"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
};

export default EngineeringServices;