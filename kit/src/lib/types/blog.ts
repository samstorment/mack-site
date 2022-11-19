export interface PostSummary {
    author: Author,
    createdAt: string,
    updatedAt: string,
    excerpt: string,
    slug: string,
    tags: Tag[],
    thumbnail: string,
    title: string
}

export interface Post extends PostSummary {
    body: any[]
}

export interface Author {
    name: string,
    slug: string,
    image: string,
}

export interface Tag {
    name: string,
    slug: string
}