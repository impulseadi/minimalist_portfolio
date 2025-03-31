import React from "react";
import Interests from "../components/Interests";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col items-center px-6 relative">
      {/* Code text at top-left */}
      <div className="absolute top-24 left-8 text-gray-300 text-lg font-mono">
        {"< Passion | Dedication | Innovation />"}
      </div>

      {/* Hero Section */}
      <div className="flex flex-col mt-50 md:flex-row items-center gap-10 my-16">
        {/* Left: Hero text */}
        <div className="text-left max-w-lg">
          <h1 className="text-5xl font-bold tracking-wide">Code. Create. Conquer.</h1>
          <p className="text-gray-400 mt-4">
            A bit about me: I’m a recent B.Tech graduate in Electronics and Communications from JSS Academy of Technical Education with experience in ReactJS, Node.js, Express.js, and MongoDB. I’ve worked on projects like an AI SaaS Application (Text-to-Image Generator), a MERN Stack Job Portal Application where job recruiters could post jobs and job seekers can apply through their resume, a MERN Blog App, and a React Dice Game, and I’ve also solved over 500 coding problems on platforms like Leetcode and CodeChef.
          </p>
        </div>

        {/* Right: Profile Image */}
        <div className="w-40 h-40 overflow-hidden rounded-lg border border-gray-600 shadow-lg">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.uATyM11PD1bCi7ERt7QAdQHaEo&pid=Api&P=0&h=180"
            alt="Profile"
            loading="lazy"
            className="object-cover w-full h-full grayscale hover:grayscale-0 transition"
          />
        </div>
      </div>

      {/* Interests Section */}
      <div className="text-center mt-12 mb-20 w-full">
        <h2 className="text-3xl font-semibold text-gray-200 mb-6">My Interests</h2>
        <Interests />
      </div>
    </section>
  );
};

export default Home;
