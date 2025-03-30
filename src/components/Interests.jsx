import React from "react";

const interests = [
  { name: "Coding", image: "https://tse3.mm.bing.net/th?id=OIP.FW-d4kQq-8Ego3T7dwz98AHaE8&pid=Api&P=0&h=180" },
  { name: "Sports", image: "https://tse2.mm.bing.net/th?id=OIP.m6TvKPokH24JEKv9i1yV1QHaEK&pid=Api&P=0&h=180" },
  { name: "Books", image: "https://tse1.mm.bing.net/th?id=OIP.qDDQxai-JqmShmnRMs2URAHaJ4&pid=Api&P=0&h=180" },
  { name: "Geopolitics", image: "http://tse1.mm.bing.net/th?id=OIP.kfwmBe9PUtUGLSMFq3HYuAHaEO&pid=Api&P=0&h=180" },
  { name: "Movies & Web Series", image: "https://tse3.mm.bing.net/th?id=OIP.3f-gyLPI4fXP7oofglJNXQHaHa&pid=Api&P=0&h=180" },
];

const Interests = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      {interests.map((interest, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition">
            <img src={interest.image} alt={interest.name} className="object-cover w-full h-full" />
          </div>
          <p className="text-gray-300 mt-2">{interest.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Interests;
