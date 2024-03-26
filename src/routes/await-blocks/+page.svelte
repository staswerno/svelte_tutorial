<script>
import { error } from '@sveltejs/kit';
import { getRandomNumber } from './utils.js';

	let promise = getRandomNumber();

	function handleClick() {
		promise = getRandomNumber();
	}
</script>

<div>
	<button on:click={handleClick}>
		generate random number
	</button>

	{#await promise}
		<p>...waiting</p>
	{:then number}
		<p>the number is {number[0]}</p>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</div>

<!--
	Only the most recent promise is considered,
meaning you don't need to worry about race conditions.
-->

<!--
If you know that your promise can't reject,
you can omit the catch block.
You can also omit the first block if you don't
want to show anything until the promise resolves:
-->

<!--
{#await promise then number}
	<p>The number is {number}</p>
{/await}
-->
