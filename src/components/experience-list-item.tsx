import Experience from "@/types/experience";
import Badge from "./badge";
import TimeLineCard from "./shared/timeline-card";

export default function ExperienceListItem({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <TimeLineCard>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 max-sm:text-xs">
        {experience.date}
      </time>
      <h3 className="text-lg max-sm:text-sm font-semibold text-gray-900 dark:text-white ">
        {experience.title}
      </h3>
      {experience.types?.map((type) => (
        <Badge key={type} label={type} />
      ))}
      <p className="text-base mb-4 mt-2 font-normal text-gray-500 dark:text-gray-400 max-sm:text-sm">
        {experience.description}
      </p>

      <div className="space-y-2 max-sm:flex-col max-sm:text-sm">
        <span className="font-medium">Skills</span>
        <div className="flex flex-row max-sm:grid max-sm:grid-cols-3 gap-2 items-center ">
          {experience.skills?.map((skill) => (
            <Badge key={skill} label={skill} />
          ))}
        </div>
      </div>
      {experience.links && (
        <div className="max-sm:flex-col max-sm:text-sm mt-2">
          <span className="font-medium">Resources</span>
          <div className="flex flex-col">
            {experience.links.map((link) => (
              <a
                key={link}
                href={link}
                target="_blank"
                className="text-blue-500 hover:underline max-w-[500px] max-sm:max-w-[250px] truncate"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </TimeLineCard>
  );
}
