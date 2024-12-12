<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores"; // Per accedere all'URL corrente
    import VideoCard from "../../../components/ui/VideoCard.svelte";
    import Iscriviti from "../../../components/ui/buttons/Iscriviti.svelte";
    import Iscritto from "../../../components/ui/buttons/Iscritto.svelte";
    import Like from "../../../components/ui/buttons/Like.svelte";
    import {goto} from "$app/navigation";
    import {cercaVideo} from "$lib/utils/mockup.js";

    export let data; // Dati inizialmente caricati tramite `load`

    let { ytId, videos } = data; // Estrai ytId e i video iniziali
    let isLoading = false; // Stato di caricamento dei video
    console.log(data);
    // Funzione per aggiornare i video dinamicamente
    const aggiornaVideo = async (query) => {
        
        try {
            isLoading = true;
           
            videos = await cercaVideo( query, data.ytId);
            
        } catch (error) {
            console.error("Errore durante la ricerca:", error);
        } finally {
            isLoading = false; // Termina lo stato di caricamento
        }
        //goto(`/cerca/${query}`);
    };

    // Reagisci ai cambiamenti del parametro `q` nell'URL
    $: {
        const query = $page.params.slug; // Ottieni la query dall'URL
        aggiornaVideo(query); // Aggiorna i video ogni volta che la query cambia
    }
</script>

<div class="videos-container">
    {#if isLoading}
        <p>Caricamento in corso...</p>
    {:else if videos.length > 0}
        <!-- Itera sui video e passa gli attributi a VideoCard -->
        {#each videos as video}
            <a href="/guarda/{video.id.videoId}">
                <VideoCard
                    thumbnail={`https://i.ytimg.com/vi/${video.id.videoId}/maxresdefault.jpg`}
                    title={video.snippet.title}
                    channelName={video.snippet.channelTitle}
                    views={video.views}
                    uploaded={video.snippet.publishTime}
                />
            </a>
        {/each}
    {:else}
        <p>Nessun risultato trovato per questa ricerca.</p>
    {/if}
</div>

<br><br>

<style>
    .videos-container {
        margin: 0 auto;
        margin-left: 14%;
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: left;
        padding: 20px;
    }

    a, a:visited, a:hover, a:active, a:focus {
        text-decoration: none;
    }
</style>
