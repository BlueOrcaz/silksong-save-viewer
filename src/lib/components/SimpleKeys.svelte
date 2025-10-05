<script>
    export let sceneData = {};
    export let playerData = {};

    import { simpleKeysList } from "$lib/gameData";
    import { flattenData, getLocationUrl } from "$lib/utils";

    function isSimpleKeyUnlocked(key, playerData, sceneData) {
        if (!key.flag || !playerData || !sceneData) return false;

        switch (key.flagType) {
            case "boolean":
                return playerData?.[key.flag] === true;
            case "scene":
                const sceneList =
                    sceneData?.persistentBools?.serializedList ?? [];
                return sceneList.some(
                    (entry) =>
                        entry.SceneName === key.flag &&
                        (entry.ID === "Collectable Item SimpleKey" ||
                            entry.ID === "Collectable Item Pickup") &&
                        entry.Value === true,
                );
            default:
                return false;
        }
    }

    let flatPlayerData = {};
    let flatSceneData = {};
    let showNames = false;
    let hoveredIndex = null;
    let acquiredSimpleKeyCount = 0;
    let totalSimpleKeys = simpleKeysList.length;

    $: if (playerData) {
        flatPlayerData = flattenData(playerData);
        flatSceneData = flattenData(sceneData);
        let count = 0;
        for (const key of simpleKeysList) {
            if (
                isSimpleKeyUnlocked(key, flatPlayerData, flatSceneData) === true
            ) {
                count++;
            }
        }
        acquiredSimpleKeyCount = count;
    }

    export { acquiredSimpleKeyCount, totalSimpleKeys };
</script>

<div class="flex justify-center items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl p-6">
        <div class="col-span-2 flex flex-col items-center mt-4">
            <h1 class="text-3xl font-bold text-center">
                Collected Simple Keys
            </h1>
            <p class="text-sm text-gray-400 mt-1">
                Collected: <span class="text-green-400 font-semibold"
                    >{acquiredSimpleKeyCount}</span
                >
                / {totalSimpleKeys}
            </p>

            <button
                class="mt-3 px-4 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition"
                on:click={() => (showNames = !showNames)}
            >
                {showNames ? "Hide Names" : "Show Names"}
            </button>
        </div>

        {#each simpleKeysList as key, i}
            <div
                role="group"
                class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 transition"
                on:mouseenter={() => (hoveredIndex = i)}
                on:mouseleave={() => (hoveredIndex = null)}
            >
                <span class="flex items-center gap-2">
                    {#if isSimpleKeyUnlocked(key, playerData, sceneData)}
                        <span class="text-green-400 text-lg">✅</span>
                    {:else}
                        <span class="text-red-400 text-lg">❌</span>
                    {/if}
                    <span
                        class="font-medium transition duration-300 ease-in-out"
                        class:blur-sm={!showNames && hoveredIndex !== i}
                        class:text-gray-500={!showNames && hoveredIndex !== i}
                    >
                        {key.name}
                    </span>
                </span>

                {#if key.location}
                    <a
                        href={getLocationUrl(key.location)}
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
