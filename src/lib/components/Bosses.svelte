<script>
  export let playerData = {};
  import { bossList } from "$lib/gameData";
  import { getLocationUrl } from "$lib/utils";

  function isBossDefeated(boss, playerData) {
    if (!playerData || !boss.flag) return false;

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

</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <h1 class="col-span-1 md:col-span-2 lg:col-span-3 text-2xl font-bold text-center mt-4">
        Acquired Crests
    </h1>

    {#each bossList as boss}
        <div class="flex-col flex justify-between text-center items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 ">
            <span class="flex items-center gap-2">
                {#if isBossDefeated(boss, playerData)}
                    <span class="text-green-400 text-lg">✅</span>
                {:else}
                    <span class="text-red-400 text-lg">❌</span>
                {/if}
                <span class="font-medium">{boss.name}</span>
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

