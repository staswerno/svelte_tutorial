<script>
	import Outer from './Outer.svelte';

	function handleMessage(event) {
		alert(event.detail.text);
	}
</script>

<!-- component events don't bubble. if you want to 
listen to an event on some deeply nested component, 
the intermediate components must forward the event -->

<Outer on:message={handleMessage} />