import Image from './image';
import Block from './block';
import ExternalLink from './external-link';
import Secondary from './secondary';

const serializers = {
    types: {
        block: Block,
        bodyImage: Image,
    },
    marks: {
        link: ExternalLink,
        secondary: Secondary,
    },
};

export default serializers;
