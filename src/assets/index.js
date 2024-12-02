//Hero Icons
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import GithubLineIcon from "remixicon-react/GithubLineIcon";
import CodeSSlashLineIcon from "remixicon-react/CodeSSlashLineIcon";
import DribbbleLineIcon from "remixicon-react/DribbbleLineIcon";
import LinkedinLineIcon from "remixicon-react/LinkedinLineIcon";
import TwitterLineIcon from "remixicon-react/TwitterLineIcon";
import FacebookCircleLineIcon from "remixicon-react/FacebookCircleLineIcon";

export const heroIcons = [
  <InstagramLineIcon key="instagram" />,
  <GithubLineIcon key="github" />,
  <LinkedinLineIcon key="linkedin" />,
  <TwitterLineIcon key="twitter" />,
  <DribbbleLineIcon key="dribbble" />,
  <CodeSSlashLineIcon key="code" />,
  <FacebookCircleLineIcon key="facebook" />
];

//About Icons
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import Rocket2LineIcon from "remixicon-react/Rocket2LineIcon";
import Projector2LineIcon from "remixicon-react/Projector2LineIcon";
import GroupLineIcon from "remixicon-react/GroupLineIcon";
import AwardLineIcon from "remixicon-react/AwardLineIcon";

export const aboutData = [
  {
    title: "Github Repos",
    amount: 348,
    icon: <GithubFillIcon />
  },

  {
    title: "Successfully Projects",
    amount: 227,
    icon: <Projector2LineIcon />
  },
  {
    title: "Happy Clients",
    amount: 176,
    icon: <GroupLineIcon />
  },

  {
    title: "Awards Won and Recognitions",
    amount: 107,
    icon: <AwardLineIcon />
  },

]

import DownloadLineIcon from "remixicon-react/DownloadLineIcon";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";


export const downloadIcons = <DownloadLineIcon />;
export const arrowLeftIcons = <ArrowLeftSFillIcon />;

export const aboutText = "I am a full stack developer with a passion for creating web applications that are both functional and aesthetically pleasing. I have experience with a variety of programming languages and frameworks, including JavaScript, React, Node.js, and MongoDB. I am a quick learner and always looking for new challenges and opportunities to grow.";
// End of About Me

// Skills Icons
export const experienceData = [
  {
    year: 1,
    title: "Foundation and Basics",
    education:
      "High School Diploma: Focus on computer science, mathematics, and art/design courses.",
    experience: [
      "• Basic HTML/CSS: Learn through online tutorials and practice projects",
      "• Projects: Developed a simple blog website using HTML, CSS, and JavaScript",
    ],
  },
  {
    year: 2,
    title: "Bachelor's Degree",
    education:
      "Bachelor's Degree in Computer Science: Focus on software development, algorithms, and data structures.",
    experience: [
      "• Core Engineering Subjects: Data Structures, Algorithms, Operating Systems, Database Management Systems, Computer Networks",
      "• Final Year Projects: Robot Teleportation System using Virtual Reality",
      "•Implemented basic data structures and algorithms from scratch",
    ],
  },
  {
    year: 3,
    title: "Master's Degree",
    education:
      "Master's Degree in Computer Science: Focus on advanced software development, artificial intelligence, and machine learning.",
    experience: [
      "• Advanced Data Structures and Algorithms: Mastered complex algorithms and data structure implementations",
      "• Artificial Intelligence: Studied neural networks, deep learning and natural language processing",
      "• Machine Learning: Implemented various ML models and algorithms from scratch",
      "• Software Engineering: Learned system design, architecture patterns and best practices",
      "• Capstone Project: Built an end-to-end movie recommendation engine using collaborative filtering and deep learning",
    ],
  },
  {
    year: 4,
    title: "Software Developer",
    education:
      "Full Stack Developer: Focus on advanced software development, artificial intelligence, and machine learning.",
    experience: [
      "MindSprint Pvt. Ltd. | Chennai:",
      "• Developed applications for various platforms including iOS, Android and cross-platform solutions",
      "• Restructured UI architecture using Redux and subscribers to improve response time and user experience",
      "• Wrote clean, maintainable code using Java, Python, SQL and managed projects with Jira",
      "• Gained experience with SpringBoot, AWS, Google Cloud Platform and Microsoft Azure",
      "Personal Projects: Built a movie recommendation system using Python and machine learning techniques",
    ],
  },
];


// Skills

export const skillsData = [
  {
    name: "NextJS",
    icon: "/Assets/skills/nextjs.png",
  },
  {
    name: "Photoshop",
    icon: "/Assets/skills/photoshop.png",
  },
  {
    name: "ReactJS",
    icon: "/Assets/skills/react.png",
  },
  {
    name: "TailwindCSS",
    icon: "/Assets/skills/tailwind.png",
  },
  {
    name: "AI",
    icon: "/Assets/skills/ai.png",
  },
  {
    name: "Blender",
    icon: "/Assets/skills/blender.png",
  },
  {
    name: "CSS",
    icon: "/Assets/skills/css.png",
  },
  {
    name: "Figma",
    icon: "/Assets/skills/figma.png",
  },
  {
    name: "Framer",
    icon: "/Assets/skills/framer.png",
  },
  {
    name: "GitHub",
    icon: "/Assets/skills/github.png",
  },
  {
    name: "HTML",
    icon: "/Assets/skills/html.png",
  },
  {
    name: "JavaScript",
    icon: "/Assets/skills/js.png",
  },
  {
    name: "MongoDB",
    icon: "/Assets/skills/mongodb.png",
  },
  {
    name: "NodeJS",
    icon: "/Assets/skills/nodejs.png",
  },
  {
    name: "ThreeJS",
    icon: "/Assets/skills/threejs.png",
  },
  {
    name: "TypeScript",
    icon: "/Assets/skills/ts.png",
  },
  {
    name: "Vite",
    icon: "/Assets/skills/vite.png",
  },
  {
    name: "VSCode",
    icon: "/Assets/skills/vscode.png",
  },
];


//Project 

export const projectsData = [
  {
    name: "The Planets",
    desc: "This is a wonder-full project based on ThreeJS, ReactJs, JavaScript. In this project I tried to show planet movements with detail texture using Shaders material VertexShader and FragmentShader",
    url: "/Assets/projects/image-11(3D).png",
    tech: ["ReactJS", "ThreeJS", "JS"],
    code: "https://github.com/Roy12233444/threecode-Planet-Project",
    preview: "https://threecode-planet-project.vercel.app",
  },
  {
    name: "Deveb.Co",
    desc: "This is a wonder-full project based on ThreeJS, ReactJs, JavaScript. In this project I tried to show planet movements with detail texture using Shaders material VertexShader and FragmentShader",
    url: "/Assets/projects/image-12(3D).png",
    tech: ["ReactJS", "ThreeJS", "JS"],
    code: "https://github.com/Roy12233444/dweb",
    preview: "https://dwebs-sourav-rays-projects.vercel.app/",
  },
  {
    name: "ZAJNO",
    desc: "This is a wonder-full project based on ThreeJS, ReactJs, JavaScript.In this project I tried to show planet movements with detail texture using Shaders material VertexShader and FragmentShader",
    url: "/Assets/projects/image-13(3D).png",
    tech: ["ReactJS", "ThreeJS", "JS"],
    code: "https://github.com/Roy12233444/zajnos",
    preview: "https://zajnos-sourav-rays-projects.vercel.app/",
  },
  {
    name: "The Blob Mixer",
    desc: "This is a wonder-full project based on ThreeJS, ReactJs, JavaScript. In this project I tried to show planet movements with detail texture using Shaders material VertexShader and FragmentShader",
    url: "/Assets/projects/image-14(3D).png",
    tech: ["ReactJS", "ThreeJS", "JS"],
    code: "https://github.com/Roy12233444/blobmixersfinal",
    preview: "https://blobmixer-pi.vercel.app/",
  },

  //image 5, 6, 8, 9 in React JS
  {
    name: "Web Design",
    desc: "This is a wonder-full project based on ThreeJS, ReactJs, JavaScript. In this project I tried to show planet movements with detail texture using Shaders material VertexShader and FragmentShader",
    url: "/Assets/projects/image-5.jpg",
    tech: ["TailwindCSS", "ReactJS"],
    code: "https://github.com/Roy12233444/project-5",
    preview: "https://project-5.vercel.app",
  },

  //image 6
  {
    name: "Shopping Website",
    desc: "This is a wonder-full project based on , ReactJs, JavaScript. In this project I tried to show planet movements with detail texture using Shaders material VertexShader and FragmentShader",
    url: "/Assets/projects/image-6.jpg",
    tech: ["ReactJS", "TailwindCSS"],
    code: "https://github.com/Roy12233444/project-6",
    preview: "https://project-6.vercel.app",
  },

  //image8
  {
    name: "Web Design Framer",
    desc: "This is a wonder-full project based on , ReactJs, JavaScript. In this project I tried to show planet movements with detail texture using Shaders material VertexShader and FragmentShader",
    url: "/Assets/projects/image-8.jpg",
    tech: ["ReactJS", "Framer"],
    code: "https://github.com/Roy12233444/project-7",
    preview: "https://project-7.vercel.app",
  },

  //image9
  {
    name: "StellarSkiesAstronomy",
    desc: "This is a wonder-full project based on , ReactJs, JavaScript. In this project I tried to show planet movements with detail texture using Shaders material VertexShader and FragmentShader",
    url: "/Assets/projects/image-9.jpg",
    tech: ["ReactJS", "ThreeJS", "JS"],
    code: "https://github.com/Roy12233444/project-8",
    preview: "https://project-8.vercel.app",
  },
  {
    name: "The Planets",
    desc: "This is a wonder-full project based on , ReactJs, JavaScript. In this project I tried to show planet movements with detail texture using Shaders material VertexShader and FragmentShader",
    url: "/Assets/projects/image-11(3D).png",
    tech: ["", "", "JS"],
    code: "https://github.com/Roy12233444/project-9",
    preview: "https://project-9.vercel.app",
  },
  {
    name: "The Planets",
    desc: "This is a wonder-full project based on , , JavaScript. In this project I tried to show planet movements with detail texture using Shaders material VertexShader and FragmentShader",
    url: "/Assets/projects/image-11(3D).png",
    tech: ["", "", "JS"],
    code: "https://github.com/Roy12233444/project-10",
    preview: "https://project-10.vercel.app",
  },
  {
    name: "The Planets",
    desc: "This is a wonder-full project based on , , JavaScript. In this project I tried to show planet movements with detail texture using Shaders material VertexShader and FragmentShader",
    url: "/Assets/projects/image-11(3D).png",
    tech: ["", "", "JS"],
    code: "https://github.com/Roy12233444/project-11",
    preview: "https://project-11.vercel.app",
  },
  {
    name: "The Planets",
    desc: "This is a wonder-full project based on , , JavaScript. In this project I tried to show planet movements with detail texture using Shaders material VertexShader and FragmentShader",
    url: "/Assets/projects/image-11(3D).png",
    tech: ["", "", "JS"],
    code: "https://github.com/Roy12233444/project-12",
    preview: "https://project-12.vercel.app",
  },
  {
    name: "The Planets",
    desc: "This is a wonder-full project based on , , JavaScript. In this project I tried to show planet movements with detail texture using Shaders material VertexShader and FragmentShader",
    url: "/Assets/projects/image-11(3D).png",
    tech: ["", "", "JS"],
    code: "https://github.com/Roy12233444/project-13",
    preview: "https://project-13.vercel.app",
  },
  {
    name: "The Planets",
    desc: "This is a wonder-full project based on , , JavaScript. In this project I tried to show planet movements with detail texture using Shaders material VertexShader and FragmentShader",
    url: "/Assets/projects/image-11(3D).png",
    tech: ["", "", "JS"],
    code: "https://github.com/Roy12233444/project-14",
    preview: "https://project-14.vercel.app",
  },
];



// Project Button

export const projectsButton = [
  "All",
  "ReactJS",
  "ThreeJS",
  "AnimatedProject",
  "TailwindCSS",
  "NodeJS",
  "Framer",
  "CSS",
  "HTML",
  "JS",
];




import CheckLineIcon from "remixicon-react/CheckLineIcon";
export const checkIcon = <CheckLineIcon />;

//Q&A section


export const questions = [
  {
    question: "How much do you charge for a website?",
    answer:
      "It depends on the complexity of the website and the features you want to include. I offer a free consultation to discuss your project and provide a quote based on your needs.",
  },
  {
    question: "Why are you so expensive?",
    answer:
      "he process we use to build your website takes a certain amount of time and a lot of planning and research. Unlike other agencies, we DON’T use templates. We build your website from scratch, which means you get a unique design tailored around your business. Buying a website from us should not just simply be seen as a business expense as your website is a sales tool that should earn you money",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "It takes approximately 6-10 weeks to build a website from start to finish, providing we have all the information from you. Our full web design process is broken down here. Generally speaking, the website will only take a long time if we are still waiting for text and images from yourself.",
  },
  {
    question: "How do we communicate throughout the website build?",
    answer:
      "Before we begin working together, we’ll usually have an initially chat on the phone or via Skype to discuss the project. Once we get started, most of the communication will take place over email. This makes the process a lot easier as we’ll have all of the information saved and can come back to it later. Once we’ve finished the project, we will book in your 1hr digital marketing training session.",
  },
  {
    question: "What will you need from me?",
    answer:
      "It really depends on what type of website you want. We’ll be able to discuss this on our discovery call before we start working together. Depending on which package we agree on we could need…",
  },
  {
    question: "What if I don’t like the website?",
    answer:
      "You’re in luck. We offer a risk-free guarantee. Before we build your new website, we’ll design a mockup of your homepage. We’ll design a layout in Photoshop first, that way you’ll get to see our initial designs within approximately ten days. This is your opportunity to give us feedback and if you really don’t like it, you don’t have to move forward. Best part is, this won’t cost you anything.",
  },
  {
    question: "Do you offer a payment schedule?",
    answer:
      "Yes, we split the payment into two. The first 50% is usually taken once you have seen the mockup of your homepage and you’re happy to move forward. The following 50% is taken 30 days after this.",
  },
  {
    question: "Can I make the final payment when the site is ready to go live?",
    answer:
      "No. In the past we have found that projects can take a lot longer than expected to complete. We might be waiting for information from you and this can delay the process. Sometimes these delays can take months. This is why we always invoice 30 days after the original payment. At this point we’ll be well on our way with your new website and you’ll be able to see the progress.",
  },
  {
    question: "Who hosts the website?",
    answer:
      "If we build your website, we will generally manage the hosting for you so you don’t need to do anything. We use the same hosting company for our own website and for ALL our clients. Each website is managed individually to avoid any security issues. Every website we build has unlimited bandwidth, 20GB of disk space, 2GB Ram and 99.9% uptime. We’ve used the same company for 5 years and we don’t plan on changing this anytime soon.",
  },
  {
    question: "Can I update the website myself once it’s been built?",
    answer:
      "Yes. We like to offer the ability for our clients to update the website themselves. We we’ll give you all the training and tools to be able to make website amendments. We use a easy to use platform called WordPress so you can add edit and delete content without paying us to do it for you.",
  },
  {
    question:
      "What if I don’t want to manage the website at all. Can you do it all for me?",
    answer:
      "Yes, we can arrange a maintenance package to suit your needs. This can range from 1hr per month to 10 hours per month and we can discuss a package that’s right for you.",
  },
];


import ArrowDropDownLineIcon from "remixicon-react/ArrowDropDownLineIcon";

export const QuestionArrow = <ArrowDropDownLineIcon />;


//Navbar

import CopyrightLineIcon from "remixicon-react/CopyrightLineIcon";

export const copyrightIcon = <CopyrightLineIcon />


import Home5LineIcon from "remixicon-react/Home5LineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import HistoryLineIcon from "remixicon-react/HistoryLineIcon";
import BriefcaseLineIcon from "remixicon-react/BriefcaseLineIcon";
import UserStarLineIcon from "remixicon-react/UserStarLineIcon";
import ProjectorLineIcon from "remixicon-react/ProjectorLineIcon";
import PriceTag3LineIcon from "remixicon-react/PriceTag3LineIcon";
import ContactsBook2LineIcon from "remixicon-react/ContactsBook2LineIcon";
import Message2LineIcon from "remixicon-react/Message2LineIcon";



export const navbarData = [
  {
    id: 'home',
    name: 'Home',
    icon: <Home5LineIcon />
  },
  {
    id: 'about',
    name: 'About',
    icon: <UserLineIcon />
  },
  {
    id: 'experience',
    name: 'MyRoad',
    icon: <HistoryLineIcon />

  },
  {
    id: 'skills',
    name: 'Skills',
    icon: <BriefcaseLineIcon />
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <ProjectorLineIcon />
  },
  {
    id: 'contact',
    name: 'Contact',
    icon: <ContactsBook2LineIcon />
  },
  {
    id: 'message',
    name: 'Message',
    icon: <Message2LineIcon />
  }
]


//Toggle

import MoonFoggyFillIcon from "remixicon-react/MoonFoggyFillIcon";
import SunFoggyFillIcon from "remixicon-react/SunFoggyFillIcon";

export const moonIcon = <MoonFoggyFillIcon />;
export const sunIcon = <SunFoggyFillIcon />;
