<script>
	import { onMount } from "svelte";
	import Iscritto from "../components/ui/buttons/Iscritto.svelte";
    import Iscriviti from "../components/ui/buttons/Iscriviti.svelte";
	import Like from "../components/ui/buttons/Like.svelte";
    import VideoCard from "../components/ui/VideoCard.svelte";
    

    let {data} = $props();
    
    //let videosID = ["T0ILDdrG7vg", "3gZC5763wYk", "Vmdhg0gPCpw", "3DkTJc4iHsE", "74TAV9rnU10", "BickMFHAZR0", "c0-hvjV2A5Y", "hwLx5MLHDVY", "Cyya23MPoAI", "4MxRhjHmiVw", "JhHMJCUmq28"]
    $inspect(data.videos);

    // Array di oggetti JSON con i dati dei video
    /*
    const videos = [{
            id: data.videos[0].id.videoId,
            thumbnail: `https://i.ytimg.com/vi/${videosID[0]}/maxresdefault.jpg`,
            title: "Tutorial come camminare",
            channelName: "Camminando",
            views: "1,2M visualizzazioni",
            uploaded: "2 settimane fa"
        },
        {
            id: videosID[1],
            thumbnail: `https://i.ytimg.com/vi/${videosID[1]}/maxresdefault.jpg`,
            title: "Roma Capitale",
            channelName: "Giulio Cesare",
            views: "1,5Mld visualizzazioni",
            uploaded: "20 secoli fa"
        },
        {
            id: videosID[2],
            thumbnail: `https://i.ytimg.com/vi/${videosID[2]}/maxresdefault.jpg`,
            title: "Rocce",
            channelName: "Registro le Rocce",
            views: "500K visualizzazioni",
            uploaded: "3 mesi fa"
        }
        /*
        {
            id: videosID[1],
            thumbnail: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQgAkXPXnhzQUWuGM-eMeMxKR4k_XQmnfSNXkE2O36Rn08T-KwOmm3DITQzlX4ta4kBGDZprfAgvevZbAy2nlncH5xjpw1YmGaJiEyXfg",
            title: "Roma Capitale",
            channelName: "Giulio Cesare",
            views: "1,5Mld visualizzazioni",
            uploaded: "20 secoli fa"
        },
        {
            id: videosID[2],
            thumbnail: "https://www.viaggi-usa.it/wp-content/uploads/2019/07/grand-canyon-monument-valley.jpg",
            title: "Rocce",
            channelName: "Registro le Rocce",
            views: "500K visualizzazioni",
            uploaded: "3 mesi fa"
        }
    
    ];

*/

        //console.log(data.test);


        //meglio usare la funzione load() per caricare i dati
        onMount(() => {
            // Eseguito quando il componente è montato
            fetch('//dummyjson.com/test')
            .then(res => res.json())
            .then(console.log);
            
        });
    // Could be GET or POST/PUT/PATCH/DELETE
    

 //status: 'ok', method: 'GET' 
/*
    fetch('https://dummyjson.com/users/?limit=10')
    .then(res => res.json())
    .then(console.log);
*/

</script>


<div class="videos-container">
    <!-- Itera sui video e passa gli attributi a VideoCard -->
    {#each data.videos as video}
    {console.log(video.id.videoId)}
    <a href="/guarda/{video.id.videoId}" >
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


<br><br>

<style>
    .videos-container {
        margin: 0 auto;
        margin-left:14%;
        width:80%;
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
