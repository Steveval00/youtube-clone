<script>
    let parte1="You";
    let parte2="tube";
    export let titolo = parte1 + parte2;
</script>

<h1>{titolo}</h1>
<div class="container">
    <h2 class="prima">{parte1}</h2>
    <h2 class="seconda">{parte2}</h2>
</div>
<br>

<style>
    h1{
        text-align: center;
        font-size: 2rem;
        color: #282828;
    }
    h2.prima{
        color: #FF0000;
        display:inline;
        font-size: 10em;
    }
    h2.seconda{
        color: #282828;
        display:inline;
        font-size: 10em;
    }
    .container {
        margin: 0 auto;
     
        width: 100%;
        text-align: center;
        align-items: center;
        background-color: antiquewhite;
    }
</style>