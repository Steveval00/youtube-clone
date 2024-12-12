<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { toggleMenu, isMenuOpen, setMenuOpen } from "$lib/store/index.svelte.js";
    import VideoPlay from "../../../components/ui/VideoPlay.svelte";
    import TitoloVideo from "../../../components/ui/TitoloVideo.svelte";
    import Canale from "../../../components/ui/Canale.svelte";
    import DescrizioneVideo from "../../../components/ui/DescrizioneVideo.svelte";
    import CommentInput from "../../../components/ui/CommentInput.svelte";
    import Commento from "../../../components/ui/Commento.svelte";

    export let data;

    let oldMenuState;
    let isLoading = false;

    // Usiamo blocchi reattivi per aggiornare le variabili quando data cambia
    $: pos = data.pos;
    $: videoId = data.videoId;
    $: videoDetails = data.videoDetails;
    $: channelDetails = data.channelDetails;
    $: isSubscribed = data.isSubscribed;
    $: isUserLogged = data.isUserLogged;
    $: inPlaylist = data.inPlaylist;
    $: comments = data.comments;
    $: currentUser = data.currentUser;
    $: commentsPerPage = data.commentsPerPage;
    $: currentPage = data.currentPage;
    $: iscrizioni = data.iscrizioni;
    $: videoPiaciuti = data.videoPiaciuti;



     // Quando videoId è disponibile, vuol dire che i dati sono caricati, possiamo togliere il loading
     $: if (videoId) {
        isLoading = false;
    }

    async function fetchComments(page) {
        const response = await fetch(
            `https://dummyjson.com/posts?limit=${commentsPerPage}&skip=${(page - 1) * commentsPerPage}`
        );
        const data = await response.json();

        async function fetchUser(userId) {
            const res = await fetch(`https://dummyjson.com/users/${userId}`);
            if (!res.ok) {
                throw new Error("Utente non trovato");
            }
            return await res.json();
        }

        function randomDate() {
            const start = new Date(2020, 0, 1); 
            const end = new Date();
            const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        }

        const commentsWithUserInfo = await Promise.all(
            data.posts.map(async (post) => {
                const user = await fetchUser(post.userId);
                return {
                    id: post.id,
                    userId: post.userId,
                    username: user.username || `User${post.userId}`,
                    timeAgo: randomDate(),
                    commentText: post.body,
                    likes: post.reactions?.likes || 0,
                    replies: Math.floor(Math.random() * 10),
                    profilePicture: user?.image || `https://via.placeholder.com/40?text=U${post.userId}`,
                    isUserComment: user.username === currentUser 
                };
            })
        );

        comments = [...comments, ...commentsWithUserInfo];
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
        <div class="video-navigation">
            {#if pos > 1}
                <!-- Usa goto per navigare internamente senza reload -->
                <button class="nav-button prev-button" on:click={() => goto(`/guardaPlaylist/${pos - 1}`)} aria-label="Video precedente">‹</button>
            {:else}
                <button class="nav-button prev-button" style="opacity:0%; cursor:default" aria-label="Video precedente">‹</button>
            {/if}

            <VideoPlay videoId={videoId} />

            {#if pos < videoPiaciuti.length}
                <button class="nav-button next-button" on:click={() => goto(`/guardaPlaylist/${pos + 1}`)} aria-label="Video successivo">›</button>
            {:else}
                <button class="nav-button next-button" style="opacity:0%; cursor:default" aria-label="Video successivo">›</button>
            {/if}
        </div>

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
    height: 100vh; 
    background-color: #f9f9f9;
}

.loading-spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #ddd;
    border-top: 5px solid #007bff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg); 
    }
    100% {
        transform: rotate(360deg); 
    }
}

.video {
    margin: 0 auto;
    position: relative; 
    margin-left:15%;
}

.video-navigation {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem; 
    margin-left: -15%;
    margin-right:10%;
}

.nav-button {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    background: #007bff;
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: transform 0.3s;
}

.nav-button:hover {
    transform: translateY(-50%) scale(1.1);
    background: #0056b3; 
}

.prev-button {
    left: 4%;
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
</style>
