<script lang="ts">
    
    let {
        thumbnail='',
        title='', 
        channelName='', 
        views='',
        uploaded='' 
    } = $props();



</script>

<style>
    .video-card {
        width: 320px;
        border-radius: 8px;
        overflow: hidden;
        background-color: #fff;
        cursor: pointer;
        }

    .video-card:hover {
        background-color: #f9f9f9;
    }

    .thumbnail {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-radius: 8px;
    }

    .video-info {
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .title {
        font-size: 1rem;
        font-weight: bold;
        color: #333;
        margin: 0;
        line-height: 1.3;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .channel {
        font-size: 0.9rem;
        color: #666;
        margin: 0;
    }

    .views-and-date {
        font-size: 0.8rem;
        color: #999;
        margin-top: 5px;
    }
</style>

<div class="video-card">
    <!-- Thumbnail -->
    <img src={thumbnail} alt={title} class="thumbnail" />

    <!-- Video Info -->
    <div class="video-info">
        <p class="title">{@html title}</p>
        <p class="channel">{@html channelName}</p>
        <p class="views-and-date">{@html views} visualizzazioni • {uploaded}</p>
    </div>
</div>
