import { MdLaunch } from 'react-icons/md';

export default {
    type: 'document',
    title: 'Footer',
    name: 'footer',
    icon: MdLaunch,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'portableText',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Suptitle',
            name: 'suptitle',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'List',
            name: 'list',
            type: 'array',
            of: [{ type: 'string' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare() {
            return {
                title: 'Footer',
            };
        },
    },
};
