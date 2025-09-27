<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();


    import aesjs from "aes-js";
    import { decode } from "punycode";


    let formatDecode = '';

    const CSHARP_HEADER = [
        0, 1, 0, 0, 0, 255, 255, 255, 255, 1, 0, 0, 0, 0, 0, 0, 0, 6, 1, 0, 0,
        0,
    ];
    const BASE64_ARRAY =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            .split("")
            .map((c) => c.charCodeAt(0));
    const BASE64_DECODE_TABLE = new Map(BASE64_ARRAY.map((ord, i) => [ord, i]));
    const AES_KEY = new TextEncoder().encode(
        "UKu52ePUBwetZ9wNX88o54dnfKRu0T1l",
    );
    const ECB_STREAM_CIPHER = new aesjs.ModeOfOperation.ecb(AES_KEY);

    function RemoveHeaders(buffer, csHeader = CSHARP_HEADER) {
        buffer = buffer.subarray(csHeader.length, buffer.length - 1);
        let lengthCount = 0;
        for (let i = 0; i < 5; i++) {
            lengthCount++;
            if ((buffer[i] & 0x80) === 0) break;
        }
        return buffer.subarray(lengthCount);
    }

    function Base64Decode(buffer) {
        buffer = new Uint8Array(buffer).map((v) => BASE64_DECODE_TABLE.get(v));
        const padIndex = buffer.indexOf(64);
        let end = padIndex !== -1 ? padIndex : buffer.length;
        buffer = buffer.subarray(0, end);

        let output = new Uint8Array((3 * buffer.length) / 4);
        let continuous = Math.floor(buffer.length / 4) * 4;

        for (let i = 0; i < continuous; i += 4) {
            let k = (3 * i) / 4;
            output[k] = (buffer[i] << 2) | (buffer[i + 1] >> 4);
            output[k + 1] =
                ((buffer[i + 1] & 0x0f) << 4) | (buffer[i + 2] >> 2);
            output[k + 2] = ((buffer[i + 2] & 0x03) << 6) | buffer[i + 3];
        }

        if (buffer[continuous] !== undefined) {
            let k = (3 * continuous) / 4;
            output[k] =
                (buffer[continuous] << 2) | (buffer[continuous + 1] >> 4);
            if (buffer[continuous + 2] !== undefined) {
                output[k + 1] =
                    ((buffer[continuous + 1] & 0x0f) << 4) |
                    (buffer[continuous + 2] >> 2);
            }
        }

        return output;
    }

    function AESDecryption(buffer) {
        let output = ECB_STREAM_CIPHER.decrypt(buffer);
        return output.subarray(0, -output[output.length - 1]);
    }

    function handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            let inputArrayBuffer = new Uint8Array(reader.result);
            try {
                inputArrayBuffer = new Uint8Array(inputArrayBuffer);
                inputArrayBuffer = RemoveHeaders(inputArrayBuffer);
                inputArrayBuffer = Base64Decode(inputArrayBuffer);
                inputArrayBuffer = AESDecryption(inputArrayBuffer);

                let decodedString = new TextDecoder().decode(inputArrayBuffer);
                formatDecode = JSON.stringify(JSON.parse(decodedString), null, 2);
            } catch (error) {
                alert(`File cannot be decoded. ${error}`);
                console.error(error);
            }
        };
        reader.readAsArrayBuffer(file);
        dispatch("update", { value: formatDecode });
    }
</script>

<div>
    <input type="file" on:change={handleFileUpload} />
</div>
