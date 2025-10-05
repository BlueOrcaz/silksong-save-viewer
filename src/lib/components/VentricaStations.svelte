<script>
    import { ventricaStationList } from "$lib/gameData";
    import { flattenData, getLocationUrl } from "$lib/utils";
    export let playerData = {};

    function isUnlocked(flag, playerData) {
        if (Array.isArray(flag)) {
            return flag.some((f) => playerData?.[f]);
        }
        return playerData?.[flag];
    }

    let flatPlayerData = {};
    let unlockedVentricaStationCount = 0;
    let totalVentricaStations = ventricaStationList.length;
    let showNames = false;
    let hoveredIndex = null;
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
            <span class="text-green-400 font-semibold"
                >{unlockedVentricaStationCount}</span
            >
            / {totalVentricaStations}
        </p>

        <button
            class="mt-3 px-4 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition"
            on:click={() => (showNames = !showNames)}
        >
            {showNames ? "Hide Names" : "Show Names"}
        </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each ventricaStationList as ventricaStation, i}
            <div
                role="group"
                class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 transition"
                on:mouseenter={() => (hoveredIndex = i)}
                on:mouseleave={() => (hoveredIndex = null)}
            >
                <span class="flex items-center gap-2">
                    {#if isUnlocked(ventricaStation.flag, playerData)}
                        <span class="text-green-400 text-lg">✅</span>
                    {:else}
                        <span class="text-red-400 text-lg">❌</span>
                    {/if}
                    <span
                        class="font-medium transition duration-300 ease-in-out"
                        class:blur-sm={!showNames && hoveredIndex !== i}
                        class:text-gray-500={!showNames && hoveredIndex !== i}
                    >
                        {ventricaStation.name}
                    </span>
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
