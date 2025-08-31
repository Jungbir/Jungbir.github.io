import { useState } from "react";

const certificates = [
  {
    title: "Frontend Development Certificate",
    image:"",
  },
  {
    title: "Fullstack Web Development",
    image: "", // No image — should show bordered box
  },
  {
    title: "React Advanced Course",
    image:"",
  },
];

export default function Certificates() {
  const [current, setCurrent] = useState(0);
  const total = certificates.length;

  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);

  const currentCert = certificates[current];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold flex items-center">
        $ Certificates
      </h1>

      <div className="mt-6 w-300 h-150 flex flex-col items-center">
        {/* Slider with Buttons */}
        <div className="w-300 h-150 flex items-center justify-between gap-10">
          {/* Left Arrow */}
          <span className="text-5xl w-fit h-fit flex items-center justify-center hover:text-indigo-600">
            <button onClick={prevSlide} className="cursor-pointer">
              &lt;
            </button>
          </span>

          {/* Certificate Card (matches Project Card) */}
          <div className="text-base sm:text-lg md:text-xl w-250 h-140 flex flex-col gap-3 border border-gray-400 rounded-2xl bg-indigo-400/10 p-5">
            {/* Image or Placeholder */}
            {currentCert.image ? (
              <img
                src={currentCert.image}
                alt={currentCert.title}
                className="w-full h-80 object-contain"
              />
            ) : (
              <div className="w-full h-120 border border-gray-400 rounded-lg" />
            )}

            {/* Title at the bottom */}
            <div className="text-center">
              <h1 className="text-sm sm:text-base font-semibold">
                {currentCert.title}
              </h1>
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
          {certificates.map((_, idx) => (
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
