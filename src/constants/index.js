import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  freelance,
  agilia,
  expandhr,
  traveladvisor,
  nightlifecorner,
  ershad,
  portfolio,
  randr,
  movieticketing,
  taxiapp,
  dashboard,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
    description:
      "Creating responsive and dynamic websites using modern technologies like HTML, CSS, JavaScript, and frameworks such as React.js and Next.js.",
  },
  {
    title: "Mobile App Development",
    icon: mobile,
    description:
      "Building cross-platform mobile applications using React Native and Flutter for seamless user experiences.",
  },
  {
    title: "Backend Development",
    icon: backend,
    description:
      "Designing robust APIs and managing databases with Node.js, Express.js, and other backend technologies.",
  },
  {
    title: "Full-Stack Development",
    icon: creator, // Update the icon if available
    description:
      "Combining frontend and backend expertise to deliver end-to-end solutions for web and mobile platforms.",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Agilia Tech",
    icon: agilia, // Add the appropriate icon
    iconBg: "#383E56",
    date: "September 2022 - Present",
    points: [
      "Developing web and mobile applications using modern frameworks and technologies.",
      "Delivering full-stack solutions, ensuring seamless integration between frontend and backend.",
      "Creating customized software solutions tailored to client requirements.",
      "Collaborating with cross-functional teams to develop high-quality software products.",
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "Self-Employed",
    icon: freelance, // Add the appropriate icon
    iconBg: "#E6DEDD",
    date: "2018 - Present",
    points: [
      "Designing and developing websites and mobile applications for diverse clients.",
      "Providing end-to-end development services, including planning, coding, and deployment.",
      "Integrating external APIs and databases to enhance application functionality.",
      "Continuously learning and implementing new technologies to optimize project outcomes.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Tamer proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Tamer does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Tamer optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HR Company Website",
    description:
      "A professional website for an HR company showcasing services, job postings, and company information, optimized for user engagement and ease of navigation.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwindcss", color: "green-text-gradient" },
    ],
    image: expandhr, // Replace with the actual image variable
    source_code_link: "https://www.expandhrconsulting.com/", // Replace with the correct link
  },
  {
    name: "Travel Planning and Tour Guides Website",
    description:
      "An all-in-one travel planning platform offering guided tours, travel itineraries, and destination recommendations.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
    ],
    image: traveladvisor, // Replace with the actual image variable
    source_code_link: "https://travel-advisor-fawn.vercel.app/", // Replace with the correct link
  },
  {
    name: "Nightlife Web Platform",
    description:
      "A nightlife-focused platform connecting users with events, clubs, and experiences, featuring real-time updates and interactive features.",
    tags: [
      { name: "next.js", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
    ],
    image: nightlifecorner, // Replace with the actual image variable
    source_code_link: "", // Replace with the correct link
  },
  {
    name: "Travel Advisor Landing Page",
    description:
      "A visually stunning and responsive landing page for a travel advisory service, emphasizing user experience and accessibility.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwindcss", color: "green-text-gradient" },
      { name: "node.js", color: "pink-text-gradient" },
    ],
    image: ershad, // Replace with the actual image variable
    source_code_link: "https://ershad.vercel.app/", // Replace with the correct link
  },
  {
    name: "Portfolio Website",
    description:
      "A personalized portfolio website showcasing projects, skills, and professional experience, designed for maximum impact and engagement.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "next.js", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
    ],
    image: portfolio, // Replace with the actual image variable
    source_code_link:
      "https://portfolio-nextjs-git-main-tamers-projects.vercel.app/test", // Replace with the correct link
  },
  {
    name: "Restaurant Menu Website",
    description:
      "A modern and interactive restaurant menu website, featuring online ordering and reservation capabilities.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwindcss", color: "green-text-gradient" },
    ],
    image: randr, // Replace with the actual image variable
    source_code_link: "https://r-and-r-one.vercel.app/", // Replace with the correct link
  },
  {
    name: "Banking Dashboard UI",
    description:
      "A sleek and intuitive banking dashboard UI that provides users with real-time insights into account balances, transaction history, and financial analytics. Includes features for bill payments, fund transfers, and expense tracking.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "redux", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
    ],
    image: dashboard, // Replace with the actual image variable
    source_code_link: "https://dashboard-react-opal-five.vercel.app/", // Replace with the correct link
  },
  {
    name: "Car Renting Mobile App",
    description:
      "A mobile app for renting cars, allowing users to browse available vehicles, make bookings, and manage reservations.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "postgresql", color: "green-text-gradient" },
      { name: "restapi", color: "pink-text-gradient" },
    ],
    image: carrent, // Replace with the actual image variable
    source_code_link: "", // Replace with the correct link
  },
  {
    name: "Taxi Service Mobile App",
    description:
      "A feature-rich mobile application for booking taxi rides, offering real-time tracking and flexible payment options.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
    ],
    image: taxiapp, // Replace with the actual image variable
    source_code_link: "", // Replace with the correct link
  },
  {
    name: "Movie Ticketing Mobile App",
    description:
      "An intuitive mobile application for booking movie tickets, checking showtimes, and managing reservations.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
    ],
    image: movieticketing, // Replace with the actual image variable
    source_code_link: "", // Replace with the correct link
  },
];

export { services, technologies, experiences, testimonials, projects };
