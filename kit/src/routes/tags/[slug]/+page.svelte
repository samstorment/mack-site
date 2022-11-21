<script lang="ts">
    import { afterNavigate, invalidateAll } from '$app/navigation';
    import PostFooter from '../../blog/PostFooter.svelte';
    import { onMount } from 'svelte';
    import PostList from '../../blog/PostList.svelte';
    import type { PageData } from './$types';

    export let data: PageData;

</script>

<!-- use of #key is related to this part of the sveltekit docs https://kit.svelte.dev/docs/load#invalidation-manual-invalidation -->
{#key data}
    <div id="page">

        <h1>{data.tag?.name}</h1>

        <PostList posts={data.posts} />

        <PostFooter tags={data.otherTags} />
    </div>
{/key}



<style>
    #page {
        padding: 1em;
        max-width: 1000px;
        margin: 0 auto;
        display: grid;
        gap: 1em;
    }
</style>