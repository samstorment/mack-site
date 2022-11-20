
<script lang="ts">
    import type { Heading } from "$lib/types/blog";
    import { generateHeadingSlug } from "$sanity/utils";
    import type { BlockComponentProps } from '@portabletext/svelte'

    export let portableText: BlockComponentProps;

    const { value } = portableText;

    const text = value.children.map(c => c.text).join('');

    const id = generateHeadingSlug(text);
</script>


<svelte:element this={value.style} {id}>
    <slot />
</svelte:element>


