export default interface Experience {
    title: string;
    date: string;
    place: string;
    description: string;
    types: ExperienceType[];
    skills: string[];
    links?: string[];
}

type ExperienceType = 'work' | 'education' | 'volunteer';