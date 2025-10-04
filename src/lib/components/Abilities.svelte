<script>
    export let playerData = {};
    import { abilityList } from "$lib/gameData";
    import { flattenData } from "$lib/utils";


    let flatPlayerData = {}
    let unlockedAbilityCount = 0;
    let totalAbilities = abilityList.length;

    $: if (playerData) {
        flatPlayerData = flattenData(playerData)
        let count = 0;
        for (const ability of abilityList) {
            if (playerData?.[ability.flag] === true) {
                count++;
            }
        }
        unlockedAbilityCount = count;
    }

    export { unlockedAbilityCount, totalAbilities };
</script>

<div class="flex justify-center items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl p-6">
        <div class="col-span-2 flex flex-col items-center mt-4">
            <h1 class="text-3xl font-bold text-center">Unlocked Abilities</h1>
            <p class="text-sm text-gray-400 mt-1">
                Unlocked: <span class="text-green-400 font-semibold">{unlockedAbilityCount}</span> / {totalAbilities}
            </p>
        </div>

        {#each abilityList as ability}
            <div class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700">
                <span class="flex items-center gap-2">
                    {#if playerData?.[ability.flag] === true}
                        <span class="text-green-400 text-lg">✅</span>
                    {:else}
                        <span class="text-red-400 text-lg">❌</span>
                    {/if}
                    <span class="font-medium">{ability.name}</span>
                </span>
            </div>
        {/each}
    </div>
</div>
