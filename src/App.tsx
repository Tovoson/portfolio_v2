import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AnimatePresence } from "motion/react";

// Components
import Navbar from "./components/TopBar";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { CONSTANTS } from "@/constants/Constants";
import { useLanguageStore } from "./store/useLanguageStore";

function Portfolio() {
  const { setShowMenu } = useLanguageStore();

  return (
    <div className={`min-h-screen ${CONSTANTS.Light.BACKGROUND}`}>
      <div key="content">
        <Navbar />
        <main onClick={() => setShowMenu(false)}>
          <Hero />
          <Expertise />
          <TechStack />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Portfolio />
  );
}
