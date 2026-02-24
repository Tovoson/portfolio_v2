import { Project } from "../Types/Project-type";

export const projects: Project[] = [
  {
    title: "Real-time AI Analyst",
    description:
      "A distributed RAG system processing millions of documents with sub-second latency for enterprise financial data.",
    longDescription:
      "This project involved architecting a highly scalable Retrieval-Augmented Generation (RAG) system. It utilizes a distributed vector database to manage embeddings for millions of documents, providing sub-second query latency. The system is designed to handle complex financial data, offering real-time insights and automated reporting for enterprise clients.",
    tags: ["AI Engineering", "Vector DB"],
    techStack: [
      "React",
      "Python",
      "FastAPI",
      "Pinecone",
      "OpenAI API",
      "Docker",
    ],
    date: "Jan 2024 - Present",
    image: "https://picsum.photos/seed/analytics/800/600",
  },
  {
    title: "ENI Pedagogical Management",
    description:
      "A comprehensive pedagogical management system for ENI, developed as an end-of-year project.",
    longDescription:
      "This project was designed to streamline pedagogical processes at ENI. It features a React frontend and a Django backend, communicating via a REST API. The system manages student records, course schedules, and academic results efficiently using a MySQL database.",
    tags: ["Web Site", "Education"],
    techStack: ["React", "Django", "REST API", "MySQL"],
    date: "2023",
    image: "https://picsum.photos/seed/university/800/600",
    lienBackend: "https://github.com/Tovoson/GestionPedagogiqueBackend",
    lienFrontend: "https://github.com/Tovoson/GestionPedagogique",
  },
  {
    title: "Apartment Rental Management",
    description:
      "A mobile application designed for managing apartment rentals and bookings.",
    longDescription:
      "Developed using React Native and TypeScript, this mobile app allows users to browse, book, and manage apartment rentals. It features a robust backend built with Django and MySQL, providing real-time availability updates and secure transaction handling via a REST API.",
    tags: ["Mobile App", "Real Estate"],
    techStack: ["React Native", "TypeScript", "Django", "MySQL", "REST API"],
    date: "2023",
    image: "https://picsum.photos/seed/apartment/800/600",
    lienBackend: "https://github.com/Tovoson/gererapp",
    lienFrontend: "https://github.com/Tovoson/location_apps",
  },
  {
    title: "Instant Messaging Platform",
    description:
      "A real-time web application for instant messaging and social interaction.",
    longDescription:
      "This personal project is a full-stack messaging application. It uses Socket.io for real-time communication, Express and MongoDB for the backend, and React with Zustand for state management. The UI is styled with Tailwind CSS for a modern, responsive look.",
    tags: ["Web Site", "Social"],
    techStack: [
      "React",
      "Tailwind CSS",
      "Express",
      "Socket.io",
      "MongoDB",
      "Zustand",
    ],
    date: "2022",
    image: "https://picsum.photos/seed/chat/800/600",
    lienBackend: "https://github.com/Tovoson/SocialMedia/tree/main/backEnd",
    lienFrontend: "https://github.com/Tovoson/SocialMedia/tree/main/frontEnd",
  },
  {
    title: "ZeroNotify SMS Manager",
    description:
      "A web application for managing SMS broadcasts via GSM modems.",
    longDescription:
      "Created as an end-of-study project at CODEL, this application manages SMS sending through GSM modems using Gammu. It features a React frontend and an Express backend with PostgreSQL and Sequelize. Real-time notifications and status updates are handled via Socket.io.",
    tags: ["Web App", "Infrastructure"],
    techStack: [
      "React",
      "Tailwind CSS",
      "Express",
      "Socket.io",
      "PostgreSQL",
      "Sequelize",
      "Gammu",
    ],
    date: "2022",
    image: "https://picsum.photos/seed/server/800/600",
    lienBackend: "https://github.com/Tovoson/zeronotify/tree/master/backend",
    lienFrontend: "https://github.com/Tovoson/ZeroNotifyFrontend",
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern portfolio website to showcase my professional work and skills.",
    longDescription:
      "This portfolio was built using React and Tailwind CSS to provide a fast, responsive, and visually appealing platform for showcasing my projects. It features smooth animations and a clean layout to highlight my technical expertise.",
    tags: ["Web App", "Portfolio"],
    techStack: ["React", "Tailwind CSS", "Motion"],
    date: "2024",
    image: "https://picsum.photos/seed/creative/800/600",
    lienFrontend: "https://github.com/Tovoson/ZeroNotifyFrontend",
    lienProd: "https://portfolio-tovo.vercel.app/",
  },
  {
    title: "Smart Organizer Pro AI",
    description:
      "An intelligent automation tool for organizing files, combining Machine Learning with real-time monitoring.",
    longDescription:
      "Smart Organizer Pro AI is a desktop automation tool designed to keep your folders tidy. Inspired by µTorrent's aesthetic, it uses Scikit-Learn to learn from your habits and suggest optimal file categories. It features real-time monitoring with the watchdog library, a custom rule engine for keyword-based sorting, and a modern GUI built with CustomTkinter. It also includes a robust undo system and an automatic cleaning mode.",
    tags: ["Desktop App", "AI/ML"],
    techStack: ["Python", "Scikit-Learn", "CustomTkinter", "Watchdog"],
    date: "2024",
    image: "https://picsum.photos/seed/software/800/600",
  },
];
