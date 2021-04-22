import { MdExtension } from 'react-icons/md';

export default {
    type: 'document',
    title: 'Hero',
    name: 'hero',
    icon: MdExtension,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'portableText',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Scroll ID',
            name: 'scrollId',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Content',
            name: 'content',
            type: 'portableText',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
};
