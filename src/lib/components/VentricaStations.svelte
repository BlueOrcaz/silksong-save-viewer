<script>
    import { ventricaStationList } from "$lib/gameData";
    import { flattenData } from "$lib/utils";
    export let playerData = {};
    
    function isUnlocked(flag, playerData) {
        if (Array.isArray(flag)) {
            return flag.some(f => playerData?.[f]);
        }
        return playerData?.[flag];
    }

    let flatPlayerData = {};
    let unlockedVentricaStationCount = 0;
    let totalVentricaStations = ventricaStationList.length;
    $: if (playerData) {
        flatPlayerData = flattenData(playerData);
        let count = 0;
        for (const ventricaStation of ventricaStationList) {
            if (isUnlocked(ventricaStation.flag, flatPlayerData) === true) {
                count++;
            }
        }

        unlockedVentricaStationCount = count;
    }

    export { unlockedVentricaStationCount, totalVentricaStations };
</script>

<div class="w-full max-w-4xl mx-auto p-6">
  <div class="flex flex-col items-center text-center mb-6">
    <h1 class="text-3xl font-bold mb-2">Unlocked Ventrica Stations</h1>
    <p class="text-sm text-gray-400">
      Unlocked:
      <span class="text-green-400 font-semibold">{unlockedVentricaStationCount}</span>
      / {totalVentricaStations}
    </p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each ventricaStationList as ventricaStation}
        <div class="flex-col flex justify-between text-center items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700">
            <span class="flex items-center gap-2">
                {#if isUnlocked(ventricaStation.flag, playerData)}
                    <span class="text-green-400 text-lg">✅</span>
                {:else}
                    <span class="text-red-400 text-lg">❌</span>
                {/if}
                <span class="font-medium">{ventricaStation.name}</span>
            </span>

            {#if ventricaStation.location}
                <a
                    href={getLocationUrl(ventricaStation.location)}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-xs text-blue-400 hover:underline"
                >
                    View Map
                </a>
            {:else}
                <span class="text-xs text-gray-400 italic">Unknown</span>
            {/if}
        </div>
    {/each}
    </div>
</div>
