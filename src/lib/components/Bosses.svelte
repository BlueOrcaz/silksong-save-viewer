<script>
  export let playerData = {};
  import { bossList } from "$lib/gameData";

  function isBossDefeated(boss, playerData) {
    if (!playerData || !boss.flag) return false;


    if (boss.flagType === "boolean") {
      return playerData?.[boss.flag] === true;
    }

    
    if (boss.flagType === "journal") {
        const journalList = playerData?.EnemyJournalKillData?.list ?? [];
        return journalList.some(entry => entry.Name === boss.flag && entry.Record?.Kills > 0);
    }

    return false;
  }
</script>

<div>
  <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Completed Bosses</h1>

  {#each bossList as boss}
    <p>
      {#if isBossDefeated(boss, playerData) || (boss.check && boss.check(playerData))}
        ✅
      {:else}
        ❌
      {/if}
      {boss.name} Location: {boss.location || "Unknown"}
    </p>
  {/each}
</div>
