<script>
	import Thing from './Thing.svelte';

	let things = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	];

	// creates a new array containg items from 
	// and including index 1 of the initial array
	// thus "removing" the item at index 0
	function handleClick() {
		things = things.slice(1);
	}
</script>

<div>
	<button on:click={handleClick}>
		Remove first thing
	</button>

	<!-- thing.id is the key, which tells svelte 
	how to figure out what to update when the
	values (name) change -->
	{#each things as thing (thing.id)}
		<Thing name={thing.name} />
	{/each}
</div>
