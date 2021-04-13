export default {
    type: 'document',
    title: 'Desk',
    name: 'desk',
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
    ],
};
