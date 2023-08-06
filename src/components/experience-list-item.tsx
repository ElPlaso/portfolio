import Experience from "@/types/experience";
import Badge from "./badge";

export default function ExperienceListItem({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <>
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {experience.date}
      </time>
      <h3 className="text-lg mb-2 font-semibold text-gray-900 dark:text-white ">
        {experience.title}
      </h3>
      {experience.types.map((type) => (
        <Badge key={type} label={type} />
      ))}
      <p className="text-base mb-4 mt-2 font-normal text-gray-500 dark:text-gray-400">
        {experience.description}
      </p>

      <div className="space-x-2 flex flex-row max-sm:flex-col max-sm:space-x-0 ">
        <span className="font-medium max-sm:mb-2">Skills:</span>
        <div className="flex flex-row max-sm:grid max-sm:grid-cols-3 gap-2 items-center">
          {experience.skills.map((skill) => (
            <Badge key={skill} label={skill} />
          ))}
        </div>
      </div>
    </>
  );
}
