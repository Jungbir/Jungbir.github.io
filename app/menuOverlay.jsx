// // components/MenuOverlay.jsx
// "use client";

// import { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";

// export default function MenuOverlay({ onSelect }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef(null);

//   const menuItems = [
//     { label: "Home", href: "" },
//     { label: "About", href: "#" },
//     { label: "Projects", href: "#" },
//     { label: "Skills", href: "#" },
//     { label: "Certification", href: "#" },
//     { label: "Contact", href: "#" },
//   ];

//   // Close menu if clicking outside or pressing Escape
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     }

//     function handleKeyDown(event) {
//       if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
//         event.preventDefault();
//         setIsOpen(true);
//       }

//       if (event.key === "Escape") {
//         setIsOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   return (
//     <div className="flex">
//       {/* Trigger */}
//       <motion.a
//         onClick={() => setIsOpen(true)}
//         className="text-violet-300 cursor-pointer ml-3"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <div className="border-gray-500 bg-gray-500 text-black px-4 py-2 shadow-md rounded">
//           $Menu
//         </div>
//       </motion.a>

//       {/* Overlay */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
//           <div
//             ref={menuRef}
//             className="bg-violet-100/10 backdrop-blur-md text-white rounded-xl w-[90%] max-w-md shadow-xl border border-violet-400/20 py-4"
//           >
//             <ul className="p-0">
//               {menuItems.map(({ label }, index) => (
//                 <li key={label}>
//                   <motion.a
//                     onClick={() => {
//                       onSelect(label);
//                       setIsOpen(false);
//                     }}
//                     // Apply Framer Motion to the <a> tag
//                     whileHover={{
//                       scale: 1.1,
//                       backgroundColor: "rgba(139, 92, 246, 0.4)",
//                     }}
//                     whileTap={{ scale: 0.9 }}
//                     // Remove hover Tailwind classes to prevent conflicts
//                     className="block px-4 py-2 cursor-pointer text-violet-400 transition-colors duration-100"
//                   >
//                     {label}
//                   </motion.a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function MenuOverlay({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [keyboardNavActive, setKeyboardNavActive] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    { label: "Home", href: "" },
    { label: "About", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Skills", href: "#" },
    { label: "Certification", href: "#" },
    { label: "Contact", href: "#" },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setKeyboardNavActive(false);
      }
    }

    function handleKeyDown(event) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen(true);
        setFocusedIndex(0);
        setKeyboardNavActive(false);
      }

      if (event.key === "Escape") {
        setIsOpen(false);
        setKeyboardNavActive(false);
      }

      if (isOpen) {
        if (event.key === "ArrowDown") {
          event.preventDefault();
          setKeyboardNavActive(true);
          setFocusedIndex((prev) => (prev + 1) % menuItems.length);
        }

        if (event.key === "ArrowUp") {
          event.preventDefault();
          setKeyboardNavActive(true);
          setFocusedIndex(
            (prev) => (prev - 1 + menuItems.length) % menuItems.length
          );
        }

        if (event.key === "Enter") {
          event.preventDefault();
          const item = menuItems[focusedIndex];
          if (item) {
            onSelect(item.label);
            setIsOpen(false);
            setKeyboardNavActive(false);
          }
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, focusedIndex, menuItems, onSelect]);

  return (
    <div className="flex">
      {/* Trigger */}
      <motion.a
        onClick={() => {
          setIsOpen(true);
          setFocusedIndex(0);
          setKeyboardNavActive(false);
        }}
        className="text-violet-300 cursor-pointer ml-3"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="border-gray-500 bg-gray-500 text-black px-4 py-2 shadow-md rounded">
          $Menu
        </div>
      </motion.a>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div
            ref={menuRef}
            className="bg-violet-100/110 backdrop-blur-md text-white rounded-xl w-[90%] max-w-md shadow-xl border p-2 border-violet-400/20 py-4"
          >
            <ul className="p-0">
              {menuItems.map(({ label }, index) => {
                const isFocused = keyboardNavActive && index === focusedIndex;

                return (
                  <li key={label}>
                    <motion.a
                      tabIndex={-1}
                      onClick={() => {
                        onSelect(label);
                        setIsOpen(false);
                        setKeyboardNavActive(false);
                      }}
                      initial={false}
                      animate={{
                        scale: isFocused ? 1.1 : 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`block w-full px-4 py-2 cursor-pointer transition-all duration-100 rounded-sm focus:outline-none text-left
                        ${
                          isFocused
                            ? "bg-violet-500/40 text-white"
                            : "text-violet-400"
                        }
                        hover:bg-violet-500/40 hover:text-white
                      `}
                    >
                      {label}
                    </motion.a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
