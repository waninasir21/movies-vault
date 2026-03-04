import React from "react";

const Links = () => {
  return (
    <div className=" bg-gray-300 mt-2">
      <div className="h-30 flex gap-4 items-center justify-center ">
        <a
          href="https://facebook.com/movievault"
          className="group relative w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:-translate-y-2"
        >
          <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white text-xs py-1 px-3 rounded-full shadow-md pointer-events-none">
            Facebook
          </span>
          <svg
            className="w-5 h-5 fill-amber-400 group-hover:fill-white transition-colors"
            viewBox="0 0 24 24"
          >
            <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
          </svg>
        </a>

        <a
          href="https://x.com/movievault"
          className="group relative w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-black hover:-translate-y-2"
        >
          <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs py-1 px-3 rounded-full shadow-md pointer-events-none">
            X
          </span>
          <svg
            className="w-5 h-5 fill-amber-400 group-hover:fill-white transition-colors"
            viewBox="0 0 24 24"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        <a
          href="https://instagram.com/movievault"
          className="group relative w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-pink-600 hover:-translate-y-2"
        >
          <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-pink-600 text-white text-xs py-1 px-3 rounded-full shadow-md pointer-events-none">
            Instagram
          </span>
          <svg
            className="w-5 h-5 fill-amber-400 group-hover:fill-white transition-colors"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
          </svg>
        </a>

        <a
          href="https://github.com/movievault"
          className="group relative w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-900 hover:-translate-y-2"
        >
          <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs py-1 px-3 rounded-full shadow-md pointer-events-none">
            Github
          </span>
          <svg
            className="w-5 h-5 fill-amber-400 group-hover:fill-white transition-colors"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        <a
          href="https://youtube.com/movievault"
          className="group relative w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-red-600 hover:-translate-y-2"
        >
          <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-red-600 text-white text-xs py-1 px-3 rounded-full shadow-md pointer-events-none">
            YouTube
          </span>
          <svg
            className="w-5 h-5 fill-amber-400 group-hover:fill-white transition-colors"
            viewBox="0 0 24 24"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </a>
      </div>
      <div className="absolute justify-center mb-5 h-10 w-full">
        <p className="text-amber-400 text-center text-base">
          &copy; 2026 Zero. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Links;
