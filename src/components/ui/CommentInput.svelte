<script>
    import { createEventDispatcher } from "svelte";
    let newComment = "";
    const dispatch = createEventDispatcher();

    function sendComment() {
        if (newComment.trim() !== "") {
            dispatch("addComment", { content: newComment });
            newComment = "";
        }
    }

    function cancelComment() {
        newComment = ""; // Resetta il campo
    }
</script>

<div class="comment-input-container">
    <a href="/profilo"><img
        src="/icons/account.svg"
        alt="User Profile"
        class="comment-profile-image"
    /></a>
    <div class="input-area">
        <input
            on:keydown={(e) => e.key === "Enter" && sendComment()}
            type="text"
            bind:value={newComment}
            placeholder="Aggiungi un commento..."
            class="comment-input"
        />
        <div class="action-buttons">
            <button class="cancel-btn" on:click={cancelComment}>Annulla</button>
            <button
                class="submit-btn"
                on:click={sendComment}
                disabled={!newComment.trim()}
            >
                Commenta
            </button>
        </div>
    </div>
</div>

<style>
    .comment-input-container {
        max-width:66%;
        margin-left:7%;
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 16px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 8px;
    }

    .comment-profile-image {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .input-area {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .comment-input {
        width: 100%;
        border: none;
        outline: none;
        font-size: 14px;
        color: #333;
        border-bottom: 1px solid black;
        padding: 5px 0;
    }

    .action-buttons {
        display: flex;
        justify-content: flex-end;
        margin-top: 4px;
        gap: 10px;
    }

    .cancel-btn,
    .submit-btn {
        background: none;
        border: none;
        font-size: 14px;
        cursor: pointer;
    }

    .cancel-btn {
        color: #888;
    }

    .submit-btn {
        color: white;
        background-color: #1351b5;
        border-radius: 12px;
        padding: 4px 8px;
    }

    .submit-btn:disabled {
        color: #aaa;
        background-color: #f0f0f0;
        cursor: not-allowed;
    }

   
</style>
