import imageUrlBuilder from '@sanity/image-url';

const sanityConfig = {
    sanity: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
    },
}

const builder = imageUrlBuilder(sanityConfig.sanity);

export default function imageUrlFor(source) {
    return builder.image(source);
}
