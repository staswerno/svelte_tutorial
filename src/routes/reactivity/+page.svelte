<script>
	let count = 0;

	function increment() {
		count += 1;
	} 

    $: doubled = count * 2;

    $: {
        console.log(`count is ${count}`);
        console.log(`doubled is ${doubled}`);
    }

    $: if (count >= 10) {
        console.log(`kitten death count is dangerously high you monster!`);
    }
</script>

<button on:click={increment}>
	# kittens killed at your behest: {count}
	{count === 1 ? 'kitten' : 'kittens'}
</button>

<p>{count} doubled is {doubled}</p>