import type { Post, PostSummary } from '$lib/types/blog';
import sanity from '$sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanity);

export function urlFor(source: any) {
    return builder.image(source);
}

export function mapPost(p: Post | PostSummary) {
    return {
        ...p,
        author: {
            ...p.author,
            image: urlFor(p.author.image).width(36).height(36).crop('focalpoint').url()
        },
        thumbnail: urlFor(p.thumbnail).url()
    };
}