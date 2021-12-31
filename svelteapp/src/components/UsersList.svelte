<script>
	import {onMount} from 'svelte';
  import {initFetchUsers, store} from '../store';

  onMount(() => {
		initFetchUsers();
	})
</script>

<ul class="flex flex-col max-w-sm m-auto px-5 mt-5 gap-2 divide-y divide-yellow-100 {$$props.class}">
	{#each $store.users as user}
		<li class="py-4 flex items-center">
			<img src="{user.avatar}" alt="Avatar" class="h-20 w-20 rounded-full">
			<div class="ml-3">
				<p class="font-light text-yellow-900">{user.firstName} {user.lastName}, {user.age}yo</p>
				<a class="text-sm text-yellow-500" href="{`mailto:${user.email}`}">{user.email}</a>
			</div>
		</li>
	{/each}
</ul>
