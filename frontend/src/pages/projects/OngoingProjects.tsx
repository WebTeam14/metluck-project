import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import hero3 from "@/assets/hero-3.jpg";

/* Project Images */
import pumpStation2 from "@/assets/projects/ongoing/pump-station.jpeg";
import kingSalmanPort from "@/assets/projects/ongoing/king-salman-mina-port.jpeg";
import abuAliPlant from "@/assets/projects/ongoing/abu-ali-increasement.jpeg";
import janaPlant from "@/assets/projects/ongoing/jana-soda-plant.jpeg";

const projects = [
{
image: pumpStation2,
title: "Pump Station-2",
location: "Khurais, Saudi Arabia",
category: "Construction",
year: "2024",
progress: 35,
client: "Aramco / L&T Company",
description:
"Security building construction, fencing work, electrical & plumbing installation and HVAC work."
},
{
image: kingSalmanPort,
title: "King Salman Mina Port",
location: "Ras Al Khair",
category: "Industrial",
year: "2024",
progress: 40,
client: "King Salman Mina Port / Europlast Company",
description:
"Civil foundation, structure fabrication & erection, firefighting installation, HVAC installation and commissioning."
},
{
image: abuAliPlant,
title: "Abu Ali Increasement Plant",
location: "Abu Ali Island",
category: "Industrial",
year: "2024",
progress: 30,
client: "Aramco / NGMSA",
description:
"Security building construction, fencing work, electrical & plumbing, HVAC and non-metallic piping work."
},
{
image: janaPlant,
title: "Jana Soda Chemical Plant",
location: "Jubail",
category: "Maintenance",
year: "2025",
progress: 20,
client: "Jana Plant / Metluck Company",
description:
"HVAC installation, RTR pipe repairing, split AC installation and MCC replacement work."
}
];

const OngoingProjects = () => {
return (
<div className="min-h-screen">

<Header />

<main>

{/* Hero Banner */}

<section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">

<div className="absolute inset-0">
<img src={hero3} alt="Ongoing Projects" className="w-full h-full object-cover" />
<div className="absolute inset-0 gradient-overlay" />
</div>

<div className="relative z-10 text-center text-primary-foreground">

<motion.h1
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
className="text-5xl md:text-6xl font-heading font-bold mb-4"
>
Ongoing Projects
</motion.h1>

<motion.p
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.2 }}
className="text-xl text-primary-foreground/80"
>
Current Projects in Progress
</motion.p>

</div>

</section>

{/* Projects Grid */}

<section className="section-padding bg-background">

<div className="section-container">

<div className="grid lg:grid-cols-2 gap-8">

{projects.map((project, index) => (

<motion.div
key={project.title}
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1 }}
className="card-industrial overflow-hidden"
>

<div className="relative h-64">

<img
src={project.image}
alt={project.title}
className="w-full h-full object-cover"
/>

<div className="absolute top-4 left-4 flex gap-2">

<span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded">
{project.category}
</span>

<span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded">
Ongoing
</span>

</div>

</div>

<div className="p-6">

<h3 className="text-2xl font-heading font-bold text-foreground mb-3">
{project.title}
</h3>

<p className="text-muted-foreground mb-4">
{project.description}
</p>

<div className="flex items-center justify-between text-sm text-muted-foreground mb-4">

<span className="flex items-center gap-1">
<MapPin className="w-4 h-4" />
{project.location}
</span>

<span className="flex items-center gap-1">
<Calendar className="w-4 h-4" />
{project.year}
</span>

</div>

{/* Progress Bar */}

<div>

<div className="flex justify-between text-sm mb-2">
<span className="text-foreground font-medium">Progress</span>
<span className="text-primary font-bold">{project.progress}%</span>
</div>

<div className="h-2 bg-muted rounded-full overflow-hidden">

<motion.div
initial={{ width: 0 }}
whileInView={{ width: `${project.progress}%` }}
viewport={{ once: true }}
transition={{ duration: 1, delay: 0.5 }}
className="h-full bg-primary rounded-full"
/>

</div>

</div>

</div>

</motion.div>

))}

</div>

</div>

</section>

</main>

<Footer />

</div>
);
};

export default OngoingProjects;