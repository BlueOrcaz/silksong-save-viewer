<script>
    export let playerData = {};
    import { abilityList } from "$lib/gameData";
    import { flattenData, getLocationUrl } from "$lib/utils";

    let flatPlayerData = {};
    let unlockedAbilityCount = 0;
    let totalAbilities = abilityList.length;
    let showNames = false;
    let hoveredIndex = null;

    $: if (playerData) {
        flatPlayerData = flattenData(playerData);
        let count = 0;
        for (const ability of abilityList) {
            if (playerData?.[ability.flag] === true) {
                count++;
            }
        }
        unlockedAbilityCount = count;
    }

    export { unlockedAbilityCount, totalAbilities };
</script>

<div class="flex justify-center items-center w-full px-3 sm:px-6">
    <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-4xl p-4 sm:p-6"
    >
        <div
            class="col-span-1 sm:col-span-2 flex flex-col items-center mt-2 sm:mt-4 text-center"
        >
            <h1 class="text-2xl sm:text-3xl font-bold">Abilities</h1>
            <p class="text-sm text-gray-400 mt-1">
                Unlocked:
                <span class="text-green-400 font-semibold">
                    {unlockedAbilityCount}
                </span>
                / {totalAbilities}
            </p>

            <button
                class="mt-3 px-4 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition w-full sm:w-auto"
                on:click={() => (showNames = !showNames)}
            >
                {showNames ? "Hide Names" : "Show Names"}
            </button>
        </div>

        {#each abilityList as ability, i}
            <div
                role="group"
                class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 transition"
                on:mouseenter={() => (hoveredIndex = i)}
                on:mouseleave={() => (hoveredIndex = null)}
            >
                <span class="flex items-center gap-2">
                    {#if playerData?.[ability.flag] === true}
                        <span class="text-green-400 text-lg">✅</span>
                    {:else}
                        <span class="text-red-400 text-lg">❌</span>
                    {/if}
                    <span
                        class="font-medium transition duration-300 ease-in-out"
                        class:blur-sm={!showNames && hoveredIndex !== i}
                        class:text-gray-500={!showNames && hoveredIndex !== i}
                    >
                        {ability.name}
                    </span>
                    {#if ability.location}
                        <a
                            href={getLocationUrl(ability.location)}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-xs text-blue-400 hover:underline"
                        >
                            View Map
                        </a>
                    {:else}
                        <span class="text-xs text-gray-400 italic">Unknown</span
                        >
                    {/if}
                </span>
            </div>
        {/each}
    </div>
</div>
