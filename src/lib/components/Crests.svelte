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

    for (const vesticrest of vesticrestList) {
      if (isCrestUnlocked(vesticrest, flatPlayerData)) {
        count++;
      }
    }

    unlockedCrestCount = count;
  }

  export { unlockedCrestCount, totalCrests };
</script>

<div class="flex justify-center items-center">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl p-6">
    <div class="col-span-2 flex flex-col items-center mt-4">
      <h1 class="text-2xl font-bold text-center">Acquired Crests</h1>
      <p class="text-sm text-gray-400 mt-1">
        Acquired: <span class="text-green-400 font-semibold"
          >{unlockedCrestCount}</span
        >
        / {totalCrests}%
      </p>
    </div>

    {#each crestList as crest}
      <div
        class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700"
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
        {:else}
          <span class="text-xs text-gray-400 italic">Unknown</span>
        {/if}
      </div>
    {/each}

    {#each vesticrestList as vesticrest}
      <div
        class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700"
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
