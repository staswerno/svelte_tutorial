<script>
	let m = { x: 0, y: 0 };

	function handleMove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

<div on:pointermove={handleMove}>
	the pointer is at {m.x} x {m.y}
  <!--
Here is the same function declared inline:
<div on:pointermove={(e) => {m = {x: e.clientX, y: e.clientY}}}>
	The pointer is at {m.x} x {m.y}
</div>
-->
  <br /><br />
  <h4>event modifiers</h4>
  <p><code>once</code> modifier:</p>
  <button on:click|once={() => alert('clicked')}>
    click me
  </button>
  <p>other modifiers include:</p>
  <ol>
    <li><code>preventDefault</code> — calls <code>event.preventDefault()</code> before running the handler. Useful for client-side form handling, for example.</li>
    <li><code>stopPropagation</code> — calls <code>event.stopPropagation()</code>, preventing the event reaching the next element</li>
    <li><code>passive</code> — improves scrolling performance on touch/wheel events (Svelte will add it automatically where it's safe to do so)</li>
    <li><code>nonpassive</code> — explicitly set <code>passive: false</code></li>
    <li><code>capture</code> — fires the handler during the capture phase instead of the bubbling phase</li>
    <li><code>once</code> — remove the handler after the first time it runs</li>
    <li><code>self</code> — only trigger handler if event.target is the element itself</li>
    <li><code>trusted</code> — only trigger handler if event.isTrusted is true, meaning the event was triggered by a user action rather than because some JavaScript called element.dispatchEvent(...)</li>
  </ol>
</div>

<!-- You can chain modifiers together, e.g. on:click|once|capture={...}. -->

<style>
	div {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		padding: 1rem;
    background-color: palegoldenrod;
    font-family: Arial, Helvetica, sans-serif
	}
</style>
