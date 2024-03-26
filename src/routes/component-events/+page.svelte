<script>
	import Inner from './Inner.svelte';

	function handleMessage(event) {
		alert(event.detail.text);
	}
</script>

<div>
	<Inner on:message={handleMessage} />
</div>
<!-- You can also try changing the event name 
to something else. For instance, 
change dispatch('message', {...}) to 
dispatch('greet', {...}) in Inner.svelte 
and change the attribute name from on:message to 
on:greet in App.svelte. -->