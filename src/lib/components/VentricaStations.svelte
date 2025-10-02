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

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
    <h1 class="col-span-1 md:col-span-2 lg:col-span-3 text-2xl font-bold text-center mt-4">Unlocked Ventrica Stations</h1>

    {#each ventricaStationList as ventricaStation}
        <div class="flex-col flex justify-between text-center items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700">
            <span class="flex items-center gap-2">
                {#if isUnlocked(ventricaStation.flag)}
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
