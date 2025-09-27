<script>
    import FileUpload from "$lib/FileUpload.svelte";
    import { decodeFile } from "$lib/decodeSaveFile";
    let decodedResult = null;

    // default
    let timePlayed = "0 h 00 min 00 sec"; // default
    let health = 5;
    let silk = 0;
    let silkHearts = 0;
    let rosaries = 0;
    let shellShards = 0;

    async function handleFile(event) {
        const arrayBuffer = event.detail;
        decodedResult = await decodeFile(arrayBuffer);
        if (decodedResult) {
            // playtime
            let playTimeInSeconds = Math.floor(
                decodedResult.playerData.playTime,
            );
            timePlayed = formatTime(playTimeInSeconds);

            health = decodedResult.playerData.maxHealth;
            silk = decodedResult.playerData.silkMax;
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
    <div class="flex place-content-center">
        <h1 class="font-bold underline">
            Hollow Knight: Silksong Save Completion Analyser
        </h1>
    </div>

    <FileUpload on:fileLoaded={handleFile} />

    <h2>Game Status:</h2>
    <h2>True Completion:</h2>

    <p>Time Played: {timePlayed}</p>

    <div>
        <p>Health: {health}</p>
        <p>Silk: {silk}</p>
        <p>Rosaries: {rosaries}</p>
        <p>Shell Shards: {shellShards}</p>
    </div>

    <div class="relative group w-fit">
        <!-- Text -->
        <p class="text-lg font-bold">Secret Message 👀</p>

        <!-- Cover -->
        <div class="absolute inset-0 bg-gray-800 group-hover:opacity-0 transition-opacity duration-300"></div>
    </div>

    <div>
  <h1 class="font-bold">Bosses</h1>
  
</div>
</div>
