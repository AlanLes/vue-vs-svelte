<script setup>
import {computed, ref} from 'vue';
import {useUsersStore} from '../store';
import FormControl from './FormControl.vue';
import Counter from './Counter.vue';
import Button from './Button.vue';

const usersStore = useUsersStore();

const firstName = ref('');
const lastName = ref('');
const age = ref(0);

const fullDetails = computed(() => `${firstName.value} ${lastName.value}, ${age.value} years old`);

const handleAddUser = async () => {
	if (!(firstName.value && lastName.value && age.value > 0)) return;
	await usersStore.addUser(firstName.value, lastName.value, age.value);
	confirm(`Added user: ${fullDetails.value}`);
	firstName.value = '';
	lastName.value = '';
	age.value = 0;
}
</script>

<template>
	<form class="flex flex-col max-w-sm m-auto px-5 py-5 mt-5 gap-2" @submit.prevent="handleAddUser">
		<FormControl
			placeholder="e.g. Johnny"
			name="firstName"
			type="text"
			v-model:modelValue="firstName"
		>
			Type your name
		</FormControl>
		
		<FormControl
			placeholder="e.g. Bravo"
			name="lastName"
			type="text"
			v-model:modelValue="lastName"
		>
			Type your last name
		</FormControl>
		
		<FormControl name="age" v-model:modelValue="age">
			Enter age
			<template #control="{age: modelValue}">
				<Counter class="my-0" v-model:count="age" />
			</template>
		</FormControl>
		<Button type="submit">Add User</Button>
	</form>
</template>
