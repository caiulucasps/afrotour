import * as Prismic from '@prismicio/client';

const endpoint = Prismic.getRepositoryEndpoint('afro-tour');
export const client = Prismic.createClient(endpoint);