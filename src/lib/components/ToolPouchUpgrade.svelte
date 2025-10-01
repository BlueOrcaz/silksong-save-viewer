<script>
    export let playerData = {};
    import { toolPouchList } from "$lib/gameData";

    function unlockedToolPouch(toolPouch, playerData) {
        if (!playerData || toolPouch.flag) return false;

        if (toolPouch.flagType === "purchase") {
            return playerData?.[toolPouch.flag] === true;
        }

        if (toolPouch.flagType === "quest") {
            const questList = playerData?.QuestCompletionData?.savedData ?? [];
            return questList.some(
                (entry) => entry.Name === toolPouch.flag && entry.Data?.IsCompleted,
            );
        }
    }
</script>

<div>
  <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Unlocked Tool Pouches</h1>

    {#each toolPouchList as toolPouch}
        <p>
            {#if unlockedCraftingKit(toolPouch, playerData)}
                ✅
            {:else}
                ❌
            {/if}
            {toolPouch.name} Location: {toolPouch.location || "Unknown/WIP"}
        </p>
    {/each}
</div>