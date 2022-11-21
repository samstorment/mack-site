<script lang="ts">
    import blog from '$images/blog.png';
    import cool from '$images/cool.png';
    import BackgroundAnimation from '$lib/components/BackgroundAnimation.svelte';
    import { onMount } from 'svelte';
</script>

<div id="page">
    <section id="info">
        <h1>MacK Korris</h1>
        <p>A guy who copies and edits</p>
    </section>
    <nav id="home-links">
        <a href="/blog">
            <img src={blog} alt="blog" />
            <span>Blog</span>
        </a>
        <a href="/contact">
            <img src={cool} alt="Contact"/>
            <span>Contact</span>
        </a>
    </nav>
    <!-- <BackgroundAnimation /> -->
</div>





<style>
    #page {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        gap: 1em;
        /* background-image: linear-gradient(to top, transparent, purple); */
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    #info {
        display: grid;
        gap: 1em;
    }

    h1 {
        font-size: min(15vw, 8rem);
        /* background-image: linear-gradient(to right, transparent, limegreen); */
        /* background-color: rgba(255, 192, 203, 0.75); */
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
    }

    p {
        font-size: min(5vw, 3rem);
        /* background-color: rgba(255, 192, 203, 0.75); */
        /* background-image: linear-gradient(to left, transparent, limegreen); */
    }

    #home-links {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        align-self: center;
    }

    a {
        width: 100px;
        aspect-ratio: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition-property: transform;
        transition-duration: 200ms;
        transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
        /* transition-delay: 0 300ms; */
        border-radius: 50%;
        color: inherit;
        text-decoration: none;
        /* background-color: rgba(255, 192, 203, 0.75); */
    }

    a:hover {
        /* box-shadow: 0 0 0 10px rgba(255, 105, 180, 0.5); */
        text-decoration: underline;
        box-shadow: 0 0 0 15px black;
    }

</style>