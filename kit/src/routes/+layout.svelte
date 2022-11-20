<script lang="ts">
    import Header from "./Header.svelte";

</script>


<Header />
<main>
    <slot />
</main>

<style>
    :global(#svelte) {
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    main {
        height: 100%;
        flex: 1;
    }
</style>