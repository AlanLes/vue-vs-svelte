<script setup>
defineProps({
	modelValue: {
		type: [Number, String],
		default: () => '',
	}
});
</script>

<template>
	<label :for="$attrs.name" class="text-sm text-green-800 mb-2">
		<slot>Label</slot>
		<slot name="control" v-bind="{modelValue: modelValue}">
			<input
				v-bind="{...$attrs}"
				:id="$attrs.name"
				v-model="modelValue"
				class="w-full px-4 py-2 mt-1 font-semibold rounded-xl border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
			>
		</slot>
	</label>
</template>
