<script>
    export let playerData = {};
    export let sceneData = {};
    import { spoolFragmentList } from "$lib/gameData";

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
</script>

<div class="flex justify-center items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl p-6">
        <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Unlocked Spool Fragments</h1>

        {#each spoolFragmentList as spool}
            <div class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 ">
                <span class="flex items-center gap-2">
                    {#if unlockedSpoolFragment(spool, playerData, sceneData)}
                        <span class="text-green-400 text-lg">✅</span>
                    {:else}
                        <span class="text-red-400 text-lg">❌</span>
                    {/if}
                    <span class="font-medium">{spool.name}</span>
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
