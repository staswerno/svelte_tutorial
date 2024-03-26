<script>
	import BigRedButton from './BigRedButton.svelte';
	import horn from './horn.wav';

	const audio = new Audio();
	audio.src = horn;

	function handleClick() {
		audio.load();
		audio.play();
	}
</script>

<BigRedButton on:click={handleClick} />
