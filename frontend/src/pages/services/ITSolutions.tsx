import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import heroIT from "@/assets/it.jpg";

/* IT Service Images */
import softwareImg from "@/assets/services/it/software.jpeg";
import automationImg from "@/assets/services/it/automation.jpeg";
import cloudImg from "@/assets/services/it/cloud.jpeg";
import mobileImg from "@/assets/services/it/mobile-app.jpeg";
import sapImg from "@/assets/services/it/sap.jpeg";
import consultingImg from "@/assets/services/it/consulting.jpeg";
import cyberImg from "@/assets/services/it/cyber-security.jpeg";
import cloudInfraImg from "@/assets/services/it/cloud-infrastructure.jpeg";
import networkImg from "@/assets/services/it/5g.jpeg";
import p5gImg from "@/assets/services/it/p5g.jpeg";

const services = [
{
img: softwareImg,
title: "Custom Software Development",
description: "Tailored enterprise software solutions for business operations."
},
{
img: automationImg,
title: "Business Process Automation",
description: "Automation of workflows and processes to improve efficiency."
},
{
img: cloudImg,
title: "Cloud Computing",
description: "Cloud-based platforms and services for scalable infrastructure."
},
{
img: mobileImg,
title: "Mobile App Development",
description: "Development of mobile applications for Android and iOS platforms."
},
{
img: sapImg,
title: "SAP ERP Solutions",
description: "Implementation and integration of SAP ERP systems."
},
{
img: consultingImg,
title: "Strategic IT Consulting",
description: "Technology consulting to support business growth and innovation."
},
{
img: cyberImg,
title: "Cyber Security Solutions",
description: "Protection of digital infrastructure and data security systems."
},
{
img: cloudInfraImg,
title: "Cloud Infrastructure",
description: "Cloud architecture, migration and infrastructure management."
},
{
img: networkImg,
title: "4G / 5G Technology",
description: "Next generation telecom and connectivity solutions."
},
{
img: p5gImg,
title: "P5G Consulting",
description: "Private 5G network consulting with global technology partners."
}
];

const ITSolutions = () => {
return (
<div className="min-h-screen">

<Header/>

<main>

{/* Hero Banner */}

<section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">

<div className="absolute inset-0">
<img
src={heroIT}
alt="IT Solutions"
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
IT & Software Solutions
</motion.h1>

<motion.p
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:0.2}}
className="text-xl text-primary-foreground/80"
>
Digital Technology Solutions for Modern Businesses
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
IT & Digital Technology Services
</h2>

<p className="text-lg text-muted-foreground">
Metluck Group provides advanced IT services including
enterprise software development, automation solutions,
cloud infrastructure and cybersecurity systems.
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
Need IT Solutions for Your Business?
</h2>

<Link
to="/contact"
className="btn-secondary inline-flex items-center gap-2"
>
Contact Us <ArrowRight className="w-5 h-5"/>
</Link>

</div>

</section>

</main>

<Footer/>

</div>
);
};

export default ITSolutions;