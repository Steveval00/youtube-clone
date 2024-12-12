<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import VideoPlay from "../../../components/ui/VideoPlay.svelte";
    import Canale from "../../../components/ui/Canale.svelte";
    import TitoloVideo from "../../../components/ui/TitoloVideo.svelte";
    import DescrizioneVideo from "../../../components/ui/DescrizioneVideo.svelte";
    import CommentInput from "../../../components/ui/CommentInput.svelte";
    import Commento from "../../../components/ui/Commento.svelte";
    import { toggleMenu, isMenuOpen, setMenuOpen } from "$lib/store/index.svelte.js";
    import { fetchVideoDetails, fetchChannelDetails } from "$lib/utils/mockup.js";
    import { isLogged } from "$lib/store/index.svelte.js";
	import { PUBLIC_YOUTUBE_API_KEY } from "$env/static/public";

    let videoId = $page.params.idGuarda;
    let apiKey = PUBLIC_YOUTUBE_API_KEY; 

    let videoDetails = {};
    let channelDetails = {};
    let isLoading = true;

    // Stato del menu
    let oldMenuState;

    // Stato dei commenti
    let comments = []; // Lista dei commenti
    let users = []; // Lista degli utenti
    let currentPage = 1;
    const commentsPerPage = 20;

    // Ottieni l'utente corrente
    let currentUser = JSON.parse(localStorage.getItem("user"))?.username || "Guest";

    let iscrizioni = JSON.parse(localStorage.getItem("iscrizioni")) || [];
    let isUserLogged = isLogged() !== undefined;
    let isSubscribed = false; 
    //let inPlaylist = isLogged() && JSON.parse(localStorage.getItem("videoPiaciuti")).includes(videoId);



    // Funzione per generare una data casuale
    function randomDate() {
        const start = new Date(2020, 0, 1); // 1 Gennaio 2020
        const end = new Date();
        const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    async function fetchUser(userId) {
      const res = await fetch(`https://dummyjson.com/users/${userId}`);
      
      if (!res.ok) {
          throw new Error("Utente non trovato");
      }
      return await res.json();
  }

    async function fetchData() {
        try {
            // Ottieni i dettagli del video
            videoDetails = await fetchVideoDetails(videoId, apiKey);
            const channelId = videoDetails.snippet.channelId;

            // Ottieni i dettagli del canale
            channelDetails = await fetchChannelDetails(channelId, apiKey);

            // Determina se l'utente è iscritto
            $: isSubscribed = iscrizioni.includes(channelId);

            // Ottieni utenti casuali
            await fetchUsers();

            // Ottieni i commenti iniziali
            await fetchComments(currentPage);
        } catch (error) {
            console.error("Errore nel caricamento dei dati:", error);
        } finally {
            isLoading = false;
        }
    }

    async function fetchUsers() {
        try {
            const response = await fetch("https://dummyjson.com/users?limit=100");
            const data = await response.json();
            users = data.users;
        } catch (error) {
            console.error("Errore nel caricamento degli utenti:", error);
        }
    }

    async function fetchComments(page) {
    try {
        // Chiamata all'endpoint per i post
        const response = await fetch(
            `https://dummyjson.com/posts?limit=${commentsPerPage}&skip=${(page - 1) * commentsPerPage}`
        );
        const data = await response.json();
        console.log(data);

        // Recupera le informazioni degli utenti in modo asincrono
        const commentsWithUserInfo = await Promise.all(
            data.posts.map(async (post) => {
                // Recupera i dettagli dell'utente associato al post
                const user = await fetchUser(post.userId);

                // Ritorna l'oggetto commento con i dettagli utente arricchiti
                return {
                    id: post.id, // ID del post
                    userId: post.userId, // ID dell'utente
                    username: user.username || `User${post.userId}`, // Nome utente
                    timeAgo: randomDate(), // Data fittizia
                    commentText: post.body, // Testo del post
                    likes: post.reactions.likes || 0, // Numero di like dal post
                    replies: Math.floor(Math.random() * 10), // Valore casuale per le risposte
                    profilePicture: user?.image || `https://via.placeholder.com/40?text=U${post.userId}`, // Immagine profilo
                    isUserComment: user.username === currentUser // Flag per commenti dell'utente
                };
            })
        );

        // Aggiorna l'array globale `comments` con i nuovi dati
        comments = [...comments, ...commentsWithUserInfo];
    } catch (error) {
        console.error("Errore nel caricamento dei commenti:", error);
    }
}

    function addComment(commentText) {
        if (isUserLogged) {
            if (commentText.trim()) {
                const randomUser = {
                    username: currentUser,
                    image: "/icons/account.svg"
                };
                comments = [
                    {
                        id: comments.length + 1,
                        username: randomUser.username,
                        timeAgo: "Adesso",
                        commentText,
                        likes: 0,
                        replies: 0,
                        profilePicture: randomUser.image,
                        isUserComment: true
                    },
                    ...comments
                ];
            }
        } else {
            alert("Devi essere loggato per commentare");
        }
    }

    function removeComment(id) {
        comments = comments.filter(comment => comment.id !== id);
    }

    // Gestione eventi iscrizioni
    function handleSubscribe(event) {
        const { id } = event.detail;
        if (!iscrizioni.includes(id)) {
            iscrizioni.push(id);
            localStorage.setItem("iscrizioni", JSON.stringify(iscrizioni));
            isSubscribed = true;
        }
    }

    function handleUnsubscribe(event) {
        const { id } = event.detail;
        iscrizioni = iscrizioni.filter((cid) => cid !== id);
        localStorage.setItem("iscrizioni", JSON.stringify(iscrizioni));
        isSubscribed = false;
    }

    onMount(() => {
        oldMenuState = isMenuOpen();
        setMenuOpen(false);
        fetchData();
        return () => {
            setMenuOpen(oldMenuState);
        };
    });
</script>

{#if isLoading}
    <div class="loading-container">
        <div class="loading-spinner"></div>
    </div>
{:else}
    <div class="video" on:subscribe={handleSubscribe} on:unsubscribe={handleUnsubscribe}>
        
        <VideoPlay videoId={videoId} />
        
        <TitoloVideo titolo={videoDetails.snippet.title} />
        <Canale
            videoId={videoId}
            canaleId={videoDetails.snippet.channelId}
            nomeCanale={channelDetails.snippet.title}
            iscritti={channelDetails.statistics.subscriberCount}
            logoCanale={channelDetails.snippet.thumbnails.default.url}
            numeroLike={Number(videoDetails.statistics.likeCount)}
            isSubscribed={isSubscribed}
            isUserLogged={isUserLogged}
        />
        <DescrizioneVideo
            descrizione={videoDetails.snippet.description}
            views={videoDetails.statistics.viewCount}
            publishTime={new Date(videoDetails.snippet.publishedAt).toLocaleDateString()}
        />
        <CommentInput on:addComment={(e) => addComment(e.detail.content)} />
        <div>
            {#each comments as comment (comment.id)}
                <Commento
                    idUtente={comment.userId}
                    username={comment.username}
                    timeAgo={comment.timeAgo}
                    commentText={comment.commentText}
                    likes={comment.likes}
                    replies={comment.replies}
                    profilePicture={comment.profilePicture}
                    isUserComment={comment.isUserComment} 
                    on:remove={() => removeComment(comment.id)} 
                />
            {/each}
            <br><br>
            <button on:click={() => fetchComments(++currentPage)}>
                Carica Altri Commenti
            </button>
            <br><br><br>
        </div>
    </div>
{/if}

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
    .video {
        /* Stili esistenti */
       
    }
    button {
        margin: 20px auto;
        display: block;
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 20px;
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


    
</style>
