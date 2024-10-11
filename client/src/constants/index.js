import {
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  framer,
  mongodb,
  instagram,
  notion,
  photoshop,
  protopie,
  raindrop,
  slack,
  telegram,
  twitter,
  express,
  react,
  nodejs,
  benefitImage1,
  benefitImage3,
  benefitImage4,
  benefitImage5,
  benefitImage6,
  filmfaves,
  timhortons,
  kitchenTales,
  carrent,
  gameverse,
  elegantvibes,
  space,
  urlshortening,
  flags,
  loop,
  code,
  api,
  database,
  shieldLock,
  server,
  terminal,
  studentSphere,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Services",
    url: "#services",
  },
  {
    id: "1",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "2",
    title: "About Me",
    url: "#about",
  },
  {
    id: "3",
    title: "Certications",
    url: "#certifications",
  },
  {
    id: "4",
    title: "Contact",
    url: "#contact",
  },
];

export const heroIcons = [mongodb, express, react, nodejs];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [disc02, chromecast];

export const projects = [
  {
    id: "0",
    title: "Kitchen Tales ",
    text: "Check out a cooking website developed using the MERN (MongoDB, Express.js, React, Node.js) stack  where you can share and discover new dishes. Join a fun online community all about cooking and trying out delicious recipes!",
    date: "March 2024",
    status: "done",
    imageUrl: kitchenTales,
    colorful: true,
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "NodeJS",
      "Firebase Google Auth",
      "Cloudinary",
      "Tailwind CSS",
      "TypeScript",
    ],
    githubLink: "https://github.com/meraeugene/kitchen-tales",
    websiteLink: "https://kitchen-tales.onrender.com/",
  },
  {
    id: "1",
    title: "Tim Hortons Clone ",
    text: "A coffee shop platform developed using the MERN (MongoDB, Express.js, React, Node.js) stack and incorporating Redux for state management with google auth firebase authentication",
    date: "Feburary 2024",
    status: "done",
    imageUrl: timhortons,
    colorful: true,
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "NodeJS",
      "Firebase Google Auth",
      "Cloudinary",
      "Nodemailer",
      "Paypal",
      "Swiper",
      "Tailwind CSS",
      "RTK",
    ],
    githubLink: "https://github.com/meraeugene/tim-hortons-clone",
    websiteLink: "https://tim-hortons-clone.onrender.com/",
  },
  {
    id: "2",
    title: "Student Sphere",
    text: "A web application where students can view their grades and schedules, teachers can manage student grades and access their own schedules, and administrators can manage user accounts.",
    date: "June 2024",
    status: "done",
    imageUrl: studentSphere,
    colorful: true,
    technologies: ["React", "PHP", "ShadCN Ui", "Tailwind CSS"],
    githubLink: "https://github.com/meraeugene/student-sphere",
    websiteLink: "",
  },
  {
    id: "3",
    title: "Game Verse",
    text: "Browse a gaming e-commerce platform to discover and purchase games for PS4, PC, PS5, and Xbox. Explore the selection and shop for your favorite titles across these gaming platforms.    ",
    date: "December 2023",
    status: "done",
    imageUrl: gameverse,
    colorful: true,
    technologies: [
      "React",
      "Chakra-UI",
      "RTK",
      "Blurhash",
      "Swiper",
      "Tailwind CSS",
      "TypeScript",
    ],
    githubLink: "    https://github.com/meraeugene/gameverse    ",
    websiteLink: "https://gameverseph.vercel.app/",
  },
  {
    id: "4",
    title: "Film Faves",
    text: "A Film sharing web appliation developed using the MERN (MongoDB, Express.js, React, Node.js) stack allowing users to create accounts and recommend films. ",
    date: "November 2023",
    status: "done",
    imageUrl: filmfaves,
    colorful: true,
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "NodeJS",
      "Cloudinary",
      "TypeScript",
      "Tailwind CSS",
    ],
    githubLink: "https://github.com/meraeugene/film-faves",
    websiteLink: "https://filmfaves.vercel.app/",
  },
  {
    id: "5",
    title: "Car Rental",
    text: "Explore a front-end car rental website designed to provide a seamless user experience. This platform allows users to effortlessly browse, select, and rent cars.  ",
    date: "August 2023",
    status: "done",
    imageUrl: carrent,
    colorful: true,
    technologies: [
      "React",
      "CSS",
      "TypeScript",
      "AOS",
      "Framer-Motion",
      "Swiper",
      "Formik Yup",
      "Blurhash",
      "MUI",
    ],
    githubLink: "https://github.com/meraeugene/car-rent-website",
    websiteLink: "https://car-rent-website-andrew.vercel.app/",
  },
  {
    id: "6",
    title: "Elegant Vibes",
    text: "Discover a stylish fashion landing page with the latest trends and curated collections. Enjoy easy browsing and find trendy clothes and accessories effortlessly.    ",
    date: "August 2023",
    status: "done",
    imageUrl: elegantvibes,
    colorful: true,
    technologies: ["NEXTJS", "Tailwind CSS"],
    githubLink: "https://github.com/meraeugene/fashion-ecommerce",
    websiteLink: "https://fashion-ecommerce-andrew.vercel.app/",
  },
  {
    id: "7",
    title: "Space Tourism     ",
    text: "Check out a landing page for space tourism, a cool project that highlights my design and coding skills within the Frontend Mentor community.    ",
    date: "May 2023",
    status: "done",
    imageUrl: space,
    colorful: true,
    technologies: ["React", "CSS"],
    githubLink: "https://github.com/meraeugene/spacetourism",
    websiteLink: "https://spacetourism-andrew.vercel.app/",
  },
  {
    id: "8",
    title: "URL Shortener  ",
    text: "Check out a URL Shortener website, a cool project that highlights my design and coding skills within the Frontend Mentor community.    ",
    date: "May 2023",
    status: "done",
    imageUrl: urlshortening,
    colorful: true,
    technologies: ["React", "CSS"],
    githubLink: "https://github.com/meraeugene/url-shortening",
    websiteLink: "https://url-shortening-andrew.vercel.app/",
  },
  {
    id: "9",
    title: "REST Countries  ",
    text: "Where in the World is an interactive website for exploring and searching flags of different countries.A project that highlights my design and coding skills within the Frontend Mentor community.    ",
    date: "May 2023",
    status: "done",
    imageUrl: flags,
    colorful: true,
    technologies: ["HTML", "Vanilla JS", "CSS"],
    githubLink: "https://github.com/meraeugene/where-in-the-world-",
    websiteLink: "https://where-in-the-world-arem.vercel.app/",
  },
  {
    id: "10",
    title: "Loopstudios ",
    text: "Take a look at the cool landing page design for Loopstudios. Check out the awesome layout that highlights Loopstudios' special stuff. A project that shows off my design and coding skills for the Frontend Mentor community.    ",
    date: "May 2023",
    status: "done",
    imageUrl: loop,
    colorful: true,
    technologies: ["HTML", "Vanilla JS", "CSS"],
    githubLink: "https://github.com/meraeugene/loopstudios-landingpage",
    websiteLink: "https://loopstudios-landingpage-phi.vercel.app/",
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const services = [
  {
    id: "0",
    title: "Full-Stack Web Development",
    text: "Develop end-to-end web applications using the MERN stack. Create responsive and user-friendly interfaces with React for the front-end.",
    backgroundUrl:
      "https://res.cloudinary.com/dupynxkci/image/upload/v1710337164/g6y3li7lrfld2wbo7efx.svg",
    iconUrl: code,
    bg: "#34B7E1",
    imageUrl: benefitImage1,
  },
  {
    id: "1",
    title: "RESTful API Development",
    text: "Design and implement RESTful APIs using Node.js and Express.js. Enable secure communication between the front-end and back-end.",
    backgroundUrl:
      "https://res.cloudinary.com/dupynxkci/image/upload/v1710337164/dcotqm4viuqu1urizy3p.svg",
    iconUrl: api,
    imageUrl: benefitImage2,
    bg: "#E0B26D",
    light: true,
  },
  {
    id: "2",
    title: "Database Design and Integration",
    text: "Set up and manage MongoDB databases for efficient data storage.Implement data models and establish relationships between entities.",
    backgroundUrl:
      "https://res.cloudinary.com/dupynxkci/image/upload/v1710337164/bhpndcoembxigkfldevy.svg",
    iconUrl: database,
    bg: "#BE71D2",
    imageUrl: benefitImage3,
  },
  {
    id: "3",
    title: "User Authentication and Authorization",
    text: "Implement secure user authentication and authorization systems using technologies like JWT.Ensure the protection of user data and sensitive information.",
    backgroundUrl:
      "https://res.cloudinary.com/dupynxkci/image/upload/v1710337164/zeovqvtor0gsaqp8kedo.svg",
    iconUrl: shieldLock,
    bg: "#A3D273",
    imageUrl: benefitImage4,
    light: true,
  },
  {
    id: "4",
    title: "Deployment and Hosting",
    text: "Deploy applications on cloud platforms like AWS, Heroku, or others.Configure server environments and manage hosting services for seamless deployment.",
    backgroundUrl:
      "https://res.cloudinary.com/dupynxkci/image/upload/v1710337164/hgzykk4dcpkeddrwlhqm.svg",
    iconUrl: server,
    bg: "#B3675E",
    imageUrl: benefitImage5,
  },
  {
    id: "5",
    title: "Testing and Debugging ",
    text: "Conduct thorough testing, including unit testing, integration testing, and end-to-end testing.Identify and resolve bugs to ensure the stability and reliability of the application.",
    backgroundUrl:
      "https://res.cloudinary.com/dupynxkci/image/upload/v1710337164/ahmb0yeivmslnys4kzcf.svg",
    iconUrl: terminal,
    imageUrl: benefitImage6,
    bg: "#7671BD",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
