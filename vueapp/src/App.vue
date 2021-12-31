<script setup>
import {ref} from 'vue';
import Counter from './components/Counter.vue';
import Form from './components/Form.vue';
import UsersList from './components/UsersList.vue';

const count = ref(0);
</script>

<template>
	<Counter v-model:count="count" />
	<hr class="my-5">
	<Form class="border rounded-2xl shadow-xl py-2" />
	<UsersList class="border rounded-2xl shadow-xl py-2 mb-5" />
</template>

<style>
* {
	font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
