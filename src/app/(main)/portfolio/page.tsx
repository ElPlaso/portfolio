import ProjectListItem from "@/components/project-list-item";
import Project from "@/types/project";
import { SanityDocument } from "@sanity/client";
import { getAllProjects } from "@/../sanity/lib/queries";
import { sanityFetch } from "@/../sanity/lib/sanityFetch";

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
    };
  });

  return projects;
}

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <>
      <h1 className="text-gray-800 text-2xl font-medium dark:text-white mb-4 max-sm:text-xl snap-end shrink-0">
        Personal Web Projects
      </h1>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 space-y-6">
        {projects.map((project) => (
          <li key={project.title} className="ml-4">
            <ProjectListItem project={project} />
          </li>
        ))}
      </ol>
    </>
  );
}
