<script>
    let name = 'THREE BODY PROBLEM';
    let src = 'https://media.gq-magazine.co.uk/photos/63bee87a57e25ad39c962d73/16:9/w_1280,c_limit/The-three-body-problem-hp.jpg';
</script>

<h1>{name.toLowerCase()} themed svelte tutorial</h1>
<img src={src} alt="{name.toLowerCase()} artwork 1">
<!-- if the src variable is src, this can be written as: -->
<img {src} alt="{name.toLowerCase()} artwork 2">