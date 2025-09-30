<script>
    export let playerData = {};
    import { bossList, crestList } from "$lib/gameData";
    import { vesticrestList } from "$lib/gameData";

    function isCrestUnlocked(crest, playerData) {
        if (!playerData || !crest.flag) return false;

        const unlockedCrestList = playerData?.ToolEquips?.savedData ?? [];
        return unlockedCrestList.some(entry => entry.Name === crest.flag && entry.Data.IsUnlocked);
    }

</script>

<div>
    <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Acquired Crests</h1>
    {#each crestList as crest}
        <p>
            {#if isCrestUnlocked(crest, playerData)}
                ✅
            {:else}
                ❌
            {/if}
            {crest.name}
        </p>
    {/each}
    {#each vesticrestList as vesticrest}
        <p>{playerData?.[vesticrest.flag] ? '✅' : '❌'} {vesticrest.name}</p>
    {/each}
</div>