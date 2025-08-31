// app/page.jsx
"use client";

import { useState } from "react";
import BackgroundAnimation from "./backgroundAni";
import Nav from "./nav";

import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({
  weight: "400", // You need to specify a weight for the font
  subsets: ["latin"],
});

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certification from "./components/Certifications";
import Contact from "./components/Contact";

export default function Page() {
  const [currentSection, setCurrentSection] = useState("Home");

  const renderContent = () => {
    switch (currentSection) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Skills":
        return <Skills />;
      case "Certification":
        return <Certification />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div
      className={`text-violet-50 w-screen h-screen relative ${silkscreen.className}`}
    >
      <Nav onSelect={setCurrentSection} />
      <BackgroundAnimation />
      <div className="flex flex-col h-screen">
        <main className="flex-1 flex justify-center items-center transition-all duration-300">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
