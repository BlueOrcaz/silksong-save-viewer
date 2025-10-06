<script>
  export let playerData = {};
  import { bossList } from "$lib/gameData";
  import { flattenData, getLocationUrl } from "$lib/utils";

  function isBossDefeated(boss, playerData) {
    if (!playerData || !boss.flag) return false;

    if (typeof boss.check === "function") {
      return boss.check(playerData);
    }

    if (boss.flagType === "boolean") {
      return playerData?.[boss.flag] === true;
    }

    if (boss.flagType === "journal") {
      const journalList = playerData?.EnemyJournalKillData?.list ?? [];
      return journalList.some(
        (entry) => entry.Name === boss.flag && entry.Record?.Kills > 0,
      );
    }

    if (boss.flagType === "collectable") {
      const collectableList = playerData?.Collectables?.savedData ?? [];
      return collectableList.some(
        (entry) => entry.Name === boss.flag && entry.Data?.Amount >= 1,
      );
    }

    return false;
  }

  let flatData = {};
  let defeatedBossCount = 0;
  let totalBosses = bossList.length;
  let showNames = false;
  let hoveredIndex = null;

  $: if (playerData) {
    flatData = flattenData(playerData);

    let count = 0;
    for (const boss of bossList) {
      if (isBossDefeated(boss, flatData)) {
        count++;
      }
    }
    defeatedBossCount = count;
  }

  export { defeatedBossCount, totalBosses };
</script>

<div class="w-full max-w-4xl mx-auto p-6">
  <div class="flex flex-col items-center text-center mb-6">
    <h1 class="text-3xl font-bold mb-2">Defeated Bosses</h1>
    <p class="text-sm text-gray-400">
      Defeated:
      <span class="text-green-400 font-semibold">{defeatedBossCount}</span>
      / {totalBosses}
    </p>

      <button
        class="mt-3 px-4 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition w-full sm:w-auto"
        on:click={() => (showNames = !showNames)}
      >
        {showNames ? "Hide Names" : "Show Names"}
      </button>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each bossList as boss, i}
      <div
        role="group"
        class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 transition"
        on:mouseenter={() => (hoveredIndex = i)}
        on:mouseleave={() => (hoveredIndex = null)}
      >
        <span class="flex items-center gap-2 mb-1">
          {#if isBossDefeated(boss, playerData)}
            <span class="text-green-400 text-lg">✅</span>
          {:else}
            <span class="text-red-400 text-lg">❌</span>
          {/if}
          <span
            class="font-medium transition duration-300 ease-in-out"
            class:blur-sm={!showNames && hoveredIndex !== i}
            class:text-gray-500={!showNames && hoveredIndex !== i}
          >
            {boss.name}
          </span>
        </span>

        {#if boss.location}
          <a
            href={getLocationUrl(boss.location)}
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
