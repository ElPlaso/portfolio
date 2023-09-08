import { groq } from "next-sanity";

// Get all projects
export const getAllProjects = groq`
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    description,
    link,
    tags,
    _createdAt,
    _updatedAt,
  }
`;

// Get all experiences
export const getAllExperiences = groq`
  *[_type == "experience"] | order(_createdAt desc) {
    _id,
    title,
    description,
    location,
    links,
    types,
    skills,
    tags,
    date,
    _createdAt,
    _updatedAt,
  }
`;
