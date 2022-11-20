<script lang="ts">
    import Ball from "./Ball.svelte";
    import Line from "./Line.svelte";


    const numLines = 30;
    const arr = Array(numLines).fill(null);

</script>


<div id="chevrons">
    {#each arr as _}
        <Line />
    {/each}
</div>

<div id="balls">
    {#each arr as _}
        <Ball />
    {/each}
</div>



<style>
    
    #chevrons {
        display: flex;
        position: absolute;
        inset: -100vmax;
        /* inset: 10px; */
        border: 5px solid black;
        z-index: -1;
        animation-name: move;
        animation-duration: 60s;
        animation-iteration-count: infinite;
        border-radius: 50%;
        overflow: hidden;
        background-color: turquoise;
    }

    #balls {
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }


    @keyframes move {
        0% {
            transform: scale(1);
        }

        10% {
            transform: scale(2);
        }

        30% {
            transform: scale(1);
        }

        40% {
            transform: scale(.75) skew(45deg);

        }


        90% {
            transform: scale(1.25);
        }

        100% {
            transform: scale(1);
        }
    }
</style>