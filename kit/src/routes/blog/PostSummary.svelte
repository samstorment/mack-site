<script lang="ts">
    import type { PostSummary } from "$lib/types/blog";

    export let post: PostSummary;

    const { slug, title, excerpt, author, thumbnail, tags } = post;


    const createdDate = new Date(post.createdAt);
    const updatedDate = new Date(post.updatedAt);
</script>


<div class="post">
    <a href={`/blog/${slug}`}>
        <img class="thumbnail" src={thumbnail} alt={title} />
    </a>

    <div class="post-info">

        <a href={`/blog/${slug}`} class="post-link">
            <h2>{title}</h2>
            <!-- <p>{excerpt}</p> -->
        </a>
        
        <div class="author-info">
            <a href={`/author/${author.slug}`}>
                <img src={author.image} alt={author.name}>
            </a>
            <a href={`/author/${author.slug}`}><b>{author.name}</b></a>
        </div>
        
        <div class="time-info">
            <p>Created {createdDate.toLocaleDateString()} {createdDate.toLocaleTimeString()}</p>
            <p>Last Edited {updatedDate.toLocaleDateString()} {updatedDate.toLocaleTimeString()}</p>
        </div>
        
        <div id="tags">
            {#each tags as t}
                <a href={`/tags/${t.slug}`} class="tag">
                    {t.name}
                </a>
            {/each}
        </div>
    </div>
</div>



<style>
    .post {
        /* box-shadow: 0 0 1em 0 gray; */
        border: 1px solid black;
        /* border-radius: .5em; */
        overflow: hidden;
    }

    .thumbnail {
        object-fit: cover;
        object-position: center;
        max-height: 200px;
        width: 100%;
    }

    .post a {
        color: inherit;
        text-decoration: none;
    }

    .post a:hover {
        text-decoration: underline;
    }

    .post-info {
        padding: 1em;
        display: grid;
        gap: 1em;
    }
    
    .post-link {
        display: grid;
    }

    .author-info {
        display: flex;
        align-items: center;
        gap: .75em;
    }

    .author-info img {
        border-radius: 50%;
    }

    #tags {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
    }
    
    a.tag {
        font-size: .9rem;
        border: 1px solid gray;
        color: gray;
        font-weight: 600;
        padding: .25em .75em;
    }
</style>