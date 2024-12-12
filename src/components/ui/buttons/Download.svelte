<div class="container">
    <button class="download">
        <img src="/icons/download.svg" alt="Donwload" />
        <span>Download</span>
    </button>
</div>

<style>
    /* Contenitore generale per il bottone */
    .download {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Stile del bottone Condividi */
    .download {
        border: none;
        display: flex;
        align-items: center;
        gap: 8px; /* Spazio tra l'icona e il testo */
        background-color: #F2F2F2;/* Colore di sfondo chiaro */
        color: #282828; /* Colore del testo */
        padding: 6px 16px; /* Spaziatura interna */
        
        border-radius: 2rem; /* Angoli leggermente arrotondati */
        font-size: 14px; /* Dimensione del testo */
        font-weight: 500; /* Spessore medio del testo */
        font-family: Roboto, sans-serif; /* Font coerente con YouTube */
        cursor: pointer;
        transition: background-color 0.2s ease, color 0.2s ease; /* Transizioni per hover */
    }

    /* Stile dell'icona nel bottone */
    .download img {
        width: 23px; /* Dimensione icona */
        height: 23px;
    }

    /* Stile del testo nel bottone */
    .download span {
        font-size: 14px; /* Dimensione del testo ridotta */
    
    }

    /* Effetto hover per il bottone */
    .download:hover {
        background-color: #e5e5e5; /* Sfondo leggermente più scuro */
    }

    /* Effetto clic */
    .download:active {
        background-color: #d6d6d6; /* Sfondo ancora più scuro quando cliccato */
    }
</style>
