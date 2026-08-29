import Cineva from "../../public/images/Cineva-new.jpeg";
import Bakery from "../../public/images/bakery-landingpagenew.jpeg";
import Haven from "../../public/images/Havenestatenew.jpeg";
import Sealseries from "../../public/images/Sealseriesnew.jpeg";
import Portfolio from "../../public/images/PortfolioIII.jpeg";

export const FEATURED_PROJECT = {
  id: "cineva",
  name: "Cineva",
  tagline: "Movie discovery application",
  description:
    "A modern movie discovery application that allows users to search for movies, filter results, and manage a personal watchlist.",
  tech: ["React", "Tailwind CSS", "Framer Motion", "Lucide React", "Movie API"],
  liveUrl: "https://cineva-silk.vercel.app/",
  githubUrl: "https://github.com/udogusomtochukwu-eng/Cineva",
  imageLabel: "Cineva — Project Screenshot",
  imageSrc: Cineva,
  imageAlt: "Cineva movie discovery application screenshot",
  imageAspectRatio: "1319 / 603",
  imageFit: "contain",
  imagePosition: "center top",
};

export const PERSONAL_PROJECTS = [
  {
    id: "haven",
    name: "HAVEN",
    category: "Personal Project",
    description:
      "A real-estate website where that helps users find and compare comfortable homes around their location",
    tech: ["React", "Tailwindcss", "Typescript", "Lucide React"],
    liveUrl: "https://haven-real-estate-nine.vercel.app/",
    githubUrl: "https://github.com/udogusomtochukwu-eng/haven-real-estate",
    imageLabel: "HAVEN - Project Screenshot",
    imageSrc: Haven,
    imageAlt: "HAVEN - Real estate website screenshot",
    imageAspectRatio: "1262 / 605",
    imageFit: "contain",
    imagePosition: "center top",
  },
  {
    id: "clientdash",
    name: "ClientDash",
    category: "Personal Project",
    description:
      "A lightweight client portal concept designed to help freelancers manage project progress, files, messages, deadlines, and payment status.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "#clientdash-live",
    githubUrl: null,
    imageLabel: "ClientDash — Project Screenshot",
    imageSrc: Portfolio,
    imageAspectRatio: "1281 / 584",
  },
];

export const CLIENT_PROJECTS = [
  {
    id: "bloom bakery",
    name: "Bloom Bakery",
    category: "Client Project",
    description: "A custom landing page built for a bakery business.",
    tech: ["React", "Tailwind CSS", "Framer motion"],
    liveUrl: "#beverly-beauty-hub-live",
    githubUrl: null,
    imageLabel: "Beverly Beauty Hub — Client Project Screenshot",
    imageSrc: Bakery,
    imageAlt: "Beverly Beauty Hub project screenshot",
    imageAspectRatio: "1262 / 605",
    imageFit: "contain",
    imagePosition: "center top",
  },
  {
    id: "seal-series",
    name: "Seal Series",
    category: "Client Project",
    description: "A website built and delivered for a client.",
    tech: ["React", "Tailwind CSS"],
    liveUrl: "https://www.sealseries.com.ng/",
    githubUrl: null,
    imageLabel: "Seal Series — Client Project Screenshot",
    imageSrc: Sealseries,
    imageAlt: "Seal Series project screenshot",
    imageAspectRatio: "1278 / 783",
    imageFit: "contain",
    imagePosition: "center center",
  },
];
