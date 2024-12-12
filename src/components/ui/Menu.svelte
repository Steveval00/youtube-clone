<script>
	import ImmaginiHome from "./ImmaginiHome.svelte";
	import ImmaginiIscrizioni from "./ImmaginiIscrizioni.svelte";
	import ImmaginiLike from "./ImmaginiLike.svelte";
	import ImmaginiProfilo from "./ImmaginiProfilo.svelte";
    import { isLogged } from "$lib/store/index.svelte.js";

    let{
        isOpen = true
    } = $props() // Stato che controlla se il menu è visibile

    
    //const evento = $derived(isLogged() ? "all" : "none");
</script>


<div class="sidebar {isOpen ? 'open' : ''}">
    <a href="/">
    <div class="menu-item">
        <ImmaginiHome/>
        <span>Home</span>
    </div>
    </a>

<!--style="pointer-events:{evento};"-->
    <a href="/iscrizioni">
    <div  class="menu-item">
        <ImmaginiIscrizioni/>
        <span>Iscrizioni</span>
    </div>
    </a>

<!--style="pointer-events:{evento};"-->
    <a href="/like" >
    <div  class="menu-item">
        <ImmaginiLike/>
        <span>Video piaciuti</span>
    </div>
    </a>

    <a href="/profilo">
    <div class="menu-item">
        <ImmaginiProfilo/>
       
        <span>Tu</span>
    </div>
    </a>
   

</div>


<style>
    a, a:visited, a:hover, a:active, a:focus {
        text-decoration: none;
    } 
    .sidebar {
       
        margin-top:60px;
        position: fixed;
        top: 0;
        left: 0;
        width: 200px;
        height: 100%;
        background-color: #fff;
        border-right: 1px solid #ccc;
        box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);
        overflow-y: auto;
        transform: translateX(-100%);
        transition: transform 0.2s ease-in-out;
        z-index: 1000;
    }

    .sidebar.open {
        transform: translateX(0);
    }

    .menu-item {
        display: flex;
        justify-content: start;
        gap:20px;
        align-items: center;
        padding: 15px 20px;
        font-size: 16px;

        cursor: pointer;
        
        border-bottom: 1px solid #f1f1f1;
        color: #333;
        text-decoration: none;
    }

    :global(.menu-item img .icon){
        
        width: 24px;
        height: 24px;
    }

    .menu-item:hover {
        background-color: #f9f9f9;
    }
</style>

