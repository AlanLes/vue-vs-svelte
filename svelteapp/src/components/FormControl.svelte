<script>
  export let value = 'default value';
</script>

<label for="{$$restProps['name']}" class="text-sm text-yellow-800 mb-2">
	<slot>Label</slot>
	<slot name="control">
		<input
			{...$$restProps}
			id="{$$restProps['name']}"
			bind:value
			class="w-full px-4 py-2 mt-1 font-semibold rounded-xl border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
		>
	</slot>
</label>
