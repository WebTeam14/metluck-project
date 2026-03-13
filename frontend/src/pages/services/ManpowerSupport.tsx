import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import heroManpower from "@/assets/manpower.jpg";

/* Manpower Images */
import mechanicalImg from "@/assets/services/manpower/mechanical-tech.jpeg";
import welderImg from "@/assets/services/manpower/welder.jpeg";
import scaffolderImg from "@/assets/services/manpower/scaffolder.jpeg";
import insulatorImg from "@/assets/services/manpower/insulator.jpeg";
import warehouseImg from "@/assets/services/manpower/warehouse-tech.jpeg";
import painterImg from "@/assets/services/manpower/painter.jpeg";
import electricianImg from "@/assets/services/manpower/electrician.jpeg";
import riggerImg from "@/assets/services/manpower/rigger.jpeg";
import safetyImg from "@/assets/services/manpower/safety-officer.jpeg";
import millwrightImg from "@/assets/services/manpower/millwright.jpeg";

const services = [
{
img: mechanicalImg,
title: "Mechanical & Rotary Technicians",
description: "Skilled technicians for rotating equipment maintenance and operations."
},
{
img: welderImg,
title: "Structural & CS Welders",
description: "Certified welders for structural fabrication and industrial welding works."
},
{
img: scaffolderImg,
title: "Scaffolders",
description: "Experienced scaffolders for erection and dismantling of scaffolding systems."
},
{
img: insulatorImg,
title: "Industrial Insulators",
description: "Specialists in insulation for pipelines, equipment and industrial facilities."
},
{
img: warehouseImg,
title: "Warehouse Technicians",
description: "Material handling and warehouse operations professionals."
},
{
img: painterImg,
title: "Painters & Sandblasters",
description: "Industrial surface preparation, painting and coating specialists."
},
{
img: electricianImg,
title: "Electrical & Instrument Technicians",
description: "Qualified technicians for electrical and instrumentation systems."
},
{
img: riggerImg,
title: "Riggers & Permit Receivers",
description: "Certified rigging professionals for lifting and heavy equipment operations."
},
{
img: safetyImg,
title: "Safety Officers",
description: "Safety trained personnel ensuring compliance with industrial safety standards."
},
{
img: millwrightImg,
title: "Millwright Technicians",
description: "Specialists in installation and maintenance of heavy industrial machinery."
}
];

const ManpowerSupport = () => {
return (
<div className="min-h-screen">

<Header/>

<main>

{/* Hero Banner */}

<section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">

<div className="absolute inset-0">
<img
src={heroManpower}
alt="Manpower Support"
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
Manpower Supply & Services
</motion.h1>

<motion.p
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:0.2}}
className="text-xl text-primary-foreground/80"
>
Shutdown / Turnaround / Emergency Maintenance Workforce
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
Professional Industrial Workforce
</h2>

<p className="text-lg text-muted-foreground">
Metluck Group provides skilled manpower for shutdown,
turnaround and emergency maintenance operations across
industrial plants and infrastructure projects.
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
Need Skilled Manpower for Your Project?
</h2>

<Link
to="/contact"
className="btn-secondary inline-flex items-center gap-2"
>
Request Manpower <ArrowRight className="w-5 h-5"/>
</Link>

</div>

</section>

</main>

<Footer/>

</div>
);
};

export default ManpowerSupport;