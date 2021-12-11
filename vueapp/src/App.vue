<script setup>
import {ref} from 'vue';
import Counter from './components/Counter.vue';
import Form from './components/Form.vue';

const count = ref(0);
</script>

<template>
	<Counter v-model:count="count" />
	<hr class="my-5">
	<Form />
</template>

<style>
* {
	font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
