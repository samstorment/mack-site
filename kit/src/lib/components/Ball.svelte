
<script context="module">
    let count = 0;
</script>

<script lang="ts">
    import { rand } from "$lib/util/util";
    import { onMount } from "svelte";
    import { scale } from "svelte/transition";


    let visible = false;

    let r = rand(100, 200);
    let h = rand(0, 360);
    let s = rand(50, 90);
    let l = rand(40, 60);

    let top = rand(0, 100);
    let left = rand(0, 100);

    function update() {
        // top += 5;
        // left += 5;
        top += 5;
        if (top > 80) top = -30;
        if (left > 95) left = -10;

        if (top % 10 === 0) r = rand(100, 400);
    }

    update();

    onMount(update);

    setInterval(update, 300);

</script>

<div 
    style={`
        width: ${r}px; aspect-ratio: 1; 
        background-color: hsl(${h}, ${s}%, ${l}%);
        top: ${top}%;
        left: ${left}%;
    `}
>

</div>


<style>
    div {
        transition-property: top, left, width;
        transition-timing-function: linear;
        transition-duration: 1000ms;
        border-radius: 50%;
        border: 1vmin solid black;
        position: absolute;
        /* box-shadow: 0 0 1em 0 black; */
    }
</style>