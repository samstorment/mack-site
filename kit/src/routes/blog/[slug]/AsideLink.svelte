<script lang="ts">
    import type { Heading } from "$lib/types/blog";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    export let index: number;
    export let heading: Heading;
    export let minDepth: number;

    let visible = false;
    let indent = `calc(${(heading.depth - minDepth)} * 1em)`;

    onMount(() => {
        visible = true;
    })
</script>


{#if visible}
    <a 
        href={`#${heading.slug}`} 
        style={`padding-left: ${indent}`}
        title={heading.text}
        transition:fly|local={{x: 1000, duration: 200, delay: index * 100}}
    >
        {heading.text}
    </a>
{/if}


<style>
    a {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>

