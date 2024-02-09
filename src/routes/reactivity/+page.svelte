<script>
	let count = 0;

	function increment() {
		count += 1;
	} 

    // there is nothing calling this like a function
    // so the $ tells it it should "react" when a value changes
    $: doubled = count * 2;

    $: {
        console.log(`count is ${count}`);
        console.log(`doubled is ${doubled}`);
    }

    $: if (count >= 10) {
        console.log(`kitten death count is dangerously high you monster!`);
    }

    let numbers = [1, 2, 3];

    function addNumber() {
        // svelte's reactivity is triggered by assignment
        // so this alone won't trigger a re-render
        // numbers.push(numbers.length + 1);

        // you can get around it by using a redundant assignment:
        // numbers = numbers;

        // or, using the spread operator:
        numbers = [...numbers, numbers.length + 1];

        // also works for pop, shift, unshift, splice, etc.

        // Assignments to properties of arrays and objects
        // e.g. obj.foo += 1 or array[i] = x
        // work the same way as assignments to the values themselves:
        // numbers[numbers.length] = numbers.length + 1;
        // note that this method works because the length of the array
        // will always be one more than the index of the last element
     
        // RULE: updated variable name must appear on the left
        // of the assignment operator. the following won't work,
        // because your are accessing properties of obj, but not
        // obj itself:

        // const obj = { foo: { bar: 1 } };
        // const foo = obj.foo;
        // foo.bar = 2;

    }

    $: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);
</script>

<button on:click={increment}>
	# kittens killed at your behest: {count}
	{count === 1 ? 'kitten' : 'kittens'}
</button>

<p>{count} doubled is {doubled}</p>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
    add a number
</button>
