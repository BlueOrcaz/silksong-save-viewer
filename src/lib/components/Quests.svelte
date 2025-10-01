<script>
    export let playerData = {};
    import { questList } from "$lib/gameData";

    function isQuestCompleted(quest, playerData) {
        const questList = playerData?.QuestCompletionData?.savedData ?? [];
        return questList.some(
            (entry) => entry.Name === quest.saveName && entry.Data?.IsCompleted,
        );
    }
</script>

<div>
    <h1 class="col-span-2 text-2xl font-bold text-center mt-4">
        Completed Quests
    </h1>
    {#each questList as quest}
        <p>
            {#if isQuestCompleted(quest, playerData)}
                ✅
            {:else}
                ❌
            {/if}
            {quest.name} Location: {quest.location || "Unknown/WIP"}
        </p>
    {/each}
</div>
