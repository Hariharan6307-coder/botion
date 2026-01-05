<script lang="ts">
	import { blocksStore } from '$lib/stores/blocks';
	
    let isMenuOpen = $state(false);
	let isClosing = $state(false);
	let menuElement: HTMLDivElement;
	let buttonElement: HTMLButtonElement;
	
	function toggleMenu() {
		if (isMenuOpen) {
			isClosing = true;
			setTimeout(() => {
				isMenuOpen = false;
				isClosing = false;
			}, 300);
		} else {
			isMenuOpen = true;
		}
	}
	
	function selectOption(option: string) {
		console.log('Selected:', option);
		
		// Add block based on option
		if (option === 'Text') {
			blocksStore.addBlock('text');
		}
		
		isClosing = true;
		setTimeout(() => {
			isMenuOpen = false;
			isClosing = false;
		}, 300);
	}
	
	function handleClickOutside(event: MouseEvent) {
		if (isMenuOpen && !isClosing && menuElement && buttonElement) {
			const target = event.target as Node;
			if (!menuElement.contains(target) && !buttonElement.contains(target)) {
				isClosing = true;
				setTimeout(() => {
					isMenuOpen = false;
					isClosing = false;
				}, 300);
			}
		}
	}
	
	$effect(() => {
		if (isMenuOpen) {
			document.addEventListener('click', handleClickOutside);
		}
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<!-- Add Menu -->
{#if isMenuOpen}
	<div bind:this={menuElement} class="fixed bottom-24 right-8 w-48 bg-primary rounded-lg shadow-xl z-50 overflow-hidden" class:animate-unroll={!isClosing} class:animate-roll={isClosing}>
		<div class="flex flex-col p-2">
			<button onclick={() => selectOption('Text')} class="px-4 py-3 text-left hover:bg-primary rounded transition-colors flex items-center gap-3">
				<img src="/icons/text.png" alt="Text" class="w-5 h-5" />
				Text
			</button>
			<button onclick={() => selectOption('Toggle')} class="px-4 py-3 text-left hover:bg-primary rounded transition-colors flex items-center gap-3">
				<img src="/icons/toggle.png" alt="Toggle" class="w-5 h-5" />
				Toggle
			</button>
			<button onclick={() => selectOption('Image')} class="px-4 py-3 text-left hover:bg-primary rounded transition-colors flex items-center gap-3">
				<img src="/icons/image.png" alt="Image" class="w-5 h-5" />
				Image
			</button>
			<button onclick={() => selectOption('New Page')} class="px-4 py-3 text-left hover:bg-primary rounded transition-colors flex items-center gap-3">
				<img src="/icons/newPage.png" alt="New Page" class="w-5 h-5" />
				New Page
			</button>
		</div>
	</div>
{/if}

<!-- Floating Add Button -->
<button bind:this={buttonElement} onclick={toggleMenu} class="fixed bottom-8 right-8 rounded-full shadow-lg z-50 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 active:translate-y-1 active:scale-110">
	<img src="/icons/add.png" alt="Add" class="w-8 h-8" />
</button>

<style>
	@keyframes unroll {
		from {
			max-height: 0;
			opacity: 0;
			transform: scaleY(0);
			transform-origin: bottom;
		}
		to {
			max-height: 20rem;
			opacity: 1;
			transform: scaleY(1);
			transform-origin: bottom;
		}
	}
	
	@keyframes roll {
		from {
			max-height: 20rem;
			opacity: 1;
			transform: scaleY(1);
			transform-origin: bottom;
		}
		to {
			max-height: 0;
			opacity: 0;
			transform: scaleY(0);
			transform-origin: bottom;
		}
	}
	
	.animate-unroll {
		animation: unroll 0.3s ease-out forwards;
	}
	
	.animate-roll {
		animation: roll 0.3s ease-in forwards;
	}
</style>

