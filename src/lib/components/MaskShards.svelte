<script>
    export let playerData = {};
    export let sceneData = {};

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

<div>
    <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Unlocked Mask Shards</h1>

    {#each maskShardList as mask}
        <p>
            {#if unlockedMaskShard(mask, playerData, sceneData)}
                ✅
            {:else}
                ❌
            {/if}
            {mask.name} Location: {mask.location || "Unknown/WIP"}
        </p>
    {/each}
</div>