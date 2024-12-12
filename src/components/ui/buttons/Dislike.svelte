<script>
    
</script>
<div class="container">
    <button class="dislike">
        <img src="/icons/dislike.svg" alt="Dislike" />
    </button>
</div>


<style>


    .dislike{
        background-color: #F2F2F2;
        color: #5a5a5a;
        padding: 0.5rem 1rem;
        border-radius: 0rem 2rem 2rem 0rem;
        border: none;
        cursor: pointer;
        font-size: 0.9rem;
        font-family: Roboto, 'sans-serif';  
        transition: background-color 0.2s ease, color 0.2s ease; /* Transizioni per hover */
   
    }

    .dislike:hover{
        background-color: #E5E5E5;
    }


    .dislike:active{
        background-color: #d6d6d6; /* Sfondo ancora più scuro quando cliccato */
    }


    .container{
        display: flex;
        align-items: center;
        justify-content: center;

        white-space: nowrap;

    }

    .dislike img{
        height: 1.2rem;
        width: 1.2rem;
        margin-bottom:-0.2rem;
        margin-right:0.2rem;
    }

</style>