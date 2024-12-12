//mi conviene fare quì alcune chiamate di rete se non voglio avere lazy loading
/*
const fetchYouTubeVideoIds = async () => {
	const url = "https://www.youtube.com/feed/trending?bp=4gINGgt5dG1hX2NoYXJ0cw%3D%3D";

	try {
		// Effettua la richiesta con Fetch API
		const response = await fetch(url, {
			headers: {
				"User-Agent":
					"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
			},
		});

		if (!response.ok) {
			throw new Error(`Errore HTTP: ${response.status}`);
		}

		// Ottieni il testo HTML dalla risposta
		const html = await response.text();

		// Crea un parser DOM per il browser
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, "text/html");

		// Trova tutti i link ai video
		const videoIds = Array.from(doc.querySelectorAll("a"))
			.map((link) => link.getAttribute("href"))
			.filter((href) => href && href.startsWith("/watch?v="))
			.map((href) => href.split("=")[1].split("&")[0]);

		// Rimuove i duplicati e restituisce l'array di video ID
		return [...new Set(videoIds)];
	} catch (error) {
		console.error("Errore durante il fetch dei dati:", error.message);
		return []; // Restituisci un array vuoto in caso di errore
	}
};

export const load = async () => {
	const videoIds = await fetchYouTubeVideoIds();
	return { videoIds };
};
*/

import { listaVideo, cercaVideo } from "$lib/utils/mockup";

//chiamate di rete
function chiamataRete(ytId) {
	console.log(ytId);
}

export const load = async ({ parent, data }) => {
	await parent();
	let { ytId } = data;

	listaVideo();
	//chiamate di rete
	chiamataRete(ytId);

	//fetchYouTubeVideos("ciao", ytId);

	// Load the page data for the given slug
	// and page number
	//let youtubeID = load();
	return { ytId };
};
