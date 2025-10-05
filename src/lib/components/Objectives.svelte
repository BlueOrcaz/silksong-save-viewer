<script>
    export let playerData = {};
    import { objectiveList } from "$lib/gameData";
    import { flattenData, getLocationUrl } from "$lib/utils";

    function isObjectiveCompleted(objective, playerData) {
        if (!playerData || !objective.saveName) return false;

        if (objective.flagType === "quest") {
            const questList = playerData?.QuestCompletionData?.savedData ?? [];
            return questList.some(
                (entry) =>
                    entry.Name === objective.saveName && entry.Data?.IsCompleted,
            );
        }

        if (objective.flagType === "boolean") {
            return playerData?.[objective.saveName] === true;
        }

        if (objective.flagType === "journal") {
        const journalList = playerData?.EnemyJournalKillData?.list ?? [];
        return journalList.some(
            (entry) => entry.Name === objective.saveName && entry.Record?.Kills > 0,
        );
        }

        return false;
    }

    let flatPlayerData = {};
    let completedObjectiveCount = 0;
    let totalObjectives = objectiveList.length;

    $: if (playerData) {
        flatPlayerData = flattenData(playerData);

        let count = 0;
        for (const objective of objectiveList) {
            if (isObjectiveCompleted(objective, flatPlayerData)) {
                count++;
            }
        }

        completedObjectiveCount = count;
    }

    export { completedObjectiveCount, totalObjectives };
</script>

<div class="w-full max-w-4xl mx-auto p-6">
    <div class="flex flex-col items-center text-center mb-6">
        <h1 class="text-3xl font-bold mb-2">Completed Objectives</h1>
        <p class="text-sm text-gray-400">
            Completed:
            <span class="text-green-400 font-semibold">{completedObjectiveCount}</span>
            / {totalObjectives}
        </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each objectiveList as objective}
            <div
                class="flex flex-col justify-between text-center items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 min-h-[25px]"
            >
                <span class="flex items-center gap-2">
                    {#if isObjectiveCompleted(objective, flatPlayerData)}
                        <span class="text-green-400 text-lg">✅</span>
                    {:else}
                        <span class="text-red-400 text-lg">❌</span>
                    {/if}
                    <span class="font-medium">{objective.name}</span>
                </span>

                {#if objective.location}
                    <a
                        href={getLocationUrl(objective.location)}
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
