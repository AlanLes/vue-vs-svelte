<script>
  export let count = 0;
  const increment = () => count++;
  const decrement = () => count--;
</script>

<div class="flex items-center justify-between m-auto max-w-sm mt-5 px-5">
	<button on:click={decrement}
					class="px-4 py-2 text-sm text-yellow-800 font-semibold rounded-xl border border-yellow-400 hover:text-white hover:bg-yellow-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2">
		DECREMENT
	</button>
	<h3 class="tracking-widest">{ count }</h3>
	<button on:click={increment}
					class="px-4 py-2 text-sm text-yellow-800 font-semibold rounded-xl border border-yellow-400 hover:text-white hover:bg-yellow-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2">
		INCREMENT
	</button>
</div>
