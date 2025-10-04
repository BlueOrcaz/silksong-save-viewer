<script>
    export let sceneData = {};
    export let playerData = {};

    import { craftMetalList } from "$lib/gameData";
    import { getLocationUrl, flattenData } from "$lib/utils";

    function isCraftMetalFound(metal, playerData, sceneData) {
        if (!metal.flag || !playerData || !sceneData) return false;

        if (metal.flagType === "purchase") {
            return playerData?.[metal.flag] === true;
        }

        if (metal.flagType === "scene") {
            const sceneList = sceneData?.persistentBools?.serializedList ?? [];
            return sceneList.some(
                (entry) =>
                    entry.SceneName === metal.flag &&
                    entry.ID === "Collectable Item Pickup - Tool Metal" &&
                    entry.Value === true,
            );
        }

        return false;
    }

    let flatPlayerData = {};
    let flatSceneData = {};
    let craftMetalCount = 0;
    let totalCraftMetal = craftMetalList.length;

    $: if (playerData) { 
        flatPlayerData = flattenData(playerData);
        flatSceneData = flattenData(sceneData);
        let count = 0;
        for (const metal of craftMetalList) {
            if (isCraftMetalFound(metal, flatPlayerData, flatSceneData) === true) {
                count++;
            } 
        }
        craftMetalCount = count;
    }

    export { craftMetalCount, totalCraftMetal };
</script>

<div class="flex justify-center items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl p-6">
        <div class="col-span-2 flex flex-col items-center mt-4">
            <h1 class="text-3xl font-bold text-center">Collected Craft Metal</h1>
            <p class="text-sm text-gray-400 mt-1">
                Collected: <span class="text-green-400 font-semibold"
                    >{craftMetalCount}</span
                >
                / {totalCraftMetal}
            </p>
        </div>

        {#each craftMetalList as metal}
            <div
                class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 gap-9"
            >
                <span class="flex items-center gap-2">
                    {#if isCraftMetalFound(metal, playerData, sceneData)}
                        <span class="text-green-400 text-lg">✅</span>
                    {:else}
                        <span class="text-red-400 text-lg">❌</span>
                    {/if}
                    <span class="font-medium">{metal.name}</span>
                </span>

                {#if metal.location}
                    <a
                        href={getLocationUrl(metal.location)}
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
