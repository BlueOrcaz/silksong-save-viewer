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
    let showNames = false;
    let hoveredIndex = null;

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

<div class="flex justify-center items-center w-full px-3 sm:px-6">
    <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-4xl p-4 sm:p-6"
    >
        <div
            class="col-span-1 sm:col-span-2 flex flex-col items-center mt-2 sm:mt-4 text-center"
        >
            <h1 class="text-2xl sm:text-3xl font-bold">
                Crafting Kit Upgrades
            </h1>
            <p class="text-sm text-gray-400 mt-1">
                Unlocked: <span class="text-green-400 font-semibold"
                    >{craftingKitUpgradeCount}</span
                >
                / {totalCraftingKitUpgrades}
            </p>

            <button
                class="mt-3 px-4 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition w-full sm:w-auto"
                on:click={() => (showNames = !showNames)}
            >
                {showNames ? "Hide Names" : "Show Names"}
            </button>
        </div>

        {#each craftingKitUpgradeList as kit, i}
            <div
                role="group"
                class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 transition"
                on:mouseenter={() => (hoveredIndex = i)}
                on:mouseleave={() => (hoveredIndex = null)}
            >
                <span class="flex items-center gap-2">
                    {#if unlockedCraftingKit(kit, playerData, i)}
                        <span class="text-green-400 text-lg">✅</span>
                    {:else}
                        <span class="text-red-400 text-lg">❌</span>
                    {/if}
                    <span
                        class="font-medium transition duration-300 ease-in-out"
                        class:blur-sm={!showNames && hoveredIndex !== i}
                        class:text-gray-500={!showNames && hoveredIndex !== i}
                    >
                        {kit.name}
                    </span>
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
