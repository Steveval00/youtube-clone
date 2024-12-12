<script>
    export let descrizione = "Descrizione Video";
    export let views = "1,2mln";
    export let publishTime = "8 mesi fa)";
</script>
<div class="containerDescrizione">
    <p class="visualizzazioni">{views} visualizzazioni | {publishTime}</p>
    <p class="descrizione">{descrizione}</p>
</div>

<style>
    .containerDescrizione {
        
        margin-left: 6.5%;
        margin-top: 1%;
        margin-bottom: 1%;
        background-color: #F2F2F2;
        max-width: 65.5%;
        border-radius: 15px;
        padding: 1rem;
    }

    .visualizzazioni {
        font-size: 1em;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        color: #606060;
    }

    .descrizione {
        text-wrap: all;
        font-size: 1em;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        color: #606060;
        /* Limita a 2 linee con ellissi */
        display: -webkit-box;
        -webkit-line-clamp: 4; /* Numero di linee */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
