<script>
	import { goto } from "$app/navigation";

    export let playlistTitle;
    export let videoCount;

    function handleClick(){
        let videoIds = JSON.parse(localStorage.getItem("videoPiaciuti")) || [];
        if(videoIds.length > 0){
            let primoVideo = videoIds[0];
            goto(`/guardaPlaylist/${1}`);
        } else {
            alert('Non hai video nei preferiti');
        }
    };

</script>

<div class="sidebar">
    <h1>{playlistTitle}</h1>
    <p>{videoCount} video</p>
    <button class="play" onclick={handleClick}>Riproduci Playlist</button>
    
</div>


<style>
    .sidebar {
        margin:5%;
        width: 30%;
        background: linear-gradient(to bottom, #3757a4, #183c87); /* Nuovo gradiente blu */
        color: white;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-radius: 8px;
    }

    .sidebar h1 {
        font-size: 1.2rem;
    }

    .sidebar p {
        font-size: 0.9rem;
    }

    .sidebar button {
        width: 100%;
        background-color: #ffffff; /* Colore bottone */
        color: #151515; /* Colore testo */
        font-weight:600;
        padding: 10px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }

    .sidebar button:hover {
        background-color: #F2F2F2;
    }
    .sidebar button:active {
        background-color: #D9D9D9;
        
    }
    
</style>


