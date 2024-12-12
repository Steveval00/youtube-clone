<script>
    import { toggleMenu, isMenuOpen, setMenuOpen } from "$lib/store/index.svelte.js";
    import ImmaginiProfilo from "../components/ui/ImmaginiProfilo.svelte";
    import Menu from "../components/ui/Menu.svelte";
    import { searchQuery } from "$lib/store/index.svelte.js"; // Importa lo store
    import { get } from "svelte/store";
	import { goto } from "$app/navigation";


    let query = get(searchQuery); // Recupera il valore iniziale dello store
    

    // Funzione per gestire la ricerca
    const handleSearch = () => {
        if (query.trim()) {
            searchQuery.set(query); // Aggiorna lo store con la query
            goto(`/cerca/${query}`); // Naviga alla pagina di ricerca
        }
    };

    // Gestione del tasto Enter
    const handleKeydown = (event) => {
        if (event.key === 'Enter') {
            handleSearch(); // Effettua la ricerca
        }

    };
</script>

<div class="navbar">
    <!-- Left Section -->
    <div class="navbar-left">
        <div class="hamburger" onclick={toggleMenu}>
            <img src="/icons/menu.svg" alt="Menu" />
        </div>
        <div class="logo">
            <a href="/">
                <img src="/icons/logo.svg" alt="YouTube" />
            </a>
        </div>
    </div>

    <Menu isOpen={isMenuOpen()} />

    <!-- Search Bar -->
    <div class="search-bar">
        <input
            type="text"
            bind:value={query}
            placeholder="Cerca"
            onsubmit={handleSearch}
            onkeydown={handleKeydown} />
        <button onclick={handleSearch}>
            <img style="height:1.75rem" src="/icons/cerca.svg" alt="Cerca" />
        </button>
    </div>

    <!-- Right Section -->
    <div class="navbar-right">
        <img src="/icons/crea.svg" alt="Crea" />
        <img src="/icons/notifiche.svg" alt="Notifiche" />
        <a class="linkprofilo" href="/profilo"> 
            <ImmaginiProfilo />
        </a>
    </div>
</div>


<slot />
    



<style>
    .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    background-color: #f9f9f9;
}

.loading-spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #ddd;
    border-top: 5px solid #007bff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg); 
    }
    100% {
        transform: rotate(360deg); 
    }
}

    a, a:visited, a:hover, a:active, a:focus {
        text-decoration: none;
    }

    .linkprofilo {
        width: 32px;
        height: 32px;
        margin-right: 15px;
        margin-left: 20px;
        text-decoration: none;
        color: #282828;
    }

    .hamburger {
        position: fixed;
        top: 10px;
        left: 10px;
        width: 40px;
        height: 40px;
        background-color: #ffffff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 1100;
    }
    .hamburger:hover {
        background-color: #f1f1f1;
    }

    .hamburger img {
        width: 24px;
        height: 24px;
    }

    .navbar {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        background-color: #fff;
        border-bottom: 1px solid #ccc;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        
        z-index: 9999;

    }
    

    .navbar-left {
        display: flex;
        align-items: center;
    }
    .navbar-right {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }

    .menu-icon img,
    .logo img {
        margin-top: 5px;
        margin-left: 40%;
        height: 24px;
        cursor: pointer;
    }

    .search-bar {
        max-height: 40px;
        flex: 1;
        display: flex;
        margin: 0 20px;
        margin-left: 3%;
        max-width: 600px;
    }

    .search-bar input {
        flex: 1;
        font-size: 1em;
        color: #282828;
        padding: 0.5rem;
        padding-left: 1rem;
        border: 1px solid #ccc;
        border-radius: 20px 0 0 20px;
        outline-width: 1px;
        outline-color: #0077ff;
    }

    .search-bar input:focus {
        outline: none;
        border-color: #0077ff;
        box-shadow: 0 0 5px rgba(0, 119, 255, 0.5);
    }

    .search-bar button {
        padding: 5px 13px;
        padding-left: -5px;
        background-color: #f1f1f1;
        border: 1px solid #ccc;
        border-left: none;
        border-radius: 0 20px 20px 0;
        cursor: pointer;
    }

    .navbar-right img {
        height: 30px;
        margin-left: 20px;
        cursor: pointer;
    }
</style>