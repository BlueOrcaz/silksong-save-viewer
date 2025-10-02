<script>
    export let playerData = {};
    export let sceneData = {};

    import { paleOilList } from "$lib/gameData";
    import { getLocationUrl } from "$lib/utils";


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
</script>

<div class="flex justify-center items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl p-6">
        <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Collected Pale Oil</h1>

        {#each paleOilList as oil}
            <div class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 ">
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