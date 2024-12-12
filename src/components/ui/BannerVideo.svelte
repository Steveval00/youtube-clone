<script>
	import { goto } from "$app/navigation";

    export let id;
    export let index;
    export let thumbnail;
    export let title;
    export let channel;
    export let views;
    export let time;
    export let duration;
    export let onDelete;

    const handleDelete = () => {
        if (onDelete) {
            onDelete(id);
        }
    };
</script>

<div class="banner-video">
    <div class="video-index">{index}</div>

    <div class="video-thumbnail" on:click={()=>goto(`/guardaPlaylist/${index}`)}>
        <img src={thumbnail} alt={title} />
        <span class="duration">{duration}</span>
    </div>

    <div class="video-details" on:click={()=>goto(`/guardaPlaylist/${index}`)}>
        <div class="video-title">{title}</div>
        <div class="video-meta">
            {channel} · {views} · {time}
        </div>
    </div>

    <button class="delete-button" on:click={handleDelete}>
        <img src="icons/delete-rosso.svg" alt="cancella" />
    </button>
</div>

<style>
.banner-video {
    display: flex;
    align-items: center;
    gap: 15px; /* Spazio tra gli elementi */
    width: 100%;
    overflow: hidden;
}

.video-index {
    flex-shrink: 0;
    font-size: 1rem;
    color: #757575;
}

.video-thumbnail {
    cursor: pointer;
    position: relative;
    width: 120px;
    height: 70px;
    flex-shrink: 0;
    border-radius: 8px;
    overflow: hidden;
}

.video-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.duration {
    position: absolute;
    bottom: 5px;
    right: 5px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    font-size: 0.75rem;
    padding: 2px 4px;
    border-radius: 3px;
}

.video-details {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    flex: 1;
}

.video-title {
    font-size: 1rem;
    font-weight: bold;
    color: black;
    margin: 0 0 5px;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.video-meta {
    font-size: 0.9rem;
    color: #757575;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.delete-button {
    background: none;
    border: none;
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50px;
    transition: background-color 0.2s ease;
    margin-left: auto; /* Spinge il pulsante a destra */
    flex-shrink: 0;
}

.delete-button:hover {
    background-color: #e5e5e5;
}

.delete-button:active {
    background-color: #D9D9D9;
}

.delete-button img {
    height: 1.5rem;
    width: 1.5rem;
}
</style>
