# YouTube Clone in SvelteKit

## Introduzione

Benvenuti nel progetto **YouTube Clone in SvelteKit**! Questo progetto è una riproduzione semplificata di YouTube, sviluppata con **SvelteKit**, che include funzionalità principali come navigazione, interazione con video e gestione delle iscrizioni. Non è previsto un backend personalizzato: tutte le informazioni sono ottenute tramite API pubbliche o memorizzate nel Local Storage.

---

## Configurazione della Chiave API

- Il progetto utilizza una chiave API per ottenere dati aggiuntivi da servizi esterni.
- La chiave è memorizzata in un file `.env` (non incluso nel repository per motivi di sicurezza).
- Per ottenere la chiave API, **contattare l'autore del progetto** e aggiungerla al file `.env` come segue:
  ```bash
  PUBLIC_YOUTUBE_API_KEY=la_vostra_chiave_api
  ```

---

## Requisiti e Installazione

### Requisiti

1. **Node.js:** Assicurarsi di avere Node.js installato.
2. **Conoscenze richieste:**
   - Promise, async/await
   - Funzionalità ES6
   - Uso di SvelteKit, incluso `+layout`, routing e `load()`

### Installazione

1. Clonare il repository:
   ```bash
   git clone https://github.com/Steveval00/youtube-clone.git
   ```
2. Installare le dipendenze:
   ```bash
   npm install
   ```
3. Avviare il server di sviluppo:
   ```bash
   npm run dev
   ```
4. Aprire l'applicazione in un browser a `http://localhost:5173` (o simile).

---

## Struttura del Progetto

Il progetto replica l'interfaccia e le funzionalità di base di YouTube. Usa anche le sue api per accedere ai canali e ai video degli utenti reali di Youtube. Ecco un riepilogo delle pagine disponibili:

### **Home (`/`)**

- Mostra una lista di 12 video mock, ciascuno con titolo, thumbnail e nome del canale.
- I canali sono ottenuti tramite l'API `https://dummyjson.com/users`.

### **Iscrizioni (`/subscriptions`)**

- Visualizza i canali a cui l'utente è iscritto.
- Consente di disiscriversi dai canali.

### **Video Piaciuti (`/liked-videos`)**

- Gestisce la playlist "Video Piaciuti" dell'utente.
  - Aggiunta/rimozione di video.
  - Drag & Drop per riordinare la playlist (senza librerie esterne, solo Svelte, JS e CSS).
  - Riproduzione sequenziale con funzionalità "next" e "prev".

### **Video Player (`/watch/:videoId`)**

- Pagina di riproduzione di un video.
  - Possibilità di mettere like, commentare e iscriversi al canale (solo se loggati).
  - Commenti ottenuti da `https://dummyjson.com/posts` (40 alla volta con infinite scrolling).
  - Visualizzazione di username e immagine degli autori dei commenti.

### **Canale (`/channel/:userId`)**

- Mostra le informazioni principali sul canale.
- Funzionalità di iscrizione/disiscrizione.
- Pagine secondarie:
  - **Community (`/channel/:userId/community`):** Lista di post pubblicati dall'utente (ottenuti da `https://dummyjson.com/posts`).
  - **Informazioni (`/channel/:userId/about`):** Mostra dettagli aggiuntivi sull'utente.

### **Login (`/login`)**

- Simula la login dell'utente.
- Solo dopo il login è possibile:
  - Mettere like ai video
  - Aggiungere commenti
  - Iscriversi ai canali

---

## Persistenza dei Dati

- **Local Storage:**
  - Iscrizioni ai canali
  - Video nella playlist "Video Piaciuti"
  - Commenti aggiunti, modificati o eliminati dall'utente

Questi dati sono mantenuti anche dopo il refresh o la chiusura dell'applicazione.

---

## Stile e Navigazione

- Stile ispirato a YouTube:
  - Ombre, font, layout e icone simili.
- Layout responsivo, costruito con **Flexbox** e/o **CSS Grid**.
- Navigazione tramite il routing di SvelteKit:
  - Gestione della cronologia del browser.
  - Cambiamenti dinamici nella barra di navigazione.

---

## Funzionalità Extra

- Infinite scrolling per i commenti.
- Drag & Drop nativo per la playlist.
- Persistenza dei dati senza backend.
- Interfaccia ottimizzata per una migliore esperienza utente.

---

## Conclusione

Questo progetto è un esercizio avanzato per imparare **SvelteKit**, il routing dinamico, la gestione dello stato lato client e l'interazione con API pubbliche. Per qualsiasi domanda o per richiedere la chiave API, **contattatemi direttamente**.
email: stefano.valenti2000@gmail.com

Buona esplorazione del clone di YouTube!
