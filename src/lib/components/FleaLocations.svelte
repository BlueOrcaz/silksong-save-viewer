<script>
    export let playerData = {};
    export let sceneData = {};

    import { fleaList } from "$lib/gameData";

    function foundFlea(flea, playerData, sceneData) {
        if (!playerData || !sceneData || !flea.flag) return false;

        if (flea.flagType === "boolean") {
            return playerData?.[flea.flag] === true;
        }

        if (flea.flagType === "scene") {
            const sceneBoolList = sceneData?.persistentBools?.serializedList ?? [];
            const sceneIntList = sceneData?.persistentInts?.serializedList ?? [];

            const hasCaravanTroupeHunter = sceneBoolList.some(
                (entry) =>
                    entry.SceneName === flea.flag &&
                    entry.ID === "Caravan Troupe Hunter" &&
                    entry.Value === true,
            );

            const hasNPC = sceneIntList.some(
                (entry) =>
                    entry.SceneName === flea.flag &&    
                    entry.ID === "NPC" &&
                    entry.Value === 2,
            );

            return hasNPC || hasCaravanTroupeHunter;
        }

        return false;
    }
</script>

<div>
    <h1 class="col-span-2 text-2xl font-bold text-center mt-4">
        Unlocked Fleas
    </h1>

    {#each fleaList as flea}
        <p>
            {#if foundFlea(flea, playerData, sceneData)}
                ✅
            {:else}
                ❌
            {/if}
            {flea.name} Location: {flea.location || "Unknown/WIP"}
        </p>
    {/each}
</div>
