import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import bondi from '@/public/images/bondi.png'
import manage from '@/public/images/manage.png'
import typinggame from '@/public/images/typinggame.png'
// import designresources from '@/public/images/designresources.png'
import doctidox from '@/public/images/doctidox.png'
import housely from '@/public/images/housely.png'
import contentgen from '@/public/images/contentgen.png'
// import Blog from '@/public/images/blog.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachlor in Computer Science",
    location: "Guelma Algeria",
    description:
      "I completed a Bachelor's degree in Computer Science with excellent results on my final project, which focused on object detection using ML (HOG & SVM) and Deep Learning (Yolo v3).",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Master in Computer Science",
    location: "Guelma Algeria",
    description:
      "I have successfully completed a Master's in Computer Science and achieved excellent results in my final project, which focused on a Point Of Interest (POI) recommender system. I employed a combination of machine learning, deep learning, and graph techniques to obtain these results.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Freelancer",
    location: "Guelma Algeria",
    description:
      "I embarked on a freelance journey, specializing in web development, and successfully completed client projects to their satisfaction.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "TypingGame",
    description:
      "I created this web app while learning JavaScript, and it's my first project using vanilla JavaScript.",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: typinggame,
    demo: "https://bouakram.github.io/Typing-Game/",
    git: "https://github.com/bouakram/Typing-Game"
  },
  {
    title: "BondiLandingPage",
    description:
      "I created this landing page while learning HTML and CSS, and I utilized Bootstrap to construct it.",
    tags: ["HTML", "CSS", "Bootstrap"],
    imageUrl: bondi,
    demo: "https://bouakram.github.io/bootstrap-frontend-template/",
    git: "https://github.com/bouakram/bootstrap-frontend-template"
  },
  {
    title: "ManageLandingPage",
    description:
      "I created this landing page to further practice HTML and CSS, building it with Tailwind CSS.",
    tags: ["HTML", "CSS", "Tailwind"],
    imageUrl: manage,
    demo: "https://62d30bf8200b4b3bdc63e8e9--silver-speculoos-53e894.netlify.app/",
    git: "https://github.com/bouakram/tailwind-project/tree/master"
  },
  // {
  //   title: "Blog",
  //   description:
  //     "I created this blog website to share valuable information and provide tutorials to help people enhance their skills.",
  //   tags: ["React","Next", "MongoDB", "Prisma", "Tailwind"],
  //   imageUrl: Blog,
  //   demo: "https://codeeaseblog.vercel.app/",
  //   git: "https://github.com/bouakram/blog-app/tree/main"
  // },
  // {
  //   title: "DesignResources",
  //   description:
  //     "I've developed a website that offers various tools to assist developers worldwide.",
  //   tags: ["React", "Strapi","Tailwind"],
  //   imageUrl: designresources,
  //   demo: "#",
  //   git: "#"
  // },
  {
    title: "ContentGen",
    description:
      "I've developed a website that offers AI social media content generator.",
    tags: ["React", "TypeScript", "ChakraUi", "Express", "Prisma", "OpenAI", "PassportJS"],
    imageUrl: contentgen,
    demo: "#",
    git: "https://github.com/bouakram/ai-description-generator-client"
  },
  {
    title: "DoctiDox",
    description:
      "I developed the backend and the dynamic part in the front-end to create a  platform serving medical students with courses, PDFs, audio, video, quizzes, and more.",
    tags: ["React", "Node", "Express", "MongoDB", "Docker", "Redux"],
    imageUrl: doctidox,
    demo: "http://doctidox.com/",
    git: "#"
  },
  {
    title: "Housely",
    description:
      "Developed full stack cross-platform Mobile App For house renting and reservation with Payment Service",
    tags: ["EXPO", "Zustand", "TypeScript", "EAS", "NodeJS", "MongoDB"],
    imageUrl: housely,
    demo: "https://play.google.com/store/apps/details?id=com.housely.app&pcampaignid=web_share",
    git: "#"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Go",
  "Solidity",
  "Node JS",
  "Express JS",
  "React JS",
  "React Native",
  "Expo",
  "Next JS",
  "Git - GitHub",
  "Tailwind",
  "MUI",
  "Redux",
  "RTK",
  "RTK Query",
  "Zustand",
  "MongoDB",
  "Docker",
  "Foundry"
] as const;
