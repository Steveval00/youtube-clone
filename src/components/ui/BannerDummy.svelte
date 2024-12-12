<script>
    import { goto } from "$app/navigation";
    import Iscritto from "./buttons/Iscritto.svelte";
    import Iscriviti from "./buttons/Iscriviti.svelte";
    import { isLogged } from "$lib/store/index.svelte.js";

    export let nomeCanale = "Nome Canale";
    export let username = "@username";
    export let immagineCanale = "https://via.placeholder.com/80";
    export let iscritti = "0 iscritti";
    export let descrizione = "Descrizione del canale";
    export let idCanale = "idCanale";
   

    
    
</script>

<div class="banner-canale">
    <img class="canale-immagine" src={immagineCanale} alt="Logo Canale" />
    <div class="canale-info" >
        <h3 class="nome-canale">{nomeCanale}</h3>
        <p class="dettagli-canale">{username} · {iscritti}</p>
        <p class="descrizione-canale">{descrizione}</p>
    </div>
    
</div>

<style>
    .banner-canale {
        cursor: pointer;
        display: flex;
        align-items: flex-start;
        padding: 15px;
        border-bottom: 1px solid #ddd;
        gap: 20px;
    }

    .canale-immagine {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
    }

    .canale-info {
        flex: 1;
    }

    .nome-canale {
        margin: 0;
        font-size: 1rem;
        font-weight: bold;
    }

    .dettagli-canale {
        margin: 5px 0;
        color: #555;
        font-size: 0.9rem;
    }

    .descrizione-canale {
        margin: 5px 0;
        font-size: 0.9rem;
        color: #666;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .azioni-canale {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 3%;
    }
</style>
