import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users, Building, Globe } from "lucide-react";
import hero22 from "@/assets/hero-22.jpg";
import chairman from "@/assets/chairman.jpeg"; // add image in assets

const stats = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Team Members" },
  { icon: Building, value: "500+", label: "Projects Completed" },
  { icon: Globe, value: "3", label: "Countries" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main>

        {/* Hero Banner */}
        <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[75vh] min-h-[450px] flex items-center justify-center mt-[120px] overflow-hidden">

          <div className="absolute inset-0">
            <img
              src={hero22}
              alt="About Metluck Group"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4"
            >
              About Us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80"
            >
              Building Excellence Since 2008
            </motion.p>
          </div>
        </section>


        {/* Who We Are */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">

              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Who We Are
              </span>

              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-2 mb-8">
                Metluck Group
              </h2>

              {/* Existing Paragraph */}
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Metluck Group is a diversified multinational organization delivering excellence
                in engineering, construction, industrial services, manufacturing, and infrastructure
                solutions across Saudi Arabia, India, and the Middle East.
              </p>

              {/* Added Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                Since our establishment in 2008, we have been supporting major industries with
                reliable, safe, and innovative solutions aligned with Aramco and SABIC standards.
                With headquarters in Al Jubail, Saudi Arabia, we have built a reputation for
                quality, safety, and timely project delivery.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide integrated services including engineering support, industrial services,
                manufacturing assistance, equipment rental, civil construction, and facility
                management. Our approach combines technical expertise with efficient project
                management to meet the operational and infrastructure needs of modern industries.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                At METLUCK, we work closely with clients to understand project requirements
                and deliver customized solutions that ensure efficiency, safety, and long-term
                performance. Our experienced team of engineers and technical professionals
                maintains high standards of quality and timely project execution.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                With operations across India, Saudi Arabia, and the Middle East,
                METLUCK continues to support industrial growth while building strong,
                long-term partnerships with clients.
              </p>

            </div>
          </div>
        </section>


        {/* Chairman Section */}
        <section className="section-padding section-alt">
          <div className="section-container">

            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={chairman}
                  alt="Chairman Kaushar Imam"
                  className="w-70 h-72 object-cover rounded-xl shadow-xl"
                />
              </div>

              {/* Text */}
              <div>

                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Leadership
                </span>

                <h2 className="text-4xl font-heading font-bold text-foreground mt-2 mb-4">
                  Chairman
                </h2>

                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Mr. Kaushar Imam
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Under the leadership of Mr. Kaushar Imam, Metluck Group has grown
                  into a trusted industrial and engineering solutions provider
                  serving major infrastructure and industrial projects across
                  Saudi Arabia, India, and the Middle East.
                </p>

                <p className="text-muted-foreground leading-relaxed mt-4">
                  His vision focuses on delivering quality-driven services,
                  building long-term client relationships, and maintaining
                  international safety and operational standards.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* Stats */}
        <section className="py-16 gradient-primary">
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center text-primary-foreground"
                >

                  <stat.icon className="w-12 h-12 mx-auto mb-4 opacity-80" />

                  <div className="text-4xl md:text-5xl font-heading font-bold mb-2">
                    {stat.value}
                  </div>

                  <div className="text-primary-foreground/70">
                    {stat.label}
                  </div>

                </motion.div>
              ))}

            </div>
          </div>
        </section>


        {/* Mission & Vision */}
        <section className="section-padding section-alt">
          <div className="section-container">

            <div className="grid md:grid-cols-2 gap-8">

              <div className="card-industrial p-10">
                <div className="service-icon mb-6">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Our Mission
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  To deliver world-class engineering, construction, and maintenance solutions for the oil, gas, and petrochemical industries in Asia.
We strive for excellence in every project through a strong commitment to safety, quality, innovation, and sustainability—ensuring lasting value and customer satisfaction
.
                </p>
              </div>

              <div className="card-industrial p-10">
                <div className="service-icon mb-6">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Our Vision
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                 To be the leading and most trusted integrated service partner in the region’s oil and gas sector.
We aim to drive industrial progress through superior project execution, innovative solutions, and a firm dedication to integrity, excellence, and sustainable growth.

                </p>
              </div>

            </div>

          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
};

export default About;