<script>
    import { onMount } from "svelte";
    import BannerVideo from "../../ui/BannerVideo.svelte";
    import SidebarPlaylist from "../../ui/SidebarPlaylist.svelte";
    import { fetchVideoDetails } from "$lib/utils/mockup.js";
	import { PUBLIC_YOUTUBE_API_KEY } from "$env/static/public";
  
    function parseDuration(duration) {
      const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
      const matches = duration.match(regex);
  
      if (!matches) return '00:00';
  
      const hours = parseInt(matches[1] || 0, 10);
      const minutes = parseInt(matches[2] || 0, 10);
      const seconds = parseInt(matches[3] || 0, 10);
  
      let time = '';
      if (hours > 0) {
        time += `${hours}:`;
      }
  
      time += `${minutes.toString().padStart(2, '0')}:`;
      time += `${seconds.toString().padStart(2, '0')}`;
      return time;
    }
  
    let videoIds = JSON.parse(localStorage.getItem("videoPiaciuti")) || [];
    let videos = [];
  
    const API_KEY = PUBLIC_YOUTUBE_API_KEY;
  
    async function fetchAllVideoDetails() {
      try {
        const promises = videoIds.map(async (id) => {
          const details = await fetchVideoDetails(id, API_KEY);
          console.log(details);
          return {
            id,
            title: details.snippet.title,
            channel: details.snippet.channelTitle,
            views: `${details.statistics.viewCount} visualizzazioni`,
            time: new Date(details.snippet.publishedAt).toLocaleDateString(),
            thumbnail: details.snippet.thumbnails.medium.url,
            duration: parseDuration(details.contentDetails.duration),
          };
        });
  
        videos = await Promise.all(promises);
      } catch (error) {
        console.error("Errore nel recupero dei dettagli dei video:", error);
      }
    }
  
    const deleteVideo = (id) => {
      videos = videos.filter((video) => video.id !== id);
      videoIds = videoIds.filter((videoId) => videoId !== id);
      localStorage.setItem("videoPiaciuti", JSON.stringify(videoIds));
    };
  
    onMount(() => {
      fetchAllVideoDetails();
    });
  
    // Drag & Drop
    let dragSrcIndex = null;
  
    function handleDragStart(event) {
      dragSrcIndex = event.currentTarget.dataset.index;
      event.dataTransfer.effectAllowed = 'move';
      event.currentTarget.classList.add('dragging');
    }
  
    function handleDragOver(event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
      const target = event.currentTarget;
      target.classList.add('drag-over');
    }
  
    function handleDragLeave(event) {
      event.currentTarget.classList.remove('drag-over');
    }
  
    function handleDrop(event) {
      event.stopPropagation();
      const targetIndex = event.currentTarget.dataset.index;
      event.currentTarget.classList.remove('drag-over');
  
      if (dragSrcIndex !== targetIndex) {
        const draggedItem = videos[dragSrcIndex];
        videos.splice(dragSrcIndex, 1);
        videos.splice(targetIndex, 0, draggedItem);
  
        videos = [...videos]; // trigger reattività
        videoIds = videos.map(v => v.id);
        localStorage.setItem("videoPiaciuti", JSON.stringify(videoIds));
      }
  
      return false;
    }
  
    function handleDragEnd(event) {
      event.currentTarget.classList.remove('dragging');
      const items = document.querySelectorAll('.video-row');
      items.forEach((item) => {
        item.classList.remove('drag-over');
        item.classList.remove('dragging');
      });
    }
  </script>
  
  <div class="page">
    <SidebarPlaylist playlistTitle="Video piaciuti" videoCount={videos.length} />
  
    <div class="main-content">
      <h1 class="h1">I tuoi video preferiti</h1>
      {#if videos.length > 0}
        {#each videos as video, index}
          <div class="video-row"
               data-index={index}
               draggable="true"
               on:dragstart={handleDragStart}
               on:dragover={handleDragOver}
               on:dragleave={handleDragLeave}
               on:drop={handleDrop}
               on:dragend={handleDragEnd}>
  
            <div class="drag-handle" title="Trascina per riordinare">⋮⋮</div>
            
            <!-- BannerVideo gestisce index, thumbnail, title, meta e delete -->
            <div class="video-content">
              <BannerVideo
                id={video.id}
                index={index + 1}
                title={video.title}
                channel={video.channel}
                views={video.views}
                time={video.time}
                thumbnail={video.thumbnail}
                duration={video.duration}
                onDelete={() => deleteVideo(video.id)}
              />
            </div>
          </div>
        {/each}
      {:else}
        <p>Non ci sono video nella tua lista dei preferiti.</p>
      {/if}
    </div>
  </div>
  
  <style>
  .h1 {
    text-align: center;
    font-family: Roboto, sans-serif;
    font-size: 2rem;
  }
  
  .page {
    width: 80%;
    margin: 0 auto;
    display: flex;
    color: black;
    font-family: Roboto, sans-serif;
    padding: 20px 0;
  }
  
  .main-content {
    flex: 1;
    text-align: center;
    padding: 20px;
    overflow-y: auto;
  }
  
  .video-row {
    display: flex;
    align-items: center;
    background: #fff;
    border: 1px solid #ddd;
    padding: 10px;
    transition: background 0.2s;
    margin: 10px 0;
    gap: 10px;
  }
  
  .video-row.dragging {
    opacity: 0.5;
  }
  
  .video-row.drag-over {
    background: #f0f0f0;
  }
  
  .drag-handle {
    cursor: grab;
    font-size: 24px;
    user-select: none;
  }
  
  .drag-handle:active {
    cursor: grabbing;
  }
  
  .video-content {
    flex: 1;
    display: flex;
    align-items: center;
    text-align: left;
    overflow: hidden;
  }
  </style>
  