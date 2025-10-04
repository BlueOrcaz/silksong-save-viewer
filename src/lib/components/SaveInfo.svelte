<script>
  export let saveVersion;
  export let timePlayed;
  export let maskShards;
  //export let maxSilk;
  export let rosaries;
  export let shellShards;
  export let silkHearts;
  export let completionPercentage;

  import maskShardImage from "$lib/assets/Maskshard.png";
  import silkHeartImage from "$lib/assets/Silk_Heart.png";
  import rosaryImage from "$lib/assets/Rosaries.png";
  import shellShardImage from "$lib/assets/Shell_Shards.png";
</script>

<div class="max-w-3xl w-full p-2">
  <h1 class="col-span-2 text-2xl font-bold text-center mt-4 pb-3">
    Save Information
  </h1>
  <div
    class="grid grid-cols-2 gap-6 p-6 text-xl border border-gray-700 rounded-2xl bg-gray-800/60 shadow-lg"
  >
    <p class="font-bold">Save Version:</p>
    <p>{saveVersion}</p>

    <p class="font-bold">Save Completion Percentage:</p>
    <p>{completionPercentage}%</p>

    <p class="font-bold">Time Played:</p>
    <p>{timePlayed}</p>

    <p class="font-bold">Mask Shards:</p>
    <p class="flex flex-wrap gap-1">
      {#each Array(maskShards) as _, i}
        <img src={maskShardImage} alt="Mask Shard" class="w-6 h-6" />
      {/each}
    </p>

    <p class="font-bold">Silk Hearts:</p>
    <p class="flex flex-wrap gap-1">
      {#each Array(silkHearts) as _, i}
        <img src={silkHeartImage} alt="Mask Shard" class="w-6 h-6" />
      {/each}
    </p>

    <p class="font-bold">Rosaries:</p>
    <p class="flex items-center gap-2">
      {rosaries}
      <img src={rosaryImage} alt="Rosary" class="w-6 h-6" />
    </p>

    <p class="font-bold">Shell Shards:</p>
    <p class="flex items-center gap-2">
      {shellShards}
      <img src={shellShardImage} alt="Rosary" class="w-6 h-6" />
    </p>
  </div>
</div>
