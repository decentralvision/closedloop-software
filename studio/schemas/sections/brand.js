export default {
    type: 'document',
    title: 'Brand',
    name: 'brand',
    fields: [
        {
            title: 'Title',
            name: 'title',
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
