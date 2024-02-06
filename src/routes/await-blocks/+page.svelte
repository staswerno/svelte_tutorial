<script>
	import { getRandomNumber } from './utils.js';

	let promise = getRandomNumber();

	function handleClick() {
		promise = getRandomNumber();
	}
	// test github connection
</script>

<button on:click={handleClick}>
	generate random number
</button>

<p>...waiting</p>