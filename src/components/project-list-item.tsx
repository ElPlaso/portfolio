import Project from "@/types/project";
import Badge from "./badge";
import TimeLineCard from "./shared/timeline-card";
import Image from "next/image";

export default function ProjectListItem({ project }: { project: Project }) {
  return (
    <TimeLineCard>
      <div className="w-full mb-4 mt-2">
        <Image
          src={project.imageUrl ? project.imageUrl : "/images/default.png"}
          alt={`${project.title} image`}
          height={1500}
          width={1500}
          className="h-[250px] w-full shadow-lg object-cover object-top rounded-lg"
        />
      </div>

      <h3 className="text-lg mb-2 mt-1 font-semibold text-black dark:text-grayDark max-sm:text-sm ">
        {project.title}
      </h3>
      {project.badges.map((badge) => (
        <Badge key={badge} label={badge} />
      ))}
      <p className="text-base mt-2 font-normal max-sm:text-sm dark:text-grayDarkSecondary">
        {project.description}
      </p>

      {project.href && (
        <a
          href={project.href}
          target="_blank"
          className={`inline-flex items-center 
          mt-4 px-4 py-2 text-sm font-medium 
          bg-white border border-gray-200 
          rounded-lg hover:bg-gray-100 
          hover:text-blue-500 focus:z-10 
          focus:ring-4 focus:outline-none 
          focus:ring-gray-200 focus:text-blue-600 
          dark:focus:text-blueDark
          dark:bg-grayDarkFill dark:border-gray-600 
          dark:hover:text-blueDarkFill dark:hover:bg-grayDarkFill
          dark:focus:ring-gray-700 max-sm:text-xs`}
        >
          Visit{" "}
          <svg
            className="w-3 h-3 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            {" "}
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      )}
    </TimeLineCard>
  );
}
