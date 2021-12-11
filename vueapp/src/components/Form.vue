<script setup>
import {computed, ref} from 'vue';

const firstName = ref('');
const lastName = ref('');
const age = ref(0);

const fullDetails = computed(() => `${firstName.value} ${lastName.value}, ${age.value} years old`);
</script>

<template>
	<form class="flex flex-col max-w-sm m-auto px-5 mt-5 gap-2">
		<label for="firstName" class="text-sm text-green-800 mb-2">
			Type your name
			<input v-model="firstName" id="firstName" type="text" class="w-full px-4 py-2 mt-1 font-semibold rounded-xl border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
		</label>
		
		<label for="lastName" class="text-sm text-green-800 mb-2">
			Type your last name
			<input v-model="lastName" id="lastName" type="text" class="w-full px-4 py-2 mt-1 font-semibold rounded-xl border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
		</label>
		
		<label for="age" class="text-sm text-green-800 mb-2">
			Enter age
			<input v-model="age" id="age" type="number" class="block w-1/4 px-4 py-2 mt-1 font-semibold rounded-xl border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
		</label>
		<p class="text-green-800">{{ (firstName && lastName && age) ? fullDetails : '' }}</p>
	</form>
</template>
