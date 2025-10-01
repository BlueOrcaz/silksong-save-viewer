<script>
    export let playerData = {};
    import { silkSkillsList } from "$lib/gameData";
</script>

<div>
    <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Unlocked Silk Skills</h1>
    {#each silkSkillsList as skill}
        <p>{playerData?.[skill.flag] ? '✅' : '❌'} {skill.name}</p>
    {/each}
</div>