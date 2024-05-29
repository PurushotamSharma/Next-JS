"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: '01',
    title: "Web Development",
    description: "We build responsive websites that are optimized for performance and SEO.",
    href: ""
  },
  {
    num: '02',
    title: "Cloud Services",
    description: "We provide cloud services for all the cloud provider  that are scalable and secure.",
    href: ""
  },
  {
    num: '03',
    title: "UI/UX Design",
    description: "We design user interfaces that are intuitive and visually appealing.",
    href: ""
  },
  {
    num: '04',
    title: "Logo Design",
    description: "Transforming brand identities with creative, impactful logo designs that leave a lasting impression.",
    href: ""
  },
];

import { motion } from "framer-motion";



const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
      <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease:"easeIn"
        },
      }}
      className="grid grid-cols md:grid-cols-2 gap-[60px]"
      >
        {services.map((service, index) => {
          return(
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
{/* top */}
<div className="w-full flex justify-between items-center">
  <div  className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
  <Link href={service.href}
  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent flex items-center justify-center transition-all duration-500 hover:-rotate-45"
  >
    <BsArrowDownRight className="text-primary text-3xl" />
  </Link>
</div>
{/* title */}
<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
{/* description */}
<p className="text-white/60">{service.description}</p>
{/* border */}

<div className="border-b border-white/20 w-full"></div>

            </div>
          )
        })}

      </motion.div>
      </div>
    </section>
  )
}

export default Services
