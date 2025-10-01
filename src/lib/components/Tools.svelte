<script>
    import { ToolList } from "$lib/gameData";
    export let playerData = {};

    function isToolUnlocked(playerData, toolName) {
        const tool = playerData?.Tools?.savedData?.find(
            (t) => t.Name === toolName,
        );
        return tool?.Data?.IsUnlocked ?? false;
    }
</script>

<div>
   <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Unlocked Tools</h1>

   {#each ToolList as tool}
        <p>
            {isToolUnlocked(playerData, tool.saveName) ? '✅' : '❌'} {tool.name}
        </p>
   {/each}
</div>