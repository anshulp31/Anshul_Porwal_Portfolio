"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export const products = [
  {
    title: "StudyNotion",
    link: "https://studynotion-edtech-project-frontend-jet.vercel.app/",
    thumbnail: "/courses/studyNotion.png",
  },
  {
    title: "Movix",
    link: "https://moviex-react-tmdb-app.vercel.app/",
    thumbnail: "/courses/Movix.png",
  },
  {
    title: "MusicSchool",
    link: "https://music-school-drab.vercel.app/",
    thumbnail: "/courses/music.png",
  },

  {
    title: "Mystery-messages",
    link: "https://mystry-messages.vercel.app/",
    thumbnail: "/courses/mystery.png",
  },
  {
    title: "StudyNotion",
    link: "https://studynotion-edtech-project-frontend-jet.vercel.app/",
    thumbnail: "/courses/studyNotion.png",
  },
  {
    title: "Movix",
    link: "https://moviex-react-tmdb-app.vercel.app/",
    thumbnail: "/courses/Movix.png",
  },
  {
    title: "MusicSchool",
    link: "https://music-school-drab.vercel.app/",
    thumbnail: "/courses/music.png",
  },

  {
    title: "Mystery-messages",
    link: "https://mystry-messages.vercel.app/",
    thumbnail: "/courses/mystery.png",
  },
  
];

function HomeProjects() {
  return <HeroParallax products={products} />;
}

export default HomeProjects;
