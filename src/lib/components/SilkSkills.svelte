<script>
    export let playerData = {};
    import { silkSkillsList } from "$lib/gameData";
</script>

<div class="flex justify-center items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl p-6">
        <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Unlocked Silk Skills</h1>

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