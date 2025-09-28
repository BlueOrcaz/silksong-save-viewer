<script>
  export let playerData = {};
  import { bossList } from "./bossdata";
</script>

<div>
  <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Completed Bosses</h1>

  {#each bossList as boss}
    <p>{playerData?.[boss.flag] ? '✅' : '❌'} {boss.name} Location: {boss.location}</p>
  {/each}
</div>