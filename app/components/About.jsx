"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const paragraphs = [
  "I'm a second-year computer science student and full-stack developer from Punjab, India.",
  "I specialize in building real-world applications with a strong focus on clean code, functionality, and user experience.",
  "I enjoy solving practical problems and love building fullstack systems that challenge me and help me develop my skills.",
  "Passionate about continuous learning and always open to new experiences.",
];

export default function About() {
  const [displayedParagraphs, setDisplayedParagraphs] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [paraIndex, setParaIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (paraIndex < paragraphs.length) {
      if (charIndex < paragraphs[paraIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + paragraphs[paraIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 10); // Typing speed per character
        return () => clearTimeout(timeout);
      } else {
        // Done typing one paragraph
        setDisplayedParagraphs((prev) => [...prev, currentText]);
        setCurrentText("");
        setCharIndex(0);
        setParaIndex((prev) => prev + 1);
      }
    }
  }, [charIndex, paraIndex, currentText]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto px-4 py-8 gap-14">
      {/* Fade-in Image */}
      <motion.div
        className="w-48 h-48 lg:w-80 lg:h-90 rounded-2xl text-center overflow-hidden border flex items-center justify-center mb-6 md:mb-0 md:mr-10 mt-8 md:mt-0"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 5 }}
      >
        <img
          // src="" // Update to actual image
          alt="Profile"
          className="object-cover w-full h-full bg-violet-900"
        />
      </motion.div>

      {/* About Text */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold flex items-center">
          $ About Me
        </h1>

        <div className="text-base sm:text-lg md:text-xl mt-6 w-150 h-100 flex flex-col gap-3">
          {/* Render finished paragraphs */}
          {displayedParagraphs.map((para, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {para}
            </motion.p>
          ))}

          {/* Currently typing paragraph */}
          {paraIndex < paragraphs.length && <p>{currentText}</p>}
        </div>
      </div>
    </div>
  );
}
