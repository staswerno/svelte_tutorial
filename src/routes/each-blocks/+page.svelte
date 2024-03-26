<script>
	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
	let selected = colors[0];
</script>

<div>
	<h1 style="color: {selected}">Pick a colour</h1>

	<div class="picker">
		<!-- rather than write a button for each color -->
		<!-- use an each block, like map in react. -->
		<!-- you can get current index as second argument -->
		{#each colors as color, i}
			<button
				aria-current={selected === color}
				aria-label="{color}"
				style="background: {color}"
				on:click={() => selected = color}
			>index = {i}</button>
		{/each}
		<!-- The expression (colors, in this case) can be any array
			or array-like object (i.e. it has a length property). 
			You can loop over generic iterables with each [...iterable].-->
	</div>
</div>

<style>
    * {
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

	h1 {
		transition: color 0.2s;
	}

	.picker {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-gap: 5px;
		max-width: 400px;
	}

	button {
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--color, #fff);
		transform: translate(-2px,-2px);
		filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.2));
		transition: all 0.1s;
	}

	button[aria-current="true"] {
		transform: none;
		filter: none;
		box-shadow: inset 3px 3px 4px rgba(0,0,0,0.2);
	}
</style>