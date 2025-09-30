<script>
    export let playerData = {};
    import { mapList } from "$lib/gameData";
</script>

<div>
   <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Acquired Area Maps</h1>

   {#each mapList as area}
        <p>{playerData?.[area.flag] ? '✅' : '❌'} {area.name}</p>
   {/each}
</div>


