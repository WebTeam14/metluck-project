import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import heroTrading from "@/assets/trading.jpg";

/* Trading Images */
import compressorImg from "@/assets/services/trading/Compressors.png";
import valveImg from "@/assets/services/trading/valves.png";
import pumpImg from "@/assets/services/trading/pumps.jpeg";
import reactorImg from "@/assets/services/trading/reactors.png";
import exchangerImg from "@/assets/services/trading/heat-exchangers.jpeg";
import pipeImg from "@/assets/services/trading/pipes.jpg";
import cableImg from "@/assets/services/trading/electrical-cables.jpeg";
import transformerImg from "@/assets/services/trading/transformers.jpeg";
import safetyImg from "@/assets/services/trading/safety-equipment.jpeg";

/* Added from folder */
import generalMaterialImg from "@/assets/services/trading/General-Material.jpg";
import nonMetalImg from "@/assets/services/trading/non-metallic material and Pipes & fitting.jpeg";

const services = [
  {
    img: compressorImg,
    title: "All Type of Compressors",
    description: "Mechanical rotating equipment including compressors, turbines and generators."
  },
  {
    img: valveImg,
    title: "Industrial Valves",
    description: "Wide range of industrial valves for oil, gas and industrial systems."
  },
  {
    img: pumpImg,
    title: "Industrial Pumps",
    description: "Supply of pumps for chemical, industrial and infrastructure projects."
  },
  {
    img: reactorImg,
    title: "Industrial Boilers",
    description: "Industrial reactors and boilers for chemical and processing industries."
  },
  {
    img: exchangerImg,
    title: "Heat Exchangers",
    description: "Thermal heat exchange systems for industrial plants and refineries."
  },
  {
    img: pipeImg,
    title: "Pipes & Pipe Fittings Materials",
    description: "Industrial piping materials including fittings and connectors."
  },
  {
    img: cableImg,
    title: "Electrical Cables & Switchgear",
    description: "Electrical cables, switches and circuit breakers."
  },
  {
    img: transformerImg,
    title: "Industrial Transformers",
    description: "Power transformers and electrical distribution systems."
  },
  {
    img: safetyImg,
    title: "Industrial Safety Equipment",
    description: "Modern EHS systems integrate advanced wearable sensors and protective gear to proactively mitigate risks and ensure safety."
  },

  /* ✅ Added */
  {
    img: generalMaterialImg,
    title: "General Industrial Materials",
    description: "Wide range of industrial materials for construction and infrastructure."
  },
  {
    img: nonMetalImg,
    title: "Non-Metallic Materials",
    description: "Non-metallic industrial materials used in various engineering applications."
  }
];

const TradingMaterials = () => {
  return (
    <div className="min-h-screen">

      <Header/>

      <main>

        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">

          <div className="absolute inset-0">
            <img
              src={heroTrading}
              alt="Trading of Industrial Materials"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 gradient-overlay"/>
          </div>

          <div className="relative z-10 text-center text-primary-foreground">

            <motion.h1
              initial={{opacity:0,y:30}}
              animate={{opacity:1,y:0}}
              className="text-5xl md:text-6xl font-heading font-bold mb-4"
            >
              Trading of Industrial Materials
            </motion.h1>

            <motion.p
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{delay:0.2}}
              className="text-xl text-primary-foreground/80"
            >
              Supply of Industrial Components & Equipment
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
                Industrial Materials Trading
              </h2>

              <p className="text-lg text-muted-foreground">
                Metluck Group supplies a wide range of industrial materials,
                mechanical equipment and electrical components supporting
                engineering, infrastructure and energy sector projects.
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
                  transition={{delay:index*0.1}}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition hover:-translate-y-2"
                >

                  {/* ✅ Image Fix */}
                  <div className="w-full h-56 bg-gray-50 flex items-center justify-center overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

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


        {/* CTA */}
        <section className="section-padding bg-primary">

          <div className="section-container text-center">

            <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-6">
              Need Industrial Materials?
            </h2>

            <Link
              to="/contact"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Request Materials <ArrowRight className="w-5 h-5"/>
            </Link>

          </div>

        </section>

      </main>

      <Footer/>

    </div>
  );
};

export default TradingMaterials;