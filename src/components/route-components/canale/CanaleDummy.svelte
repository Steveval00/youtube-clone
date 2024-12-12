<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import BannerCanale from "../../ui/BannerCanale.svelte";
	import BannerDummy from "../../ui/BannerDummy.svelte";

  let activeTab = "posts";
  let posts = [];
  let user = {};
  let isLoading = true;
  let isLoadingPosts = false;

  let idCanale = $page.params.slug; // Supponiamo che la route sia /canaleDummy/:slug

  async function fetchUser(userId) {
      const res = await fetch(`https://dummyjson.com/users/${userId}`);
      
      if (!res.ok) {
          throw new Error("Utente non trovato");
      }
      return await res.json();
  }
 
  async function fetchUserPosts(userId) {
      const res = await fetch(`https://dummyjson.com/posts/user/${userId}`);
      if (!res.ok) {
          throw new Error("Post non trovati");
      }
      const data = await res.json();
      return data.posts;
  }

  onMount(() => {
      caricaCanale();
      caricaPosts();
  });

  async function caricaCanale() {
      try {
          const details = await fetchUser(idCanale);
          console.log(details);
          user = {
              nome: `${details.firstName} ${details.lastName}`,
              username: details.username,
              immagine: details.image,
              // Non esiste un concetto di iscritti reali in dummyjson, potremmo inventare o lasciare vuoto
              iscritti: `ID Utente: ${details.id}`,
              descrizione: `Email: ${details.email}
Età: ${details.age}
Sesso: ${details.gender}
Azienda: ${details.company.title} (${details.company.department})
Telefono: ${details.phone}
              `,
              id: details.id
          };
      } catch (error) {
          console.error("Errore nel caricamento dell'utente:", error);
      } finally {
          isLoading = false;
      }
  }

  async function caricaPosts() {
      isLoadingPosts = true;
      try {
          posts = await fetchUserPosts(idCanale);
      } catch (error) {
          console.error("Errore nel caricamento dei post:", error);
      } finally {
          isLoadingPosts = false;
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
          <BannerDummy
              nomeCanale={user.nome}
              username={user.username}
              immagineCanale={user.immagine}
              iscritti={user.iscritti}
              descrizione={user.descrizione}
              idCanale={user.id}
          />
      {/if}
  </div>

  <div class="tab-bar">
      <div class="tab" class:active={activeTab === "posts"} on:click={() => setTab("posts")}>Posts</div>
      <div class="tab" class:active={activeTab === "info"} on:click={() => setTab("info")}>Informazioni</div>
  </div>

  {#if activeTab === "posts"}
      {#if isLoadingPosts}
          <p>Caricamento post...</p>
      {:else}
          {#if posts.length === 0}
              <p>Nessun post disponibile.</p>
          {:else}
              <ul>
                  {#each posts as post}
                      <li>
                          <strong>{post.title}</strong><br>{post.body}
                      </li>
                  {/each}
              </ul>
          {/if}
      {/if}
  {/if}

  {#if activeTab === "info"}
      <p class="descrizione">{user.descrizione}</p>
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



    .descrizione{
        
        white-space: pre-line; /* Interpreta le nuove righe (\n) */
        word-wrap: break-word; /* Aggiunge il wrapping automatico per evitare overflow */
        margin-left:2.5rem;
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
