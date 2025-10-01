<script>
  import background from "../static/Background.jpg";

  import FileUpload from "$lib/components/FileUpload.svelte";
  import { decodeFile } from "$lib/decodeSaveFile";

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

  let decodedResult = null;

  // default values on loading the website
  let timePlayed = "0 h 00 min 00 sec";
  let maskShards = 5;
  let maxSilk = 0;
  let silkHearts = 0;
  let rosaries = 0;
  let shellShards = 0;
  let saveVersion = "0.0.0.0";

  async function handleFile(event) {
    const arrayBuffer = event.detail;
    decodedResult = await decodeFile(arrayBuffer);
    if (decodedResult) {
      // playtime
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
</script>

<div>
  <div>
    <div class="text-3xl p-8 w-screen flex justify-center items-center">
      <h1>Save Completion Analyser for Hollow Knight: Silksong</h1>
    </div>

    <div class="w-screen flex justify-center items-center">
      <FileUpload on:fileLoaded={handleFile} />
    </div>

    <div class="flex flex-col justify-center items-center">
      <div class="grid grid-cols-2 gap-10 w-full max-w-3xl p-10 text-xl">
        <h1 class="col-span-2 text-2xl font-bold text-center mt-4">
          Save Info:
        </h1>
        <p class="font-bold">Save Version:</p>
        <p>{saveVersion}</p>
        <p>Time Played:</p>
        <p>{timePlayed}</p>
        <p>Mask Shards:</p>
        <p>{maskShards}</p>
        <p>Max Silk:</p>
        <p>{maxSilk}</p>
        <p>Rosaries:</p>
        <p>{rosaries}</p>
        <p>Shell Shards:</p>
        <p>{shellShards}</p>
        <p>Silk Hearts:</p>
        <p>{silkHearts}</p>
      </div>

      <div class="gap-10 w-full max-w-3xl p-10 text-xl">
        <Bosses playerData={decodedResult?.playerData ?? {}} />
        <Crests playerData={decodedResult?.playerData ?? {}} />
        <NeedleUpgrade playerData={decodedResult?.playerData ?? {}} />
        <AreaMaps playerData={decodedResult?.playerData ?? {}} />
        <Tools playerData={decodedResult?.playerData ?? {}} />
        <BellwayStations playerData={decodedResult?.playerData ?? {}} />
        <VentricaStations playerData={decodedResult?.playerData ?? {}} />
        <CraftingKitUpgrade playerData={decodedResult?.playerData ?? {}} />
        <MaskShards playerData={decodedResult?.playerData ?? {}} sceneData={decodedResult?.sceneData ?? {}} />
        <SpoolFragments playerData={decodedResult?.playerData ?? {}} sceneData={decodedResult?.sceneData ?? {}} />
        <Quests playerData={decodedResult?.playerData ?? {}} />
        <MemoryLockets playerData={decodedResult?.playerData ?? {}} sceneData={decodedResult?.sceneData ?? {}} />
      </div>
    </div>
  </div>
</div>
