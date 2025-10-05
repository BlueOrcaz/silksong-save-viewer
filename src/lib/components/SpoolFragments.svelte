<script>
    export let playerData = {};
    export let sceneData = {};
    import { spoolFragmentList } from "$lib/gameData";
    import { flattenData, getLocationUrl } from "$lib/utils";

    function unlockedSpoolFragment(spool, playerData, sceneData) {
        if (!playerData || !spool.flag) return false;

        if (spool.flagType === "scene") {
            const sceneList = sceneData?.persistentBools?.serializedList ?? [];
            return sceneList.some(
                (entry) =>
                    entry.SceneName === spool.flag &&
                    entry.ID === "Silk Spool" &&
                    entry.Value === true,
            );
        }

        if (spool.flagType === "boolean") {
            return playerData?.[spool.flag] === true;
        }

        if (spool.flagType === "quest") {
            const questList = playerData?.QuestCompletionData?.savedData ?? [];
            return questList.some(
                (entry) => entry.Name === spool.flag && entry.Data?.IsCompleted,
            );
        }
    }

    let flatPlayerData = {};
    let flatSceneData = {};

    let showNames = false;
    let hoveredIndex = null;

    let unlockedSpoolFragmentCount = 0;
    let totalSpoolFragments = spoolFragmentList.length;

    $: if (playerData) {
        flatPlayerData = flattenData(playerData);
        flatSceneData = flattenData(sceneData);

        let count = 0;
        for (const spool of spoolFragmentList) {
            if (
                unlockedSpoolFragment(spool, flatPlayerData, flatSceneData) ===
                true
            ) {
                count++;
            }
        }

        unlockedSpoolFragmentCount = count;
    }

    export { unlockedSpoolFragmentCount, totalSpoolFragments };
</script>

<div class="flex justify-center items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl p-6">
        <div class="col-span-2 flex flex-col items-center mt-4">
            <h1 class="text-3xl font-bold text-center">
                Unlocked Spool Fragments
            </h1>
            <p class="text-sm text-gray-400 mt-1">
                Unlocked:
                <span class="text-green-400 font-semibold">
                    {unlockedSpoolFragmentCount}
                </span>
                / {totalSpoolFragments}
            </p>

            <button
                class="mt-3 px-4 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition"
                on:click={() => (showNames = !showNames)}
            >
                {showNames ? "Hide Names" : "Show Names"}
            </button>
        </div>

        {#each spoolFragmentList as spool, i}
            <div
                role="group"
                class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 transition"
                on:mouseenter={() => (hoveredIndex = i)}
                on:mouseleave={() => (hoveredIndex = null)}
            >
                <span class="flex items-center gap-2">
                    {#if unlockedSpoolFragment(spool, playerData, sceneData)}
                        <span class="text-green-400 text-lg">✅</span>
                    {:else}
                        <span class="text-red-400 text-lg">❌</span>
                    {/if}
                    <span
                        class="font-medium transition duration-300 ease-in-out"
                        class:blur-sm={!showNames && hoveredIndex !== i}
                        class:text-gray-500={!showNames && hoveredIndex !== i}
                    >
                        {spool.name}
                    </span>
                </span>

                {#if spool.location}
                    <a
                        href={getLocationUrl(spool.location)}
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
