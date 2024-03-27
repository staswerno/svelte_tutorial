<script>
	let name = 'world';
</script>

<div>
    <input bind:value={name} />

    <h1>Hello {name}!</h1>
</div>

<!-- As a general rule, data flow in Svelte is top down 
— a parent component can set props on a child component, 
and a component can set attributes on an element, 
but not the other way around. 

Sometimes it's useful to break that rule. Take the case 
of the <input> element in this component — we could add 
an on:input event handler that sets the value of name to 
event.target.value, but it's a bit... boilerplatey.

Check the end of this page to see what that would look like.

In traditional top-down data flow (like in React), parent 
components pass properties (props) down to their child components. 
If a child component wants to communicate back up to the parent, 
it has to use a function passed down from the parent (like an event handler).

In this example, name is a piece of state in the component. The input
element displays this state. When you type into the input field, the 
on:input event handler updates the name state with the new value. This 
is a form of bottom-up communication, because the input (child) is 
updating the name (parent).

Instead we use bind:value, which means that not only will 
changes to the value of name update the input value, but 
changes to the input value will update name -->

<!-- 
"boilerplaty" code

<script>
	let name = 'world';

	function handleName() {
		name = event.target.value
	}
	
</script>

<input value={name} on:input={handleName}/>

<h1>Hello {name}!</h1> 
-->
