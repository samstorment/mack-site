import type { Heading, Post, PostSummary, SanityHeading } from '$lib/types/blog';
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


export function generateHeadingSlug(headingText: string) {
    var alphaNumericOnly = headingText.replace(/[^0-9a-z ]/gi, '');
    return alphaNumericOnly.toLowerCase().replaceAll(' ', '-');
}

export function getHeadingText(children: any[]): string {
    return children.map(c => c.text).join('');
}

export function getSanityHeadings(headings: SanityHeading[]): Heading[] {
    return headings.map(h => {
        const text = getHeadingText(h.children);

        return {
            depth: parseInt(h.style[1]),
            slug: generateHeadingSlug(text),
            text: text
        }
    });
}