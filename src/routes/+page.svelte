<script>
    import FileUpload from "$lib/FileUpload.svelte";
    import { decodeFile } from "$lib/decode";

    let decodedResult = null;

    async function handleFile(event) {
        const arrayBuffer = event.detail; // from dispatch
        decodedResult = await decodeFile(arrayBuffer);
    }
</script>

<h1>DAT File Viewer</h1>

<FileUpload on:fileLoaded={handleFile} />

{#if decodedResult}
    <h2>Decoded Output:</h2>
    <pre>{decodedResult.geo}</pre>
{/if}
