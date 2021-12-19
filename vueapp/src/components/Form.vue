<script setup>
import {computed, ref} from 'vue';
import FormControl from './FormControl.vue';
import Counter from './Counter.vue';

const firstName = ref('');
const lastName = ref('');
const age = ref(0);

const fullDetails = computed(() => `${firstName.value} ${lastName.value}, ${age.value} years old`);
</script>

<template>
	<form class="flex flex-col max-w-sm m-auto px-5 mt-5 gap-2">
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
		
		<p class="text-green-800">{{ (firstName && lastName && age) ? fullDetails : '' }}</p>
	</form>
</template>
