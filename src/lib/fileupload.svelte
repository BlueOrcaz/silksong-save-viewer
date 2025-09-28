<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            dispatch("fileLoaded", e.target.result); // ArrayBuffer
        };
        reader.readAsArrayBuffer(file);
    }

    let showPopover = false;
    let timeout;
    let fileExplorerText =
        "%USERPROFILE%\\AppData\\LocalLow\\Team Cherry\\Hollow Knight\\";

    function copyPath() {
        navigator.clipboard.writeText(fileExplorerText).then(() => {
            showPopover = true;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                showPopover = false;
            }, 500);
        });
    }
</script>

<div>
    <label class="w-full mx-auto content-center justify-center flex pb-2" for="copy_path">Upload your user*.dat file from the path below:</label>
    <div class="w-full max-w-2xl mx-auto relative">
        <div
            class="text-center mb-3 border rounded-lg px-6 py-3 transition transform hover:scale-105 active:scale-95"
        >
            <button on:click={copyPath} class="relative">
                %USERPROFILE%\AppData\LocalLow\Team Cherry\Hollow Knight\
            </button>

            {#if showPopover}
                <div
                    class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-gray-800 text-white text-sm rounded px-2 py-1 shadow-lg z-10"
                >
                    Copied!
                </div>
            {/if}
        </div>
    </div>

    <div>
        <input
            type="file"
            id="upload_file"
            class="hidden"
            on:change={handleFileChange}
        />
        <label
            for="upload_file"
            class="block text-center bg-gray-600 text-white py-3 px-6 rounded-lg shadow cursor-pointer transition transform hover:scale-105 active:scale-95"
            >Upload .dat file</label
        >
    </div>
</div>
