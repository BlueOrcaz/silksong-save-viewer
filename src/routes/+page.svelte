<script>
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
  import Objectives from "$lib/components/Objectives.svelte";
  import MaskShards from "$lib/components/MaskShards.svelte";
  import MemoryLockets from "$lib/components/MemoryLockets.svelte";
  import PaleOil from "$lib/components/PaleOil.svelte";
  import FleaLocations from "$lib/components/FleaLocations.svelte";
  import ToolPouches from "$lib/components/ToolPouches.svelte";
  import SilkSkills from "$lib/components/SilkSkills.svelte";
  import Abilities from "$lib/components/Abilities.svelte";
  import CraftMetal from "$lib/components/CraftMetal.svelte";
  import HuntersJournal from "$lib/components/HuntersJournal.svelte";
  import SimpleKeys from "$lib/components/SimpleKeys.svelte";
  import MiscKeys from "$lib/components/MiscKeys.svelte";
  import Mementos from "$lib/components/Mementos.svelte";
  import Relics from "$lib/components/Relics.svelte";
  import Mossberries from "$lib/components/Mossberries.svelte";

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
    { name: "Wishes", components: [Objectives, Quests] },
    {
      name: "Areas",
      components: [AreaMaps, BellwayStations, VentricaStations],
    },
    { name: "Tools", components: [Tools] },
    { name: "Collectables", components: [FleaLocations, SimpleKeys, MiscKeys, CraftMetal, PaleOil, MemoryLockets, Mossberries, Mementos, Relics] },
    { name: "Hunter's Journal", components: [HuntersJournal] },
  ];

  $: currentComponents =
    tabs.find((tab) => tab.name === currentTab)?.components ?? [];
</script>

<div class="relative min-h-screen overflow-x-hidden text-white">
  <!-- Background -->
  <div
  class="fixed inset-0 bg-cover bg-center bg-no-repeat bg-[url('/Background.jpg')] scale-110 md:scale-100 -z-10"
></div>



  <!-- Header -->
  <header class="w-full px-4 sm:px-10 pt-10 text-center">
    <h1 class="text-2xl sm:text-3xl font-bold mb-4">
      Save Completion Analyser for Hollow Knight: Silksong
    </h1>
    <p class="text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
      Upload your <span class="font-semibold text-white">Silksong save file</span> to analyze your game progress,
      view collected items, defeated bosses, and completion stats in detail.
    </p>
    <p class="text-xs sm:text-sm text-gray-400 mt-2 italic">
      (Warning: Spoilers for Hollow Knight Silksong will be shown.)
    </p>
  </header>

  <div class="w-full flex justify-center items-center mt-8 px-4">
    <FileUpload on:fileLoaded={handleFile} />
  </div>


  <div class="flex flex-col items-center mt-8 px-4 sm:px-6">
    <div
      class="rounded-xl p-2 flex flex-wrap justify-center gap-2 bg-gray-800/90 shadow-md backdrop-blur-sm"
    >
      {#each tabs as { name }}
        <button
          on:click={() => (currentTab = name)}
          class="min-w-[110px] sm:min-w-[130px] text-sm sm:text-base px-4 py-2 rounded-lg transition-colors duration-150 
          {currentTab === name ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-700'}"
        >
          {name}
        </button>
      {/each}
    </div>


    <div class="flex flex-col items-center w-full max-w-5xl mt-6">
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

  <!-- Footer -->
  <footer
    class="mt-12 py-8 w-full bg-gray-900/80 text-center text-gray-400 text-sm px-4"
  >
    <p>
      Created by
      <a
        href="https://github.com/BlueOrcaz"
        target="_blank"
        class="text-blue-400 hover:text-blue-300 transition-colors"
      >
        @BlueOrcaz
      </a>
    </p>

    <p class="mt-2">
      <a
        href="https://github.com/BlueOrcaz/silksong-save-viewer"
        target="_blank"
        class="text-blue-400 hover:text-blue-300 transition-colors"
      >
        GitHub Repository
      </a>
    </p>
    <p class="mt-2">
      Support me on
      <a
        href="https://ko-fi.com/BlueOrcaz"
        target="_blank"
        class="text-pink-400 hover:text-pink-300 transition-colors"
      >
        Ko-fi ☕
      </a>
    </p>
  </footer>
</div>


