<script>
    import { onMount } from "svelte";
    
    import VideoCard from "./VideoCard.svelte";
    export let data;

    onMount(() => {
        console.log(data);
    });
</script>

<div class="videos-container">
    {#each data.videos as video}
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
</div>

<style>
    .videos-container {
        margin: 0 auto;
        max-width: 1200px;
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 30px;
        justify-items: center;
    }

    a, a:visited, a:hover, a:active, a:focus {
        text-decoration: none;
        color: inherit;
    }
</style>
