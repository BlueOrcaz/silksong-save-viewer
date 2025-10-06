<script>
    export let playerData = {};

    import { mementoList } from "$lib/gameData";
    import { flattenData, getLocationUrl } from "$lib/utils";

    function isMementoCollected(memento, playerData) {
        if (!memento.flag || !playerData ) return false;

        switch(memento.flagType) {
            case "boolean":
                return playerData?.[memento.flag] === true;
            case "deposit":
                const mementos = playerData?.MementosDeposited?.savedData ?? [];
                return mementos.some((entry) => entry.Name === memento.flag && entry.Data?.IsDeposited === true,);
            default:
                return false;
        }
    }

    let flatPlayerData = {};
    let showNames = false;
    let hoveredIndex = null;
    let acquiredMementoCount = 0;
    let totalMementos = mementoList.length;

    $: if (playerData) {
        flatPlayerData = flattenData(playerData);
        let count = 0;
        for (const memento of mementoList) {
            if (isMementoCollected(memento, playerData) === true) {
                count++;
            }
        }
        acquiredMementoCount = count;
    }

    export { acquiredMementoCount, totalMementos };
</script>

<div class="flex justify-center items-center w-full px-3 sm:px-6">
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-4xl p-4 sm:p-6">
    <div class="col-span-1 sm:col-span-2 flex flex-col items-center mt-2 sm:mt-4 text-center">
      <h1 class="text-2xl sm:text-3xl font-bold">Mementos</h1>
      <p class="text-sm text-gray-400 mt-1">
        Collected: <span class="text-green-400 font-semibold"
                    >{acquiredMementoCount}</span
                >
                / {totalMementos}
            </p>

      <button
        class="mt-3 px-4 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition w-full sm:w-auto"
        on:click={() => (showNames = !showNames)}
      >
        {showNames ? "Hide Names" : "Show Names"}
      </button>
        </div>

        {#each mementoList as memento, i}
            <div
                role="group"
                class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 transition"
                on:mouseenter={() => (hoveredIndex = i)}
                on:mouseleave={() => (hoveredIndex = null)}
            >
                <span class="flex items-center gap-2">
                    {#if isMementoCollected(memento, playerData)}
                        <span class="text-green-400 text-lg">✅</span>
                    {:else}
                        <span class="text-red-400 text-lg">❌</span>
                    {/if}
                    <span
                        class="font-medium transition duration-300 ease-in-out"
                        class:blur-sm={!showNames && hoveredIndex !== i}
                        class:text-gray-500={!showNames && hoveredIndex !== i}
                    >
                        {memento.name}
                    </span>
                </span>

                {#if memento.location}
                    <a
                        href={getLocationUrl(memento.location)}
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
