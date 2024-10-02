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
      <h3 className="text-lg font-semibold text-black max-sm:text-sm dark:text-grayDark ">
        {experience.title}
      </h3>
      <div className="flex flex-wrap items-center w-full gap-2">
        {experience.types?.map((type) => (
          <Badge key={type} label={type} />
        ))}
      </div>
      <p className="mt-2 mb-4 text-base font-normal max-sm:text-sm dark:text-grayDarkSecondary">
        {experience.description}
      </p>

      <div className="space-y-2 max-sm:text-sm">
        <span className="font-medium">Skills</span>
        <div className="flex flex-wrap items-center w-full gap-2">
          {experience.skills?.map((skill) => (
            <Badge key={skill} label={skill} />
          ))}
        </div>
      </div>
      {experience.links && (
        <div className="mt-2 max-sm:text-sm">
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
