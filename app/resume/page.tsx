"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiPython } from "react-icons/si";

const data = [
  {
    title: "About Me",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe distinctio repellendus assumenda.",
    info: [
      {
        fielName: "Name",
        fieldValue: "Dinesh Niure",
      },
      {
        fielName: "Phone",
        fieldValue: "(+977) 986 3040 097",
      },
      {
        fielName: "Experience",
        fieldValue: "2+ Years",
      },
      {
        fielName: "Skype",
        fieldValue: "dinesh.niure07",
      },
      {
        fielName: "Nationality",
        fieldValue: "Nepali",
      },
      {
        fielName: "Email",
        fieldValue: "starkdinesh2@gmail.com",
      },
      {
        fielName: "Freelance",
        fieldValue: "Available",
      },
      {
        fielName: "Language",
        fieldValue: "English, Nepali, Hindi",
      },
    ],
  },
];

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe distinctio repellendus assumenda.",
  items: [
    {
      company: "eVipann",
      position: "Full Stack Developer",
      date: "2022 - Present",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      date: "2022 - 2023",
    },
    {
      company: "Tech Academy",
      position: "Freelance Web Developer",
      date: "2022 - 2023",
    },
    {
      company: "Digital Marketing Agency",
      position: "Freelance Web Developer",
      date: "2023 - present",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe distinctio repellendus assumenda.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Devlopment Bootcamp",
      date: "2023",
    },
    {
      institution: "Codecademy",
      degree: "Front-End Track(react)",
      date: "2022",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      date: "2021 - 2023",
    },
    {
      institution: "Tech Institute",
      degree: " Certified Web Developer",
      date: "2021",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe distinctio repellendus assumenda.",
  items: [
    {
      title: "HTML5",
      icon: <FaHtml5 />,
    },
    {
      title: "CSS3",
      icon: <FaCss3 />,
    },
    {
      title: "JavaScript",
      icon: <FaJs />,
    },
    {
      title: "React",
      icon: <FaReact />,
    },
    {
      title: "NodeJs",
      icon: <FaNodeJs />,
    },
    {
      title: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      title: "NextJs",
      icon: <SiNextdotjs />,
    },
    {
      title: "Python",
      icon: <SiPython />,
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-center justify-center py-12 xl:p-8"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience"> Experience</TabsTrigger>
            <TabsTrigger value="education"> Education</TabsTrigger>
            <TabsTrigger value="skills"> Skills</TabsTrigger>
            <TabsTrigger value="about"> About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              {" "}
              Experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
