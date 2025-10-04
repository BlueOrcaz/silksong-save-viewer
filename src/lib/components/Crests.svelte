<script>
  export let playerData = {};
  import { crestList, vesticrestList } from "$lib/gameData";
  import { getLocationUrl } from "$lib/utils";

  function isCrestUnlocked(crest, data) {
    if (!data || !crest.flag) return false;
    const unlockedCrestList = data?.ToolEquips?.savedData ?? [];
    return unlockedCrestList.some(
      (entry) => entry.Name === crest.flag && entry.Data?.IsUnlocked
    );
  }

  $: flatData = JSON.parse(JSON.stringify(playerData ?? {}));

  $: allCrests = [
    ...crestList.map((crest) => ({
      ...crest,
      unlocked: isCrestUnlocked(crest, flatData),
    })),
    ...vesticrestList.map((crest) => ({
      ...crest,
      unlocked: !!flatData?.[crest.flag],
    })),
  ];

  $: unlockedCrestCount = allCrests.filter((c) => c.unlocked).length;
  $: totalCrests = allCrests.length;
</script>

<div class="flex justify-center items-center">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl p-6">
    <div class="col-span-2 flex flex-col items-center mt-4">
      <h1 class="text-2xl font-bold text-center">Acquired Crests</h1>
      <p class="text-sm text-gray-400 mt-1">
        Acquired:
        <span class="text-green-400 font-semibold">{unlockedCrestCount}</span>
        / {totalCrests}
      </p>
    </div>

    {#each allCrests as crest}
      <div
        class={`flex justify-between items-center p-3 rounded-2xl shadow border transition-all ${
          crest.unlocked
            ? 'bg-green-900/30 border-green-600'
            : 'bg-gray-800/60 border-gray-700'
        }`}
      >
        <span class="flex items-center gap-2">
          {#if crest.unlocked}
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
  </div>
</div>
