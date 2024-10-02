import ProjectListItem from "@/components/project-list-item";
import Project from "@/types/project";
import { SanityDocument } from "@sanity/client";
import { getAllProjects } from "@/../sanity/lib/queries";
import { sanityFetch } from "@/../sanity/lib/sanityFetch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Plaso Kusay",
};

async function getProjects(): Promise<Project[]> {
  const projectDocuments = await sanityFetch<SanityDocument[]>({
    query: getAllProjects,
  });

  // convert to Project type

  const projects: Project[] = projectDocuments.map((project) => {
    return {
      title: project.title,
      description: project.description,
      href: project.link,
      badges: project.tags,
      imageUrl: project.imageUrl,
    };
  });

  return projects;
}

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <>
      <h1 className="mb-4 text-2xl font-medium text-black dark:text-grayDark max-sm:text-xl shrink-0">
        Personal Web Projects
      </h1>
      <ol className="relative w-full px-4 space-y-6 border-l border-gray-200 dark:border-gray-700">
        {projects.map((project) => (
          <li key={project.title} className="w-full">
            <ProjectListItem project={project} />
          </li>
        ))}
      </ol>
    </>
  );
}
