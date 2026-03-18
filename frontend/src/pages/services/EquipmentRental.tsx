import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroequipment from "@/assets/equipment.jpg";

/* Equipment Images */
import backhoeImg from "@/assets/services/equipment/backhoe.png";
import bulldozerImg from "@/assets/services/equipment/bulldozer.webp";
import excavatorImg from "@/assets/services/equipment/excavator.png";
import craneImg from "@/assets/services/equipment/crane.png";
import forkliftImg from "@/assets/services/equipment/forklift.jpg";
import dumpTruckImg from "@/assets/services/equipment/dump-truck.png";
import mobileCraneImg from "@/assets/services/equipment/mobile-crane.jpeg";
import waterPumpImg from "@/assets/services/equipment/dewatering-pump.jpg";

const equipment = [
  {
    img: backhoeImg,
    title: "Backhoe Loaders",
    description: "Versatile backhoe loaders for excavation and construction work."
  },
  {
    img: bulldozerImg,
    title: "Bulldozers (D6–D10)",
    description: "Heavy-duty bulldozers for earthmoving and land clearing."
  },
  {
    img: excavatorImg,
    title: "Excavators",
    description: "Powerful excavation equipment for industrial and infrastructure projects."
  },
  {
    img: craneImg,
    title: "Crane",
    description: "Certified mobile cranes for lifting heavy industrial loads."
  },
  {
    img: forkliftImg,
    title: "Forklifts & Loaders",
    description: "Material handling equipment including skid steer loaders."
  },
  {
    img: dumpTruckImg,
    title: "Dump Trucks & Flatbeds",
    description: "Transportation vehicles for materials and heavy equipment."
  },
  {
    img: mobileCraneImg,
    title: "Mobile Cranes (25–240 Ton)",
    description: "Heavy-duty trailers and tanker trucks for logistics."
  },
  {
    img: waterPumpImg,
    title: "Dewatering Pumps & Service Trucks",
    description: "Water pumping equipment and service vehicles for site support."
  }
];

const EquipmentRental = () => {
return (
<div className="min-h-screen">

<Header />

<main>

{/* Hero Banner */}

<section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">

<div className="absolute inset-0">
<img
src={heroequipment}
alt="Equipment Rental"
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
Equipment Rental
</motion.h1>

<motion.p
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.2 }}
className="text-xl text-primary-foreground/80"
>
Aramco & SABIC Certified Equipment
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
Premium Equipment Fleet
</h2>

<p className="text-lg text-muted-foreground">
Metluck Group provides certified construction and lifting equipment
across Saudi Arabia. Our fleet is maintained to the highest standards
for reliability and safety.
</p>

</motion.div>


{/* Equipment Grid */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{equipment.map((item, index) => (

<motion.div
  key={item.title}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.1 }}
  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition hover:-translate-y-2"
>

  <div className="w-full h-56 bg-gray-50 flex items-center justify-center overflow-hidden">
    <img
      src={item.img}
      alt={item.title}
      className="max-h-full max-w-full object-contain"
    />
  </div>

  <div className="p-6 text-center">
    <h3 className="text-xl font-heading font-bold text-foreground mb-3">
      {item.title}
    </h3>

    <p className="text-muted-foreground text-sm">
      {item.description}
    </p>
  </div>

</motion.div>

))}

</div>

</div>

</section>


{/* Certification Section */}

<section className="section-padding bg-muted">

<div className="section-container">

<div className="grid md:grid-cols-2 gap-8 items-center">

<motion.div
initial={{ opacity: 0, x: -30 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
>

<h2 className="text-4xl font-heading font-bold text-foreground mb-6">
Certified & Compliant
</h2>

<p className="text-lg text-muted-foreground mb-6">
All our equipment meets Aramco and SABIC standards ensuring
safety and compliance for industrial operations.
</p>

<ul className="space-y-3">

<li className="flex items-center gap-3">
<div className="w-2 h-2 bg-primary rounded-full"/>
Aramco Certified Equipment
</li>

<li className="flex items-center gap-3">
<div className="w-2 h-2 bg-primary rounded-full"/>
SABIC Approved Fleet
</li>

<li className="flex items-center gap-3">
<div className="w-2 h-2 bg-primary rounded-full"/>
Regular Maintenance & Inspection
</li>

<li className="flex items-center gap-3">
<div className="w-2 h-2 bg-primary rounded-full"/>
Trained Operators Available
</li>

</ul>

</motion.div>


<motion.div
initial={{ opacity: 0, x: 30 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
>

<img
src={heroequipment}
alt="Equipment"
className="rounded-lg shadow-industrial w-full"
/>

</motion.div>

</div>

</div>

</section>


{/* CTA */}

<section className="section-padding bg-primary">

<div className="section-container text-center">

<h2 className="text-3xl font-heading font-bold text-primary-foreground mb-6">
Need Equipment for Your Project?
</h2>

<Link
to="/contact"
className="btn-secondary inline-flex items-center gap-2"
>
Request Quote <ArrowRight className="w-5 h-5" />
</Link>

</div>

</section>

</main>

<Footer />

</div>
);
};

export default EquipmentRental;