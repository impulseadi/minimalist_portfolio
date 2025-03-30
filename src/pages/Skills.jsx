import React from "react";

const skills = [
  { name: "ReactJS", image: "https://tse3.mm.bing.net/th?id=OIP.IGAgoFLRQ54R3gtLiW5x2AHaE7&pid=Api&P=0&h=180" },
  { name: "Node.js", image: "https://tse1.mm.bing.net/th?id=OIP.s5j5kFK-urpNTrVLlv9-ogHaEK&pid=Api&P=0&h=180" },
  { name: "ExpressJS", image: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png" },
  { name: "MongoDB", image: "https://pluspng.com/img-png/mongodb-png--1000.png" },
  { name: "SQL", image: "https://static.tildacdn.com/tild6238-3035-4335-a333-306335373139/IMG_3349.jpg" },
  { name: "JavaScript", image: "https://tse3.mm.bing.net/th?id=OIP.DEt_TbohHcb6KhpldP6vMwHaEK&pid=Api&P=0&h=180" },
  { name: "HTML & CSS", image: "https://tse4.mm.bing.net/th?id=OIP.K0bK7OGYkF9YXIc608wZ0gHaE8&pid=Api&P=0&h=180" },
  { name: "Java", image: "https://static.vecteezy.com/system/resources/previews/012/697/295/non_2x/3d-python-programming-language-logo-free-png.png" },
  { name: "Python", image: "https://static.vecteezy.com/system/resources/previews/012/697/295/non_2x/3d-python-programming-language-logo-free-png.png" },
  { name: "DBMS", image: "https://static.vecteezy.com/system/resources/previews/026/642/681/original/dbms-icon-vector.jpg" },
];

const Skills = () => {
  return (
    <section className="py-20 px-6 mt-30 text-white text-center bg-black">
      {/* Title */}
      <h2 className="text-5xl font-bold tracking-wide mb-6 text-white">Tech Stack in My Arsenal</h2>

      {/* Subtitle */}
      <p className="mb-10 text-lg text-gray-400">Tools and technologies I wield.</p>

      {/* Skill Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Image with hover effect */}
            <div className="w-24 h-24 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition">
              <img src={skill.image} alt={skill.name} className="object-cover w-full h-full" />
            </div>
            {/* Name */}
            <p className="text-white text-lg mt-3 font-mono">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
