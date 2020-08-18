export default {
    name: 'metadata',
    title: 'Metadata',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required().max(60).warning('Should be under 60 characters'),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) =>
                Rule.required().max(155).warning('Should be under 155 characters'),
        },
        {
            name: 'twitter',
            description: 'Remember to include @ symbol',
            title: 'Twitter Username',
            type: 'string',
        },
        {
            title: 'Logo',
            name: 'logo',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
    ],
};
