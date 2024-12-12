<script>
    import { goto } from "$app/navigation";
    import Clip from "./buttons/Clip.svelte";
    import Condividi from "./buttons/Condividi.svelte";
    import Dots from "./buttons/Dots.svelte";
    import Download from "./buttons/Download.svelte";
    import Iscritto from "./buttons/Iscritto.svelte";
    import Iscriviti from "./buttons/Iscriviti.svelte";
    import Like from "./buttons/Like.svelte";
    import Liked from "./buttons/Liked.svelte";
    import { salvaVideoPiaciuto, azioneIscrizione } from "$lib/backend/index.js";
    import { isLogged } from "$lib/store/index.svelte.js";
	import Dislike from "./buttons/Dislike.svelte";
    import { setClickedItem } from "$lib/store/index.svelte.js";
	

    // Props ricevuti dalla pagina principale
    export let videoId;
    export let canaleId;
    export let nomeCanale;
    export let iscritti;
    export let logoCanale;
    export let numeroLike=120;

    // Stato locale per gestione dinamica
    let videoPiaciuti = JSON.parse(localStorage.getItem("videoPiaciuti")) || [];
    let ComponentLike = videoPiaciuti.includes(videoId) && isLogged() ? Liked : Like;

    let iscrizioni = JSON.parse(localStorage.getItem("iscrizioni")) || [];
    let ComponentIscrizione =
        iscrizioni.includes(canaleId) && isLogged() ? Iscritto : Iscriviti;

    function handleClick() {
        setClickedItem("canale");
        goto(`/canale/${canaleId}`);
    }

    function toggleLike() {
        if (!isLogged()) {
            alert("Devi essere loggato per poter mettere mi piace!");
            return;
        }

        if (videoPiaciuti.includes(videoId)) {
            videoPiaciuti = videoPiaciuti.filter((id) => id !== videoId);
            localStorage.setItem("videoPiaciuti", JSON.stringify(videoPiaciuti));
            ComponentLike = Like;
        } else {
            videoPiaciuti.push(videoId);
            localStorage.setItem("videoPiaciuti", JSON.stringify(videoPiaciuti));
            ComponentLike = Liked;
        }
        
    }

    function toggleDislike(){
        if (!isLogged()) {
            alert("Devi essere loggato per poter togliere il mi piace!");
            return;
        }
        videoPiaciuti = JSON.parse(localStorage.getItem("videoPiaciuti")) || [];
        if (videoPiaciuti.includes(videoId)) {
            videoPiaciuti = videoPiaciuti.filter((id) => id !== videoId);
            localStorage.setItem("videoPiaciuti", JSON.stringify(videoPiaciuti));
            ComponentLike = Like;
        } 
    }

    function toggleIscrizione() {
        if (!isLogged()) {
            alert("Devi essere loggato per iscriverti!");
            return;
        }

        if (iscrizioni.includes(canaleId)) {
            iscrizioni = iscrizioni.filter((id) => id !== canaleId);
            localStorage.setItem("iscrizioni", JSON.stringify(iscrizioni));
            ComponentIscrizione = Iscriviti;
        } else {
            iscrizioni.push(canaleId);
            localStorage.setItem("iscrizioni", JSON.stringify(iscrizioni));
            ComponentIscrizione = Iscritto;
        }
        
    }
</script>

<div class="containerCanale">

    <div class="sinistra">
        <div on:click={handleClick}>
            <img class="logoCanale" src={logoCanale} alt="Logo Canale" />
        </div>

        <div class="containerInfoCanale" on:click={handleClick}>
            <h1 class="nomeCanale">{nomeCanale}</h1>
            <p class="iscritti">{iscritti} iscritti</p>
        </div>

        <div on:click={toggleIscrizione}>
            <svelte:component this={ComponentIscrizione} />
        </div>
    </div>

    <div class="containerBottoni">
        <div on:click={toggleLike}>
            <svelte:component this={ComponentLike} numeroLike={numeroLike} />
        </div>
        <div on:click={toggleDislike}><Dislike /></div>
        <Condividi />
        <Download />
        <Clip />
        <Dots />
    </div>
</div>

<style>
    .containerBottoni {
        
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .containerCanale {
        display: flex;
        align-items: center;
        background-color: #fff;
        padding: 16px;
        max-width: 1550px;
        width: 67%;
        margin: 0 auto;
        margin-top: -0.5%;
        margin-left: 5.5%;

        flex-wrap: wrap;
        justify-content: space-between;
    }

    .sinistra {
        display: flex;
        align-items: center;
    }

    .logoCanale {
        cursor: pointer;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-right: 16px;
    }
    .containerInfoCanale {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 1.3rem;
    }
    .nomeCanale {
        font-size: 18px;
        font-weight: 500;
        margin: 0;
        color: #030303;
    }
    .iscritti {
        font-size: 14px;
        font-weight: 400;
        color: #606060;
        margin: 4px 0 0;
    }
</style>
