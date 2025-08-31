import { useState } from "react";

const skills = {
  frontend: [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
  ],
  backend: [
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  ],
  tools: [
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "VS Code",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
  ],
  languages: [
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "CPP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "C",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    },
  ],
  framework: [
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Express",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
  ],
};

export default function Skills() {
  const categories = Object.keys(skills);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <div className="flex flex-col items-center h-full mt-30">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold flex items-center">
        $ Skills
      </h1>

      {/* Category selector */}
      <div className="flex gap-6 mt-4 text-indigo-700">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`cursor-pointer px-4 py-2 rounded-xl border-2 ${
              selected === cat
                ? "bg-indigo-600 text-white border-indigo-600"
                : "border-transparent hover:border-indigo-500 hover:text-indigo-500 bg-white/10 text-white/50"
            } transition`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Skills box */}
      <div className="mt-6 w-300 min-h-10 border border-gray-400 rounded-2xl bg-indigo-400/10 p-5 grid grid-cols-4 gap-6 justify-items-center">
        {skills[selected].map(({ name, logo }) => (
          <div
            key={name}
            className="flex flex-col items-center w-80 cursor-default"
          >
            <div className="w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={logo}
                alt={name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <span className="mt-2 text-center text-sm font-semibold text-gray-800 dark:text-white">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
