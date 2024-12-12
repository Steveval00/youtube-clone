<script>
    export let numeroLike = 500;
</script>

<div class="container">
    <button class="like">
        <img src="/icons/like-pieno.svg" alt="Liked" />
        <span>{numeroLike+1}</span>
    </button>
    
</div>


<style>
   

    .like{
        background-color: #F2F2F2;
        color: #282828;
        padding: 0.5rem 1rem;
        border-radius: 2rem 0rem 0rem 2rem;
        border: none;
        cursor: pointer;
        font-size: 0.9rem;
        font-family: Roboto, 'sans-serif';  
        transition: background-color 0.2s ease, color 0.2s ease; /* Transizioni per hover */
        margin-right: -0.35rem;
    }

    .like:hover{
        background-color: #E5E5E5;
        
    }

    

    


    .container{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
       
      
    .like span{
        margin-left:0.2rem;
        font-weight: 600;
        
    }

   
    .like img {
        height: 1.2rem;
        width: 1.2rem;
        margin-bottom:-0.2rem;
        margin-right:0.2rem;
    }

</style>