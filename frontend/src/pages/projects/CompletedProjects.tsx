import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Calendar, CheckCircle } from "lucide-react";

/* Hero Image */
import hero1 from "@/assets/hero-1.jpg";

/* Project Images */
import kgpImg from "@/assets/projects/completed/kgp.png";
import tubularImg from "@/assets/projects/completed/tubular-pipe-coating.jpeg";
import apocImg from "@/assets/projects/completed/apoc-project.jpeg";
import aramcoTrainingImg from "@/assets/projects/completed/aramco-training-center.jpeg";
import kingSalmanImg from "@/assets/projects/completed/king-salman-maritime.jpeg";
import pumpStationImg from "@/assets/projects/completed/pump-station-khurais.jpeg";
import khafjiImg from "@/assets/projects/completed/khafji-joint-operation.jpeg";
import gccLabImg from "@/assets/projects/completed/gcc-lab.jpeg";
import omsImg from "@/assets/projects/completed/oms-project.jpeg";
import janaImg from "@/assets/projects/completed/jana-project.jpeg";

const projects = [
{
image: kgpImg,
title: "KGP Project",
location: "Khursaniya, Saudi Arabia",
category: "Civil Construction",
year: "2023",
client: "Aramco / Sendan",
description: "Building construction and fencing work."
},
{
image: tubularImg,
title: "Tubular Pipe Coating",
location: "3rd Industrial Area, Dammam",
category: "Industrial",
year: "2021-2023",
client: "Metluck",
description: "Civil foundation, structure fabrication, firefighting, HVAC installation and commissioning."
},
{
image: apocImg,
title: "APOC Project",
location: "Jubail, Saudi Arabia",
category: "Industrial",
year: "2023",
client: "Aramco / Gas Arabia Services",
description: "Security building construction, fencing work and piping installation."
},
{
image: aramcoTrainingImg,
title: "Aramco Training Center",
location: "Ras Tanura",
category: "Construction",
year: "2022",
client: "Aramco / Arkan",
description: "Civil construction, structure fabrication and firefighting installation."
},
{
image: kingSalmanImg,
title: "King Salman Maritime Project",
location: "Ras Al Khair",
category: "Infrastructure",
year: "2022",
client: "Aramco / SEPCO",
description: "Civil construction and RTR piping works."
},
{
image: pumpStationImg,
title: "Pump Station 3 Khurais",
location: "Khurais",
category: "Construction",
year: "2021",
client: "Aramco / L&T",
description: "Civil construction and fencing work."
},
{
image: khafjiImg,
title: "Khafji Joint Operation",
location: "Khafji",
category: "Industrial",
year: "2022",
client: "KJO / Arkan",
description: "Civil construction and firefighting installation."
},
{
image: gccLabImg,
title: "GCC Lab",
location: "Dammam",
category: "Construction",
year: "2022",
client: "GCC Lab / Metluck",
description: "Civil construction building work."
},
{
image: omsImg,
title: "OMS Project",
location: "Dammam",
category: "Maintenance",
year: "2021",
client: "OMS / Metluck",
description: "Mechanical work, crane installation, electrical work and plant maintenance."
},
{
image: janaImg,
title: "JANA Project",
location: "Jubail Industrial Area",
category: "Maintenance",
year: "2025",
client: "JANA / Metluck",
description: "Dewatering, heavy equipment support, blasting and painting, plant maintenance."
}
];

const CompletedProjects = () => {
return (
<div className="min-h-screen">

<Header />

<main>

{/* Hero Banner */}

<section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">

<div className="absolute inset-0">
<img src={hero1} alt="Completed Projects" className="w-full h-full object-cover"/>
<div className="absolute inset-0 gradient-overlay"/>
</div>

<div className="relative z-10 text-center text-primary-foreground">

<motion.h1
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
className="text-5xl md:text-6xl font-heading font-bold mb-4"
>
Completed Projects
</motion.h1>

<motion.p
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:0.2}}
className="text-xl text-primary-foreground/80"
>
Our Track Record of Excellence
</motion.p>

</div>

</section>


{/* Projects Grid */}

<section className="section-padding bg-background">

<div className="section-container">

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{projects.map((project,index)=>(
<motion.div
key={project.title}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:index*0.1}}
className="card-industrial overflow-hidden group"
>

<div className="relative h-56 overflow-hidden">

<img
src={project.image}
alt={project.title}
className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
/>

<div className="absolute top-4 left-4">

<span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded">
{project.category}
</span>

</div>

<div className="absolute top-4 right-4">

<CheckCircle className="w-8 h-8 text-green-500 bg-white rounded-full"/>

</div>

</div>

<div className="p-6">

<h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
{project.title}
</h3>

<p className="text-sm text-muted-foreground mb-4">
{project.description}
</p>

<div className="flex items-center justify-between text-sm text-muted-foreground">

<span className="flex items-center gap-1">
<MapPin className="w-4 h-4"/>
{project.location}
</span>

<span className="flex items-center gap-1">
<Calendar className="w-4 h-4"/>
{project.year}
</span>

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

export default CompletedProjects;