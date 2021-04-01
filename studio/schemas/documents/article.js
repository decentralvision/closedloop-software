import { MdChromeReaderMode } from 'react-icons/md';

export default {
    title: 'Article',
    name: 'article',
    type: 'document',
    icon: MdChromeReaderMode,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Published Date',
            name: 'date',
            type: 'date',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: { type: 'person' },
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Excerpt',
            name: 'excerpt',
            type: 'text',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Content',
            name: 'content',
            type: 'portableText',
            validation: (Rule) => Rule.required(),
        },
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'image',
        },
        prepare(selection) {
            const { author } = selection;
            return { ...selection, subtitle: `${author && `by ${author}`}` };
        },
    },
};
