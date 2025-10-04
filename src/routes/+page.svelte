<script>
  import background from "../static/Background.jpg";

  import FileUpload from "$lib/components/FileUpload.svelte";
  import { decodeFile } from "$lib/decodeSaveFile";

  // Components
  import SaveInfo from "$lib/components/SaveInfo.svelte";
  import Bosses from "$lib/components/Bosses.svelte";
  import Crests from "$lib/components/Crests.svelte";
  import NeedleUpgrade from "$lib/components/NeedleUpgrade.svelte";
  import AreaMaps from "$lib/components/AreaMaps.svelte";
  import Tools from "$lib/components/Tools.svelte";
  import BellwayStations from "$lib/components/BellwayStations.svelte";
  import VentricaStations from "$lib/components/VentricaStations.svelte";
  import CraftingKitUpgrade from "$lib/components/CraftingKitUpgrade.svelte";
  import SpoolFragments from "$lib/components/SpoolFragments.svelte";
  import Quests from "$lib/components/Quests.svelte";
  import MaskShards from "$lib/components/MaskShards.svelte";
  import MemoryLockets from "$lib/components/MemoryLockets.svelte";
  import PaleOil from "$lib/components/PaleOil.svelte";
  import FleaLocations from "$lib/components/FleaLocations.svelte";
  import ToolPouches from "$lib/components/ToolPouches.svelte";
  import SimpleKeys from "$lib/components/SimpleKeys.svelte";
  import SilkSkills from "$lib/components/SilkSkills.svelte";
  import Abilities from "$lib/components/Abilities.svelte";
  import CraftMetal from "$lib/components/CraftMetal.svelte";
  let decodedResult = null;

  // default values
  let timePlayed = "0 h 00 min 00 sec";
  let maskShards = 5;
  let maxSilk = 0;
  let silkHearts = 0;
  let rosaries = 0;
  let shellShards = 0;
  let saveVersion = "0.0.0.0";
  let completionPercentage = 0;

  $: playerData = decodedResult?.playerData ?? {};
  $: sceneData = decodedResult?.sceneData ?? {};

  async function handleFile(event) {
    const arrayBuffer = event.detail;
    decodedResult = await decodeFile(arrayBuffer);
    if (decodedResult) {
      completionPercentage = decodedResult.playerData.completionPercentage;
      timePlayed = formatTime(Math.floor(decodedResult.playerData.playTime));
      saveVersion = decodedResult.playerData.version;
      maskShards = decodedResult.playerData.maxHealth;
      maxSilk = decodedResult.playerData.silkMax;
      silkHearts = decodedResult.playerData.silkRegenMax;
      rosaries = decodedResult.playerData.geo;
      shellShards = decodedResult.playerData.ShellShards;
    }
  }

  function formatTime(saveDataSeconds) {
    const hours = Math.floor(saveDataSeconds / 3600);
    const minutes = Math.floor((saveDataSeconds % 3600) / 60);
    const seconds = saveDataSeconds % 60;
    return `${hours} h ${minutes} min ${seconds} sec`;
  }

  let currentTab = "Save Info";

  const tabs = [
    { name: "Save Info", components: [SaveInfo] },
    { name: "Bosses", components: [Bosses] },
    { name: "Crests", components: [Crests] },
    {
      name: "Upgrades",
      components: [
        NeedleUpgrade,
        CraftingKitUpgrade,
        ToolPouches,
        MaskShards,
        SpoolFragments,
        Abilities,
        SilkSkills
      ],
    },
    { name: "Wishes", components: [Quests] },
    {
      name: "Areas",
      components: [AreaMaps, BellwayStations, VentricaStations],
    },
    { name: "Tools", components: [Tools] },
    { name: "Collectables", components: [FleaLocations, SimpleKeys, CraftMetal, PaleOil, MemoryLockets] },
  ];

  $: currentComponents =
    tabs.find((tab) => tab.name === currentTab)?.components ?? [];
</script>

<div class="min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-[url('/src/static/Background.jpg')]">
  <div class="text-white">
    <div class="text-3xl p-10 w-full flex justify-center items-center">
      <h1>Save Completion Analyser for Hollow Knight: Silksong</h1>
    </div>

    <div class="w-full flex justify-center items-center mb-8">
      <FileUpload on:fileLoaded={handleFile} />
    </div>

    <div class="flex flex-col justify-center items-center">
      <div class="rounded-xl p-2 flex flex-wrap justify-center bg-gray-800 text-white">
        {#each tabs as { name }}
          <button
            on:click={() => (currentTab = name)}
            class="m-1 px-4 py-2 rounded hover:bg-gray-700 transition {currentTab === name ? 'bg-blue-600' : 'bg-gray-600'}">
            {name}
          </button>
        {/each}
      </div>

      <div class="w-full flex flex-col items-center">
        {#each currentComponents as component}
          <svelte:component
            this={component}
            {playerData}
            {sceneData}
            {saveVersion}
            {timePlayed}
            {maskShards}
            {maxSilk}
            {rosaries}
            {shellShards}
            {silkHearts}
            {completionPercentage}
          />
        {/each}
      </div>
    </div>
  </div>
</div>
