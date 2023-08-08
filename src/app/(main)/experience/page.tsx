import ExperienceListItem from "@/components/experience-list-item";
import Experience from "@/types/experience";

const experiences: Experience[] = [
  {
    title: "Chess Club President",
    date: "2023",
    place: "Victoria University of Wellington",
    description:
      "I currently have the pleasure of being Club President for the humble Chess Club at Victoria University of Wellington. I am happy to see the club grow and I am excited to see what the future holds for the club. As president, I am responsible for organising and running club events and ensuring that the club is running smoothly.",
    types: ["education", "volunteer"],
    skills: ["Communication", "Leadership", "Teamwork"],
  },
  {
    title: "U.eNergy Team Member",
    date: "2023",
    place: "Victoria University of Wellington",
    description:
      "For the group project in my fourth year Human Computer Interaction course, we were tasked with creating an interactive web application with D3 (or similar library) which let users discover and interact with data relating to the United Nations Sustainable Development Goals. Our group chose to focus on the goal of responsible consumption and production. We created a web application that allowed users to explore the energy consumption of different countries over time. We each contributed a page which had a different visualisation of the data. I created a country page which displayed the energy consumption of an individual country over different years in the form of a bar chart. Users could select a year in the timeline or click a play button to see the bar chart animate over time.",
    types: ["education"],
    skills: ["Teamwork", "D3", "Typescript"],
  },
  {
    title: "Flutter Developer",
    date: "2022-2023",
    place: "Syrp Lab",
    description:
      "Over the 2022 summer break, I had the opportunity to work as a Flutter developer at Syrp Lab in Auckland, a company that specialises in design, software, and electronics. As a company, Syrp Lab helps photo and video brands by creating fully integrated solutions from the ground up, which includes the use of mobile applications. During my time at Syrp Lab, I was responsible for supporting the Research and Development team by leveraging my skills in Flutter to recreate the UI of an existing Android application.",
    types: ["work"],
    skills: ["OOP", "Flutter", "Dart", "Git"],
  },
  {
    title: "QRCards Team Member",
    date: "2022",
    place: "Victoria University of Wellington",
    description:
      "I was involved in a group project for my Mobile Applications course. Our group developed an app using Flutter and Firebase that allowed users to create and share business cards which could be scanned by other users. My main role in the group was in front-end development.",
    types: ["education"],
    skills: ["Teamwork", "Communication", "Flutter", "GitLab", "Firebase"],
  },
  {
    title: "Samplify Team Member",
    date: "2022",
    place: "Victoria University of Wellington",
    description:
      "For one of my third year Network Engineering courses, there was a group project involving creating a Restful Web Application that utilised a NoSQL database. Our group created a web application which let users search for samples used in songs and allowed them to curate their own playlists. Users were able to visit other users' profiles and view their playlists. The web application was made with Express, EJS, and Firebase.",
    types: ["education"],
    skills: [
      "Express",
      "EJS",
      "Git",
      "JavaScript",
      "CSS",
      "Node.js",
      "Firebase",
    ],
  },
  {
    title: "CompSci Tutor",
    date: "2022",
    place: "Victoria University of Wellington",
    description:
      "During my time at Victoria University of Wellington, I was a tutor for two first year Computer Science courses. These coursese were taught in Java and dealt with some fundamentals of programming. I got to work along fellow tutors to collaborate on marking and tutoring.",
    types: ["work", "education"],
    skills: ["Communication", "Java", "Teamwork"],
  },
  {
    title: "McDonald's Crew Member",
    date: "2021-2022",
    place: "McDonald's",
    description:
      "During my time as a crew member at McDonalds, Manners Street, Wellington, I fulfilled clients' requests, collaborated well in different teams, and quickly adapted to different stations, learning various skills along the way. Additionally, I flipped many burgers and made many ice creams.",
    types: ["work"],
    skills: ["Customer Service", "Adaptability", "Teamwork"],
  },
];

export default function ExperiencePage() {
  return (
    <>
      <h1 className="text-gray-800 text-2xl font-medium dark:text-white mb-4 max-sm:text-xl snap-end shrink-0">
        Work & Education
      </h1>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 space-y-6 ">
        {experiences.map((experience) => (
          <li key={experience.title} className="ml-4">
            <ExperienceListItem experience={experience} />
          </li>
        ))}
      </ol>
    </>
  );
}
