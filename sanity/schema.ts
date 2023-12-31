import { defineField, type SchemaTypeDefinition } from "sanity";
import { BookIcon } from "@sanity/icons";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: "project",
      title: "Project",
      icon: BookIcon,
      type: "document",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "string",
        }),
        defineField({
          name: "link",
          title: "Link",
          type: "string",
        }),
        defineField({
          name: "tags",
          title: "Tags",
          type: "array",
          // @ts-ignore
          of: [{ type: "string" }],
        }),
        defineField({
          name: 'mainImage',
          title: 'Main image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    },
    {
      name: "experience",
      title: "Experience",
      icon: BookIcon,
      type: "document",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "string",
        }),
        defineField({
          name: "location",
          title: "Location",
          type: "string",
        }),
        defineField({
          name: "links",
          title: "Links",
          type: "array",
          // @ts-ignore
          of: [{ type: "string" }],
        }),
        defineField({
          name: "date",
          title: "Date",
          type: "string",
        }),
        defineField({
          name: "skills",
          title: "Skills",
          type: "array",
          // @ts-ignore
          of: [{ type: "string" }],
        }),
        defineField({
          name: "tags",
          title: "Tags",
          type: "array",
          // @ts-ignore
          of: [{ type: "string" }],
        }),
      ],
    },
  ],
};
