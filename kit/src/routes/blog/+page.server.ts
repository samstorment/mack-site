import type { PageServerLoad } from './$types';
import sanity from '$sanity/client';
import groq from 'groq';
import type { PostSummary } from '$lib/types/blog';
import { mapPost } from '$sanity/utils';
 
export const load: PageServerLoad = async () => {

    const query = groq`*[_type == 'post' && isPublished] | order(_createdAt desc ) {
        title,
        excerpt,
        thumbnail,
        "slug": slug.current,
        "createdAt": _createdAt,
        "updatedAt": _updatedAt,
        "author": author->{ name, "slug": slug.current, image },
        "tags": tags[]->{ name, "slug": slug.current }
    }`;
    
    const allPosts = await sanity.fetch(query) as PostSummary[];

    const posts = allPosts.map(mapPost);

    return {
        posts
    };
}