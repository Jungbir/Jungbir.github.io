import { motion } from "framer-motion";

// Define the parent container variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Stagger the children's animation by 0.1 seconds
      staggerChildren: 0.1,
      // Add a slight delay before the first word animates
      delayChildren: 0.2,
    },
  },
};

// Define the child word variants
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Home() {
  const characters = "Jungbir Singh Hanspal".replace(/ /g, "\u00A0").split("");

  return (
    <div className="flex justify-center items-center flex-col flex-1 h-screen">
      <div className="text-center mb-40 flex flex-col gap-3">
        <h1 className="text-3xl max-md:text-xl">Hey, My Name is</h1>
        <h1 className="text-8xl max-md:text-xl font-bold mb-10 mt-5">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            style={{ whiteSpace: "pre" }}
          >
            {characters.map((character, index) => (
              <motion.span
                key={index}
                variants={item}
                style={{ display: "inline-block" }}
              >
                {character}
              </motion.span>
            ))}
          </motion.div>
        </h1>
        <div className="flex flex-col text-xl text-center gap-1 ">
          <p>
            I'm a developer who is driven by curiosity and a passion for
            building.
          </p>
          <p>
            I believe that every project, whether successful or not, is an
            opportunity for learning and growth.
          </p>

          <p>
            I'm passionate about building cool things that are both functional
            and innovative.
          </p>
          <p>
            I'm always looking for the next challenge and surpassing my limits.
          </p>
        </div>
        <p className="opacity-50">"Press cmd+K / Ctrl+K to begin"</p>
      </div>
    </div>
  );
}
