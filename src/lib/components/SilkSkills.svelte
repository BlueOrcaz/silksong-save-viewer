<script>
    export let playerData = {};
    import { silkSkillsList } from "$lib/gameData";
</script>

<div>
    <h1 class="col-span-2 text-2xl font-bold text-center mt-4"> Acquired Silk Skills</h1>
    {#each silkSkillsList as skill}
        <p>{playerData?.[skill.flag] ? '✅' : '❌'} {skill.name}</p>
    {/each}
        <p>{playerData?.[skill.flag] ? '✅' : '❌'} {skill.name}</p>
</div>