<script lang="ts">
    import type { PageData } from './$types';
    import PostFooter from './PostFooter.svelte';
    import PostList from './PostList.svelte';
    import PostSummary from './PostSummary.svelte';

    export let data: PageData;
</script>

<div id="page">

    <h1>Blog Posts</h1>

    <PostList posts={data.posts} />
</div>

<style>
    h1 {
        margin-bottom: 1rem;
    }

    #page {
        max-width: 1000px;
        margin: 0 auto;
        padding: 1em;
    }
</style>