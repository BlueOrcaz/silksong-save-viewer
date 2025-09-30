<script>
    import { ventricaStationList } from "$lib/gameData";
    export let playerData = {}
</script>

<div>
    <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Unlocked Bellway Stations</h1>
    {#each ventricaStationList as ventricaStation}
        <p>{playerData?.[ventricaStation.flag] ? '✅' : '❌'} {ventricaStation.name}</p>
    {/each}
        <p>{playerData?.[ventricaStation.flag] ? '✅' : '❌'} {ventricaStation.name}</p>
</div>