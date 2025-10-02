<script>
    export let sceneData = {};
    export let playerData = {};

    import { toolPouchList } from "$lib/gameData";
    import { onMount } from "svelte";

    function unlockedToolPouch(pouch, playerData, sceneData) {
        if (!pouch.flag || !sceneData || !playerData) return false;

        switch (pouch.flagType) {
            case "purchase":

                return playerData?.[pouch.flag] === true;
            case "quest":
                const questList = playerData?.QuestCompletionData?.savedData ?? [];
                return questList.some(
                    (entry) =>
                        entry.Name === pouch.flag && entry.Data?.IsCompleted,
                );

            case "scene": // only accounted for if you did it in Act 3
                const sceneList = sceneData?.persistentBools?.serializedList ?? [];
                return sceneList.some(
                    (entry) =>
                        entry.SceneName === pouch.flag &&
                        entry.ID === "Ladybug Craft Pickup" &&
                        entry.Value === true,
                );

            case "flea":
                return playerData?.CaravanTroupeLocation == 3;
            default:
                return false;
        }
    }
</script>

<div>
    <h1 class="col-span-2 text-2xl font-bold text-center mt-4">
        Unlocked Tool Pouches
    </h1>

    {#each toolPouchList as pouch}
        <p>
            {#if unlockedToolPouch(pouch, playerData, sceneData)}
                ✅
            {:else}
                ❌
            {/if}
            {pouch.name} Location: {pouch.location || "Unknown/WIP"}
        </p>
    {/each}
</div>