<script>
  import background from "../static/Background.jpg";

  import FileUpload from "$lib/FileUpload.svelte";
  import { decodeFile } from "$lib/decodeSaveFile";
  let decodedResult = null;

  // default
  let timePlayed = "0 h 00 min 00 sec"; // default
  let maskShards = 5;
  let maxSilk = 0;
  let silkHearts = 0;
  let rosaries = 0;
  let shellShards = 0;

  async function handleFile(event) {
    const arrayBuffer = event.detail;
    decodedResult = await decodeFile(arrayBuffer);
    if (decodedResult) {
      // playtime
      let playTimeInSeconds = Math.floor(decodedResult.playerData.playTime);
      timePlayed = formatTime(playTimeInSeconds);

      maskShards = decodedResult.playerData.maxHealth;
      maxSilk = decodedResult.playerData.silkMax;
      silkHearts = decodedResult.playerData.silkRegenMax;
      rosaries = decodedResult.playerData.geo;
      shellShards = decodedResult.playerData.ShellShards;
    }
  }

  function formatTime(seconds) {
    const date = new Date(0); // Initialize with the epoch (1970-01-01)
    date.setSeconds(seconds); // Set the seconds from the decoded playtime

    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    const secondsFormatted = String(date.getUTCSeconds()).padStart(2, "0");

    return `${hours} h ${minutes} min ${secondsFormatted} sec`;
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

    <div class="flex justify-center items-center">
      <div class="grid grid-cols-2 gap-10 w-full max-w-3xl p-10 text-xl">
        <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Save Info:</h1>
        <p class="font-bold">Save Version:</p>
        <p>0.0.0.0</p>
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
        <p>0</p>
        <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Completed Bosses</h1>
        <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Unlocked Crests</h1>
        <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Tools</h1>
        <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Nail Upgrades</h1>
        <h1 class="col-span-2 text-2xl font-bold text-center mt-4">Spool Fragments</h1>
      </div>
    </div>
  </div>
</div>
