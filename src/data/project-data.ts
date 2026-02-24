import { Project } from "../Types/Project-type";
import docuchat from "../../assets/images/docuchat.png"
import app_mobile from "@/assets/images/application-mobile.png"
import zn from "@/assets/images/interface_zeronotify.png"
import portfolio from "@/assets/images/portfolio.png"
import smart_organizer from "@/assets/images/SO.png"

export const projects: Project[] = [
  {
    title: "DocuChat",
    description:
      "DocuChat is a **RAG (Retrieval-Augmented Generation)** system that allows you to interact intelligently with your documents. Import your files, index them in a vector database, and chat with their content in real time.",
    longDescription:
      "DocuChat is a complete RAG pipeline built with modern technologies. It allows users to upload documents (PDF, TXT, DOCX, etc.), which are then chunked, embedded using Google's Gemini API, and stored in a PostgreSQL database with pgvector extension. The backend, built with Express.js, handles file processing and vector similarity searches. The frontend, developed in React, provides a seamless chat interface where users can ask questions about their documents and receive instant, context-aware answers.",
    tags: ["AI Engineering", "Vector DB"],
    techStack: [
      "React",
      "Express",
      "Google Gemini API",
      "Postgresql",
      "pgvector",
      "LangChain"
    ],
    date: "Fev 2026 - Present",
    image: docuchat,
    lienBackend: "https://github.com/Tovoson/docuchat_backend",
    lienFrontend: "https://github.com/Tovoson/docuchat_frontend",
    lienProd: "https://docuchat-frontend-eight.vercel.app/",
  },
  {
    title: "ENI Pedagogical Management",
    description:
      "A comprehensive pedagogical management system for ENI, developed as an end-of-year project.",
    longDescription:
      "This project was designed to streamline pedagogical processes at ENI. It features a React frontend and a Django backend, communicating via a REST API. The system manages student records, course schedules, and academic results efficiently using a MySQL database.",
    tags: ["Web Site", "Education"],
    techStack: ["React", "Django", "REST API", "MySQL"],
    date: "2024",
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
    image: app_mobile,
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
    date: "juin 2025 - nov 2025",
    image: zn,
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
    techStack: ["React", "Tailwind CSS", "Motion", "Typescript"],
    date: "2026 - Present",
    image: portfolio,
    lienFrontend: "https://github.com/Tovoson/portfolio_v2",
    lienProd: "#",
  },
  {
    title: "Smart Organizer Pro AI",
    description:
      "An intelligent automation tool for organizing files, combining Machine Learning with real-time monitoring.",
    longDescription:
      "Smart Organizer Pro AI is a desktop automation tool designed to keep your folders tidy. Inspired by µTorrent's aesthetic, it uses Scikit-Learn to learn from your habits and suggest optimal file categories. It features real-time monitoring with the watchdog library, a custom rule engine for keyword-based sorting, and a modern GUI built with CustomTkinter. It also includes a robust undo system and an automatic cleaning mode.",
    tags: ["Desktop App", "AI/ML"],
    techStack: ["Python", "Scikit-Learn", "CustomTkinter", "Watchdog"],
    date: "2026",
    image: smart_organizer,
    lienBackend: "https://github.com/Tovoson/automatisation/tree/main/project_1",
    lienFrontend: "https://github.com/Tovoson/automatisation/tree/main/project_1",
  },
];
