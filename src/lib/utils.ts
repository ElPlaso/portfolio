import Experience from "@/types/experience";

/**
 * Sorts an array of experience objects by date
 * Supports years in the format of "YYYY" and "YYYY-YYYY"
 *
 * @param years An array of strings; years in the format of "YYYY" and "YYYY-YYYY"
 * @returns An array of years in descending order
 */
export function sortExperiencesByDate(experiences: Experience[]): void {
  experiences.sort((a, b) => {
    const aYear = parseInt(a.date?.split("-")[0]);
    const bYear = parseInt(b.date?.split("-")[0]);

    if (aYear === bYear) {
      // check if second year exists for both
      // if one doesn't exist, return the one that does
      // if both exist, return the one that is greater

      const aSecondYear = parseInt(a.date?.split("-")[1]);
      const bSecondYear = parseInt(b.date?.split("-")[1]);

      if (aSecondYear && bSecondYear) {
        return bSecondYear - aSecondYear;
      }
      if (aSecondYear || bSecondYear) {
        return aSecondYear ? -1 : 1;
      }
      return 0;
    }

    return bYear - aYear;
  });
}
