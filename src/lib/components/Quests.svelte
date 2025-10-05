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
    let showNames = false;
    let hoveredIndex = null;

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

    export { completedQuestCount, totalQuests };
</script>

<div class="w-full max-w-4xl mx-auto p-6">
    <div class="flex flex-col items-center text-center mb-6">
        <h1 class="text-3xl font-bold mb-2">Completed Wishes</h1>
        <p class="text-sm text-gray-400">
            Completed:
            <span class="text-green-400 font-semibold"
                >{completedQuestCount}</span
            >
            / {totalQuests}
        </p>

        <button
            class="mt-3 px-4 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition"
            on:click={() => (showNames = !showNames)}
        >
            {showNames ? "Hide Names" : "Show Names"}
        </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each questList as quest, i}
            <div
                role="group"
                class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 transition"
                on:mouseenter={() => (hoveredIndex = i)}
                on:mouseleave={() => (hoveredIndex = null)}
            >
                <span class="flex items-center gap-2">
                    {#if isQuestCompleted(quest, playerData)}
                        <span class="text-green-400 text-lg">✅</span>
                    {:else}
                        <span class="text-red-400 text-lg">❌</span>
                    {/if}
                    <span
                        class="font-medium transition duration-300 ease-in-out"
                        class:blur-sm={!showNames && hoveredIndex !== i}
                        class:text-gray-500={!showNames && hoveredIndex !== i}
                    >
                        {quest.name}
                    </span>
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
</div>
