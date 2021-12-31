<script>
	import Button from './Button.svelte';
  export let count = 0;
  const increment = () => count++;
  const decrement = () => count--;
</script>

<div class="flex items-center justify-between m-auto max-w-sm mt-5 px-5">
	<Button type="button" on:click={decrement}>DECREMENT</Button>
	<h3 class="mx-3 tracking-widest">{ count }</h3>
	<Button type="button" on:click={increment}>INCREMENT</Button>
</div>
