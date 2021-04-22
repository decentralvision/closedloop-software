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
            title: 'Poster',
            name: 'poster',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'clip',
            title: 'Clip',
            type: 'file',
            validation: (Rule) => Rule.required(),
        },
    ],
};
