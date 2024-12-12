
<script>
	import { onMount } from "svelte";
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	
	// Import dei componenti
	import Accedi from "../../../components/route-components/iscrizioni/Accedi.svelte";
	import CanaleYoutube from "../../../components/route-components/canale/CanaleYoutube.svelte";
	import { isLogged, setClickedItem, getClickedItem } from "$lib/store/index.svelte.js";
	import CanaleDummy from "../../../components/route-components/canale/CanaleDummy.svelte";
	import { get } from "svelte/store";

	// Valori iniziali
	let nomeCanale = "Nome Canale";
	let idCanale = $page.params.slug; // Ottieni l'ID del canale dai parametri della pagina
    console.log(getClickedItem());
    const Component = $derived((getClickedItem()==="canale") ? CanaleYoutube : CanaleDummy);
</script>
  


<Component />


	


<!-- Componente dinamico -->
<style>
    
</style>
