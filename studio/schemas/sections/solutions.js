import { MdExtension } from 'react-icons/md';

export default {
    type: 'document',
    title: 'Platforms',
    name: 'platforms',
    icon: MdExtension,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Scroll ID',
            name: 'scrollId',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'List',
            name: 'list',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
                sortable: false,
            },
        },
        {
            title: 'Content',
            name: 'content',
            type: 'portableText',
            validation: (Rule) => Rule.required(),
        },
    ],
};
