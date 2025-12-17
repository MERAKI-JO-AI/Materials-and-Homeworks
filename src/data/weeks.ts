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
        material: {
          label: "Prompting Lecture.pdf",
          url: "Materials-and-Homeworks/materials/Prompting%20Lecture.pdf",
        },

        homework: { label: "No Homework", url: null },
      },
      {
        id: "w1-l2",
        title: "Web Page Structure & Layout",
        material: {
          label: "Web Page Structure & Layout Lecture.pdf",
          url: "Materials-and-Homeworks/materials/Web%20Page%20Structure%20&%20Layout%20Lecture.pdf",
        },
        homework: {
          label: "Web Page Structure & Layout Homework.pdf",
          url: "Materials-and-Homeworks/homework/Web%20Page%20Structure%20&%20Layout%20Homework.pdf",
        },
      },
    ],
  },
  {
    id: 2,
    label: "Week 2",
    lectures: [
      {
        id: "w2-l1",
        title: "HTML, CSS Part 1",
        material: {
          label: "HTML, CSS Part 1 Lecture.pdf",
          url: "Materials-and-Homeworks/materials/HTML%20CSS%20basics.pdf",
        },
        homework: {
          label: "HTML, CSS Part 1 Lecture Homework.pdf",
          url: "Materials-and-Homeworks/homework/HTML%20CSS%20basics%20HW.pdf",
        },
      },
      {
        id: "w2-l2",
        title: "Project 1",
        material: {
          label: "Project 1.pdf",
          url: "Materials-and-Homeworks/materials/Project%201.pdf",
        },
        homework: { label: "No Homework", url: null },
      },
    ],
  },
  {
    id: 3,
    label: "Week 3",
    lectures: [
      {
        id: "w3-l1",
        title: "Deployment",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
      {
        id: "w3-l2",
        title: "Project 1 Presentation",
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
        title: "JS, HTML, CSS Part 2",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
      {
        id: "w4-l2",
        title: "JS, HTML, CSS Practice",
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
      {
        id: "w5-l3",
        title: "Project 2",
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
        title: "Project 2 Presentation",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
      {
        id: "w6-l2",
        title: "Project 3",
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
        title: "Projects Features & Integrations",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
      {
        id: "w7-l2",
        title: "Project 4",
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
        title: "Portfolio Explanation",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
      {
        id: "w8-l2",
        title: "Project 4 Presentation",
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
        title: "Portfolio Presentation",
        material: { label: "Coming soon", url: null },
        homework: { label: "Coming soon", url: null },
      },
    ],
  },
];
