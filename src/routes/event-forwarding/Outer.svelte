<script>
	import Inner from './Inner.svelte';
</script>

<!-- instead of writing another event dispatcher function
svelte has shorthand to simply forward the event.
so instead of: -->

<!-- 
    <script>
        import Inner from './Inner.svelte';
        import { createEventDispatcher } from 'svelte';

        const dispatch = createEventDispatcher();

        function forward(event) {
            dispatch('message', event.detail);
        }
    </script>

    <Inner on:message={forward}/> 
-->

<!-- we can have: -->

<Inner on:message/>
