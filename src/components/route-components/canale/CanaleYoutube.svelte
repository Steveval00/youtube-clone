<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import BannerCanale from "../../ui/BannerCanale.svelte";
    import VideoCard from "../../ui/VideoCard.svelte";
    // Importa le funzioni dal tuo file di servizio
    import { fetchChannelDetails, fetchChannelVideos, fetchChannelCommunityPosts } from "$lib/utils/mockup.js";
    import ChannelVideos from "../../ui/ChannelVideos.svelte";
	import { PUBLIC_YOUTUBE_API_KEY } from "$env/static/public";


    const API_KEY = PUBLIC_YOUTUBE_API_KEY;

    let activeTab = "video";
    let videos = [];
    let communityPosts = [];
    let idCanale = $page.params.slug;
    let canale = {};
    let isLoading = true;
    let isLoadingVideos = false;
    let isLoadingCommunity = false;
  
    onMount(() => {
        caricaCanale();
        caricaVideo();
        caricaCommunity();
    });
  
    async function caricaCanale() {
        try {
            const details = await fetchChannelDetails(idCanale, API_KEY);
            canale = {
                nome: details.snippet.title,
                username: details.snippet.customUrl,
                immagine: details.snippet.thumbnails.default.url,
                iscritti: `${Number(details.statistics.subscriberCount).toLocaleString()} iscritti`,
                descrizione: details.snippet.description,
                id: details.id,
            };
        } catch (error) {
            console.error("Errore nel caricamento del canale:", error);
        } finally {
            isLoading = false;
        }
    }
  
    async function caricaVideo() {
        isLoadingVideos = true;
        try {
            videos = await fetchChannelVideos(idCanale);
        } catch (error) {
            console.error("Errore nel caricamento dei video:", error);
        } finally {
            isLoadingVideos = false;
        }
    }
  
    async function caricaCommunity() {
        isLoadingCommunity = true;
        try {
            communityPosts = await fetchChannelCommunityPosts(idCanale);
        } catch (error) {
            console.error("Errore nel caricamento dei post community:", error);
        } finally {
            isLoadingCommunity = false;
        }
    }
  
    function setTab(tab) {
        activeTab = tab;
    }
  </script>
  
  <div class="channel-page">
    <div class="channel-header">
        {#if isLoading}
        <div class="loading-container">
            <div class="loading-spinner"></div>
        </div>
        {:else}
            <BannerCanale
                nomeCanale={canale.nome}
                username={canale.username}
                immagineCanale={canale.immagine}
                iscritti={canale.iscritti}
                descrizione={canale.descrizione}
                idCanale={idCanale}
            />
        {/if}
    </div>
  
    <div class="tab-bar">
        <div class="tab" class:active={activeTab === "video"} on:click={() => setTab("video")}>Video</div>
        <div class="tab" class:active={activeTab === "community"} on:click={() => setTab("community")}>Community</div>
        <div class="tab" class:active={activeTab === "info"} on:click={() => setTab("info")}>Informazioni</div>
    </div>
  
    {#if activeTab === "video"}
        {#if isLoadingVideos}
            <p>Caricamento video...</p>
        {:else}
            <ChannelVideos data={{ videos }} />
        {/if}
    {/if}
  
    {#if activeTab === "community"}
      {#if isLoadingCommunity}
        <p>Caricamento post community...</p>
      {:else}
        {#if communityPosts.length === 0}
          <p>Nessun post community disponibile.</p>
        {:else}
          <ul>
            {#each communityPosts as post}
              <li>{post.text}</li>
            {/each}
          </ul>
        {/if}
      {/if}
    {/if}
  
    {#if activeTab === "info"}
      <p>{canale.descrizione}</p>
    {/if}
  </div>
  
  <style>


.loading-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh; /* Altezza schermo intero */
	background-color: #f9f9f9; /* Sfondo opzionale */
}

/* Rotella di caricamento */
.loading-spinner {
	width: 50px;
	height: 50px;
	border: 5px solid #ddd; /* Colore del bordo esterno */
	border-top: 5px solid #007bff; /* Colore del bordo superiore (animato) */
	border-radius: 50%; /* Rotella circolare */
	animation: spin 1s linear infinite; /* Animazione rotazione */
}

/* Definizione dell'animazione di rotazione */
@keyframes spin {
	0% {
		transform: rotate(0deg); /* Partenza */
	}
	100% {
		transform: rotate(360deg); /* Rotazione completa */
	}
}


    .channel-page {
        font-family: Arial, sans-serif;
        color: #000;
        background-color: #fff;
        padding: 20px;
        margin: 0 auto;
        width: 70%;
    }
  
    .tab-bar {
        display: flex;
        justify-content: center;
        gap: 30px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ddd;
        padding-bottom: 10px;
    }
  
    .tab {
        cursor: pointer;
        font-size: 1rem;
        font-weight: bold;
        padding: 5px 10px;
        color: #555;
    }
  
    .tab.active {
        color: #000;
        border-bottom: 2px solid #000;
    }
  </style>
  