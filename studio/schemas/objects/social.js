export default {
    name: 'social',
    type: 'object',
    title: 'Social',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'URL',
            name: 'url',
            type: 'url',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Logo',
            description: 'Use an SVG where the colors are set with currentColor',
            name: 'logo',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
    ],
};
