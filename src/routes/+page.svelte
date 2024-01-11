<script>
    import Nested from "./Nested.svelte";
    let name = 'THREE BODY PROBLEM';
    let src = 'https://media.gq-magazine.co.uk/photos/63bee87a57e25ad39c962d73/16:9/w_1280,c_limit/The-three-body-problem-hp.jpg';
    let string = 'this string contains <strong>html</strong> tags';
</script>

<h1>{name.toLowerCase()} themed svelte tutorial</h1>

<!-- attributes can be dynamic -->
<!-- svelte will give a11y warning in case of no alt -->
<img src={src} alt="{name.toLowerCase()} artwork 1">

<!-- if the src variable name is src, this can be written in shorthand: -->
<img {src} alt="{name.toLowerCase()} artwork 2">

<p>this content is from this component</p>

<!-- always capitalise component names to distinguish from html elements -->
<Nested />

<p>{@html string}</p>

<!-- styling is scoped to the component -->
<style>
    h1 {
        color: midnightblue;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    p {
        color: midnightblue;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    img {
        width: 100%;
        height: auto;
    }
</style>