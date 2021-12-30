<script>
	import FormControl from './FormControl.svelte';
  import Counter from './Counter.svelte';

  let firstName = '';
  let lastName = '';
  let age = 0;

  $: fullDetails = `${firstName} ${lastName}, ${age} years old`;
</script>

<form class="flex flex-col max-w-sm m-auto px-5 mt-5 gap-2 {$$props.class}">
	<FormControl
		placeholder="e.g. Johnny"
		name="firstName"
		type="text"
		bind:value={firstName}
	>
		Type your name
	</FormControl>

	<FormControl
		placeholder="e.g. Bravo"
		name="lastName"
		type="text"
		bind:value={lastName}
	>
		Type your last name
	</FormControl>

	<FormControl
		name="age"
		type="text"
		bind:value={age}
	>
		Enter age
		<Counter slot="control" bind:count="{age}" />
	</FormControl>

	<p class="text-yellow-800">{ (firstName && lastName && age) ? fullDetails : '' }</p>
</form>
