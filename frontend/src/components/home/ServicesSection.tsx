
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  Factory,
  HardHat,
  Truck,
  Building2,
  Settings,
  Boxes,
  Monitor,
  Construction,
  Users,
  ArrowRight,
} from "lucide-react";

/* Service Images */
import industrialImg from "@/assets/industrial.png";
import manufacturingImg from "@/assets/Picture2.png";
import engineeringImg from "@/assets/engineer.png";
import equipmentImg from "@/assets/equipment.jpg";
import civilImg from "@/assets/civil.jpg";
import facilityImg from "@/assets/facility.jpg";
import tradingImg from "@/assets/trading.jpg";
import itImg from "@/assets/it.jpg";
import scaffoldingImg from "@/assets/scaffolding.jpg";
import manpowerImg from "@/assets/manpower.jpg";

const services = [
  {
    icon: Wrench,
    image: industrialImg,
    title: "Industrial Services",
    description:
      "Plant maintenance, turnaround services, electrical & instrumentation, and technical support.",
    href: "/services/industrial",
  },
  {
    icon: Factory,
    image: manufacturingImg,
    title: "Manufacturing & Production",
    description:
      "Large-scale fabrication, manufacturing, sand blasting, painting and testing facilities.",
    href: "/services/manufacturing",
  },
  {
    icon: HardHat,
    image: engineeringImg,
    title: "Engineering & Construction",
    description:
      "End-to-end EPC solutions including civil, structural, mechanical and piping works.",
    href: "/services/engineering",
  },
  {
    icon: Truck,
    image: equipmentImg,
    title: "Equipment Rental Services",
    description:
      "Certified heavy equipment including cranes, excavators and construction machinery.",
    href: "/services/equipment-rental",
  },
  {
    icon: Building2,
    image: civilImg,
    title: "Civil Construction Services",
    description:
      "Infrastructure development including buildings, roads, earthworks and housing projects.",
    href: "/services/civil-construction",
  },
  {
    icon: Settings,
    image: facilityImg,
    title: "Facility Management Services",
    description:
      "Integrated facility management services ensuring efficient and safe operations.",
    href: "/services/facility-management",
  },
  {
    icon: Boxes,
    image: tradingImg,
    title: "Trading of Industrial Materials",
    description:
      "Supply and trading of industrial materials, equipment, tools and construction products.",
    href: "/services/trading",
  },
  {
    icon: Monitor,
    image: itImg,
    title: "IT and Software Solutions",
    description:
      "Technology solutions including business software systems and IT infrastructure support.",
    href: "/services/it-solutions",
  },
  {
    icon: Construction,
    image: scaffoldingImg,
    title: "Scaffolding Services",
    description:
      "Professional scaffolding services for industrial, construction and maintenance projects.",
    href: "/services/scaffolding",
  },
  {
    icon: Users,
    image: manpowerImg,
    title: "Skilled Manpower Support Services",
    description:
      "Provision of qualified engineers, technicians and skilled workforce for industrial projects.",
    href: "/services/manpower",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding section-alt">
      <div className="section-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-2 mb-6">
            Our Strategic Business Segments
          </h2>

          <p className="text-muted-foreground text-lg">
            Delivering comprehensive industrial, manufacturing, engineering and
            infrastructure solutions tailored to meet the diverse needs of our
            clients.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >

              <Link to={service.href} className="block h-full">

                <div className="card-industrial h-full group overflow-hidden">

                  {/* Service Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-8">

                    <div className="service-icon mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>

                    <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>

                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>

                  </div>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-hero">
            View All Services
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
