<script>
    export let playerData = {};
    import { journalEntryList } from "$lib/gameData";
    import { flattenData, getLocationUrl } from "$lib/utils";

    function hasBeenSeen(enemy, playerData) {
        if (!playerData || !enemy.saveName) return false;
        const enemyList = playerData?.EnemyJournalKillData?.list ?? [];

        return enemyList.some(
            (entry) =>
                entry.Name === enemy.saveName &&
                entry.Record?.HasBeenSeen === true,
        );
    }

    function sufficientKills(enemy, playerData) {
        if (!playerData || !enemy.saveName) return false;
        const journalList = playerData?.EnemyJournalKillData?.list ?? [];
        return journalList.some(
            (entry) =>
                entry.Name === enemy.saveName &&
                entry.Record?.Kills >= enemy.requiredKillCount,
        );
    }

    function getKillCount(enemy, playerData) {
        if (!playerData || !enemy.saveName) return 0;
        const journalList = playerData?.EnemyJournalKillData?.list ?? [];
        const currentEntry = journalList.find((entry) => entry.Name === enemy.saveName);
        return currentEntry?.Record?.Kills ?? 0;
    }

    let flatPlayerData = {};
    let sufficientKillCount = 0;
    let hasBeenSeenCount = 0;
    let totalEnemies = journalEntryList.length;
    let showNames = false;
    let hoveredIndex = null;

    $: if (playerData) {
        flatPlayerData = flattenData(playerData);

        let seenCount = 0;
        let killCount = 0;
        for (const enemy of journalEntryList) {
            if (hasBeenSeen(enemy, flatPlayerData)) {
                seenCount++;
            }

            if (sufficientKills(enemy, flatPlayerData)) {
                killCount++;
            }
        }

        sufficientKillCount = killCount;
        hasBeenSeenCount = seenCount;
    }
</script>

<div class="w-full max-w-4xl mx-auto p-6">
    <div class="flex flex-col items-center text-center mb-6">
        <h1 class="text-3xl font-bold mb-2">Hunter's Journal</h1>
        <p class="text-sm text-gray-400">
            Seen:
            <span class="text-green-400 font-semibold">{hasBeenSeenCount}</span>
            / {totalEnemies}
        </p>

        <p class="text-sm text-gray-400">
            Recorded:
            <span class="text-green-400 font-semibold"
                >{sufficientKillCount}</span
            >
            / {totalEnemies}
        </p>

        <button
            class="mt-3 px-4 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition"
            on:click={() => (showNames = !showNames)}
        >
            {showNames ? "Hide Names" : "Show Names"}
        </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each journalEntryList as enemy, i}
            {#key enemy.name}
                <div
                    role="group"
                    class="flex flex-col justify-between bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 transition"
                    on:mouseenter={() => (hoveredIndex = i)}
                    on:mouseleave={() => (hoveredIndex = null)}
                >
                    <div class="flex justify-between items-center mb-1">
                        <span class="flex items-center gap-2">
                            {#if sufficientKills(enemy, flatPlayerData)}
                                <span class="text-green-400 text-lg">✅</span>
                            {:else}
                                <span class="text-red-400 text-lg">❌</span>
                            {/if}
                            <span
                                class="font-medium transition duration-300 ease-in-out"
                                class:blur-sm={!showNames && hoveredIndex !== i}
                                class:text-gray-500={!showNames &&
                                    hoveredIndex !== i}
                            >
                                {enemy.name}
                            </span>
                        </span>

                        {#if enemy.location}
                            <a
                                href={getLocationUrl(enemy.location)}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-xs text-blue-400 hover:underline"
                            >
                                View Map
                            </a>
                        {:else}
                            <span class="text-xs text-gray-400 italic"
                                >Unknown</span
                            >
                        {/if}
                    </div>

                    <!-- ✅ Kills Display -->
                    <span class="text-xs text-gray-400 mt-1">
                        Kills:
                        <span class="text-green-300">
                            {getKillCount(enemy, flatPlayerData)}
                        </span>
                        / {enemy.requiredKillCount ?? 1}
                    </span>
                </div>
            {/key}
        {/each}
    </div>
</div>
