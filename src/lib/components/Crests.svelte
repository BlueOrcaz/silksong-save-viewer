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

  let showNames = false;
  let hoveredIndex = null;

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

      <button
        class="mt-3 px-4 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition w-full sm:w-auto"
        on:click={() => (showNames = !showNames)}
      >
        {showNames ? "Hide Names" : "Show Names"}
      </button>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
    <!-- Regular Crests -->
    {#each crestList as crest, i}
      <div
        role="group"
        class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 transition"
        on:mouseenter={() => (hoveredIndex = i)}
        on:mouseleave={() => (hoveredIndex = null)}
      >
        <span class="flex items-center gap-2">
          {#if isCrestUnlocked(crest, playerData)}
            <span class="text-green-400 text-lg">✅</span>
          {:else}
            <span class="text-red-400 text-lg">❌</span>
          {/if}
          <span
            class="font-medium transition duration-300 ease-in-out"
            class:blur-sm={!showNames && hoveredIndex !== i}
            class:text-gray-500={!showNames && hoveredIndex !== i}
          >
            {crest.name}
          </span>
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

    {#each vesticrestList as vesticrest, j}
      <div
        role="group"
        class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 gap-2 transition"
        on:mouseenter={() => (hoveredIndex = crestList.length + j)}
        on:mouseleave={() => (hoveredIndex = null)}
      >
        <span class="flex items-center gap-2">
          {#if playerData?.[vesticrest.flag]}
            <span class="text-green-400 text-lg">✅</span>
          {:else}
            <span class="text-red-400 text-lg">❌</span>
          {/if}
          <span
            class="font-medium transition duration-300 ease-in-out"
            class:blur-sm={!showNames && hoveredIndex !== crestList.length + j}
            class:text-gray-500={!showNames &&
              hoveredIndex !== crestList.length + j}
          >
            {vesticrest.name}
          </span>
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
