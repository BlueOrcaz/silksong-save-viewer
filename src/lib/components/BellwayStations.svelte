<script>
    import { bellwayStationList } from "$lib/gameData";
    export let playerData = {};
    import { getLocationUrl, flattenData } from "$lib/utils";

    let flatPlayerData = {};
    let unlockedBellwayStationCount = 0;
    let totalBellwayStations = bellwayStationList.length;

    $: if (playerData) {
        flatPlayerData = flattenData(playerData);

        let count = 0;
        for (const station of bellwayStationList) {
            if (flatPlayerData?.[station.flag] === true) {
                count++;
            }
        }

        unlockedBellwayStationCount = count;
    }


    export { unlockedBellwayStationCount, totalBellwayStations };
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
    <div class="col-span-2 flex flex-col items-center mt-4">
        <h1 class="text-2xl font-bold text-center">
            Unlocked Bellway Stations
        </h1>
        <p class="text-sm text-gray-400 mt-1">
            Unlocked: <span class="text-green-400 font-semibold"
                >{unlockedBellwayStationCount}</span
            >
            / {totalBellwayStations}
        </p>
    </div>

    {#each bellwayStationList as station}
        <div
            class="flex-col flex justify-between text-center items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700"
        >
            <span class="flex items-center gap-2">
                {#if playerData?.[station.flag] == true}
                    <span class="text-green-400 text-lg">✅</span>
                {:else}
                    <span class="text-red-400 text-lg">❌</span>
                {/if}
                <span class="font-medium">{station.name}</span>
            </span>

            {#if station.location}
                <a
                    href={getLocationUrl(station.location)}
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
