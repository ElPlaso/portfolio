import ExperienceListItem from "@/components/experience-list-item";
import Experience from "@/types/experience";
import { SanityDocument } from "@sanity/client";
import { getAllExperiences } from "@/../sanity/lib/queries";
import { sanityFetch } from "@/../sanity/lib/sanityFetch";
import { sortExperiencesByDate } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Plaso Kusay",
};

async function getExperiences(): Promise<Experience[]> {
  const experienceDocuments = await sanityFetch<SanityDocument[]>({
    query: getAllExperiences,
  });

  // convert to Experience type

  const experiences: Experience[] = experienceDocuments.map((experience) => {
    return {
      title: experience.title,
      date: experience.date,
      place: experience.location,
      description: experience.description,
      types: experience.tags,
      skills: experience.skills,
      links: experience.links,
    };
  });

  sortExperiencesByDate(experiences);

  return experiences;
}

export default async function ExperiencePage() {
  const experiences = await getExperiences();

  return (
    <>
      <h1 className="text-black text-2xl font-medium dark:text-grayDark mb-4 max-sm:text-xl shrink-0">
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
