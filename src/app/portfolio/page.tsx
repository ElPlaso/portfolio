import ProjectListItem from "@/components/project-list-item";
import Project from "@/types/project";
import Link from "next/link";

const projects: Project[] = [
  {
    title: "Rangi",
    description:
      "Rangi (formerly Samplify) is a web app for finding samples used in your favourite songs and albums. It consumes a Genius Song Lyrics API. This was my first Next.js project and I started it when the app router was still in beta. The word rangi means tune, air, melody, tenor, drift. This was initially a recreation of a uni group project that was made with ejs and express.",
    href: "https://rangi.beatbotanica.com",
  },
  {
    title: "BiblioSort",
    description:
      "I made BiblioSort to help me organise the different references I was using for I was using for my reports and essays. Made with Next.js, Tailwind CSS, and Firebase.",
    href: "https://bibliosort.vercel.app",
  },
  {
    title: "FlagReact",
    description:
      "Flag React (aka the Vexed game) lets you test your knowledge of international flags. There are multiple game modes for different time and region settings. Users can compete on the leaderboard and track their best scores on their profile page. Made with React, Bootstrap, and Firebase.",
    href: "https://www.flagreact.com",
  },
];

export default function PortfolioPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <div className="flex flex-col space-y-8 w-[700px] mt-8 max-md:mt-2 max-md:w-[100%] items-start justify-start">
        <h1 className="text-gray-800 text-2xl font-medium dark:text-white">
          Portfolio
        </h1>
        <ol className="relative border-l border-gray-200 dark:border-gray-700 space-y-6">
          {projects.map((project) => (
            <li key={project.title} className="ml-4">
              <ProjectListItem project={project} />
            </li>
          ))}
        </ol>
      </div>
      <Link href="/" className="text-blue-500 hover:underline">
        Go Back
      </Link>
    </main>
  );
}
