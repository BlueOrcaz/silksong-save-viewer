<script>
    export let sceneData = {};
    export let playerData = {};

    import { simpleKeysList } from "$lib/gameData";

    function isSimpleKeyUnlocked(key, playerData, sceneData) {
        if (!key.flag || !playerData || !sceneData) return false;

        switch (key.flagType) {
            case "boolean":
                return playerData?.[key.flag] === true;
            case "scene":
                const sceneList = sceneData?.persistentBools?.serializedList ?? [];
                return sceneList.some(
                    (entry) =>
                        entry.SceneName === pouch.flag &&
                        (entry.ID === "Collectable Item SimpleKey" || entry.ID === "Collectable Item Pickup") &&
                        entry.Value === true,
                );
            default:
                return false;
        }
    }
</script>

<div>
    <h1 class="col-span-2 text-2xl font-bold text-center mt-4">
        Unlocked Simple Keys
    </h1>

    {#each simpleKeysList as key}
        <p>
            {#if isSimpleKeyUnlocked(key, playerData, sceneData)}
                ✅
            {:else}
                ❌
            {/if}
            {key.name} Location: {key.location || "Unknown/WIP"}
        </p>
    {/each}
</div>
