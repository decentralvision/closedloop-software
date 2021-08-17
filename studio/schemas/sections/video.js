import { MdExtension } from 'react-icons/md';

export default {
    type: 'document',
    title: 'Video',
    name: 'video',
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
            title: 'Video ID',
            name: 'videoId',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
    ],
};
