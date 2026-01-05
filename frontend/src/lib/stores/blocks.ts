import { writable } from 'svelte/store';

export type Block = {
	id: string;
	type: 'text' | 'toggle' | 'image' | 'page';
};

function createBlocksStore() {
	const { subscribe, update } = writable<Block[]>([]);

	return {
		subscribe,
		addBlock: (type: Block['type']) => {
			update(blocks => [...blocks, { id: crypto.randomUUID(), type }]);
		}
	};
}

export const blocksStore = createBlocksStore();
