<script>
    export let playerData = {};
    export let sceneData = {};
    import { memoryLocketList } from "$lib/gameData";
    import { flattenData, getLocationUrl } from "$lib/utils";

    function foundMemoryLocket(locket, playerData, sceneData) {
        if (!playerData || !locket.flag || !sceneData) return false;

        if (locket.flagType === "scene") {
            const sceneList = sceneData?.persistentBools?.serializedList ?? [];
            return sceneList.some(
                (entry) =>
                    entry.SceneName === locket.flag &&
                    (entry.ID === "Collectable Item Pickup" ||
                        entry.ID === "Collectable Item Pickup (1)" ||
                        entry.ID === "Sack Corpse Pickup") &&
                    entry.Value === true,
            );
        }

        if (locket.flagType === "boolean") {
            return playerData?.[locket.flag] === true;
        }

        if (locket.flagType === "quest") {
            const questList = playerData?.QuestCompletionData?.savedData ?? [];
            return questList.some(
                (entry) =>
                    entry.Name === locket.flag && entry.Data?.IsCompleted,
            );
        }

        return false;
    }

    let flatPlayerData = {};
    let flatSceneData = {};
    let collectedMemoryLocketsCount = 0;
    let totalMemoryLockets = memoryLocketList.length;
    $: {
        flatPlayerData = flattenData(playerData);
        flatSceneData = flattenData(sceneData);
        let count = 0;
        for (const locket of memoryLocketList) {
            if (
                foundMemoryLocket(locket, flatPlayerData, flatSceneData) ===
                true
            ) {
                count++;
            }
        }
        collectedMemoryLocketsCount = count;
    }

    export { collectedMemoryLocketsCount, totalMemoryLockets };
</script>

<div class="flex justify-center items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl p-6">
        <div class="col-span-2 flex flex-col items-center mt-4">
            <h1 class="text-2xl font-bold text-center">
                Collected Memory Lockets
            </h1>
            <p class="text-sm text-gray-400 mt-1">
                Collected: <span class="text-green-400 font-semibold"
                    >{collectedMemoryLocketsCount}</span
                >
                / {totalMemoryLockets}%
            </p>
        </div>

        {#each memoryLocketList as locket}
            <div
                class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700"
            >
                <span class="flex items-center gap-2">
                    {#if foundMemoryLocket(locket, playerData, sceneData)}
                        <span class="text-green-400 text-lg">✅</span>
                    {:else}
                        <span class="text-red-400 text-lg">❌</span>
                    {/if}
                    <span class="font-medium">{locket.name}</span>
                </span>

                {#if locket.location}
                    <a
                        href={getLocationUrl(locket.location)}
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
