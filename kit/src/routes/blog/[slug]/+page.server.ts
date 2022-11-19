import type { PageServerLoad } from './$types';
import sanity from '$sanity/client';
import groq from 'groq';
import type { Post, PostSummary } from '$lib/types/blog';
import { mapPost, urlFor } from '$sanity/utils';
 
export const load: PageServerLoad = async ({ params }) => {

    const { slug } = params;

    const query = groq`*[_type == 'post' && isPublished && slug.current == '${slug}'] {
        title,
        excerpt,
        thumbnail,
        body,
        "slug": slug.current,
        "createdAt": _createdAt,
        "updatedAt": _updatedAt,
        "author": author->{ name, "slug": slug.current, image },
        "tags": tags[]->{ name, "slug": slug.current },
        "headings": body[length(style) == 2 && string::startsWith(style, "h")]
    }[0]`;
    
    const post = mapPost(await sanity.fetch<Post>(query)) as Post;

    return { 
        post
    };
}