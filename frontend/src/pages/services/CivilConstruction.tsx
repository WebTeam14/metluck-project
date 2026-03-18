import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroCivil from "@/assets/civil.jpg";

/* Civil Images */
import buildingImg from "@/assets/services/civil/building.jpeg";
import infrastructureImg from "@/assets/services/civil/infrastructure.jpg";
import roadImg from "@/assets/services/civil/road-earthwork.png";
import electricalImg from "@/assets/services/civil/electrical-mechanical.png";
import residentialImg from "@/assets/services/civil/residential.png";
import sitePrepImg from "@/assets/services/civil/site-preparation.png";
import foundationImg from "@/assets/services/civil/foundation.png";
import masonryImg from "@/assets/services/civil/masonry.png";
import utilitiesImg from "@/assets/services/civil/utilities.png";
import securityImg from "@/assets/services/civil/security.png";

const services = [
{
img: buildingImg,
title: "Building Construction",
description: "Complete building construction services from foundation to finishing."
},
{
img: infrastructureImg,
title: "Infrastructure Projects",
description: "Large scale infrastructure development and civil engineering works."
},
{
img: roadImg,
title: "Road & Earthworks",
description: "Road construction, grading, excavation and earthmoving services."
},
{
img: electricalImg,
title: "Electrical & Mechanical Works",
description: "Integrated electrical and mechanical installations for construction projects."
},
{
img: residentialImg,
title: "Residential Housing Projects",
description: "Construction of residential housing developments and complexes."
},
{
img: sitePrepImg,
title: "Site Preparation & Earthworks",
description: "Land clearing, excavation and preparation for construction projects."
},
{
img: foundationImg,
title: "Foundations & Structural Concrete",
description: "Foundation works and reinforced concrete structures."
},
{
img: masonryImg,
title: "Structural & Masonry Works",
description: "Block work, masonry structures and reinforced walls."
},
{
img: utilitiesImg,
title: "Utility Connections",
description: "Water, sewer and electrical utility infrastructure connections."
},
{
img: securityImg,
title: "Security Control Infrastructure",
description: "Civil infrastructure works for security and surveillance systems."
}
];

const CivilConstruction = () => {
return (
<div className="min-h-screen">

<Header/>

<main>

{/* Hero Banner */}

<section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">

<div className="absolute inset-0">
<img src={heroCivil} className="w-full h-full object-cover"/>
<div className="absolute inset-0 gradient-overlay"/>
</div>

<div className="relative z-10 text-center text-primary-foreground">

<motion.h1
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
className="text-5xl md:text-6xl font-heading font-bold mb-4"
>
Civil Construction Services
</motion.h1>

<motion.p
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:0.2}}
className="text-xl text-primary-foreground/80"
>
Comprehensive Civil & Infrastructure Solutions
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
Civil Engineering Expertise
</h2>

<p className="text-lg text-muted-foreground">
Metluck Group delivers comprehensive civil construction solutions
including building construction, infrastructure development,
foundations, utilities and structural works.
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
Need Civil Construction Services?
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

export default CivilConstruction;