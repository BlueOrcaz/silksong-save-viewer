<script>
    export let playerData = {};
    import { questList } from "$lib/gameData";
    import { getLocationUrl } from "$lib/utils";

    function isQuestCompleted(quest, playerData) {
        const questList = playerData?.QuestCompletionData?.savedData ?? [];
        return questList.some(
            (entry) => entry.Name === quest.saveName && entry.Data?.IsCompleted,
        );
    }
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
    <h1 class="col-span-1 md:col-span-2 lg:col-span-3 text-2xl font-bold text-center mt-4">
        Completed Wishes
    </h1>

    {#each questList as quest}
        <div class="flex-col flex justify-between text-center items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 ">
            <span class="flex items-center gap-2">
                {#if isQuestCompleted(quest, playerData)}
                    <span class="text-green-400 text-lg">✅</span>
                {:else}
                    <span class="text-red-400 text-lg">❌</span>
                {/if}
                <span class="font-medium">{quest.name}</span>
            </span>

            {#if quest.location}
                <a
                    href={getLocationUrl(quest.location)}
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
