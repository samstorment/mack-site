import type { PageServerLoad } from './$types';
import sanity from '$sanity/client';
import groq from 'groq';
import type { PostSummary, Tag } from '$lib/types/blog';
import { mapPost } from '$sanity/utils';
 
export const load: PageServerLoad = async () => {

    // get all tags that are referenced by at least 1 published post, order by tag name
    const query = groq`*[_type == "tag" && count(*[_type == "post" && isPublished && references(^._id)]) > 0] | order(name) {
        "slug": slug.current,
        name
    }`;
    
    const tags = await sanity.fetch(query) as Tag[];

    

    return { 
        tags
    };
}