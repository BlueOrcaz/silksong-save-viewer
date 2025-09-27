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
</script>

<div>
    <input type="file" on:change={handleFileChange} />
</div>
