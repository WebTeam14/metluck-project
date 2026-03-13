import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin } from "lucide-react";

/* Hero */
import hero3 from "@/assets/hero-3.jpg";

/* Completed Project Images */
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

/* Ongoing Images */
import pumpStation2 from "@/assets/projects/ongoing/pump-station.jpeg";
import kingSalmanPort from "@/assets/projects/ongoing/king-salman-mina-port.jpeg";
import abuAliPlant from "@/assets/projects/ongoing/abu-ali-increasement.jpeg";
import janaPlant from "@/assets/projects/ongoing/jana-soda-plant.jpeg";

const projects = [

/* Completed */

{
image: kgpImg,
title: "KGP Project",
location: "Khursaniya",
category: "Civil",
status: "Completed",
year: "2023",
},

{
image: tubularImg,
title: "Tubular Pipe Coating",
location: "Dammam",
category: "Industrial",
status: "Completed",
year: "2023",
},

{
image: apocImg,
title: "APOC Project",
location: "Jubail",
category: "Industrial",
status: "Completed",
year: "2025",
},

{
image: aramcoTrainingImg,
title: "Aramco Training Center",
location: "Ras Tanura",
category: "Construction",
status: "Completed",
year: "2024",
},

{
image: kingSalmanImg,
title: "King Salman Maritime Project",
location: "Ras Al Khair",
category: "Infrastructure",
status: "Completed",
year: "2026",
},

{
image: pumpStationImg,
title: "Pump Station 3 Khurais",
location: "Khurais",
category: "Construction",
status: "Completed",
year: "2022",
},

{
image: khafjiImg,
title: "Khafji Joint Operation",
location: "Khafji",
category: "Industrial",
status: "Completed",
year: "2023",
},

{
image: gccLabImg,
title: "GCC Lab",
location: "Dammam",
category: "Construction",
status: "Completed",
year: "2023",
},

{
image: omsImg,
title: "OMS Project",
location: "Dammam",
category: "Maintenance",
status: "Completed",
year: "2025",
},

{
image: janaImg,
title: "JANA Project",
location: "Jubail",
category: "Maintenance",
status: "Completed",
year: "2026",
},

/* Ongoing */

{
image: pumpStation2,
title: "Pump Station-2",
location: "Khurais",
category: "Construction",
status: "Ongoing",
year: "2024",
},

{
image: kingSalmanPort,
title: "King Salman Mina Port",
location: "Ras Al Khair",
category: "Industrial",
status: "Ongoing",
year: "2024",
},

{
image: abuAliPlant,
title: "Abu Ali Increasement Plant",
location: "Abu Ali Island",
category: "Industrial",
status: "Ongoing",
year: "2024",
},

{
image: janaPlant,
title: "Jana Soda Chemical Plant",
location: "Jubail",
category: "Maintenance",
status: "Ongoing",
year: "2025",
},

];

const Projects = () => {

const [filter, setFilter] = useState("All");

const filteredProjects =
filter === "All"
? projects
: projects.filter((project) => project.status === filter);

return (

<div className="min-h-screen">

<Header />

<main>

{/* Hero */}

<section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">

<div className="absolute inset-0">
<img src={hero3} className="w-full h-full object-cover"/>
<div className="absolute inset-0 gradient-overlay"/>
</div>

<div className="relative z-10 text-center text-primary-foreground">

<motion.h1
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
className="text-5xl md:text-6xl font-heading font-bold mb-4"
>
Our Projects
</motion.h1>

<motion.p
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:0.2}}
className="text-xl text-primary-foreground/80"
>
Engineering Excellence Across Industries
</motion.p>

</div>

</section>


{/* Filter */}

<section className="pt-16">

<div className="section-container flex justify-center">

<div className="flex gap-4 bg-white shadow-md p-2 rounded-full">

<button
onClick={()=>setFilter("All")}
className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
filter==="All"
? "bg-primary text-white shadow-md scale-105"
: "bg-gray-100 text-gray-700 hover:bg-primary hover:text-white"
}`}
>
All
</button>

<button
onClick={()=>setFilter("Ongoing")}
className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
filter==="Ongoing"
? "bg-primary text-white shadow-md scale-105"
: "bg-gray-100 text-gray-700 hover:bg-primary hover:text-white"
}`}
>
Ongoing
</button>

<button
onClick={()=>setFilter("Completed")}
className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
filter==="Completed"
? "bg-primary text-white shadow-md scale-105"
: "bg-gray-100 text-gray-700 hover:bg-primary hover:text-white"
}`}
>
Completed
</button>

</div>

</div>

</section>


{/* Grid */}

<section className="section-padding">

<div className="section-container">

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{filteredProjects.map((project,index)=>(

<motion.div
key={project.title}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:index*0.1}}
className="card-industrial overflow-hidden group"
>

<div className="relative h-64 overflow-hidden">

<img
src={project.image}
alt={project.title}
className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
/>

<div className="absolute top-4 left-4 flex gap-2">

<span className="px-3 py-1 bg-primary text-white text-xs rounded">
{project.category}
</span>

<span className={`px-3 py-1 text-xs rounded ${project.status==="Ongoing"?"bg-green-500 text-white":"bg-gray-200"}`}>
{project.status}
</span>

</div>

</div>

<div className="p-6">

<h3 className="text-xl font-heading font-bold mb-2">
{project.title}
</h3>

<div className="flex justify-between text-sm text-muted-foreground">

<span className="flex items-center gap-1">
<MapPin className="w-4 h-4"/>
{project.location}
</span>

<span>{project.year}</span>

</div>

</div>

</motion.div>

))}

</div>

</div>

</section>

</main>

<Footer/>

</div>

);
};

export default Projects;