<script lang="ts">
    let isEditing = $state(false);
	let textContent = $state("");
	let textareaElement: HTMLTextAreaElement;
	
	function handleDoubleClick() {
		isEditing = true;
		setTimeout(() => {
			textareaElement?.focus();
			adjustHeight();
		}, 0);
	}
	
	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			isEditing = false;
		}
	}
	
	function handleBlur() {
		isEditing = false;
	}
	
	function handleInput() {
		adjustHeight();
	}
	
	function adjustHeight() {
		if (textareaElement) {
			textareaElement.style.height = 'auto';
			textareaElement.style.height = textareaElement.scrollHeight + 'px';
		}
	}
</script>

<div class="m-4">
	{#if isEditing}
		<textarea 
			bind:this={textareaElement}
			bind:value={textContent}
			onkeydown={handleKeyDown}
			onblur={handleBlur}
			oninput={handleInput}
			class="p-0 bg-background text-text w-full resize-none overflow-hidden border-0 focus:outline-none"
			rows="1"
		></textarea>
	{:else}
		<p ondblclick={handleDoubleClick} class="cursor-text whitespace-pre-wrap break-words" class:italic={textContent === ""} class:opacity-75={textContent === ""}>
			{textContent || "Enter your text here"}
		</p>
	{/if}
</div>