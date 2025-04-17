import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-4xl text-gray-700 mb-6">
        Welcome to The Algorithm Guru!
      </h1>

      <p>
        This project is your friendly guide to learning algorithms and data structures in a fun, simple, and engaging way.
      </p>

      <p>
      While these topics are well-covered in many places, they’re often presented in ways that feel overly formal or disconnected from real understanding. 
      My goal is to change that by offering clear explanations, relatable analogies, and practical examples that actually make sense.
      </p>

      <p>
        Whether you’re a beginner or just brushing up your skills, this project will help you see how algorithms and data structures work, why they matter, and how to actually use them.
      </p>

      <p>
        This project is inspired by <a href="https://refactoring.guru/" target="_blank" className="link">Refactoring.Guru</a>, which does an amazing job of explaining refactoring, design patterns, and SOLID principles in a clear and connected way. I wanted to bring that same clarity and playfulness to another essential area of programming: algorithms and data structures.
      </p>
    </>
  );
}
