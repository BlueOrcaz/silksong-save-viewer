<script>
    export let playerData = {};
    import { mapList } from "$lib/gameData";
    import { flattenData, getLocationUrl } from "$lib/utils";


    let flatPlayerData = {};
    let unlockedMapCount = 0;
    let totalAreaMaps = mapList.length;

    $: if (playerData) {
        flatPlayerData = flattenData(playerData);

        let count = 0;
        for (const area of mapList) {
            if (flatPlayerData?.[area.flag] === true) {
                count++;
            }
        }

        unlockedMapCount = count;
    }

    export {unlockedMapCount, totalAreaMaps}
</script>

<div class="w-full max-w-4xl mx-auto p-6">
  <div class="flex flex-col items-center text-center mb-6">
    <h1 class="text-3xl font-bold mb-2">Unlocked Maps</h1>
    <p class="text-sm text-gray-400">
      Unlocked:
      <span class="text-green-400 font-semibold">{unlockedMapCount}</span>
      / {totalAreaMaps}
    </p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each mapList as area}
        <div
            class="flex-col flex justify-between text-center items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700"
        >
            <span class="flex items-center gap-2">
                {#if playerData?.[area.flag] == true}
                    <span class="text-green-400 text-lg">✅</span>
                {:else}
                    <span class="text-red-400 text-lg">❌</span>
                {/if}
                <span class="font-medium">{area.name}</span>
            </span>

            {#if area.location}
                <a
                    href={getLocationUrl(area.location)}
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
