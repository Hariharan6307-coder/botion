<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import AddButton from '$lib/components/AddButton.svelte';

	let { children } = $props();
	import "../app.css";
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Top Navigation Bar -->
<div class="fixed top-0 left-0 right-0 h-20 bg-background flex items-center justify-between px-4 z-50">
    <button class="p-2 hover:bg-primary rounded transition-colors cursor-pointer">
        <img src="/icons/menu-burger.png" alt="Menu" class="w-6 h-6" />
    </button>
    
    <button class="p-2 hover:bg-primary rounded transition-colors cursor-pointer" title="Search for your page">
        <img src="/icons/search.png" alt="Search" class="w-6 h-6" />
    </button>
</div>

<div class="pt-28">
	{@render children()}
</div>

<AddButton />
