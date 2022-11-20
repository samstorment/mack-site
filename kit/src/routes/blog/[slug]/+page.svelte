<script lang="ts">
    import { getSanityHeadings } from '$sanity/utils';
    import { PortableText } from '@portabletext/svelte'
    import { onMount } from 'svelte';
    import type { PageData } from './$types';
    import Aside from './Aside.svelte';
    import Blockquote from './Blockquote.svelte';
    import Code from './Code.svelte';
    import Heading from './Heading.svelte';
    import Highlight from './Highlight.svelte';
    import Image from './Image.svelte';
    import Normal from './NormalListItem.svelte';

    export let data: PageData;

    let sidebarOpen = true;

    const { post } = data;
</script>


<div id="page">

    <div id="content">
        <section id="post-info">
            <h1>{post.title}</h1>
            <p>{post.author.name}</p>
            <p>{new Date(post.createdAt).toLocaleDateString()}</p>
        </section>
        
        <!-- <PostSummary {post} /> -->
        
        <article>
            <PortableText 
                value={post.body}
                components={{
                    types: {
                        image: Image
                    },
                    block: {
                        h2: Heading,
                        h3: Heading,
                        h4: Heading,
                        h5: Heading,
                        h6: Heading,
                        blockquote: Blockquote
                    },
                    marks: {
                        highlight: Highlight,
                        code: Code
                    },
                    listItem: {
                        normal: Normal
                    }
                }}
            />
        </article>
    </div>

    <Aside headings={getSanityHeadings(post.headings)} bind:sidebarOpen />
</div>



<style>
    #page {
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        gap: 1em;
        position: relative;
    }

    h1 {
        font-size: 2rem;
    }

    section {
        border-bottom: 1px solid black;
        padding: 1em;

    }

    article {
        display: grid;
        gap: 1em;
        padding: 1em;
    }

    :global(article :is(ul, ol) ) {
        padding-left: 1em;
    }

    :global(article a) {
        text-align: underline;
        color: #36c;
        font-weight: bold;
    }
</style>