<script>
    export let playerData = {};
    
    import { needleUpgradeList } from "./needleUpgradeData";
</script>

<div>
    <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Needle Upgrades</h1>

    {#each needleUpgradeList as upgrade}
        <p>
            {#if playerData.nailUpgrades >= upgrade.index}
                ✅
            {:else}
                ❌
            {/if}
            {upgrade.name} 

        </p>
    {/each}
</div>