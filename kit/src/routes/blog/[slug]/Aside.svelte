
<script lang="ts">
    import type { Heading } from "$lib/types/blog";
    import { fly, scale } from "svelte/transition";
    import AsideLink from "./AsideLink.svelte";

    export let sidebarOpen: boolean;
    export let headings: Heading[];

    let duration = 250;

    let flyLeft = {x: -200, duration};
    let flyRight = {x: 200, duration};

    const minDepth = Math.min(...headings.map(h => h.depth));
</script>

<aside class:closed={!sidebarOpen}>
    <nav>
        <button type="button" on:click={() => sidebarOpen = !sidebarOpen}>
            {#if sidebarOpen}
                <i in:fly={flyLeft} out:fly={flyRight} class='fa fa-angle-right'></i>
            {:else}
                <i in:fly={flyRight} out:fly={flyLeft} class='fa fa-angle-left'></i>
            {/if}
        </button>
        {#if sidebarOpen}
            {#each headings as h, i}
                <AsideLink heading={h} index={i} {minDepth} />
            {/each}
        {/if}
    </nav>
</aside>


<style>
    aside {
        border-left: 1px solid black;
        min-width: 250px;
        position: relative;
        margin: 1em;
        transition: min-width cubic-bezier(0.075, 0.82, 0.165, 1) 250ms;
    }

    nav {
        padding: 1em 1.5em;
        position: sticky;
        top: 0;
        display: flex;
        flex-direction: column;
    }

    .closed {
        min-width: 2em;
    }

    button {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%, 50%);
        width: 2em;
        aspect-ratio: 1;
        border-radius: 50%;
        border: 1px solid black;
        background-color: white;
        overflow: hidden;
    }

    button i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }


    @media screen and (max-width: 800px) {
        aside {
            display: none;
        }
    }
</style>