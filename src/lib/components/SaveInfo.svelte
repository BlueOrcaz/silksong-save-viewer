<script>
  export let saveVersion;
  export let timePlayed;
  export let maskShards;
  export let maxSilk;
  export let rosaries;
  export let shellShards;
  export let silkHearts;
</script>

<div class="max-w-3xl w-full p-2">
  <h1 class="col-span-2 text-2xl font-bold text-center mt-4 pb-3">Save Information</h1>
  <div class="grid grid-cols-2 gap-6 p-6 text-xl border border-gray-700 rounded-2xl bg-gray-800/60 shadow-lg ">
    <p class="font-bold">Save Version:</p>
    <p>{saveVersion}</p>

    <p class="font-bold">Time Played:</p>
    <p>{timePlayed}</p>

    <p class="font-bold">Mask Shards:</p>
    <p>{maskShards}</p>

    <p class="font-bold">Max Silk:</p>
    <p>{maxSilk}</p>

    <p class="font-bold">Rosaries:</p>
    <p>{rosaries}</p>

    <p class="font-bold">Shell Shards:</p>
    <p>{shellShards}</p>

    <p class="font-bold">Silk Hearts:</p>
    <p>{silkHearts}</p>
  </div>
</div>


