import { MdExtension } from 'react-icons/md';

export default {
    type: 'document',
    title: 'Carousel',
    name: 'carousel',
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
    ],
};
