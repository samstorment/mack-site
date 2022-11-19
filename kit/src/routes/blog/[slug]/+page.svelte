<script lang="ts">
    import { PortableText } from '@portabletext/svelte'
    import PostSummary from '../PostSummary.svelte';
    import type { PageData } from './$types';
    import Image from './Image.svelte';

    export let data: PageData;

    const { post } = data;
</script>


<div id="posts">

    <!-- <PostSummary {post} /> -->

    <PortableText 
        value={post.body}
        components={{
            types: {
                image: Image
            }
        }}
    />
</div>

<!-- <pre>{JSON.stringify(post, null, 4)}</pre> -->
