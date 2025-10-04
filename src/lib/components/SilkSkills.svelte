<script>
    export let playerData = {};
    import { silkSkillsList } from "$lib/gameData";
    import { flattenData } from "$lib/utils";

    let flatPlayerData = {};
    let unlockedSilkSkillsCount = 0;
    let totalSilkSkills = silkSkillsList.length;
    $: if (playerData) {
        flatPlayerData = flattenData(playerData);
        let count = 0;
        for (const skill of silkSkillsList) {
            if (flatPlayerData?.[skill.flag] === true) {
                count++;
            }
        }
        unlockedSilkSkillsCount = count;
    }

    export { unlockedSilkSkillsCount, totalSilkSkills };
</script>

<div class="flex justify-center items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl p-6">
                <div class="col-span-2 flex flex-col items-center mt-4">
            <h1 class="text-3xl font-bold text-center">Unlocked Silk Skills</h1>
            <p class="text-sm text-gray-400 mt-1">
                Unlocked: 
                <span class="text-green-400 font-semibold">
                    {unlockedSilkSkillsCount}
                </span>
                / {totalSilkSkills}
            </p>
        </div>

        {#each silkSkillsList as skill}
            <div class="flex justify-between items-center bg-gray-800/60 p-3 rounded-2xl shadow border border-gray-700 ">
                <span class="flex items-center gap-2">
                    {#if playerData?.[skill.flag] == true}
                        <span class="text-green-400 text-lg">✅</span>
                    {:else}
                        <span class="text-red-400 text-lg">❌</span>
                    {/if}
                    <span class="font-medium">{skill.name}</span>
                </span>
            </div>
        {/each}
    </div>
</div>