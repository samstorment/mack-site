<script lang="ts">
    import { urlFor } from "$sanity/utils";

    export let portableText: any;

    const { value } = portableText;
    let src = urlFor(value).url();
</script>

<img {src} alt={"alt text"} />


<style>
    img {
        max-height: 400px;
    }
</style>