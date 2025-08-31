"use client";

import { useState } from "react";
import MenuOverlay from "./menuOverlay";

export default function Nav({ onSelect }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define the function to handle the 'U' click
  const handleUClick = (e) => {
    e.preventDefault(); // Prevents the default anchor tag behavior (page reload)
    onSelect("default"); // Call onSelect with a specific value for the default view
  };

  return (
    <div className="bg-gray-950">
      <div className="container mx-auto flex p-4 flex-row justify-between items-center max-md:px-2">
        <div className="flex title-font font-medium items-center text-violet-200 md:mb-0 ">
          <span className="ml-3 text-3xl max-md:text-xl font-bold">
            {/* Add the onClick handler to the anchor tag */}
            <a href="" onClick={handleUClick}>
              Jungbir
            </a>
          </span>
        </div>

        <div>
          <MenuOverlay
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            onSelect={onSelect}
          />
        </div>
      </div>
    </div>
  );
}
