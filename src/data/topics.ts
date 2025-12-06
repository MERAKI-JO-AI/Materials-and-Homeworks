// Topics data structure
// To add more topics, simply add new objects to this array
// Each topic should have: id, title, description, files[], and homeworks[]
// IMPORTANT: Every topic MUST have homework

export interface Resource {
  label: string;
  url: string;
}

export interface Topic {
  id: number;
  title: string;
  description: string;
  files: Resource[];
  homeworks: Resource[];
}

export const topics: Topic[] = [
  {
    id: 1,
    title: "Prompting & Intro to Vibe Coding",
    description: "Foundations of prompting and AI thinking.",
    files: [
      { label: "Intro To Prompting.pdf", url: "#" },
      { label: "Vibe Coding Overview.pdf", url: "#" },
    ],
    homeworks: [
      { label: "Prompting Homework.pdf", url: "#" },
    ],
  },
  {
    id: 2,
    title: "Web Page Structure & Layout",
    description: "Understanding HTML structure and layout fundamentals.",
    files: [
      { label: "HTML Structure.pdf", url: "#" },
      { label: "Layout Concepts.pdf", url: "#" },
    ],
    homeworks: [
      { label: "Layout Homework.pdf", url: "#" },
    ],
  },
  {
    id: 3,
    title: "HTML & CSS – Part 1",
    description: "Building clean structure and applying CSS styling.",
    files: [
      { label: "HTML Basics.pdf", url: "#" },
      { label: "CSS Styling.pdf", url: "#" },
    ],
    homeworks: [
      { label: "HTML CSS Homework.pdf", url: "#" },
    ],
  },
  {
    id: 4,
    title: "HTML, CSS & JavaScript Practice",
    description: "Hands-on practice exercises.",
    files: [
      { label: "Practice Guide.pdf", url: "#" },
    ],
    homeworks: [
      { label: "Practice Homework.pdf", url: "#" },
    ],
  },
  {
    id: 5,
    title: "JavaScript Basics",
    description: "Understanding JavaScript fundamentals.",
    files: [
      { label: "JS Introduction.pdf", url: "#" },
      { label: "Variables & Functions.pdf", url: "#" },
    ],
    homeworks: [
      { label: "JavaScript Homework.pdf", url: "#" },
    ],
  },
  {
    id: 6,
    title: "Debugging & Customization",
    description: "Fixing issues and customizing behaviors.",
    files: [
      { label: "Debugging Techniques.pdf", url: "#" },
      { label: "Customization Guide.pdf", url: "#" },
    ],
    homeworks: [
      { label: "Debugging Homework.pdf", url: "#" },
    ],
  },
];

