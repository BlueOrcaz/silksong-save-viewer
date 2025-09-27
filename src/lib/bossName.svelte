<script>
  export let name;
  export let defeated = false;
  export let location;
</script>

<p class="flex items-center gap-2">
  <span>{defeated ? "✅" : "❌"}</span>
  <span class="relative group">
    <span class="font-bold">{name}</span>
    <span class="absolute inset-0 bg-gray-800 group-hover:opacity-0 transition-opacity duration-300"></span>
  </span>
</p>
