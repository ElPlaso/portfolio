import Project from "@/types/project";
import Badge from "./badge";

export default function ProjectListItem({ project }: { project: Project }) {
  return (
    <>
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

      <h3 className="text-lg mb-2 font-semibold text-gray-900 dark:text-white ">
        {project.title}
      </h3>
      {project.badges.map((badge) => Badge({ label: badge }))}
      <p className="text-base mb-4 mt-2 font-normal text-gray-500 dark:text-gray-400">
        {project.description}
      </p>
      <a
        href={project.href}
        target="_blank"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
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
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </>
  );
}
