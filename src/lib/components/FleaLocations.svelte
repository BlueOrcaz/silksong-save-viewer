<script>
    export let playerData = {};
    export let sceneData = {};

    import { getLocationUrl, flattenData } from "$lib/utils";
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

    let flatPlayerData = {};
    let flatSceneData = {};

    let fleaCount = 0;
    let totalFleas = fleaList.length;
    $: if (playerData) {
        flatPlayerData = flattenData(playerData);
        flatSceneData = flattenData(sceneData);
        let count = 0;
        for (const flea of fleaList) {
            if (foundFlea(flea, flatPlayerData, flatSceneData) === true) {
                count++;
            }
        }
        fleaCount = count;
    }

    export { fleaCount, totalFleas };
</script>

<div class="w-full max-w-4xl mx-auto p-6">
  <div class="flex flex-col items-center text-center mb-6">
    <h1 class="text-3xl font-bold mb-2">Discovered Fleas</h1>
    <p class="text-sm text-gray-400">
      Found:
      <span class="text-green-400 font-semibold">{fleaCount}</span>
      / {totalFleas}
    </p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
</div>
