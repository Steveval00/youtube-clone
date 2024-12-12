import { cercaVideo } from "$lib/utils/mockup.js";
import { searchQuery } from "$lib/store/index.svelte.js";

export const load = async ({ parent }) => {
	let { ytId } = await parent();

	// Recupera la parola cercata dallo store
	let currentSearch = "";
	searchQuery.subscribe((value) => (currentSearch = value));
	searchQuery.subscribe((value) => console.log("Valore del searchQuery:", value));
	// Effettua la ricerca con la parola attuale
	let videos = await cercaVideo(currentSearch, ytId);

	console.log(videos);
	console.log(ytId);

	return {
		ytId,
		videos,
	};
};
