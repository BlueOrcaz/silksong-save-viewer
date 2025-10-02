<script>
    export let playerData = {};
    export let sceneData = {};

    import { paleOilList } from "$lib/gameData";


    function foundPaleOil(oil, playerData, sceneData) {
        if (!playerData || !sceneData || !oil.flag ) return false;

        if (oil.flagType === "quest") {
            const questList = playerData?.QuestCompletionData?.savedData ?? [];
            return questList.some(
                (entry) =>
                    entry.Name === oil.flag && entry.Data?.IsCompleted,
            );            
        }

        if (oil.flagType === "scene") {
            const sceneList = sceneData?.persistentBools?.serializedList ?? [];
            return sceneList.some(
                (entry) =>
                    entry.SceneName === oil.flag &&
                    entry.ID === "Collectable Item Pickup" &&
                    entry.Value === true,
            );
        }   
    }
</script>

<div>
    <h1 class="col-span-2 text-2xl font-bold text-center mt-4">
        Collected Pale Oil
    </h1>

    {#each paleOilList as oil}
        <p>
            {#if foundPaleOil(oil, playerData, sceneData)}
                ✅
            {:else}
                ❌
            {/if}
            {oil.name} Location: {oil.location || "Unknown/WIP"}
        </p>
    {/each}
</div>