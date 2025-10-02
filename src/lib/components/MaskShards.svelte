<script>
    export let playerData = {};
    export let sceneData = {};

    import { getLocationUrl } from "$lib/utils";
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
</script>

<div class="flex justify-center items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl p-6">
        <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Unlocked Mask Shards</h1>

        {#each maskShardList as mask}
            <div class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 ">
                <span class="flex items-center gap-2">
                    {#if unlockedMaskShard(mask, playerData, sceneData)}
                        <span class="text-green-400 text-lg">✅</span>
                    {:else}
                        <span class="text-red-400 text-lg">❌</span>
                    {/if}
                    <span class="font-medium">{mask.name}</span>
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
