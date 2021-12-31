<script setup>
import {computed, onMounted} from 'vue';
import {useUsersStore} from '../store';

const usersStore = useUsersStore();
const users = computed(() => usersStore.users);

onMounted(() => {
	usersStore.fetchUsers();
})
</script>

<template>
	<ul class="flex flex-col max-w-sm m-auto px-5 mt-5 gap-2 divide-y divide-green-100">
		<li v-for="user in users" :key="user.id" class="py-4 flex items-center">
			<img :src="user.avatar" alt="Avatar" class="h-20 w-20 rounded-full">
			<div class="ml-3">
				<p class="font-light text-green-900">{{ user.firstName }} {{ user.lastName }}, {{ user.age }}yo</p>
				<a class="text-sm text-green-500" :href="`mailto:${user.email}`">{{ user.email }}</a>
			</div>
		</li>
	</ul>
</template>
