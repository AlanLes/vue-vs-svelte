<script>
  let firstName = '';
  let lastName = '';
  let age = 0;

  $: fullDetails = `${firstName} ${lastName}, ${age} years old`;
</script>

<form class="flex flex-col max-w-sm m-auto px-5 mt-5 gap-2">
	<label for="firstName" class="text-sm text-yellow-800 mb-2">
		Type your name
		<input bind:value="{firstName}" id="firstName" type="text" class="w-full px-4 py-2 mt-1 font-semibold rounded-xl border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2">
	</label>

	<label for="lastName" class="text-sm text-yellow-800 mb-2">
		Type your last name
		<input bind:value="{lastName}" id="lastName" type="text" class="w-full px-4 py-2 mt-1 font-semibold rounded-xl border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2">
	</label>

	<label for="age" class="text-sm text-yellow-800 mb-2">
		Enter age
		<input bind:value="{age}" id="age" type="number" class="block w-1/4 px-4 py-2 mt-1 font-semibold rounded-xl border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2">
	</label>
	<p class="text-yellow-800">{ (firstName && lastName && age) ? fullDetails : '' }</p>
</form>
