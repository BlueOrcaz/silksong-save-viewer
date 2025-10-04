<script>
    export let playerData = {};
    export let sceneData = {};

    import { paleOilList } from "$lib/gameData";
    import { flattenData, getLocationUrl } from "$lib/utils";


    function foundPaleOil(oil, playerData, sceneData) {
        if (!playerData || !sceneData || !oil.flag ) return false;

        if (oil.flagType === "quest") {
            const questList = playerData?.QuestCompletionData?.savedData ?? [];
            return questList.some(
                (entry) =>
                    entry.Name === oil.flag && entry.Data?.IsCompleted,
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
    let paleOilCount = 0;
    let totalPaleOil = paleOilList.length;

    $: if(playerData && sceneData) {
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

    export { paleOilCount, totalPaleOil }
</script>

<div class="flex justify-center items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl p-6">
                <div class="col-span-2 flex flex-col items-center mt-4">
            <h1 class="text-3xl font-bold text-center">Collected Pale Oil</h1>
            <p class="text-sm text-gray-400 mt-1">
                Collected: 
                <span class="text-green-400 font-semibold">
                    {paleOilCount}
                </span>
                / {totalPaleOil}
            </p>
        </div>

        {#each paleOilList as oil}
            <div class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 gap-6">
                <span class="flex items-center gap-2">
                    {#if foundPaleOil(oil, playerData, sceneData)}
                        <span class="text-green-400 text-lg">✅</span>
                    {:else}
                        <span class="text-red-400 text-lg">❌</span>
                    {/if}
                    <span class="font-medium">{oil.name}</span>
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