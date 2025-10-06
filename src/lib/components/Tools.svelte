<script>
    import { ToolList } from "$lib/gameData";
    import { flattenData, getLocationUrl } from "$lib/utils";
    export let playerData = {};

    function isToolUnlocked(playerData, toolName) {
        const tool = playerData?.Tools?.savedData?.find(
            (t) => t.Name === toolName,
        );
        return tool?.Data?.IsUnlocked ?? false;
    }

    let flatPlayerData = {};
    let unlockedToolsCount = 0;
    let totalToolCount = ToolList.length;
    let showNames = false;
    let hoveredIndex = null;
    $: if (playerData) {
        flatPlayerData = flattenData(playerData);
        let count = 0;
        for (const tool of ToolList) {
            if (isToolUnlocked(flatPlayerData, tool.saveName) === true) {
                count++;
            }
        }

        unlockedToolsCount = count;
    }

    export { unlockedToolsCount, totalToolCount };
</script>

<div class="w-full max-w-4xl mx-auto p-6">
    <div class="flex flex-col items-center text-center mb-6">
        <h1 class="text-3xl font-bold mb-2">Unlocked Tools</h1>
        <p class="text-sm text-gray-400">
            Unlocked:
            <span class="text-green-400 font-semibold"
                >{unlockedToolsCount}</span
            >
            / {totalToolCount}
        </p>

      <button
        class="mt-3 px-4 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition w-full sm:w-auto"
        on:click={() => (showNames = !showNames)}
      >
        {showNames ? "Hide Names" : "Show Names"}
      </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each ToolList as tool, i}
            <div
                role="group"
                class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 transition"
                on:mouseenter={() => (hoveredIndex = i)}
                on:mouseleave={() => (hoveredIndex = null)}
            >
                <span class="flex items-center gap-2">
                    {#if isToolUnlocked(playerData, tool.saveName)}
                        <span class="text-green-400 text-lg">✅</span>
                    {:else}
                        <span class="text-red-400 text-lg">❌</span>
                    {/if}
                    <span
                        class="font-medium transition duration-300 ease-in-out"
                        class:blur-sm={!showNames && hoveredIndex !== i}
                        class:text-gray-500={!showNames && hoveredIndex !== i}
                    >
                        {tool.name}
                    </span>
                </span>

                {#if tool.location}
                    <a
                        href={getLocationUrl(tool.location)}
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
