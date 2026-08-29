import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiVite,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import { FaCss3Alt, FaGithub, FaNpm } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { Database } from "lucide-react";

/**
 * Toolkit registry — the technologies and tools Sean actually works with.
 *
 * `color` is each technology's recognizable official brand color
 * (icons render via currentColor). GitHub and Express are officially
 * monochrome, so they use their correct dark-theme rendition (white);
 * the generic Databases icon carries the SeanDev accent instead.
 *
 * `status` is a small mono label shown on each category panel; `variant:
 * "exploring"` restyles the panel and its items as work-in-progress
 * (dashed, accent-tinted) instead of established skills.
 *
 * Add a technology later by dropping one entry into the right list.
 */
export const TOOLKIT_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend",
    status: "daily drivers",
    description: "The languages and libraries I build interfaces with.",
    items: [
      { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", Icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    status: "workflow",
    description: "How I write, version, and ship code.",
    items: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: FaGithub, color: "#FFFFFF" },
      { name: "VS Code", Icon: VscVscode, color: "#007ACC" },
      { name: "Vite", Icon: SiVite, color: "#646CFF" },
      { name: "npm", Icon: FaNpm, color: "#CB3837" },
    ],
  },
  {
    id: "exploring",
    title: "Currently Exploring",
    status: "in progress",
    description: "What I'm learning as I move from frontend toward full-stack.",
    variant: "exploring",
    items: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", Icon: SiExpress, color: "#FFFFFF" },
      { name: "Databases", Icon: Database, color: "#3D8BFF" },
    ],
  },
];
