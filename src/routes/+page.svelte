<script>
    import Nested from "./Nested.svelte";
    let name = 'SVELTE';
    let src = 'https://media.gq-magazine.co.uk/photos/63bee87a57e25ad39c962d73/16:9/w_1280,c_limit/The-three-body-problem-hp.jpg';
    let string = 'this string contains <strong>html</strong> tags';
    let htmlTestInput = '<input type="text" value="this is a test">'
</script>

<h1>{name.toLowerCase()} tutorial</h1>

<a href="/reactivity">reactivity</a>
<a href="/props">props</a>
<a href="/conditionals">conditionals</a>
<a href="/each-blocks">each blocks</a>
<a href="/keyed-each-blocks">keyed each blocks</a>
<a href="/await-blocks">await blocks</a>

<!-- attributes can be dynamic -->
<!-- svelte will give a11y warning in case of missing alt -->
<img src={src} alt="{name.toLowerCase()} artwork 1">

<!-- if the src variable name is also src, this can be written in shorthand: -->
<img {src} alt="{name.toLowerCase()} artwork 2">

<p>this content is from this component</p>

<!-- always capitalise component names to distinguish from html elements -->
<Nested />

<p>{@html string}</p>
{@html htmlTestInput}

<!-- styling is scoped to the component -->
<style>
    h1, p {
        color: midnightblue;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    img {
        height: 400px;
        display: block;
    }
    a {
        padding: 20px 20px 20px 0px;
        display: inline-block;
    }
</style>