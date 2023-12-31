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
      <time className="mb-1 text-sm font-normal leading-none max-sm:text-xs">
        {experience.date}
      </time>
      <h3 className="text-lg max-sm:text-sm font-semibold text-black dark:text-grayDark ">
        {experience.title}
      </h3>
      <div className="flex w-full flex-wrap gap-2 items-center">
        {experience.types?.map((type) => (
          <Badge key={type} label={type} />
        ))}
      </div>
      <p className="text-base mb-4 mt-2 font-normal max-sm:text-sm dark:text-grayDarkSecondary">
        {experience.description}
      </p>

      <div className="space-y-2 max-sm:text-sm">
        <span className="font-medium">Skills</span>
        <div className="flex w-full flex-wrap gap-2 items-center">
          {experience.skills?.map((skill) => (
            <Badge key={skill} label={skill} />
          ))}
        </div>
      </div>
      {experience.links && (
        <div className="max-sm:text-sm mt-2">
          <span className="font-medium">Resources</span>
          <div className="flex flex-col">
            {experience.links.map((link) => (
              <a
                key={link}
                href={link}
                target="_blank"
                className="text-blue-500 dark:text-blueDark hover:underline max-w-[500px] max-sm:max-w-[250px] truncate"
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
