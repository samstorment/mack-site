<script lang="ts">
    import { rand } from '$lib/util/util';
</script>


    <div style={`animation-duration: ${rand(5, 10)}s`}></div>

<style>

    div {
        flex: 1;
        border: 1vw solid black;
        /* box-shadow: 0 0 1em black; */
    }

    div:nth-child(odd) {
        background-color: orange;
        transform: skew(45deg);
        animation-name: pulse-one;
        /* animation-duration: 6s; */
        animation-iteration-count: infinite;
        /* transform: rotate(45deg); */
    }

    div:nth-child(even) {
        background-color: purple;
        transform: skew(-45deg);
        animation-name: pulse-two;
        /* animation-duration: 4s; */
        animation-iteration-count: infinite;
        /* transform: rotate(-45deg); */

    }

    @keyframes pulse-one {
        0% {
            transform: skew(60deg);
        }

        25% {
            transform: skew(15deg);
        }


        50% {
            transform: skew(30deg);
        }

        100% {
            transform: skew(60deg);
        }
    }

    @keyframes pulse-two {
        0% {
            transform: skew(-60deg);
        }

        25% {
            transform: skew(-37deg) scale(.75);
        }

        50% {
            transform: skew(-30deg) scale(1.1);
        }

        100% {
            transform: skew(-60deg);
        }
    }
</style>