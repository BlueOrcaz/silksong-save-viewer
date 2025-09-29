<script>
    export let playerData = {};
    import { crestList } from "./crestData";
</script>

<div>
    <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Acquired Crests</h1>

    {#each crestList as crest}
        <p>{playerData?.[crest.flag] ? '✅' : '❌'} {crest.name}</p>
    {/each}
</div>