<script lang="ts">
    import type { Tag } from "$lib/types/blog";


    export let tags: Tag[] | undefined;
</script>

{#if tags}
    <footer>     
        <h3>Browse Tags</h3>
        <div id="tags">
            {#each tags as t}
                <a href={`/tags/${t.slug}`}>{t.name}</a>
            {/each}
            <a href="/tags">Browse All Tags</a>
        </div>
    </footer>
{/if}


<style>
    #tags {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
    }

    footer {
        display: grid;
        gap: .5em;
        border: 1px solid black;
        padding: 1em;
    }

    a {
        color: var(--clr-link);
        font-weight: bold;
        text-decoration: underline;
    }
</style>