
<script lang="ts">
    import type { BlockComponentProps } from '@portabletext/svelte'

    export let portableText: BlockComponentProps;

    const { value } = portableText;

</script>


<span>
    <slot />
</span>

<style>
    span {
        background-color: yellow;
    }
</style>


