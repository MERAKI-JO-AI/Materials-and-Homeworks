// Weeks data structure
// Each week contains lectures, and each lecture has both material and homework PDFs
// For now, all PDFs are "Coming soon" with null URLs

export type Lecture = {
  id: string;
  title: string;
  material: { label: string; url: string | null };
  homework: { label: string; url: string | null };
};

export type Week = {
  id: number;
  label: string; // e.g., "Week 1"
  lectures: Lecture[];
};

export const weeks: Week[] = [
  {
    id: 1,
    label: "Week 1",
    lectures: [
      {
        id: "w1-l1",
        title: "Prompting & Intro to Vibe Coding",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
      {
        id: "w1-l2",
        title: "Web Page Structure & Layout",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
    ],
  },
  {
    id: 2,
    label: "Week 2",
    lectures: [
      {
        id: "w2-l1",
        title: "HTML & CSS – Part 1",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
      {
        id: "w2-l2",
        title: "Product Details & Requirements",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
    ],
  },
  {
    id: 3,
    label: "Week 3",
    lectures: [
      {
        id: "w3-l1",
        title: "Deployment (Part 1)",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
      {
        id: "w3-l2",
        title: "HTML, CSS & JavaScript Practice",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
    ],
  },
  {
    id: 4,
    label: "Week 4",
    lectures: [
      {
        id: "w4-l1",
        title: "JavaScript Basics",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
      {
        id: "w4-l2",
        title: "JS, HTML, CSS (Part 2)",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
    ],
  },
  {
    id: 5,
    label: "Week 5",
    lectures: [
      {
        id: "w5-l1",
        title: "Debugging & Customization",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
      {
        id: "w5-l2",
        title: "Debugging & Customization Practice",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
    ],
  },
  {
    id: 6,
    label: "Week 6",
    lectures: [
      {
        id: "w6-l1",
        title: "Project Features & Integration",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
      {
        id: "w6-l2",
        title: "Advanced JavaScript Concepts",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
    ],
  },
  {
    id: 7,
    label: "Week 7",
    lectures: [
      {
        id: "w7-l1",
        title: "Deployment (Part 2)",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
      {
        id: "w7-l2",
        title: "Project Refinement",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
    ],
  },
  {
    id: 8,
    label: "Week 8",
    lectures: [
      {
        id: "w8-l1",
        title: "Portfolio Explanation & Planning",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
      {
        id: "w8-l2",
        title: "Portfolio Technical Help",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
    ],
  },
  {
    id: 9,
    label: "Week 9",
    lectures: [
      {
        id: "w9-l1",
        title: "Portfolio Presentation & Review",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
      {
        id: "w9-l2",
        title: "Final Project Showcase",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
    ],
  },
];

