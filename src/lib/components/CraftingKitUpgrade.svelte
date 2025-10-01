<script>
    import { craftingKitUpgradeList } from "$lib/gameData";
    export let playerData = {};

    function unlockedCraftingKit(kit, playerData) {
        if (!playerData || !kit.flag) return false;

        if (kit.flagType === "purchase") {
            return playerData?.[kit.flag] === true;
        }

        if (kit.flagType === "quest") {
            const questList = playerData?.QuestCompletionData?.savedData ?? [];
            return questList.some(entry => entry.Name === kit.flag && entry.Data?.IsCompleted);
        }
        
        return false;
    }
</script>

<div>
  <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Unlocked Crafting Kits</h1>

    {#each craftingKitUpgradeList as kit}
        <p>
            {#if unlockedCraftingKit(kit, playerData)}
                ✅
            {:else}
                ❌
            {/if}
            {kit.name} Location: {kit.location || "Unknown/WIP"}
        </p>
    {/each}
</div>
