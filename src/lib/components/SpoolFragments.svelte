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

<div>
    <h1 class="col-span-2 text-2xl font-bold text-center mt-4">
        Unlocked Spool Fragments
    </h1>

    {#each spoolFragmentList as spool}
        <p>
            {#if unlockedSpoolFragment(spool, playerData, sceneData)}
                ✅
            {:else}
                ❌
            {/if}
            {spool.name} Location: {spool.location || "Unknown/WIP"}
        </p>
    {/each}
</div>
