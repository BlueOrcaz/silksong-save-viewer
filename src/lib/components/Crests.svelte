<script>
  export let playerData = {};
  import { crestList, vesticrestList } from "$lib/gameData";
  import { getLocationUrl, flattenData } from "$lib/utils";

  function isCrestUnlocked(crest, playerData) {
    if (!playerData || !crest.flag) return false;

    const unlockedCrestList = playerData?.ToolEquips?.savedData ?? [];
    return unlockedCrestList.some(
      (entry) => entry.Name === crest.flag && entry.Data.IsUnlocked,
    );
  }

  let flatPlayerData = {};

  let unlockedCrestCount = 0;
  let totalCrests = crestList.length + vesticrestList.length;

  $: if (playerData) {
    flatPlayerData = flattenData(playerData);

    let count = 0;
    for (const crest of crestList) {
      if (isCrestUnlocked(crest, flatPlayerData)) {
        count++;
      }
    }

    let vesticrestCount = 0;
    for (const vesticrest of vesticrestList) {
      if (playerData?.[vesticrest.flag]) {
        vesticrestCount++;
      }
    }

    unlockedCrestCount = count + vesticrestCount;
  }

  export { unlockedCrestCount, totalCrests };
</script>

<div class="w-full max-w-4xl mx-auto p-6">
  <div class="flex flex-col items-center text-center mb-6">
    <h1 class="text-3xl font-bold mb-2">Unlocked Crests</h1>
    <p class="text-sm text-gray-400">
      Unlocked:
      <span class="text-green-400 font-semibold">{unlockedCrestCount}</span>
      / {totalCrests}
    </p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
    {#each crestList as crest}
      <div
        class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 gap-5"
      >
        <span class="flex items-center gap-2">
          {#if isCrestUnlocked(crest, playerData)}
            <span class="text-green-400 text-lg">✅</span>
          {:else}
            <span class="text-red-400 text-lg">❌</span>
          {/if}
          <span class="font-medium">{crest.name}</span>
        </span>

        {#if crest.location}
          <a
            href={getLocationUrl(crest.location)}
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs text-blue-400 hover:underline"
          >
            View Map
          </a>
        {/if}
      </div>
    {/each}

    {#each vesticrestList as vesticrest}
      <div
        class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 gap-2"
      >
        <span class="flex items-center gap-2">
          {#if playerData?.[vesticrest.flag]}
            <span class="text-green-400 text-lg">✅</span>
          {:else}
            <span class="text-red-400 text-lg">❌</span>
          {/if}
          <span class="font-medium">{vesticrest.name}</span>
        </span>

        {#if vesticrest.location}
          <a
            href={getLocationUrl(vesticrest.location)}
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
