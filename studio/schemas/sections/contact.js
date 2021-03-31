export default {
    type: 'document',
    title: 'Contact',
    name: 'contact',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Description',
            name: 'description',
            type: 'portableText',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Number',
            name: 'number',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Email',
            name: 'email',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
    ],
};
