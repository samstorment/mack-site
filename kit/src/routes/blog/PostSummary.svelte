<script lang="ts">
    import type { PostSummary } from "$lib/types/blog";
    import { getPostFormattedDate } from "$lib/util/time";

    export let post: PostSummary;

    const { slug, title, excerpt, author, thumbnail, tags } = post;


    const createdDate = new Date(post.createdAt);
    const updatedDate = new Date(post.updatedAt);
</script>


<a class="post" href={`/blog/${slug}`}>
    <img src={thumbnail} alt={title} />

    <div class="post-info">
        <h2>{title}</h2>    
        <p>{getPostFormattedDate(createdDate)}</p>
    </div>
</a>



<style>
    .post {
        border: 1px solid black;
        overflow: hidden;
        flex: 1;
        min-width: 250px;
    }

    h2 {
        font-size: 1.25rem;
        
    }

    img {
        object-fit: cover;
        object-position: center;
        max-height: 150px;
        width: 100%;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    .post-info {
        padding: .75em;
        display: grid;
    }
</style>