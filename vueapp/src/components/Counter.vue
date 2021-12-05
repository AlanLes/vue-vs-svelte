<script setup>
import {ref} from 'vue';

const count = ref(0);
</script>

<template>
	<div class="flex items-center justify-around m-auto max-w-sm pt-2">
		<button class="px-4 py-2 text-sm text-green-800 font-semibold rounded-xl border border-green-400 hover:text-white hover:bg-green-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"> DECREMENT </button>
		<h3>{{ count }}</h3>
		<button class="px-4 py-2 text-sm text-green-800 font-semibold rounded-xl border border-green-400 hover:text-white hover:bg-green-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"> INCREMENT </button>
	</div>
</template>
