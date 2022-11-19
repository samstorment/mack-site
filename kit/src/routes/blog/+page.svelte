<script lang="ts">
    import type { PageData } from './$types';
    import PostSummary from './PostSummary.svelte';

    export let data: PageData;
</script>


<div id="posts">

    {#each data.posts as post}
        <PostSummary {post} />
    {/each}
</div>

<pre>{JSON.stringify(data.posts, null, 4)}</pre>



<style>
    #posts {
        padding: 1em;
        gap: 1em;
        display: grid;
        max-width: 600px;
    }
</style>