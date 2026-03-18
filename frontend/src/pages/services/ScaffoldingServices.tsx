import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import heroScaffolding from "@/assets/scaffolding.jpg";

/* Scaffolding Images */
import erectionImg from "@/assets/services/scaffolding/erection.webp";
import inspectionImg from "@/assets/services/scaffolding/inspection.jpeg";
import onsiteImg from "@/assets/services/scaffolding/onsite-support.jpg";
import towersImg from "@/assets/services/scaffolding/towers-formwork.jpeg";
import frameImg from "@/assets/services/scaffolding/frame-scaffold.jpeg";
import mobileImg from "@/assets/services/scaffolding/mobile-access.webp";
import cupLockImg from "@/assets/services/scaffolding/cup-lock.jpeg";
import tubeImg from "@/assets/services/scaffolding/tubes-fitting.png";
import hangingImg from "@/assets/services/scaffolding/hanging-scaffold.jpg";
import fabricationImg from "@/assets/services/scaffolding/fabrication.jpeg";
import aluminiumImg from "@/assets/services/scaffolding/aluminium-scaffolding.png";

const services = [
  {
    img: erectionImg,
    title: "Scaffolding Erection & Dismantling",
    description: "Professional installation and dismantling of scaffolding systems."
  },
  {
    img: inspectionImg,
    title: "Scaffolding Inspections",
    description: "Safety inspections ensuring compliance with international standards."
  },
  {
    img: onsiteImg,
    title: "On-Site Support Scaffolding",
    description: "Temporary scaffolding structures supporting maintenance operations."
  },
  {
    img: towersImg,
    title: "Towers & Formwork",
    description: "Specialized scaffolding towers and structural formwork systems."
  },
  {
    img: frameImg,
    title: "Frame Scaffold Systems",
    description: "Durable frame scaffolding for construction and industrial use."
  },
  {
    img: mobileImg,
    title: "Portable Scaffolding & Access Solutions",
    description: "Portable scaffolding towers for safe elevated work areas."
  },
  {
    img: cupLockImg,
    title: "Cup Lock Scaffolding",
    description: "High-strength modular scaffolding systems for industrial projects."
  },
  {
    img: tubeImg,
    title: "Tubes & Fittings Scaffolding",
    description: "Traditional tube and fitting scaffolding for flexible structures."
  },
  {
    img: hangingImg,
    title: "Hanging Scaffolding",
    description: "Suspended scaffolding solutions for high-rise maintenance."
  },
  {
    img: fabricationImg,
    title: "Job Specific Scaffolding Fabrication",
    description: "Custom scaffolding design and fabrication for specialized projects."
  },
  {
    img: aluminiumImg,
    title: "Aluminium Scaffolding",
    description: "An active industrial plant where workers and heavy machinery assemble and organize high-quality aluminum scaffolding components."
  }
];

const ScaffoldingServices = () => {
  return (
    <div className="min-h-screen">

      <Header/>

      <main>

        {/* Hero */}
        <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center mt-[120px] overflow-hidden">

          <div className="absolute inset-0">
            <img
              src={heroScaffolding}
              alt="Scaffolding Services"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-black/60"/>
          </div>

          <div className="relative z-10 text-center text-white px-4">

            <motion.h1
              initial={{opacity:0,y:40}}
              animate={{opacity:1,y:0}}
              className="text-5xl md:text-6xl font-heading font-bold mb-4"
            >
              Scaffolding Services
            </motion.h1>

            <motion.p
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{delay:0.2}}
              className="text-lg md:text-xl text-white/80"
            >
              Safe & Certified Access Systems for Industrial Projects
            </motion.p>

          </div>

        </section>


        {/* Overview */}
        <section className="section-padding bg-background">

          <div className="section-container">

            <motion.div
              initial={{opacity:0,y:30}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              className="max-w-4xl mx-auto text-center mb-16"
            >

              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                Professional Scaffolding Solutions
              </h2>

              <p className="text-lg text-muted-foreground">
                Metluck Group delivers safe and reliable scaffolding systems
                for construction, plant maintenance and industrial infrastructure projects.
              </p>

            </motion.div>


            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {services.map((service,index)=>(
                <motion.div
                  key={service.title}
                  initial={{opacity:0,y:30}}
                  whileInView={{opacity:1,y:0}}
                  viewport={{once:true}}
                  transition={{delay:index*0.08}}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 hover:-translate-y-2 flex flex-col"
                >

                  {/* ✅ IMAGE FIX (best balance) */}
                 <div className="w-full h-56 overflow-hidden">
  <img
    src={service.img}
    alt={service.title}
    className="w-full h-full object-cover object-center transition duration-500 hover:scale-105"
  />
</div>

                  {/* Content */}
                  <div className="p-6 text-center flex-grow">

                    <h3 className="text-lg md:text-xl font-heading font-bold text-foreground mb-3">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
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
              Need Scaffolding Services?
            </h2>

            <Link
              to="/contact"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Request Service <ArrowRight className="w-5 h-5"/>
            </Link>

          </div>

        </section>

      </main>

      <Footer/>

    </div>
  );
};

export default ScaffoldingServices;