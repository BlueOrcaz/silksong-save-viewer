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
            let playTimeInSeconds = Math.floor(
                decodedResult.playerData.playTime,
            );
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

<div
    class="bg-fixed h-screen w-full bg-cover bg-center relative"
    style="background-image: url({background});"
>
    <!-- Overlay to darken the background -->
    <div class="absolute inset-0 bg-black opacity-25"></div>

    <div class="relative z-10 flex place-content-center">
        <h1 class="text-5xl text-white mt-7 pt-6">Save Completion Analyser</h1>
    </div>

    <div class="relative flex place-content-center">
        <h1 class="text-white pb-5">For Hollow Knight: Silksong</h1>
    </div>

    <div class="relative flex place-content-center text-white pb-10">
        <FileUpload on:fileLoaded={handleFile} />
    </div>

    <div class="flex items-center justify-center">
        <div class="text-center">
            <h2 class="text-white">Game Status:</h2>
            <h2 class="text-white">True Completion:</h2>

            <p class="text-white">Time Played: {timePlayed}</p>

            <div>
                <p class="text-white">Mask Shards: {maskShards}</p>
                <p class="text-white">Max Silk: {maxSilk}</p>
                <p class="text-white">Rosaries: {rosaries}</p>
                <p class="text-white">Shell Shards: {shellShards}</p>
            </div>

            <div>
                <h1 class="font-bold text-white">Bosses</h1>
            </div>
        </div>
    </div>
</div>
