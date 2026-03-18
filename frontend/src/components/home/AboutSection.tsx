import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

/* Images */
import picture0 from "@/assets/Picture0.png";
import picture1 from "@/assets/Picture1.png";
import picture2 from "@/assets/Picture2.png";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-2 mb-6">
              Who We Are
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Metluck Group is a leading plant construction and industrial services provider,
              headquartered in Al Jubail, Saudi Arabia, with a strong presence across the
              Kingdom and India.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Since our establishment in 2008, we have been supporting major industries
              with reliable, safe, and innovative solutions aligned with Aramco and SABIC
              standards. With over 10+ years of experience, we have built a reputation
              for quality, safety, and timely project delivery.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              We provide integrated services including engineering support, industrial services,
              manufacturing assistance, equipment rental, civil construction, and facility
              management. Our approach combines technical expertise with efficient project
              management to meet the operational and infrastructure needs of modern industries.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              With operations across India, Saudi Arabia, and the Middle East,
              METLUCK continues to support industrial growth while building
              strong, long-term partnerships with clients.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="block text-2xl font-heading font-bold text-foreground">10+</span>
                  <span className="text-sm text-muted-foreground">Years Experience</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="block text-2xl font-heading font-bold text-foreground">500+</span>
                  <span className="text-sm text-muted-foreground">Team Members</span>
                </div>
              </div>

            </div>

            <Link to="/about" className="btn-hero">
              Learn More About Us
            </Link>

          </motion.div>


          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >

            {/* Image Layout */}
            <div className="grid grid-cols-2 gap-4">

              <img
                src={picture0}
                alt="Metluck Industrial"
                className="col-span-2 w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
              />

              <img
                src={picture1}
                alt="Metluck Building"
                className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
              />

              <img
                src={picture2}
                alt="Metluck Factory"
                className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
              />

            </div>


            {/* Mission */}
            <div className="card-industrial p-8">
              <div className="flex items-start gap-4">

                <div className="service-icon flex-shrink-0">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    Our Mission
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    To deliver world-class engineering, construction, and maintenance solutions for the oil, gas, and petrochemical industries in Asia. We strive for excellence in every project through a strong commitment to safety, quality, innovation, and sustainability—ensuring lasting value and customer satisfaction .
                  </p>
                </div>

              </div>
            </div>


            {/* Vision */}
            <div className="card-industrial p-8">
              <div className="flex items-start gap-4">

                <div className="service-icon flex-shrink-0">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    Our Vision
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading and most trusted integrated service partner in the region’s oil and gas sector. We aim to drive industrial progress through superior project execution, innovative solutions, and a firm dedication to integrity, excellence, and sustainable growth.
                  </p>
                </div>

              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}