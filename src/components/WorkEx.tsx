"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Frontend Developer Intern, Varlyq",
    description1:
      "Developed an advertising application, IndoriNama, during a frontend development internship.",
    description2:
      "Created reusable, responsive components to ensure a seamless user experience across different devices.",
    description3:
      "Implemented state management using Redux, ensuring efficient and scalable application architecture.",
    techstack: "JavaScript, ReactJs, Redux, TailwindCSS, ",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Frontend Developer Intern, Varlyq
        <br /> Oct,23 - Feb,24
      </div>
    ),
  },
  {
    title: "Martian Internship Program, Persistent",
    description1:
      "Completed training in core subjects.",
    description2:
      "subjects, including Data Structures and Algorithms (DSA) and Object-Oriented Programming (OOP),during an internship at Persistent Systems.",
    techstack: "DSA, DBMS, OOP",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        Martian Internship Program, Persistent
        <br /> June,23 - August,23
      </div>
    ),
  },
];

function WorkEx() {
  return (
    <div className="p-10">
      <h1 className="mt-20 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text    text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Work Experience
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}

export default WorkEx;
