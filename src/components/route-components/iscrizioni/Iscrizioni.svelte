<script>
    import BannerCanale from "../../ui/BannerCanale.svelte";
    import { fetchChannelDetails } from "$lib/utils/mockup.js";
    import { onMount } from "svelte";
	import { PUBLIC_YOUTUBE_API_KEY } from "$env/static/public";

    const API_KEY = PUBLIC_YOUTUBE_API_KEY;
    let canali = [];

    // Legge le iscrizioni da localStorage
    let iscrizioni = JSON.parse(localStorage.getItem("iscrizioni")) || [];

    async function caricaIscrizioni() {
        try {
            const canaliPromises = iscrizioni.map(id => fetchChannelDetails(id, API_KEY));
            const detailsList = await Promise.all(canaliPromises);

            canali = detailsList.map(details => ({
                nome: details.snippet.title,
                username: details.snippet.customUrl,
                immagine: details.snippet.thumbnails.default.url,
                iscritti: `${Number(details.statistics.subscriberCount).toLocaleString()} iscritti`,
                descrizione: details.snippet.description,
                id: details.id
            }));
        } catch (error) {
            console.error("Errore nel caricamento dei dettagli del canale:", error);
        }
    }



    onMount(() => {
        caricaIscrizioni();
    });

    
</script>

<div class="containerCanali">
    <h1 align="center">Tutte le iscrizioni</h1>
    {#if canali.length > 0}
        {#each canali as canale}
        <div>
            <BannerCanale
                nomeCanale={canale.nome}
                username={canale.username}
                immagineCanale={canale.immagine}
                iscritti={canale.iscritti}
                descrizione={canale.descrizione}
                idCanale={canale.id}
            />
        </div>
        {/each}
    {:else}
        <p>Nessuna iscrizione trovata.</p>
    {/if}
</div>

<style>
    .containerCanali {
        width: 40%;
        align-items: center;
        align-content: center;
        margin: 0 auto;
    }

    .h1 {
        margin: 0 auto;
        padding: 0;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
</style>
