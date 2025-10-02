<script>
    export let sceneData = {};
    export let playerData = {};

    import { toolPouchList } from "$lib/gameData";
    import { onMount } from "svelte";
    import { getLocationUrl } from "$lib/utils";

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

<div class="flex justify-center items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl p-6">
        <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Unlocked Tool Pouches</h1>

        {#each toolPouchList as pouch}
            <div class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 ">
                <span class="flex items-center gap-2">
                    {#if unlockedToolPouch(pouch, playerData, sceneData)}
                        <span class="text-green-400 text-lg">✅</span>
                    {:else}
                        <span class="text-red-400 text-lg">❌</span>
                    {/if}
                    <span class="font-medium">{pouch.name}</span>
                </span>

                {#if pouch.location}
                    <a
                        href={getLocationUrl(pouch.location)}
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