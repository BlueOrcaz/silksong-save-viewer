<script>
    export let playerData = {};
    import { needleUpgradeList } from "$lib/gameData";
    import { flattenData } from "$lib/utils";

    let flatPlayerData = {};
    let unlockedNeedleUpgradeCount = 0;
    let totalUpgrades = needleUpgradeList.length;
    let showNames = false;
    let hoveredIndex = null;

    $: if (playerData) {
        flatPlayerData = flattenData(playerData);
        let count = 0;
        for (const upgrade of needleUpgradeList) {
            if (flatPlayerData.nailUpgrades >= upgrade.index) {
                count++;
            }
        }
        unlockedNeedleUpgradeCount = count;
    }

    export { unlockedNeedleUpgradeCount, totalUpgrades };
</script>

<div class="flex justify-center items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl p-6">
        <div class="col-span-2 flex flex-col items-center mt-4">
            <h1 class="text-3xl font-bold text-center">Needle Upgrades</h1>
            <p class="text-sm text-gray-400 mt-1">
                Unlocked:
                <span class="text-green-400 font-semibold">
                    {unlockedNeedleUpgradeCount}
                </span>
                / {totalUpgrades}
            </p>

            <button
                class="mt-3 px-4 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition"
                on:click={() => (showNames = !showNames)}
            >
                {showNames ? "Hide Names" : "Show Names"}
            </button>
        </div>

        {#each needleUpgradeList as upgrade, i}
            <div
                role="group"
                class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 transition"
                on:mouseenter={() => (hoveredIndex = i)}
                on:mouseleave={() => (hoveredIndex = null)}
            >
                <span class="flex items-center gap-2">
                    {#if playerData.nailUpgrades >= upgrade.index}
                        <span class="text-green-400 text-lg">✅</span>
                    {:else}
                        <span class="text-red-400 text-lg">❌</span>
                    {/if}

                    <span
                        class="font-medium transition duration-300 ease-in-out"
                        class:blur-sm={!showNames && hoveredIndex !== i}
                        class:text-gray-500={!showNames && hoveredIndex !== i}
                    >
                        {upgrade.name}
                    </span>
                </span>
            </div>
        {/each}
    </div>
</div>
