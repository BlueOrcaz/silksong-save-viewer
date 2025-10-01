<script>
    import { bellwayStationList } from "$lib/gameData";
    export let playerData = {}
</script>

<div>
    <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Unlocked Bellway Stations</h1>
    {#each bellwayStationList as station}
        <p>{playerData?.[station.flag] ? '✅' : '❌'} {station.name}</p>
    {/each}
</div>