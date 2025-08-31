export default function Contact() {
  return (
    <div className="flex flex-col items-center w-fit h-fit">
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold flex items-center">
          $ Contact
        </h1>
        <h1 className="text-gray-600/90 text-lg drop-shadow-sm text-center max-md:text-center mt-8 p-4">
          Feel free to reach out to me via email or follow me on my social media
          accounts.
        </h1>
      </div>

      <div className="mt-26 w-120 h-full flex justify-center items-center">
        <div className="text-base sm:text-lg md:text-xl  w-full h-fit flex flex-col gap-3 border border-gray-400 rounded-2xl bg-indigo-400/10 p-5">
          <div className="text-center">
            <h1 className="text-sm sm:text-base font-semibold">Email</h1>
            <p className="text-xs sm:text-sm">
              <a
                href="mailto:jungbirhanspal@gmail.com"
                className="text-violet-400 hover:underline"
              >
                jungbirhanspal@gmail.com
              </a>
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-sm sm:text-base font-semibold">GitHub</h1>
            <p className="text-xs sm:text-sm">
              <a
                href="https://github.com/Jungbir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:underline"
              >
                github.com/Jungbir
              </a>
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-sm sm:text-base font-semibold">LinkedIn</h1>
            <p className="text-xs sm:text-sm">
              <a
                href="https://in.linkedin.com/in/jungbir-singh-hanspal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:underline"
              >
                https://in.linkedin.com/in/Jungbir
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
