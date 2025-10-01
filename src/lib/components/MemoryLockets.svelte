<script>
    export let playerData = {};
    export let sceneData = {};
    import { memoryLocketList } from "$lib/gameData";

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
</script>

<div>
    <h1 class="col-span-2 text-2xl font-bold text-center mt-4">
        Acquired Memory Lockets
    </h1>

    {#each memoryLocketList as locket}
        <p>
            {#if foundMemoryLocket(locket, playerData, sceneData)}
                ✅
            {:else}
                ❌
            {/if}
            {locket.name} Location: {locket.location || "Unknown/WIP"}
        </p>
    {/each}
</div>
