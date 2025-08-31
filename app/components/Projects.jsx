
import { useState } from "react";

const projects = [
  {
    name: "Project A",
    link: "https://project-a.example",
    source: "https://github.com/user/project-a",
    type: "Frontend",
    description:
      "This is a frontend project built with React and Tailwind CSS. It demonstrates UI components and responsive design.",
    stack: ["React", "Tailwind", "Vite"],
  },
  {
    name: "Project B",
    link: "https://project-b.example",
    source: "https://github.com/user/project-b",
    type: "Fullstack",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus reprehenderit beatae dicta quia distinctio. Tempore consectetur molestiae doloribus cumque necessitatibus ab ad? Perspiciatis aspernatur, deserunt optio ipsam consectetur suscipit molestias.",
    stack: ["Node", "MongoDB", "Next.js"],
  },
  // Add more projects here
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);

  const currentProject = projects[current];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold flex items-center">
        $ Projects
      </h1>

      <div className="mt-6 w-300 h-150 flex flex-col items-center">
        {/* Slider with Buttons */}
        <div className="w-300 h-150px flex items-center justify-between gap-10">
          {/* Left Arrow */}
          <span className="text-5xl w-fit h-fit flex items-center justify-center hover:text-indigo-600">
            <button onClick={nextSlide} className="cursor-pointer">
              &lt;
            </button>
          </span>

          {/* Project Card */}
          <div className="text-base sm:text-lg md:text-xl w-250px h-140 flex flex-col gap-3 border border-gray-400 rounded-2xl bg-indigo-400/10">
            {/* Header */}
            <div className="w-full h-fit p-5 flex justify-between">
              <span>{currentProject.name}</span>
              <span className="flex gap-4">
                <a
                  href={currentProject.link}
                  target="_blank"
                  className="hover:text-violet-400"
                >
                  Link
                </a>
                <a
                  href={currentProject.source}
                  target="_blank"
                  className="hover:text-violet-400"
                >
                  Source
                </a>
              </span>
            </div>

            {/* Project Type */}
            <div className="m-3 p-2 w-fit">
              <span className="bg-indigo-800/50 border border-indigo-400 px-1 py-1 rounded text-white">
                {currentProject.type}
              </span>
            </div>

            {/* Description */}
            <div className="px-5 h-90 overflow-y-auto">
              {currentProject.description}
            </div>

            {/* Tech Stack */}
            <div className="p-3 flex gap-2 overflow-x-auto">
              {currentProject.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-indigo-500/75 text-white px-2 py-1 rounded-xl whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <span className="text-5xl w-fit h-fit flex items-center justify-center hover:text-indigo-600">
            <button onClick={nextSlide} className="cursor-pointer">
              &gt;
            </button>
          </span>
        </div>

        {/* Dots */}
        <div className="flex mt-2 gap-2">
          {projects.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                idx === current ? "bg-indigo-600" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
