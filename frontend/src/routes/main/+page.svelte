<script lang="ts">
	import TextBlock from '$lib/components/blocks/TextBlock.svelte';
	import { blocksStore } from '$lib/stores/blocks';
	let { data } = $props();
	
	let blocks = $derived($blocksStore);
</script>

<div class="min-h-screen flex flex-col">
	<h1 class="text-xl mb-4 font-bold text-center">Welcome, {data.username}!</h1>

	<div class="blocks-container flex-1">
		{#each blocks as block (block.id)}
			{#if block.type === 'text'}
				<TextBlock />
			{/if}
		{/each}
	</div>
</div>
