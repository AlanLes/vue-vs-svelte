<script setup>
import {ref} from 'vue';
import Counter from './components/Counter.vue';

const count = ref(0);
</script>

<template>
	<Counter v-model:count="count" />
</template>

<style>
* {
	font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
