<script>
    import { goto } from "$app/navigation";
    import Iscritto from "./buttons/Iscritto.svelte";
    import Iscriviti from "./buttons/Iscriviti.svelte";
    import { isLogged } from "$lib/store/index.svelte.js";
    import {page} from '$app/stores';
    import { setClickedItem } from "$lib/store/index.svelte.js";
	import { on } from "svelte/events";
	import { onMount } from "svelte";
    
    export let nomeCanale = "Nome Canale";
    export let username = "@username";
    export let immagineCanale = "https://via.placeholder.com/80";
    export let iscritti = "0 iscritti";
    export let descrizione = "Descrizione del canale";
    export let idCanale = $page.params.slug;
   

    let iscrizioni = JSON.parse(localStorage.getItem("iscrizioni")) || [];
    let logged = isLogged(); 
    let isSubscribed = iscrizioni.includes(idCanale) && logged;
    let ComponentIscrizione = isSubscribed ? Iscritto : Iscriviti;

    function handleClick() {
        setClickedItem("canale");
        goto(`/canale/${idCanale}`);
    }

    function toggleIscrizione() {
        if (!logged) {
            alert("Devi essere loggato per iscriverti!");
            return;
        }

        iscrizioni = JSON.parse(localStorage.getItem("iscrizioni")) || [];
        isSubscribed = iscrizioni.includes(idCanale) && logged;
        
        if (isSubscribed) {
            // Disiscrizione
            iscrizioni = JSON.parse(localStorage.getItem("iscrizioni")) || [];
            iscrizioni = iscrizioni.filter(id => id !== idCanale);
            localStorage.setItem("iscrizioni", JSON.stringify(iscrizioni));
            isSubscribed = false;
            ComponentIscrizione = Iscriviti;
        } else {
            // Iscrizione
            iscrizioni = JSON.parse(localStorage.getItem("iscrizioni")) || [];
            iscrizioni.push(idCanale);
            localStorage.setItem("iscrizioni", JSON.stringify(iscrizioni));
            isSubscribed = true;
            ComponentIscrizione = Iscritto;
        }
    }
    onMount(()=>{
        isSubscribed = iscrizioni.includes(idCanale) && logged;
    })

</script>

<div class="banner-canale">
    <img class="canale-immagine" onclick={handleClick} src={immagineCanale} alt="Logo Canale" />
    <div class="canale-info" onclick={handleClick}>
        <h3 class="nome-canale">{nomeCanale}</h3>
        <p class="dettagli-canale">{username} · {iscritti}</p>
        <p class="descrizione-canale">{descrizione}</p>
    </div>
    <div class="azioni-canale" onclick={toggleIscrizione}>
        <svelte:component this={ComponentIscrizione} />
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
