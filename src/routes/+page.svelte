<script>
    import Nested from "./Nested.svelte";
    let name = 'SVELTE';
    let src = 'https://media.gq-magazine.co.uk/photos/63bee87a57e25ad39c962d73/16:9/w_1280,c_limit/The-three-body-problem-hp.jpg';
    let string = 'this string contains <strong>html</strong> tags';
    let htmlTestInput = '<input type="text" value="this is a test">'
</script>

<body>
    <div class="main">
        <h1>{name.toLowerCase()} tutorial</h1>

        <a href="/reactivity">reactivity</a>
        <a href="/props">props</a>
        <a href="/conditionals">conditionals</a>
        <a href="/each-blocks">each blocks</a>
        <a href="/keyed-each-blocks">keyed each blocks</a>
        <a href="/await-blocks">await blocks</a>
        <a href="/events">events</a>
        <a href="/component-events">component events</a>
        <a href="/event-forwarding">event forwarding</a>
        <a href="/dom-event-forwarding">dom event forwarding</a>

        <!-- attributes can be dynamic -->
        <!-- svelte will give a11y warning in case of missing alt -->
        <img src={src} alt="{name.toLowerCase()} artwork 1">

        <!-- if the src variable name is also src, this can be written in shorthand: -->
        <!-- <img {src} alt="{name.toLowerCase()} artwork 2"> -->

        <p>this content is from this component</p>

        <!-- always capitalise component names to distinguish from html elements -->
        <Nested />

        <p>{@html string}</p>
        {@html htmlTestInput}
    </div>
</body>


<!-- styling is scoped to the component -->
<style>
    :global(body) {
        text-align: center;
        max-width: 100vw; 
        display: flex;
        justify-content: center; 
        color: midnightblue;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    .main {
        max-width: 800px;
    }
    img {
        width: 100%;
        display: block;
    }
    a {
        padding: 10px 10px 10px 0px;
        display: inline-block;
    }
</style>