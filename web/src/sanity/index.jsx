const imageUrlBuilder = require('@sanity/image-url');
const sanityClient = require('@sanity/client');

export const GetClient = sanityClient({
    dataset: 'production',
    projectId: 'f87jw0xr',
    apiVersion: 'v1',
    useCdn: false,
});

const builder = imageUrlBuilder(GetClient);

export const ImageUrl = (source) => builder.image(source).auto('format').fit('max');
