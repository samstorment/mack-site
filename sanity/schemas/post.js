export default {
    title: 'Post',
    name: 'post',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        }, 
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: Rule => Rule.required()
        },
        {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: { type: 'author' },
            // sets default author to MacK
            initialValue: {
                _type: "reference",
                _ref: "02e45b81-06ff-4a56-b18c-e6f262680365",
            },
            validation: Rule => Rule.required()
        },
        {
            title: 'Thumbnail',
            name: 'thumbnail',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: Rule => Rule.required()
        },
        {
            title: 'Excerpt',
            name: 'excerpt',
            type: 'text',
            description: 'Short preview of main post body'
        },
        {
            title: 'Tags',
            name: 'tags',
            type: 'array',
            description: 'Add tags relevant to your post',
            of: [{
                type: 'reference', to: { type: 'tag' }
            }],
            // doesn't work with reference type, would probably need a plugin :(
            // options: {
            //     layout: 'tags'
            // }
        },
        {
            title: 'Body',
            name: 'body',
            type: 'blockContent',
            validation: Rule => Rule.required()
        },
        {
            title: "Published",
            name: "isPublished",
            type: "boolean",
            description: "Toggle off to hide post on site",
            initialValue: true,
            validation: Rule => Rule.required()
        }
    ],
    // sets some text on the posts on sanity studio for easier viewing
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'thumbnail',
            createdAt: '_createdAt',
            isPublished: 'isPublished'
        },
        prepare(selection) {
            const {author, createdAt, isPublished } = selection;

            const date = new Date(createdAt).toLocaleDateString();

            const published = isPublished ? "Published" : "Unpublished";

            return {
                ...selection,
                subtitle: `by ${author} - ${date} - ${published}`,
            };
        },
    }
}