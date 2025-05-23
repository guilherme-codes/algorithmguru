import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Welcome to The Algorithm Guru",
};

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-4xl light:text-gray-700 mb-6">
        Welcome to The Algorithm Guru!
      </h1>

      <p>
        This is your friendly guide to learning algorithms and data structures
        in a fun, simple, and engaging way.
      </p>

      <p>
        While these topics are well-covered in many places, they’re often
        presented in ways that feel overly formal or disconnected from real
        understanding. My goal is to change that by offering clear explanations,
        relatable analogies, and practical examples that actually make sense.
      </p>

      <p>
        Whether you’re a beginner or just brushing up your skills, this project
        will help you see how algorithms and data structures work, why they
        matter, and how to actually use them.
      </p>

      <p>
        This project is inspired by{" "}
        <a href="https://refactoring.guru/" target="_blank" className="link">
          Refactoring.Guru
        </a>
        , which does an amazing job of explaining refactoring, design patterns,
        and SOLID principles in a clear and connected way. I wanted to bring
        that same clarity and playfulness to another essential area of
        programming: algorithms and data structures.
      </p>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 md:col-span-3">
          <img
            src="/img/data-structures.webp"
            alt="Data Structures"
          />
        </div>

        <div className="col-span-12 md:col-span-9 flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-2xl light:text-gray-700 mt-4 md:mt-0">
              Data Structures
            </h2>
            <p>
              Data structures are the way we organize and store data in our
              programs. <br/> They’re like the containers that hold the information we
              need to work with.
            </p>
          </div>

          <Link href="/data-structures" className="btn-info w-fit">
            More about Data Structures
            <i className="ml-2 fa fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 md:col-span-3">
          <img
            src="/img/algorithms.webp"
            alt="Algorithms"
          />
        </div>

        <div className="col-span-12 md:col-span-9 flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-2xl light:text-gray-700 mt-4 md:mt-0">
              Algorithms
            </h2>
            <p>
              Algorithms are the heart of programming. <br />They’re the step-by-step
              instructions that tell your computer how to solve a problem or
              perform a task.
            </p>
          </div>

          <button className="btn-disabled w-fit cursor-not-allowed">
            More about Algorithms
            <i className="ml-2 fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </>
  );
}
