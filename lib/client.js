import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'hp9dd7by',
    dataset: 'production',
    apiVersion: '2022-11-21',
    useCdn: true,
    token: "skegBefhm5slfGBSrFDTkAshzTxoevYc4wxysKQ7NGEBmPES7aqzYyFWnen8EW9ezTepSCXRgQDFJ3etGYlR1Jvwukp3Hdp3hGvz9HxDiSKUVYulI1du4TuDKJqOQksiSPP9bZyUSWBSbIsVb9fAz8nvWexVTLIHskDfl5sUOqXr8ZC5eujk"
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);