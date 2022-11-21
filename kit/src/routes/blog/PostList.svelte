<script lang="ts">
    import PostSummary from "./PostSummary.svelte";
    import type { PostSummary as Summary } from "$lib/types/blog";


    export let posts: Summary[];
</script>

<div id="posts">
        
    {#each posts as post}
        <PostSummary {post} />
    {/each}
</div>


<style>
    #posts {
        gap: 1em;
        display: flex;
        flex-wrap: wrap;
    }
</style>