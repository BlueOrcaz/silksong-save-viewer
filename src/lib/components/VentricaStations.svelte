<script>
    import { ventricaStationList } from "$lib/gameData";
    export let playerData = {};
    
    function isUnlocked(flag) {
        if (Array.isArray(flag)) {
            return flag.some(f => playerData?.[f]);
        }
        return playerData?.[flag];
    }
</script>

<div>
    <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Unlocked Ventrica Stations</h1>
    {#each ventricaStationList as ventricaStation}
        <p>{isUnlocked(ventricaStation.flag) ? '✅' : '❌'} {ventricaStation.name}</p>
    {/each}
</div>
