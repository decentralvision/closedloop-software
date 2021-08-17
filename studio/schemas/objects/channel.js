export default {
    title: 'Channel',
    name: 'channel',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
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
