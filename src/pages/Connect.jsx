import React from "react";

const Connect = () => {
  return (
    <section className="py-20 px-6 mt-30 text-white text-center bg-black flex flex-col justify-center items-center">
      {/* Title */}
      <h2 className="text-5xl font-bold tracking-wide mb-12 text-white">Connect</h2>

      {/* Links with Black & White Images */}
      <div className="grid grid-cols-2 gap-8 text-white text-2xl max-w-lg">
        <a
          href="https://github.com/impulseadi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 hover:underline"
        >
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.eoZPB2gfGH-1ckaL_JSZdwHaHg&pid=Api&P=0&h=180"
            alt="GitHub"
            className="w-12 h-12 filter grayscale hover:grayscale-0 transition"
          />
          <span>GitHub</span>
        </a>

        <a
          href="https://x.com/Adigupta951"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 hover:underline"
        >
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.FULl7UCaJlC-0KDAk_fcKgHaHa&pid=Api&P=0&h=180"
            alt="Twitter"
            className="w-12 h-12 filter grayscale hover:grayscale-0 transition"
          />
          <span>Twitter(X)</span>
        </a>

        <a
          href="https://www.linkedin.com/in/aditya-gupta0901/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 hover:underline"
        >
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.P_z8uTsVJ8tmPn2prJwOpQHaHa&pid=Api&P=0&h=180"
            alt="LinkedIn"
            className="w-12 h-12 filter grayscale hover:grayscale-0 transition"
          />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://drive.google.com/file/d/1k2Le6hVg1R_6unLgLNtI5AyuLdqPFAW0/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 hover:underline"
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/652/226/original/approved-resume-linear-cv-icon-modern-outline-logo-concept-on-white-background-from-human-resources-collection-suitable-for-use-on-web-apps-mobile-apps-and-print-media-vector.jpg"
            alt="Resume"
            className="w-12 h-12 filter grayscale hover:grayscale-0 transition"
          />
          <span>Resume</span>
        </a>

        <a
          href="mailto:adigupta.951@gmail.com"
          className="flex items-center gap-4 hover:underline"
        >
          <img
            src="https://assets.entrepreneur.com/content/3x2/2000/20150623170058-gmail-email-google.jpeg"
            alt="Email"
            className="w-12 h-12 filter grayscale hover:grayscale-0 transition"
          />
          <span>Email</span>
        </a>
      </div>
    </section>
  );
};

export default Connect;
