<script>
    export let playerData = {};
    import { questList } from "$lib/gameData";
    import { flattenData, getLocationUrl } from "$lib/utils";

    function isQuestCompleted(quest, playerData) {
        const questList = playerData?.QuestCompletionData?.savedData ?? [];
        return questList.some(
            (entry) => entry.Name === quest.saveName && entry.Data?.IsCompleted,
        );
    }

    let flatPlayerData = {};
    let completedQuestCount = 0;
    let totalQuests = questList.length;
    $: if (playerData) {
        flatPlayerData = flattenData(playerData);

        let count = 0;
        for (const quest of questList) {
            if (isQuestCompleted(quest, flatPlayerData) === true) {
                count++;
            }
        }

        completedQuestCount = count;
    }
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
            <div class="col-span-2 flex flex-col items-center mt-4">
            <h1 class="text-2xl font-bold text-center">Completed Wishes</h1>
            <p class="text-sm text-gray-400 mt-1">Completed:
                <span class="text-green-400 font-semibold">
                    {completedQuestCount}
                </span>
                / {totalQuests}
            </p>
        </div>

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
