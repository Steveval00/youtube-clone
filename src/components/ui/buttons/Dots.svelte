<div class="container">
    <button class="dots">
        <img src="/icons/dots.svg" alt="Di più" />
        
    </button>
</div>

<style>
    /* Contenitore generale per il bottone */
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Stile del bottone Condividi */
    .dots {
        border: none;
        display: flex;
        align-items: center;
        gap: 8px; /* Spazio tra l'icona e il testo */
        background-color: #F2F2F2;/* Colore di sfondo chiaro */
        color: #282828; /* Colore del testo */
        padding: 6px 6px; /* Spaziatura interna */
        
        border-radius: 5rem; /* Angoli leggermente arrotondati */
        font-size: 14px; /* Dimensione del testo */
        font-weight: 500; /* Spessore medio del testo */
        font-family: Roboto, sans-serif; /* Font coerente con YouTube */
        cursor: pointer;
        transition: background-color 0.2s ease, color 0.2s ease; /* Transizioni per hover */
    }

    /* Stile dell'icona nel bottone */
    .dots img {
        width: 20px; /* Dimensione icona */
        height: 20px;
        padding:2px;
    }

   

    /* Effetto hover per il bottone */
    .dots:hover {
        background-color: #e5e5e5; /* Sfondo leggermente più scuro */
    }

    /* Effetto clic */
    .dots:active {
        background-color: #d6d6d6; /* Sfondo ancora più scuro quando cliccato */
    }
</style>
