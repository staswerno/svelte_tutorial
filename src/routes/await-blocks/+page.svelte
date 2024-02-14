<script>
	import { error } from '@sveltejs/kit';
import { getRandomNumber } from './utils.js';

	let promise = getRandomNumber();

	function handleClick() {
		promise = getRandomNumber();
	}
</script>

<button on:click={handleClick}>
	generate random number
</button>

{#await promise}
	<p>...waiting</p>
{:then number}
	<p>the number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<!--
	try adding an API endpoint when the time comes
to test this properly
use the following code as a baseline:

const express = require('express');
const app = express();
const port = 3000;

app.get('/random-number', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 101); // generates a random number between 0 and 100
    res.send(randomNumber.toString());
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
-->