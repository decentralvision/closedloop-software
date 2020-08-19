import Image from './image';
import Block from './block';
import ExternalLink from './external-link';

const serializers = {
    types: {
        block: Block,
        bodyImage: Image,
    },
    marks: {
        link: ExternalLink,
    },
};

export default serializers;
