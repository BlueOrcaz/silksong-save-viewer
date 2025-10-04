<script>
    export let playerData = {};
    export let sceneData = {};

    import { getLocationUrl } from "$lib/utils";
    import { fleaList } from "$lib/gameData";

    function foundFlea(flea, playerData, sceneData) {
        if (!playerData || !sceneData || !flea.flag) return false;

        if (flea.flagType === "boolean") {
            return playerData?.[flea.flag] === true;
        }

        if (flea.flagType === "scene") {
            const sceneBoolList =
                sceneData?.persistentBools?.serializedList ?? [];
            const sceneIntList =
                sceneData?.persistentInts?.serializedList ?? [];

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

    $: fleaCount = fleaList.filter((flea) => foundFlea(flea, playerData, sceneData)).length;
    $: totalFleas = fleaList.length;

    export { fleaCount, totalFleas };
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
    <div class="col-span-2 flex flex-col items-center mt-4">
        <h1 class="text-2xl font-bold text-center">Fleas Found</h1>
        <p class="text-sm text-gray-400 mt-1">
            Found: <span class="text-green-400 font-semibold">{fleaCount}</span>
            / {totalFleas}%
        </p>
    </div>

    {#each fleaList as flea}
        <div
            class="flex-col flex justify-between text-center items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700"
        >
            <span class="flex items-center gap-2">
                {#if foundFlea(flea, playerData, sceneData)}
                    <span class="text-green-400 text-lg">✅</span>
                {:else}
                    <span class="text-red-400 text-lg">❌</span>
                {/if}
                <span class="font-medium">{flea.name}</span>
            </span>

            {#if flea.location}
                <a
                    href={getLocationUrl(flea.location)}
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
