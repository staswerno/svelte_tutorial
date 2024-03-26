<script>
	let count = 0;

	function increment() {
		count += 1;
	}
</script>

<div>
	<button on:click={increment}>
		Clicked {count}
		{count === 1 ? 'time' : 'times'}
	</button>

	{#if count > 10}
		<p>{count} is greater than 10</p>
	{:else if count < 6}
		<p>{count} is between 0 and 5</p>
	{:else}
		<p>{count} is between 6 and 10</p>
	{/if}
</div>
<!--
	A # character always indicates a block opening tag. 
	A / character always indicates a block closing tag. 
	A : character, as in {:else}, indicates a block continuation tag.
-->