<script>
    export let playerData = {};
    export let sceneData = {};

    import { flattenData, getLocationUrl } from "$lib/utils";
    import { maskShardList } from "$lib/gameData";

    function unlockedMaskShard(mask, playerData, sceneData) {
        if (!playerData || !mask.flag || !sceneData) return false;

        if (mask.flagType === "scene") {
            const sceneList = sceneData?.persistentBools?.serializedList ?? [];

            return sceneList.some(
                (entry) =>
                    entry.SceneName === mask.flag &&
                    entry.Value === true &&
                    (entry.ID === "Heart Piece" ||
                        entry.ID === "Heart Piece (1)"),
            );
        }

        if (mask.flagType === "boolean") {
            if (mask.flag === "MerchantEnclaveSocket") {
                return playerData?.[mask.flag] === false;
            }
            return playerData?.[mask.flag] === true;
        }

        if (mask.flagType === "quest") {
            const questList = playerData?.QuestCompletionData?.savedData ?? [];
            return questList.some(
                (entry) => entry.Name === mask.flag && entry.Data?.IsCompleted,
            );
        }
    }
    let flatPlayerData = {};
    let flatSceneData = {};
    let showNames = false;
    let hoveredIndex = null;
    let unlockedMaskShardCount = 0;
    let totalMasks = maskShardList.length;

    $: if (playerData) {
        flatPlayerData = flattenData(playerData);
        flatSceneData = flattenData(sceneData);
        let count = 0;
        for (const mask of maskShardList) {
            if (
                unlockedMaskShard(mask, flatPlayerData, flatSceneData) === true
            ) {
                count++;
            }
        }
        unlockedMaskShardCount = count;
    }

    export { unlockedMaskShardCount, totalMasks };
</script>

<div class="flex justify-center items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl p-6">
        <div class="col-span-2 flex flex-col items-center mt-4">
            <h1 class="text-3xl font-bold text-center">Unlocked Mask Shards</h1>
            <p class="text-sm text-gray-400 mt-1">
                Unlocked: <span class="text-green-400 font-semibold"
                    >{unlockedMaskShardCount}</span
                >
                / {totalMasks}
            </p>

            <button
                class="mt-3 px-4 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition"
                on:click={() => (showNames = !showNames)}
            >
                {showNames ? "Hide Names" : "Show Names"}
            </button>
        </div>

        {#each maskShardList as mask, i}
            <div
                role="group"
                class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 transition"
                on:mouseenter={() => (hoveredIndex = i)}
                on:mouseleave={() => (hoveredIndex = null)}
            >
                <span class="flex items-center gap-2">
                    {#if unlockedMaskShard(mask, playerData, sceneData)}
                        <span class="text-green-400 text-lg">✅</span>
                    {:else}
                        <span class="text-red-400 text-lg">❌</span>
                    {/if}
                    <span
                        class="font-medium transition duration-300 ease-in-out"
                        class:blur-sm={!showNames && hoveredIndex !== i}
                        class:text-gray-500={!showNames && hoveredIndex !== i}
                    >
                        {mask.name}
                    </span>
                </span>

                {#if mask.location}
                    <a
                        href={getLocationUrl(mask.location)}
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
