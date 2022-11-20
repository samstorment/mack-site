<script lang="ts">
    import type { PageData } from './$types';
    import PostSummary from './PostSummary.svelte';

    export let data: PageData;
</script>

<div id="page">

    <h1>Blog Posts</h1>
    <div id="posts">
        
        {#each data.posts as post}
            <PostSummary {post} />
        {/each}
    </div>
</div>

<!-- <pre>{JSON.stringify(data.posts, null, 4)}</pre> -->



<style>
    h1 {
        margin-bottom: 1rem;
    }

    #page {
        max-width: 1000px;
        margin: 0 auto;
        padding: 1em;
    }

    #posts {
        gap: 1em;
        display: flex;
        flex-wrap: wrap;
    }
</style>