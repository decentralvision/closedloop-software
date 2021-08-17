import { MdExtension } from 'react-icons/md';

export default {
    type: 'document',
    title: 'Brand',
    name: 'brand',
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
            title: 'Content',
            name: 'content',
            type: 'portableText',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Channels',
            name: 'channels',
            type: 'array',
            of: [{ type: 'channel' }],
            validation: (Rule) => Rule.required(),
        },
    ],
};
