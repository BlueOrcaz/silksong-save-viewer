<script>
    export let playerData = {};
    import { 
        heartList, 
        runeHarpList, 
        boneScrollList, 
        choralCommandmentList, 
        weaverEffigyList, 
        psalmCylinderList 
    } from "$lib/gameData";
    import { flattenData, getLocationUrl } from "$lib/utils";

    function isHeartCollected(heart, playerData) {
        return playerData && playerData[heart.flag] === true;
    }

    function isRelicCollected(relic, playerData) {
        const relicList = playerData?.Relics?.savedData ?? [];
        return relicList.some(
            (entry) => entry.Name === relic.flag && entry.Data && entry.Data.IsCollected === true
        );
    }

    let flatData = {};
    let collectedRelics = 0;
    let totalRelics = 
        heartList.length + 
        runeHarpList.length + 
        boneScrollList.length + 
        choralCommandmentList.length + 
        weaverEffigyList.length + 
        psalmCylinderList.length;

    let showNames = false;
    let hoveredIndex = null;

    $: if (playerData) {
        flatData = flattenData(playerData);

        let count = 0;

        for (const heart of heartList) {
            if (isHeartCollected(heart, flatData)) count++;
        }

        const allOtherRelics = [
            ...runeHarpList,
            ...boneScrollList,
            ...choralCommandmentList,
            ...weaverEffigyList,
            ...psalmCylinderList
        ];

        for (const relic of allOtherRelics) {
            if (isRelicCollected(relic, flatData)) count++;
        }

        collectedRelics = count;
    }

    export { collectedRelics, totalRelics };
</script>

<div class="flex justify-center items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl p-6">
        <div class="col-span-2 flex flex-col items-center mt-4">
            <h1 class="text-3xl font-bold text-center">Collected Relics</h1>
            <p class="text-sm text-gray-400 mt-1">
                Collected: 
                <span class="text-green-400 font-semibold">{collectedRelics}</span>
                / {totalRelics}
            </p>

            <button
                class="mt-3 px-4 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition"
                on:click={() => (showNames = !showNames)}
            >
                {showNames ? "Hide Names" : "Show Names"}
            </button>
        </div>

        <div class="col-span-2 mt-6">
            <h2 class="text-xl font-semibold text-center text-gray-200 mb-2">Hearts</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                {#each heartList as heart, i}
                    <div
                        role="group"
                        class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 transition"
                        on:mouseenter={() => (hoveredIndex = `heart-${i}`)}
                        on:mouseleave={() => (hoveredIndex = null)}
                    >
                        <span class="flex items-center gap-2">
                            {#if isHeartCollected(heart, playerData)}
                                <span class="text-green-400 text-lg">✅</span>
                            {:else}
                                <span class="text-red-400 text-lg">❌</span>
                            {/if}
                            <span
                                class="font-medium transition duration-300 ease-in-out"
                                class:blur-sm={!showNames && hoveredIndex !== `heart-${i}`}
                                class:text-gray-500={!showNames && hoveredIndex !== `heart-${i}`}
                            >
                                {heart.name}
                            </span>
                        </span>

                        {#if heart.location}
                            <a
                                href={getLocationUrl(heart.location)}
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

        {#each [
            { title: "Rune Harps", list: runeHarpList },
            { title: "Bone Scrolls", list: boneScrollList },
            { title: "Choral Commandments", list: choralCommandmentList },
            { title: "Weaver Effigies", list: weaverEffigyList },
            { title: "Psalm Cylinders", list: psalmCylinderList }
        ] as category}
            <div class="col-span-2 mt-6">
                <h2 class="text-xl font-semibold text-center text-gray-200 mb-2">{category.title}</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {#each category.list as relic, i}
                        <div
                            role="group"
                            class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 transition"
                            on:mouseenter={() => (hoveredIndex = `${category.title}-${i}`)}
                            on:mouseleave={() => (hoveredIndex = null)}
                        >
                            <span class="flex items-center gap-2">
                                {#if isRelicCollected(relic, playerData)}
                                    <span class="text-green-400 text-lg">✅</span>
                                {:else}
                                    <span class="text-red-400 text-lg">❌</span>
                                {/if}
                                <span
                                    class="font-medium transition duration-300 ease-in-out"
                                    class:blur-sm={!showNames && hoveredIndex !== `${category.title}-${i}`}
                                    class:text-gray-500={!showNames && hoveredIndex !== `${category.title}-${i}`}
                                >
                                    {relic.name}
                                </span>
                            </span>

                            {#if relic.location}
                                <a
                                    href={getLocationUrl(relic.location)}
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
        {/each}
    </div>
</div>
