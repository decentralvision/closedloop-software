// eslint-disable-next-line no-unused-vars
import React from 'react';

const secondaryIcon = () => <span style={{ fontWeight: 'bold' }}>S</span>;
const secondaryRender = (props) => <span style={{ color: '#1cb3fc' }}>{props.children}</span>;

export default {
    title: 'Portable Text',
    name: 'portableText',
    type: 'array',
    of: [
        {
            title: 'Block',
            type: 'block',
            styles: [
                { title: 'H1', value: 'h1' },
                { title: 'H2', value: 'h2' },
                { title: 'Normal', value: 'normal' },
            ],
            lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Numbered', value: 'number' },
            ],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                    { title: 'Underline', value: 'underline' },
                    { title: 'Strike', value: 'strike-through' },
                    {
                        title: 'Secondary',
                        value: 'secondary',
                        blockEditor: {
                            icon: secondaryIcon,
                            render: secondaryRender,
                        },
                    },
                ],
                annotations: [
                    {
                        name: 'link',
                        type: 'object',
                        title: 'External link',
                        fields: [
                            {
                                name: 'href',
                                type: 'url',
                                title: 'URL',
                            },
                            {
                                title: 'Open in new tab',
                                name: 'blank',
                                type: 'boolean',
                            },
                        ],
                    },
                ],
            },
        },
        {
            type: 'bodyImage',
        },
    ],
};
