//import { PRIVATE_YOUTUBE_API_KEY } from "$env/static/private";
import { writable, derived } from "svelte/store";

import CanaleYoutube from "../../components/route-components/canale/CanaleYoutube.svelte";
import CanaleDummy from "../../components/route-components/canale/CanaleDummy.svelte";

// Store che contiene il tipo di elemento cliccato: "channel" o "comment"

// Derived store per scegliere il componente da visualizzare

// Store per la query cercata
export const searchQuery = writable(""); // Valore di default "Lazza"

//PRIVATE_YOUTUBE_API_KEY;

let menuOpen = $state(true);
let jwt = $state(undefined);
let clickedItemType = $state(null);

export function setJwt(value) {
	jwt = value;
}

//getter
export function isLogged() {
	//Se è presente un jwt restituisce true altrimenti false
	return jwt;
}

export function setMenuOpen(value) {
	menuOpen = value;
}
export function isMenuOpen() {
	return menuOpen;
}

export function toggleMenu() {
	menuOpen = !menuOpen;
}
export function getClickedItem() {
	return clickedItemType;
}
export function setClickedItem(value) {
	clickedItemType = value;
}
