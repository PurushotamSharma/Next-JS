"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const projects = [
  {
    num: '01',
    title: 'Web Development Project',
    description: 'A portfolio website to showcase my work and skills.',
    stacks: ['React', 'Next.js', 'Tailwind CSS'],
    images: [
      '/assets/work/thumb1.png',
      '/assets/work/thumb2.png',
      '/assets/work/thumb3.png',
    ],
  },
  {
    num: '02',
    title: 'Fullstack Project',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.',
    stacks: ['Next.js', 'Tailwind.css', 'Node.js'],
    images: [
      '/assets/work/thumb4.png',
      '/assets/work/thumb5.png',
      '/assets/work/thumb6.png',
    ],
  },
  {
    num: '03',
    title: 'Chat Application Project',
    description: 'A Chat application build in react and firebase.',
    stacks: ['React', 'Next.js', 'Firebase', 'Tailwind CSS'],
    images: [
      '/assets/work/thumb7.png',
      '/assets/work/thumb8.png',
      '/assets/work/thumb9.png',
    ],
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[1]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full text-center xl:text-left">
            <h1 className="text-4xl font-bold mb-4">{project.num} {project.title}</h1>
            <p className="text-white/60 mb-8">{project.description}</p>
            <div className="flex justify-center xl:justify-start flex-wrap gap-2 mb-8">
              {project.stacks.map((stack, index) => (
                <span key={index} className="bg-white/10 text-white px-3 py-1 rounded-full">
                  {stack}
                </span>
              ))}
            </div>
            <div className="flex justify-center xl:justify-start gap-4">
              <BsFillArrowLeftCircleFill className="text-white text-4xl cursor-pointer" />
              <BsFillArrowRightCircleFill className="text-accent text-4xl cursor-pointer" />
            </div>
          </div>
          <div className="w-full">
            <Swiper
              slidesPerView={1}
              loop={true}
              pagination={{
                clickable: true,
              }}
              onSlideChange={handleSlideChange}
            >
              {project.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[400px]">
                    <Image
                      src={image}
                      alt={`Project ${project.num}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;