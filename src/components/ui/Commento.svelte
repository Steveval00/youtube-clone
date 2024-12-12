<script>
	import { goto } from '$app/navigation';
	import { setClickedItem } from '$lib/store/index.svelte';
  import { createEventDispatcher } from 'svelte';
  export let idUtente= 1;
  export let username = "Utente";
  export let timeAgo = "2 giorni fa";
  export let commentText = "Questo è un commento";
  export let likes = 72;
  export let replies = 0;
  export let profilePicture = "https://yt3.googleusercontent.com/ytc/AIdro_n1Ribd7LwdP_qKtqWL3ZDfIgv9M1d6g78VwpHGXVR2Ir4=s176-c-k-c0x00ffffff-no-rj-mo"; // Immagine profilo placeholder
  export let isUserComment = false; // Nuova proprietà per identificare i commenti dell'utente

  const dispatch = createEventDispatcher();

  function handleClick(){
        setClickedItem("commento");
        goto(`/canale/${idUtente}`);
  }
  function handleRemove() {
      dispatch('remove');
  }
</script>

<div class="comment">
  <img on:click={handleClick} class="profile-picture" src="{profilePicture}" alt="Profile Picture" />
  <div class="comment-content">
      <div class="header" on:click={handleClick}>
          <strong>{username}</strong> <span>{timeAgo}</span>
          
      </div>
      <div class="text">{commentText}</div>
      {#if isUserComment}
              <button class="remove-button" on:click={handleRemove}><img title="Elimina commento" alt="Elimina commento" src ="/icons/delete-rosso.svg"/></button>
        {/if}
      <div class="actions">
          <span>👍 {likes}</span>
          <span>💬 {replies}</span>
          <span>Rispondi</span>
      </div>
  </div>
</div>

<style>
  .comment {
      display: flex;
      align-items: flex-start;
      width: 65%;
      margin-left: 7%;
      padding: 10px;
      border-bottom: 1px solid #ccc;
  }
  .profile-picture {
    cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
  }
  .comment-content {
    
      flex: 1;
  }
  .header {
    cursor: pointer;
      font-size: 14px;
      color: #555;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  .text {
      margin: 5px 0;
      font-size: 16px;
  }
  .actions {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      color: #888;
  }
  .actions span {
      cursor: pointer;
  }
  .actions span:hover {
      color: #000;
  }
  .remove-button {
      background: none;
      border: none;
      color: red;
      cursor: pointer;
      font-size: 14px;
      padding: 0;

      margin:10px;
      margin-top:-10px;
      float:right;
  }
  .remove-button img {
      width: 25px;
      height: 25px;
  }

  
</style>
