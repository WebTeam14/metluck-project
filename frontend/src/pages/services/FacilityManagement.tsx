import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroFacility from "@/assets/facility.jpg";

/* Facility Images */
import housekeepingImg from "@/assets/services/facility/housekeeping.jpeg";
import staffImg from "@/assets/services/facility/staff-management.png";
import maintenanceImg from "@/assets/services/facility/maintenance-repairs.jpeg";
import securityImg from "@/assets/services/facility/security.jpeg";
import environmentImg from "@/assets/services/facility/environmental.jpeg";
import hvacImg from "@/assets/services/facility/hvac.jpeg";
import cleaningImg from "@/assets/services/facility/cleaning.jpeg";
import wasteImg from "@/assets/services/facility/waste-management.jpeg";
import landscapingImg from "@/assets/services/facility/landscaping.png";
import assetImg from "@/assets/services/facility/asset-management.jpeg";

const services = [
{
img: housekeepingImg,
title: "Housekeeping Services",
description: "Cleaning, sanitation and organization services for industrial facilities."
},
{
img: staffImg,
title: "Staff Management",
description: "Professional workforce management and operational support."
},
{
img: maintenanceImg,
title: "Maintenance & Repairs",
description: "Handling mechanical, electrical and structural property maintenance."
},
{
img: securityImg,
title: "Security Services",
description: "Security implementation to safeguard premises and equipment."
},
{
img: environmentImg,
title: "Environmental Sustainability",
description: "Eco-friendly facility solutions ensuring sustainable operations."
},
{
img: hvacImg,
title: "HVAC Management",
description: "Heating, ventilation and air conditioning maintenance services."
},
{
img: cleaningImg,
title: "Industrial Cleaning",
description: "Deep cleaning and sanitation for industrial environments."
},
{
img: wasteImg,
title: "Waste Management",
description: "Waste disposal and recycling management solutions."
},
{
img: landscapingImg,
title: "Landscaping Services",
description: "Maintenance of outdoor spaces and facility surroundings."
},
{
img: assetImg,
title: "Asset Management",
description: "Tracking and maintaining facility assets for long-term efficiency."
}
];

const FacilityManagement = () => {
return (
<div className="min-h-screen">

<Header/>

<main>

{/* Hero Banner */}

<section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">

<div className="absolute inset-0">
<img src={heroFacility} className="w-full h-full object-cover"/>
<div className="absolute inset-0 gradient-overlay"/>
</div>

<div className="relative z-10 text-center text-primary-foreground">

<motion.h1
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
className="text-5xl md:text-6xl font-heading font-bold mb-4"
>
Facility Management
</motion.h1>

<motion.p
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:0.2}}
className="text-xl text-primary-foreground/80"
>
Comprehensive Facility Solutions
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
Complete Facility Management
</h2>

<p className="text-lg text-muted-foreground">
Metluck Group delivers professional facility management solutions
ensuring operational efficiency, safety and sustainability for
industrial and commercial facilities.
</p>

</motion.div>


{/* Services Grid */}

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


{/* CTA */}

<section className="section-padding bg-primary">

<div className="section-container text-center">

<h2 className="text-3xl font-heading font-bold text-primary-foreground mb-6">
Need Facility Management Services?
</h2>

<Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
Contact Us <ArrowRight className="w-5 h-5"/>
</Link>

</div>

</section>

</main>

<Footer/>

</div>
);
};

export default FacilityManagement;