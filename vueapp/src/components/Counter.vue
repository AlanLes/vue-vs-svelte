<template>
	<div class="counter">
		<button> DECREMENT </button>
		<h3>{{ count }}</h3>
		<button> INCREMENT </button>
	</div>
</template>

<script setup>
import {ref} from 'vue';

const count = ref(0);
</script>

<style>
.counter {
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin: auto;
	max-width: 250px;
}
</style>
