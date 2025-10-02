<script>
    import { ToolList } from "$lib/gameData";
    import { getLocationUrl } from "$lib/utils";
    export let playerData = {};

    function isToolUnlocked(playerData, toolName) {
        const tool = playerData?.Tools?.savedData?.find(
            (t) => t.Name === toolName,
        );
        return tool?.Data?.IsUnlocked ?? false;
    }
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
    <h1 class="col-span-1 md:col-span-2 lg:col-span-3 text-2xl font-bold text-center mt-4">Unlocked Tools</h1>

    {#each ToolList as tool}
        <div class="flex-col flex justify-between text-center items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 ">
            <span class="flex items-center gap-2">
                {#if isToolUnlocked(playerData, tool.saveName)}
                    <span class="text-green-400 text-lg">✅</span>
                {:else}
                    <span class="text-red-400 text-lg">❌</span>
                {/if}
                <span class="font-medium">{tool.name}</span>
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

