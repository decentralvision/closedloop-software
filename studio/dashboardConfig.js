export default {
    widgets: [
        { name: 'structure-menu' },
        {
            name: 'project-info',
            options: {
                data: [
                    {
                        title: 'GitHub Repo',
                        value: 'https://github.com/individ/individ.rocks',
                        category: 'Code',
                    },
                    {
                        title: 'Frontend',
                        value: 'https://individ.rocks/',
                        category: 'apps',
                    },
                ],
            },
        },
        { name: 'project-users', layout: { height: 'auto' } },
        {
            name: 'document-list',
            options: {
                title: 'Recently edited',
                order: '_updatedAt desc',
                limit: 10,
            },
            layout: { width: 'medium' },
        },
    ],
};
