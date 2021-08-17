import { MdNearMe } from 'react-icons/md';

export default {
    name: 'menu',
    title: 'Menu',
    type: 'document',
    icon: MdNearMe,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'navItems',
            type: 'array',
            title: 'Navigation Items',
            of: [{ type: 'navItem' }],
            options: {
                sortable: true,
            },
            validation: (Rule) => Rule.required(),
        },
    ],
};
