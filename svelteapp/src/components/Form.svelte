<script>
  import {addSingleUser} from '../store';
  import Button from './Button.svelte';
  import FormControl from './FormControl.svelte';
  import Counter from './Counter.svelte';

  let firstName = '';
  let lastName = '';
  let age = 0;

  $: fullDetails = `${firstName} ${lastName}, ${age} years old`;

  const handleAddUser = async () => {
    if (!(firstName && lastName && age > 0)) return;
    await addSingleUser(firstName, lastName, age);
    confirm(`Added user: ${fullDetails}`);
    firstName = '';
    lastName = '';
    age = 0;
  };
</script>

<form
	class="flex flex-col max-w-sm m-auto px-5 py-5 mt-5 gap-2 {$$props.class}"
	on:submit|preventDefault={handleAddUser}
>
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
		<Counter slot="control" bind:count="{age}"/>
	</FormControl>
	<Button type="submit">Add User</Button>
</form>
