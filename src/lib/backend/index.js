import { isLogged } from "$lib/store/index.svelte.js";

export function salvaVideoPiaciuto(videoId) {
	console.log(localStorage.getItem("jwt"));
	if (isLogged() === null || isLogged() === undefined) {
		alert("Devi essere loggato per poter salvare un video nei preferiti");
		return;
	}
	try {
		// Recupera l'array esistente o crea un nuovo array vuoto
		let videoPiaciuti = JSON.parse(localStorage.getItem("videoPiaciuti")) || [];

		// Controlla se il video è già presente
		if (!videoPiaciuti.includes(videoId)) {
			videoPiaciuti.push(videoId); // Aggiungi l'ID del video all'array
			localStorage.setItem("videoPiaciuti", JSON.stringify(videoPiaciuti)); // Salva l'array nel localStorage
			alert("Video aggiunto ai preferiti!");
		} else {
			videoPiaciuti = videoPiaciuti.filter((id) => id !== videoId);
			localStorage.setItem("videoPiaciuti", JSON.stringify(videoPiaciuti));
			alert("Video rimosso dai preferiti.");
		}
	} catch (e) {
		console.error("Errore nel salvataggio dei video piaciuti:", e);
		alert("Si è verificato un errore nel salvataggio dei preferiti.");
	}
}

export function azioneIscrizione(canaleId) {
	if (!isLogged()) {
		alert("Devi essere loggato per poter iscriverti a un canale");
		return;
	}

	// Recupera l'elenco delle iscrizioni dal localStorage
	let iscrizioni = JSON.parse(localStorage.getItem("iscrizioni")) || [];

	// Controlla se l'utente è già iscritto
	if (iscrizioni.includes(canaleId)) {
		iscrizioni = iscrizioni.filter((id) => id !== canaleId); // Rimuove l'iscrizione
		localStorage.setItem("iscrizioni", JSON.stringify(iscrizioni)); // Salva le modifiche
	} else {
		iscrizioni.push(canaleId); // Aggiunge l'iscrizione
		localStorage.setItem("iscrizioni", JSON.stringify(iscrizioni)); // Salva le modifiche
	}
}
