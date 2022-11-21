<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;

    let lastLetter: string | null = null;

    function isNewLetter(name: string) {
        const isNew = name[0].toUpperCase() !== lastLetter;
        
        if (isNew) {
            lastLetter = name[0].toUpperCase();
        }
        
        return isNew;
    }

    function getLetter(name: string) {
        return name[0].toUpperCase();
    }
</script>

<div id="page">

    <h1>Tags</h1>

    <div id="tags">

        
        {#each data.tags as t}
            {#if isNewLetter(t.name)}
                <h2 id={getLetter(t.name)}>{getLetter(t.name)}</h2>
            {/if}
            <a href={`/tags/${t.slug}`}>{t.name}</a>
        {/each}
    </div>

</div>


<style>
    #page {
        padding: 1em;
        max-width: 500px;
        margin: 0 auto;
    }

    h1 {
        text-align: center;
        margin-bottom: 1rem;
    }

    h2 {
        margin: .5rem 0;
    }

    h2:first-child {
        margin-top: 0;
    }

    a {
        display: block;
        /* padding: 1em; */
        color: var(--clr-link);
        font-weight: bold;
        border-bottom: 1px solid gray;
        padding: .2em 0;
    }
</style>