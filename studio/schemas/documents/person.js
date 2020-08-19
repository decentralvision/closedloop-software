import { MdFace } from 'react-icons/md';

export default {
    name: 'person',
    title: 'Person',
    type: 'document',
    icon: MdFace,
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            description: 'Role/Occupation',
        },
        {
            title: 'Photo',
            name: 'image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
};
