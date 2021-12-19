<script setup>
import Button from './Button.vue';
import {computed} from 'vue';

const emit = defineEmits(['update:count']);
const props = defineProps({
	count: {
		type: Number,
		default: () => 0,
		validator(value) {
			return !Number.isNaN(Number(value));
		},
	},
});

const localCount = computed({
	get: () => props.count,
	set: (value) => emit(`update:count`, value),
});
const increment = () => localCount.value++;
const decrement = () => localCount.value--;
</script>

<template>
	<div class="flex items-center justify-between m-auto max-w-sm mt-5 px-5">
		<Button @click.prevent="decrement">DECREMENT</Button>
		<h3 class="mx-3 tracking-widest">{{ count }}</h3>
		<Button @click.prevent="increment">INCREMENT</Button>
	</div>
</template>
