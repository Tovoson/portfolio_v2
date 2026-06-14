import { Project } from "../Types/Project-type";
import docuchat from "../../assets/images/docuchat.png";
import app_mobile from "@/assets/images/application-mobile.png";
import zn from "@/assets/images/interface_zeronotify.png";
import portfolio from "@/assets/images/portfolio.png";
import smart_organizer from "@/assets/images/SO.png";
import typing_test from "@/assets/images/typing-game.png";

export const projects: Record<'fr' | 'ang', Project[]> = {
  ang: [
    {
      title: "DocuChat",
      description:
        "DocuChat is a RAG (Retrieval-Augmented Generation) system that allows you to interact intelligently with your documents. Import your files, index them in a vector database, and chat with their content in real time.",
      longDescription:
        "DocuChat is a complete RAG pipeline built with modern technologies. It allows users to upload documents (PDF, TXT, DOCX, etc.), which are then chunked, embedded using Google's Gemini API, and stored in a PostgreSQL database with pgvector extension. The backend, built with Express.js, handles file processing and vector similarity searches. The frontend, developed in React, provides a seamless chat interface where users can ask questions about their documents and receive instant, context-aware answers.",
      tags: ["AI Engineering", "Vector DB"],
      techStack: [
        "React",
        "Express",
        "Google Gemini API",
        "Postgresql",
        "pgvector",
        "LangChain",
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
      lienProd:""
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
      lienProd: ""
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
      lienProd:""
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
      lienProd:""
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
      lienBackend: "",
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
      date: "2026 - Present",
      image: smart_organizer,
      lienBackend: "",
      lienFrontend:
        "https://github.com/Tovoson/automatisation/tree/main/project_1",
      lienProd:""
    },
    {
      title: "Typing Speed Test using Quote API",
      description:
        "A web application for testing typing speed using quotes from an API.",
      longDescription:
        "This application allows users to test their typing speed by typing quotes from a REST API. It features a clean, using vanilla.js (without framework), and provides real-time feedback on accuracy and speed.",
      tags: ["Web App", "Productivity"],
      techStack: ["HTML", "CSS", "Javascript"],
      date: "2026",
      image: typing_test,
      lienBackend: "",
      lienFrontend: "https://github.com/Tovoson/typing-and-timer",
      lienProd:""
    },
  ],
  fr:[
    {
      title: "DocuChat",
      description:
        "DocuChat est un système **RAG (Génération Augmentée par la Recherche)** qui vous permet d'interagir intelligemment avec vos documents. Importez vos fichiers, indexez-les dans une base de données vectorielle et discutez avec leur contenu en temps réel.",
      longDescription:
        "DocuChat est un pipeline RAG complet, construit avec des technologies modernes. Il permet aux utilisateurs de télécharger des documents (PDF, TXT, DOCX, etc.), qui sont ensuite découpés en segments, intégrés à l'aide de l'API Gemini de Google et stockés dans une base de données PostgreSQL avec l'extension pgvector. Le backend, développé avec Express.js, gère le traitement des fichiers et les recherches de similarité vectorielle. Le frontend, développé avec React, offre une interface de chat fluide où les utilisateurs peuvent poser des questions sur leurs documents et recevoir des réponses instantanées et contextuelles.",
      tags: ["Ingénierie IA", "Base de données vectorielle"],
      techStack: [
        "React",
        "Express",
        "Google Gemini API",
        "Postgresql",
        "pgvector",
        "LangChain",
      ],
      date: "Fev 2026 - Présent",
      image: docuchat,
      lienBackend: "https://github.com/Tovoson/docuchat_backend",
      lienFrontend: "https://github.com/Tovoson/docuchat_frontend",
      lienProd: "https://docuchat-frontend-eight.vercel.app/",
    },
    {
      title: "Gestion pédagogique de ENI",
      description:
        "Un système complet de gestion pédagogique pour ENI, développé dans le cadre d'un projet de fin d'année.",
      longDescription:
        "Ce projet a été conçu pour optimiser les processus pédagogiques à ENI. Il comprend une interface React et un backend Django, communiquant via une API REST. Le système gère efficacement les dossiers étudiants, les emplois du temps et les résultats scolaires grâce à une base de données MySQL.",
      tags: ["Site Web", "Éducation"],
      techStack: ["React", "Django", "REST API", "MySQL"],
      date: "2024",
      image: "https://picsum.photos/seed/university/800/600",
      lienBackend: "https://github.com/Tovoson/GestionPedagogiqueBackend",
      lienFrontend: "https://github.com/Tovoson/GestionPedagogique",
      lienProd:""
    },
    {
      title: "Gestion de locations d'appartements",
      description:
        "Une application mobile conçue pour gérer les locations et les réservations d'appartements.",
      longDescription:
        "Développée avec React Native et TypeScript, cette application mobile permet aux utilisateurs de consulter, réserver et gérer les locations d'appartements. Elle dispose d'un backend robuste construit avec Django et MySQL, fournissant des mises à jour de disponibilité en temps réel et une gestion sécurisée des transactions via une API REST.",
      tags: ["Application mobile", "Immobilier"],
      techStack: ["React Native", "TypeScript", "Django", "MySQL", "REST API"],
      date: "2023",
      image: app_mobile,
      lienBackend: "https://github.com/Tovoson/gererapp",
      lienFrontend: "https://github.com/Tovoson/location_apps",
      lienProd:""
    },
    {
      title: "Plateforme de messagerie instantanée",
      description:
        "Une application web en temps réel pour la messagerie instantanée et l'interaction sociale.",
      longDescription:
        "Ce projet personnel est une application de messagerie complète. Elle utilise Socket.io pour la communication en temps réel, Express et MongoDB pour le backend, et React avec Zustand pour la gestion d'état. L'interface utilisateur est stylisée avec Tailwind CSS pour un rendu moderne et adaptatif.",
      tags: ["Site web", "Social"],
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
      lienProd:""
    },
    {
      title: "Gestionnaire de SMS ZeroNotify",
      description:
        "Application web pour la gestion des envois de SMS via modems GSM",
      longDescription:
        "Créée dans le cadre d'un projet de fin d'études à CODEL, cette application gère l'envoi de SMS via des modems GSM utilisant Gammu. Elle comprend une interface React et un serveur Express avec PostgreSQL et Sequelize. Les notifications en temps réel et les mises à jour de statut sont gérées via Socket.io.",
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
      lienProd:""
    },
    {
      title: "Portfolio personnel",
      description:
        "Un site web portfolio moderne pour présenter mon travail et mes compétences professionnelles.",
      longDescription:
        "Ce portfolio a été conçu avec React et Tailwind CSS pour offrir une plateforme rapide, réactive et visuellement attrayante pour présenter mes projets. Il propose des animations fluides et une mise en page épurée pour mettre en valeur mon expertise technique.",
      tags: ["Application web", "Portfolio"],
      techStack: ["React", "Tailwind CSS", "Motion", "Typescript"],
      date: "2026 - Present",
      image: portfolio,
      lienBackend:"",
      lienFrontend: "https://github.com/Tovoson/portfolio_v2",
      lienProd: "#",
    },
    {
      title: "Smart Organizer Pro AI",
      description:
        "Un outil d'automatisation intelligent pour organiser vos fichiers, combinant apprentissage automatique et surveillance en temps réel.",
      longDescription:
        "Smart Organizer Pro AI est un outil d'automatisation pour ordinateur conçu pour garder vos dossiers bien organisés. Inspiré par l'esthétique de µTorrent, il utilise Scikit-Learn pour apprendre de vos habitudes et suggérer des catégories de fichiers optimales. Il propose une surveillance en temps réel grâce à la bibliothèque watchdog, un moteur de règles personnalisé pour le tri par mots-clés et une interface graphique moderne développée avec CustomTkinter. Il inclut également un système d'annulation performant et un mode de nettoyage automatique.",
      tags: ["Desktop App", "AI/ML"],
      techStack: ["Python", "Scikit-Learn", "CustomTkinter", "Watchdog"],
      date: "2026 - Present",
      image: smart_organizer,
      lienBackend:"",
      lienFrontend:
        "https://github.com/Tovoson/automatisation/tree/main/project_1",
      lienProd: "#",
    },
    {
      title: "Test de vitesse de frappe avec une API de citations",
      description:
        "Une application web pour tester sa vitesse de frappe à l'aide de citations provenant d'une API.",
      longDescription:
        "Cette application permet aux utilisateurs de tester leur vitesse de frappe en saisissant des citations depuis une API REST. Elle présente une interface épurée, utilisant JavaScript pur (sans framework), et fournit un retour d'information en temps réel sur la précision et la vitesse.",
      tags: ["Application web", "Productivité"],
      techStack: ["HTML", "CSS", "Javascript"],
      date: "2026",
      image: typing_test,
      lienBackend:"",
      lienFrontend: "https://github.com/Tovoson/typing-and-timer",
      lienProd: "#",
    },
  ]
};
