<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    let selectedMode = "steam"; // default mode
    let showPopover = false;
    let timeout;

    // Modes with display name and either a path or a redirect URL
    const modes = {
        steam: {
            display: "Steam (Windows)",
            path: "%USERPROFILE%\\AppData\\LocalLow\\Team Cherry\\Hollow Knight Silksong\\(Your Steam ID)\\user*.dat"
        },
        msstore: {
            display: "MS Store (Windows)",
            path: "%LOCALAPPDATA%\\Packages\\TeamCherry.Silksong_y4jvztpgccj42\\SystemAppData\\wgs\\"
        },
        macos: {
            display: "MacOS",
            path: "~/Library/Application Support/unity.Team-Cherry.Silksong/"
        },
        linux: {
            display: "Linux",
            path: "~/.config/unity3d/Team Cherry/Hollow Knight Silksong"
        },
        steamdeck: {
            display: "Steam Deck",
            path: "~/.local/share/Team Cherry/Hollow Knight Silksong/"
        },
        steamcloud: {
            display: "Steam Cloud",
            redirect: "https://store.steampowered.com/account/remotestorageapp/?appid=1030300"
        }
    };

    $: fileExplorerText = modes[selectedMode].path || modes[selectedMode].redirect || "";

    function handleFileChange(file) {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            dispatch("fileLoaded", e.target.result); // ArrayBuffer
        };
        reader.readAsArrayBuffer(file);
    }

    function handleInputChange(event) {
        handleFileChange(event.target.files[0]);
    }

    function handleDrop(event) {
        event.preventDefault();
        if (event.dataTransfer.files.length > 0) {
            handleFileChange(event.dataTransfer.files[0]);
        }
    }

    function handleDragOver(event) {
        event.preventDefault();
    }

    function copyPath() {
        if (modes[selectedMode].redirect) {
            // Redirect to Steam Cloud
            window.open(modes[selectedMode].redirect, "_blank");
        } else if (fileExplorerText) {
            navigator.clipboard.writeText(fileExplorerText).then(() => {
                showPopover = true;
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    showPopover = false;
                }, 500);
            });
        }
    }
</script>

<div class="w-full max-w-2xl mx-auto space-y-4">
    <!-- Mode selector -->
    <div class="flex flex-wrap justify-center gap-2">
        {#each Object.keys(modes) as mode}
            <button
                class="px-4 py-2 rounded-lg border transition hover:bg-gray-200 {selectedMode === mode ? 'bg-gray-400 text-white' : ''}"
                on:click={() => (selectedMode = mode)}
            >
                {modes[mode].display}
            </button>
        {/each}
    </div>

    <!-- File path / redirect button -->
    <div class="text-center mb-3 border rounded-lg px-6 py-3 transition transform hover:scale-105 active:scale-95 relative">
        <button
            on:click={copyPath}
            class="relative w-full text-center break-words"
        >
            {fileExplorerText || "Open Steam Cloud"}
        </button>
        {#if showPopover}
            <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-gray-800 text-white text-sm rounded px-2 py-1 shadow-lg z-10">
                Copied!
            </div>
        {/if}
    </div>

    <!-- Drag & Drop + Upload (only for local modes) -->
    {#if !modes[selectedMode].redirect}
    <div
        role="button"
        tabindex="0"
        class="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center transition hover:border-gray-600"
        on:drop={handleDrop}
        on:dragover={handleDragOver}
    >
        <p class="mb-3">Drag & drop your .dat file here, or click below to upload</p>

        <input type="file" id="upload_file" class="hidden" on:change={handleInputChange} />
        <label
            for="upload_file"
            class="block bg-gray-600 text-white py-3 px-6 rounded-lg shadow cursor-pointer transition transform hover:scale-105 active:scale-95"
        >
            Upload .dat file
        </label>
    </div>
    {/if}
</div>
