import React from "react";

const projects = [
    {
        name: "MERN Job Portal Application",
        image: "https://github.com/user-attachments/assets/45bdfe2a-1614-495b-99b0-d6f97d6f9b2f",
        description: "A real-time job portal application that connects job seekers with job recruiters.",
        github: "https://github.com/impulseadi/job-portal",
        live: "https://job-portal-client-git-main-impulseadis-projects.vercel.app/"
    },
    {
        name: "AI SaaS App",
        image: "https://github.com/user-attachments/assets/e083f3eb-83b9-4ca1-a847-6db646de49cb",
        description: "A full-stack AI-powered image generator with a credit-based system for managing AI image generation.",
        github: "https://github.com/impulseadi/imagify",
        live: "https://imagify-frontend-gnsc.onrender.com/"
    },
        {
     
    name: "GreenCart Ecommerce Application",
    description: "Full-stack Grocery Delivery platform using the MERN stack, enabling users to browse,filter, and order groceries by category.",
    image: "https://github.com/user-attachments/assets/23f27610-402b-4197-9ded-916c8f3d5c96",
    github: "https://github.com/impulseadi/GreenCart",
    live: "https://green-cart-sooty.vercel.app/"
   },
    {
        name: "Klimate Weather Application",
        image: "https://github.com/user-attachments/assets/42e7f062-b427-4fcc-9d89-7fe3f3acc52a",
        description: "Developed an engaging and interactive Klimate Weather Application using React, Tanstack Query, Shadcn, Recharts, Tailwind and Typescript",
        github: "https://github.com/impulseadi/Klimates",
        live: "https://klimates-6d1x.vercel.app/",
    },
     {
        name: "React Dice Game",
        image: "https://github.com/user-attachments/assets/0fd188a4-1f46-4b4f-942e-1f8a2d1b552d",
        description: "Developed an engaging and interactive dice game web application using React.js",
        github: "https://github.com/impulseadi/ReactDiceGame",
        live: "https://timely-belekoy-5b7add.netlify.app/"
    },
];

const ProjectCard = ({ project }) => (
    <div className="relative group flex flex-col items-center bg-gray-700 p-6 rounded-2xl shadow-lg overflow-hidden">
        
        {/* Blurred Background Behind Image */}
        <div className="absolute inset-0 bg-gray-600 opacity-40 blur-lg rounded-2xl -z-10"></div>

        {/* Image without Lazy Loading */}
        <div className="relative w-96 h-56 rounded-2xl overflow-hidden transition-transform duration-300 transform group-hover:scale-105">
            <img 
                src={project.image} 
                alt={project.name} 
                decoding="async"
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:brightness-125 transition-opacity duration-500 ease-in-out opacity-0"
                onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
            />
        </div>

        {/* Name & Description */}
        <div className="text-center mt-6">
            <h3 className="text-3xl font-semibold text-white">{project.name}</h3>
            <p className="text-gray-300 text-xl mt-4 max-w-lg">{project.description}</p>
        </div>

        {/* Links */}
        <div className="mt-6 flex gap-6">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white text-xl underline transition-transform duration-300 hover:scale-110">
                GitHub
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white text-xl underline transition-transform duration-300 hover:scale-110">
                Live Demo
            </a>
        </div>
    </div>
);

const Projects = () => {
    return (
        <section className="py-20 px-6 mt-20 text-white text-center bg-black">
            {/* Title */}
            <h2 className="text-5xl font-bold tracking-wide mb-6 text-white">Projects</h2>
            <p className="mb-10 text-xl text-gray-400">Some of my recent works.</p>

            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
