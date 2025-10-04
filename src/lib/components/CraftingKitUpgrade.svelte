<script>
    import { getLocationUrl, flattenData } from "$lib/utils";
    import { craftingKitUpgradeList } from "$lib/gameData";
    export let playerData = {};

    function unlockedCraftingKit(kit, playerData) {
        if (!playerData || !kit.flag) return false;

        if (kit.flagType === "purchase") {
            return playerData?.[kit.flag] === true;
        }

        if (kit.flagType === "quest") {
            const questList = playerData?.QuestCompletionData?.savedData ?? [];
            return questList.some(
                (entry) => entry.Name === kit.flag && entry.Data?.IsCompleted,
            );
        }

        return false;
    }

    let flatData = {};
    let craftingKitUpgradeCount = 0;
    let totalCraftingKitUpgrades = craftingKitUpgradeList.length;

    $: if (playerData) {
        flatData = flattenData(playerData);
        let count = 0;
        for (const kit of craftingKitUpgradeList) {
            if (unlockedCraftingKit(kit, flatData) === true) {
                count++;
            } 
        }
        craftingKitUpgradeCount = count;
    }

    export { craftingKitUpgradeCount, totalCraftingKitUpgrades };
</script>

<div class="flex justify-center items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl p-6">
        <div class="col-span-2 flex flex-col items-center mt-4">
            <h1 class="text-3xl font-bold text-center">Acquired Crafting Kits</h1>
            <p class="text-sm text-gray-400 mt-1">
                Unlocked: <span class="text-green-400 font-semibold"
                    >{craftingKitUpgradeCount}</span
                >
                / {totalCraftingKitUpgrades}
            </p>
        </div>

        {#each craftingKitUpgradeList as kit}
            <div
                class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700"
            >
                <span class="flex items-center gap-2">
                    {#if unlockedCraftingKit(kit, playerData)}
                        <span class="text-green-400 text-lg">✅</span>
                    {:else}
                        <span class="text-red-400 text-lg">❌</span>
                    {/if}
                    <span class="font-medium">{kit.name}</span>
                </span>

                {#if kit.location}
                    <a
                        href={getLocationUrl(kit.location)}
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
