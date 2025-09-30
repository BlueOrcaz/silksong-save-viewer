<script>
    import { bellwayStationList } from "$lib/gameData";
    export let playerData = {}
</script>

<div>
    <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Unlocked Bellway Stations</h1>
    {#each bellwayStationList as bellwayStation}
        <p>{playerData?.[bellwayStation.flag] ? '✅' : '❌'} {bellwayStation.name}</p>
    {/each}
        <p>{playerData?.[bellwayStation.flag] ? '✅' : '❌'} {bellwayStation.name}</p>
</div>