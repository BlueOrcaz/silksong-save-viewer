<script>
    export let playerData = {};
    export let sceneData = {};

    import { paleOilList } from "$lib/gameData";
    import { flattenData, getLocationUrl } from "$lib/utils";

    function foundPaleOil(oil, playerData, sceneData) {
        if (!playerData || !sceneData || !oil.flag) return false;

        if (oil.flagType === "quest") {
            const questList = playerData?.QuestCompletionData?.savedData ?? [];
            return questList.some(
                (entry) => entry.Name === oil.flag && entry.Data?.IsCompleted,
            );
        }

        if (oil.flagType === "scene") {
            const sceneList = sceneData?.persistentBools?.serializedList ?? [];
            return sceneList.some(
                (entry) =>
                    entry.SceneName === oil.flag &&
                    entry.ID === "Collectable Item Pickup" &&
                    entry.Value === true,
            );
        }
    }

    let flatPlayerData = {};
    let flatSceneData = {};
    let showNames = false;
    let hoveredIndex = null;
    let paleOilCount = 0;
    let totalPaleOil = paleOilList.length;

    $: if (playerData && sceneData) {
        flatPlayerData = flattenData(playerData);
        flatSceneData = flattenData(sceneData);
        let count = 0;
        for (const oil of paleOilList) {
            if (foundPaleOil(oil, flatPlayerData, flatSceneData)) {
                count++;
            }
        }
        paleOilCount = count;
    }

    export { paleOilCount, totalPaleOil };
</script>

<div class="flex justify-center items-center w-full px-3 sm:px-6">
    <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-4xl p-4 sm:p-6"
    >
        <div
            class="col-span-1 sm:col-span-2 flex flex-col items-center mt-2 sm:mt-4 text-center"
        >
            <h1 class="text-2xl sm:text-3xl font-bold">Pale Oil</h1>
            <p class="text-sm text-gray-400 mt-1">
                Collected:
                <span class="text-green-400 font-semibold">
                    {paleOilCount}
                </span>
                / {totalPaleOil}
            </p>

            <button
                class="mt-3 px-4 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition w-full sm:w-auto"
                on:click={() => (showNames = !showNames)}
            >
                {showNames ? "Hide Names" : "Show Names"}
            </button>
        </div>

        {#each paleOilList as oil, i}
            <div
                role="group"
                class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 transition"
                on:mouseenter={() => (hoveredIndex = i)}
                on:mouseleave={() => (hoveredIndex = null)}
            >
                <span class="flex items-center gap-2">
                    {#if foundPaleOil(oil, playerData, sceneData)}
                        <span class="text-green-400 text-lg">✅</span>
                    {:else}
                        <span class="text-red-400 text-lg">❌</span>
                    {/if}
                    <span
                        class="font-medium transition duration-300 ease-in-out"
                        class:blur-sm={!showNames && hoveredIndex !== i}
                        class:text-gray-500={!showNames && hoveredIndex !== i}
                    >
                        {oil.name}
                    </span>
                </span>

                {#if oil.location}
                    <a
                        href={getLocationUrl(oil.location)}
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
