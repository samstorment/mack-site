import type { PageServerLoad } from './$types';
import sanity from '$sanity/client';
import groq from 'groq';
import type { PostSummary, Tag } from '$lib/types/blog';
import { mapPost } from '$sanity/utils';
 
export const load: PageServerLoad = async ({ params }) => {

    const { slug } = params;

    // get all published posts where the slug query param is in the posts list of tags
    const query = groq`*[_type == "post" && isPublished && count((tags[]->slug.current)[@ in [$slug]]) > 0] | order(_createdAt desc) {
        title,
        excerpt,
        thumbnail,
        "slug": slug.current,
        "createdAt": _createdAt,
        "updatedAt": _updatedAt,
        "author": author->{ name, "slug": slug.current, image },
        "tags": tags[]->{ name, "slug": slug.current }
    }`;
    
    const allPosts = await sanity.fetch<PostSummary[]>(query, { slug });

    // return empty array if no posts found
    if (!allPosts?.length) {
        return {
            posts: []
        }
    }

    const posts = allPosts.map(mapPost);


    // get the tag from first post since it's guaranteed to be in all posts - better than two queries to sanity
    const tag = posts[0].tags.find(t => t.slug === slug);

        
    const unique: Tag[] = [];
    const slugs = new Set();

    const allTags = posts.map(p => p.tags.filter(t => t.slug !== slug)).flat().sort((a, b) => a.slug > b.slug ? 1 : -1);

    allTags.forEach(t => {
        if (!slugs.has(t.slug)) {
            slugs.add(t.slug);
            unique.push(t);
        }
    });

    console.log(posts.map(p => p.title));

    return { 
        posts,
        tag,
        otherTags: unique
    };
}